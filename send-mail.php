<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST')    { http_response_code(405); echo json_encode(["status" => "error"]); exit; }

// --- CONFIGURATION ---
define('GOOGLE_SCRIPT_URL', 'https://script.google.com/macros/s/AKfycby5xj_aE-Re5hZTeqoXzoedDqJYDjTlj_o2Yl48sSCFYEu4Rp-zD9GPK8t5vS_Cn7YEzQ/exec');
define('HUBSPOT_PORTAL_ID', '246390296');
define('HUBSPOT_FORM_GUID', '976fae98-1e57-46bd-be57-0d08a09bdd94');

// Admin Recipients for Notifications
$admin_emails = [
    'admin@wenestre.com',
    'amir.farrahi@wenestre.com',
    'arash.ahmadi@wenestre.com'
];

// ---------------------

$input = json_decode(file_get_contents('php://input'), true);
if (!$input) { 
    http_response_code(400); 
    echo json_encode(["status" => "error", "message" => "Invalid data."]); 
    exit; 
}

// Parse fields
$firstName = isset($input['firstName']) ? strip_tags(trim($input['firstName'])) : '';
$lastName  = isset($input['lastName'])  ? strip_tags(trim($input['lastName']))  : '';
$name      = isset($input['name'])      ? strip_tags(trim($input['name']))      : '';
if (empty($name) && (!empty($firstName) || !empty($lastName))) {
    $name = trim("$firstName $lastName");
}
if (empty($name)) {
    $name = 'Website Visitor';
}

$email   = isset($input['email'])   ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($input['phone'])   ? strip_tags(trim($input['phone']))   : (isset($input['mobile']) ? strip_tags(trim($input['mobile'])) : '');
$message = isset($input['message']) ? strip_tags(trim($input['message'])) : '';
$project = isset($input['project']) ? strip_tags(trim($input['project'])) : 'Roadshow 2026 Registration';

// --- DEMO / TEST CONTACT SUPPRESSION ---
$email_lower = strtolower($email);
$name_lower  = strtolower($name);
$phone_clean = preg_replace('/\D/', '', $phone);

$demo_keywords = ['test', 'demo', 'dummy', 'fake', 'sample', 'asdf', 'qwerty', 'testing', 'check', 'mailinator', 'yopmail', 'example'];

$is_demo = false;

foreach ($demo_keywords as $kw) {
    if (strpos($email_lower, $kw) !== false || strpos($name_lower, $kw) !== false) {
        $is_demo = true;
        break;
    }
}

if (!$is_demo && (!empty($phone_clean) && (preg_match('/^(\d)\1{5,}$/', $phone_clean) || strlen($phone_clean) < 7 || $phone_clean === '1234567890'))) {
    $is_demo = true;
}

if ($is_demo) {
    echo json_encode(["status" => "success", "message" => "Demo submission processed (notification & CRM suppressed)."]);
    exit;
}

// --- DIRECT PHP MAIL SENDING TO ADMIN TEAM ---
$to_header = implode(', ', $admin_emails);
$mail_subject = "New Roadshow 2026 Registration — " . $name;
$headers  = "From: WeNest Roadshow <no-reply@wenestre.com>\r\n";
if (!empty($email)) {
    $headers .= "Reply-To: " . $email . "\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mail_body  = "Hello Team,\n\n";
$mail_body .= "A new registration has been received for Roadshow 2026!\n\n";
$mail_body .= "Registration Details:\n";
$mail_body .= "• Name: " . $name . "\n";
$mail_body .= "• Phone: " . $phone . "\n";
$mail_body .= "• Email: " . $email . "\n";
if (!empty($project)) {
    $mail_body .= "• Source / Context: " . $project . "\n";
}
if (!empty($message)) {
    $mail_body .= "• Message: " . $message . "\n";
}
$mail_body .= "• Timestamp: " . date('Y-m-d H:i:s T') . "\n\n";
$mail_body .= "Thank you,\nWeNest Automated Notification System";

$php_mail_sent = @mail($to_header, $mail_subject, $mail_body, $headers);

// --- GOOGLE APPS SCRIPT FORWARDING ---
$email_sent = false;
$email_error = '';

if (!empty(GOOGLE_SCRIPT_URL)) {
    $payload = json_encode([
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'message' => $message,
        'project' => $project,
        'recipients' => $admin_emails
    ]);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, GOOGLE_SCRIPT_URL);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($http_code === 200) {
        $email_sent = true;
    } else {
        $email_error = "Google Script Code: $http_code";
    }
}

// --- HUBSPOT INTEGRATION ---
$hubspot_sent = false;

if (HUBSPOT_PORTAL_ID !== '' && HUBSPOT_FORM_GUID !== '') {
    $hs_context = array(
        'ipAddress' => $_SERVER['REMOTE_ADDR'] ?? '',
        'pageUrl' => $_SERVER['HTTP_REFERER'] ?? 'https://www.wenestre.com/roadshow/australian-roadshow-2026',
        'pageName' => 'Australian Roadshow 2026 Registration'
    );

    $hs_data = array(
        'fields' => array(
            array('name' => 'firstname', 'value' => !empty($firstName) ? $firstName : $name),
            array('name' => 'lastname', 'value' => $lastName),
            array('name' => 'email', 'value' => $email),
            array('name' => 'phone', 'value' => $phone),
            array('name' => 'message', 'value' => $message)
        ),
        'context' => $hs_context
    );

    $hs_endpoint = "https://api-na2.hsforms.com/submissions/v3/integration/submit/" . HUBSPOT_PORTAL_ID . "/" . HUBSPOT_FORM_GUID;
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $hs_endpoint);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($hs_data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $hs_response = curl_exec($ch);
    $hs_status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($hs_status >= 200 && $hs_status < 300) {
        $hubspot_sent = true;
    }
}

http_response_code(200);
echo json_encode([
    "status" => "success",
    "message" => "Roadshow registration processed.",
    "email_sent" => ($php_mail_sent || $email_sent),
    "hubspot_sent" => $hubspot_sent
]);
?>

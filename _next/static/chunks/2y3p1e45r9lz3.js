(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23614,e=>{"use strict";var i=e.i(43476),a=e.i(71645),t=e.i(59529),s=e.i(81375);let n=[{q:"What is WeNest Real Estate LLC?",a:"WeNest Real Estate LLC is a UAE-based off-plan property agency founded in 2026, helping international investors from Australia, New Zealand, Hong Kong, Singapore, England, Turkey, Armenia, and beyond purchase property in Dubai and the UAE remotely."},{q:"What types of properties does WeNest offer?",a:"WeNest offers a curated selection of off-plan properties including apartments, studio apartments, villas, townhouses, duplexes, penthouses and commercial units across Dubai and the wider UAE."},{q:"Can I invest in UAE property from overseas without visiting Dubai?",a:"Yes. WeNest is built specifically for offshore investors. The entire process - from project selection to reservation and transaction - can be completed remotely without visiting a showroom or travelling to the UAE."},{q:"Which countries does WeNest serve?",a:"WeNest currently serves investors based in Australia, New Zealand, Hong Kong, Singapore, England, Turkey, and Armenia, providing a secure, 100% remote transaction path on WhatsApp."},{q:"What currencies does WeNest accept?",a:"All WeNest property listings are priced in AUD, USD and AED to provide international buyers with stable, predictable pricing."}];e.s(["default",0,function({faqs:e=n,theme:r="light"}){let[l,o]=(0,a.useState)(null),{convertPriceText:p}=(0,s.useCurrency)(),c="light"===r;return(0,i.jsx)("section",{style:{backgroundColor:c?"#ffffff":"#02042d",padding:"clamp(45px, 7.5vw, 117px) 16px",display:"flex",flexDirection:"column",alignItems:"center"},children:(0,i.jsxs)("div",{style:{maxWidth:"800px",width:"100%",display:"flex",flexDirection:"column",gap:"32px"},children:[(0,i.jsx)(t.default,{text:"Frequently Asked Questions",style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(30px, 5vw, 60px)",letterSpacing:"-1px",lineHeight:"1.1em",color:c?"#02042d":"#ffffff",margin:"0 0 16px 0",textAlign:"center"}}),(0,i.jsx)("div",{className:"flex flex-col gap-4",children:(e&&e.length>0?e:n).map((e,a)=>{let t=l===a;return(0,i.jsxs)("div",{className:"overflow-hidden transition-all duration-300",style:{border:`1px solid ${t?"#e0c996":c?"rgba(2,4,45,0.1)":"rgba(224,201,150,0.3)"}`,backgroundColor:t?"#e0c996":"transparent"},children:[(0,i.jsxs)("button",{onClick:()=>{o(l===a?null:a)},className:`w-full text-left flex justify-between items-center p-5 outline-none transition-colors ${!t&&(c?"hover:bg-[#02042d]/5":"hover:bg-white/5")}`,style:{fontFamily:"Uxum Grotesque Regular, sans-serif",color:t||c?"#02042d":"#ffffff",fontSize:"clamp(16px, 1.5vw, 20px)"},children:[(0,i.jsx)("span",{className:"pr-4 leading-snug font-medium",children:e.q}),(0,i.jsx)("span",{className:"flex-shrink-0 transition-transform duration-300",style:{color:t?"#02042d":"#e0c996",transform:t?"rotate(45deg)":"rotate(0deg)",fontSize:"24px",lineHeight:"1"},children:"+"})]}),(0,i.jsx)("div",{className:`transition-all duration-300 ease-in-out ${t?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}`,style:{overflow:"hidden"},children:(0,i.jsx)("div",{className:"px-5 pb-5 pt-0 focus:outline-none",style:{fontFamily:"Uxum Grotesque Regular, sans-serif",color:t?"#02042d":c?"rgba(2,4,45,0.7)":"rgba(255,255,255,0.7)",fontSize:"clamp(14px, 1.2vw, 16px)",lineHeight:"1.6"},children:p(e.a)})})]},a)})})]})})}])},17683,e=>{"use strict";var i=e.i(43476),a=e.i(71645),t=e.i(59529),s=e.i(86274);let n={backgroundColor:"#02042d",border:"1px solid rgba(224,201,150,0.3)",color:"#ffffff",fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"15px",padding:"12px 20px",width:"100%",outline:"none"},r=e=>e.target.style.border="1px solid rgba(224,201,150,0.8)",l=e=>e.target.style.border="1px solid rgba(224,201,150,0.3)";e.s(["default",0,function(){let[e,o]=(0,a.useState)(!1),[p,c]=(0,a.useState)(!1),[d,m]=(0,a.useState)(!1),g=async e=>{e.preventDefault(),o(!0),m(!1);let i=e.target,a={name:i.name.value,email:i.email.value,message:i.message.value};try{let i=(0,s.getStoredUtmParams)(),t=(0,s.trackGenericLeadConversion)({formName:"Footer Contact Section Form",userEmail:a.email,userName:a.name,customGoogleAdsLabel:"AW-18364005209/LYVeCM6gpMIcEN6ok4FE"}),n={...a,utm:i,eventId:t,formType:"contact"};fetch("/api/send-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).catch(()=>{}),(await fetch("/send-mail.php",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).ok?(c(!0),window.gtag&&window.gtag("event","conversion",{send_to:"AW-18364005209/LYVeCM6gpMIcEN6ok4FE",value:.5,currency:"AED"}),e.target,setTimeout(()=>{window.location.href="/thank-you?type=contact"},1e3)):(m(!0),setTimeout(()=>m(!1),4e3))}catch(e){console.error("Error sending mail",e),m(!0),setTimeout(()=>m(!1),4e3)}finally{o(!1)}};return(0,i.jsxs)("section",{className:"relative w-full flex items-center justify-center overflow-hidden",style:{minHeight:"100vh",padding:"clamp(45px, 7.5vw, 117px) clamp(24px, 5vw, 48px)"},children:[(0,i.jsxs)("div",{className:"absolute inset-0 w-full h-full",children:[(0,i.jsx)("img",{src:"/assets/images/photo-1600596542815-ffad4c1539a9.webp",alt:"Luxury Dubai skyline and residential development background",fetchPriority:"high",className:"w-full h-full object-cover"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-[#02042d]/20"})]}),(0,i.jsxs)("div",{className:"relative z-10 w-full max-w-6xl flex flex-col md:flex-row shadow-2xl",style:{backgroundColor:"#02042d",padding:"clamp(24px, 3.6vw, 48px) clamp(20px, 3vw, 38px)"},children:[(0,i.jsx)("div",{className:"flex-1 md:pr-16 md:border-r border-white/10 flex flex-col justify-center",children:(0,i.jsxs)("div",{className:"flex flex-col gap-4 md:gap-6",children:[(0,i.jsx)(t.default,{text:"Your Trusted Partner in UAE Property Investment.",style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(28px, 3.15vw, 45px)",color:"#ffffff",lineHeight:1.1,margin:0,letterSpacing:"-1.5px"}}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(15px, 1.2vw, 18px)",color:"rgba(255,255,255,0.8)",lineHeight:1.6,margin:0,maxWidth:"400px"},children:"Ready to take a strategic step toward growing your real estate portfolio? Reach out to our team for honest advice, curated project recommendations and a partnership built on transparency from day one."})]})}),(0,i.jsx)("div",{className:"flex-1 md:pl-16 flex flex-col justify-center relative -top-2",children:(0,i.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:g,children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("label",{className:"text-white text-sm",style:{fontFamily:"Uxum Grotesque Regular, sans-serif"},children:"Name"}),(0,i.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Ahmed Al Mansoori",className:"placeholder-white/30 transition-colors",style:n,onFocus:r,onBlur:l})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("label",{className:"text-white text-sm",style:{fontFamily:"Uxum Grotesque Regular, sans-serif"},children:"Email"}),(0,i.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"ahmed@gmail.com",className:"placeholder-white/30 transition-colors",style:n,onFocus:r,onBlur:l})]})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,i.jsx)("label",{className:"text-white text-sm",style:{fontFamily:"Uxum Grotesque Regular, sans-serif"},children:"Message"}),(0,i.jsx)("textarea",{name:"message",required:!0,placeholder:"Write your message here",style:{height:"48px",resize:"none",...n},className:"placeholder-white/30 transition-colors",onFocus:r,onBlur:l})]}),(0,i.jsx)("button",{type:"submit",disabled:e||p,className:`w-full font-medium py-3 mt-2 transition-all duration-300 ease-out border ${d?"bg-red-900 border-red-900 text-white":p?"bg-transparent border-[#e0c996] text-[#e0c996]":"bg-[#02042d] border-[#e0c996] text-[#e0c996] hover:bg-transparent hover:border-[#e0c996]"}`,style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"16px",borderRadius:"0px"},children:e?"Sending...":d?"Failed to Send - Try Again":p?"✓ We'll Reach You Soon":"Submit"})]})})]})]})}])},15337,e=>{"use strict";var i=e.i(43476),a=e.i(59529);let t=()=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",width:"96",height:"96",fill:"currentColor",children:(0,i.jsxs)("g",{children:[(0,i.jsx)("polygon",{points:"571.3 966.5 572.2 569.1 835.9 852.3 836.9 524.5 709.7 452.1 707.8 675.9 654.9 620.2 654.9 362 887.9 495.8 889.1 966.5 843.4 966.5 623.3 711.2 623.3 966.5 571.3 966.5"}),(0,i.jsx)("polygon",{points:"572.2 528.2 621.4 579.3 621.4 236.7 449.7 57.5 449.7 804.9 413.5 753 413.5 285.9 327.1 342.5 327.1 672.2 217.5 794.7 216.6 413.1 134.9 464.2 134.9 966.5 157.2 966.5 344.8 766 481.2 966.5 497 966.5 497 466 498.1 180.6 557.3 240.9 572.6 255.8 572.2 528.2"})]})});e.s(["default",0,function(){return(0,i.jsxs)("section",{className:"w-full flex flex-col md:flex-row",style:{minHeight:"100vh",backgroundColor:"#fff",overflow:"hidden"},children:[(0,i.jsxs)("div",{className:"relative w-full md:w-1/2",style:{minHeight:"clamp(280px, 50vw, 100vh)",overflow:"hidden"},children:[(0,i.jsx)("img",{src:"/assets/images/work-1.png",alt:"Project - The Meadow House",className:"w-full h-full object-cover"}),(0,i.jsx)("div",{className:"absolute inset-0 diagonal-pattern"})]}),(0,i.jsxs)("div",{className:"flex flex-col justify-center w-full md:w-1/2",style:{backgroundColor:"#ffffff",padding:"clamp(40px, 6vw, 80px) clamp(24px, 5vw, 60px)",gap:"clamp(40px, 6vw, 89px)",overflow:"hidden"},children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[(0,i.jsx)("div",{children:(0,i.jsx)(t,{})}),(0,i.jsxs)("h1",{style:{fontFamily:"Uxum Grotesque Light, sans-serif",fontSize:"clamp(20px, 3vw, 28px)",letterSpacing:"0",color:"#02042d",margin:0,lineHeight:1},children:[(0,i.jsx)("span",{style:{fontFamily:'"Times New Roman", Times, serif',fontWeight:"bold",fontSize:"1.425em",display:"block"},children:"WeNest"}),(0,i.jsx)("span",{style:{display:"block",fontSize:"0.7em",marginTop:"-0.2em"},children:"Real Estate LLC"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.default,{text:"Where trust, strategy and quality come together to grow your real estate nest.",style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(32px, 5vw, 66px)",letterSpacing:"-2px",color:"#02042d",margin:0,lineHeight:1.1}}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.8vw, 18px)",letterSpacing:"-0.4px",color:"#555555",margin:0,marginTop:"clamp(16px, 2.5vw, 28px)",lineHeight:1.5,maxWidth:"420px"},children:"We are a UAE‑based real estate agency dedicated to building lasting partnerships with international investors. Through strategic thinking, careful project selection and complete transparency, we help our clients make confident, well‑informed property decisions in one of the world's most dynamic markets."})]})]})]})}])},50058,e=>{"use strict";var i=e.i(43476),a=e.i(59529);let t=({number:e,title:a,description:t})=>(0,i.jsxs)("div",{className:"approach-card",children:[(0,i.jsx)("p",{className:"approach-number",children:e}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[(0,i.jsx)("p",{style:{fontFamily:'"Uxum Grotesque Regular", sans-serif',fontSize:"clamp(18px, 2vw, 24px)",color:"#ffffff",margin:0,fontWeight:400},children:a}),(0,i.jsx)("p",{style:{fontFamily:'"Uxum Grotesque Regular", sans-serif',fontSize:"clamp(14px, 1.2vw, 16px)",color:"rgba(255,255,255,0.65)",margin:0,lineHeight:1.5,fontWeight:400},children:t})]})]});e.s(["default",0,function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        .approach-section {
          background-color: #02042d;
          padding: clamp(34px, 5.6vw, 88px) 60px;
          display: flex;
          flex-direction: column;
          gap: 38px;
          overflow: hidden;
        }
        .approach-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding-top: 44px;
        }
        .approach-card {
          background-color: #02042d;
          border: 1px solid rgb(224, 201, 150);
          padding: 18px 32px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 400px;
        }
        .approach-number {
          font-family: "Uxum Grotesque Regular", sans-serif;
          font-size: clamp(80px, 12vw, 190px);
          color: #e0c996;
          margin: 0;
          line-height: 1;
          font-weight: 400;
        }
        @media (max-width: 600px) {
          .approach-section {
            padding: clamp(34px, 5.6vw, 88px) 20px;
          }
          .approach-cards {
            grid-template-columns: 1fr;
            padding-top: 24px;
          }
          .approach-card {
            min-height: 320px;
          }
        }
        @media (min-width: 601px) and (max-width: 900px) {
          .approach-section {
            padding: clamp(34px, 5.6vw, 88px) 32px;
          }
          .approach-cards {
            grid-template-columns: 1fr 1fr;
            padding-top: 32px;
          }
        }
        @media (min-width: 901px) and (max-width: 1200px) {
          .approach-section {
            padding: clamp(34px, 5.6vw, 88px) 40px;
          }
        }
      `}),(0,i.jsxs)("section",{className:"approach-section",children:[(0,i.jsxs)("div",{style:{paddingLeft:"4px",display:"flex",flexDirection:"column",gap:"10px"},children:[(0,i.jsx)(a.default,{text:"Our Approach",style:{fontFamily:'"Uxum Grotesque Regular", sans-serif',fontSize:"clamp(40px, 7.8vw, 112px)",letterSpacing:"-2.6px",lineHeight:"1em",color:"#ffffff",margin:0,fontWeight:400}}),(0,i.jsx)("h2",{style:{fontFamily:'"Uxum Grotesque Regular", sans-serif',fontSize:"clamp(16px, 2vw, 24px)",letterSpacing:"-1px",color:"rgba(255,255,255,0.7)",margin:0,fontWeight:400,maxWidth:"900px"},children:"At WeNest, we believe that every great investment begins with a foundation of trust. We do not simply match buyers to listings - we build long‑term relationships rooted in honest advice, strategic guidance and a genuine commitment to our clients' success."})]}),(0,i.jsxs)("div",{className:"approach-cards",children:[(0,i.jsx)(t,{number:"1",title:"The Strategic Approach",description:"We study the UAE market continuously - tracking developer pipelines, emerging communities and shifting demand patterns - so the guidance we give is always grounded in current, reliable intelligence rather than guesswork."}),(0,i.jsx)(t,{number:"2",title:"The Quality-First Approach",description:"We hold every project we present to a high internal standard. Developer credibility, construction quality, location fundamentals and payment plan terms are all assessed before any listing is shared with our clients."}),(0,i.jsx)(t,{number:"3",title:"The Transparent Approach",description:"We are upfront about everything - pricing, timelines, risks and realistic returns. Our clients receive clear, complete information at every stage so they can grow their property portfolio with full confidence and zero surprises."})]})]})]})}])},92893,e=>{"use strict";var i=e.i(43476),a=e.i(59529);let t=()=>(0,i.jsx)("svg",{viewBox:"0 0 25 25",width:"25",height:"25",children:(0,i.jsx)("path",{d:"M 12.574 24.959 C 12.5 24.922 12.453 24.91 12.425 24.881 C 12.383 24.833 12.338 24.777 12.32 24.718 C 12.205 24.313 12.105 23.904 11.982 23.501 C 11.87 23.129 11.736 22.762 11.609 22.394 C 11.541 22.198 11.464 22.005 11.394 21.81 C 11.275 21.474 11.173 21.131 11.036 20.802 C 10.87 20.404 10.678 20.016 10.491 19.627 C 10.364 19.359 10.239 19.091 10.091 18.835 C 9.908 18.516 9.712 18.205 9.504 17.903 C 9.041 17.236 8.488 16.647 7.894 16.096 C 7.67 15.888 7.41 15.715 7.157 15.542 C 6.864 15.342 6.564 15.152 6.259 14.968 C 6.034 14.832 5.801 14.709 5.567 14.587 C 5.305 14.45 5.04 14.316 4.771 14.19 C 4.563 14.093 4.348 14.007 4.131 13.925 C 3.823 13.81 3.51 13.704 3.199 13.592 C 2.94 13.499 2.683 13.404 2.424 13.31 C 2.363 13.287 2.303 13.255 2.24 13.236 C 1.803 13.107 1.364 12.978 0.925 12.853 C 0.671 12.782 0.414 12.728 0.163 12.652 C 0.096 12.632 -0.009 12.545 0 12.515 C 0.024 12.433 0.085 12.347 0.155 12.295 C 0.211 12.252 0.303 12.259 0.378 12.239 C 0.769 12.132 1.161 12.027 1.551 11.913 C 1.798 11.841 2.043 11.761 2.285 11.675 C 2.598 11.563 2.908 11.44 3.218 11.322 C 3.408 11.25 3.599 11.179 3.789 11.106 C 4.085 10.991 4.383 10.879 4.675 10.757 C 4.863 10.679 5.049 10.596 5.226 10.498 C 5.731 10.22 6.238 9.943 6.734 9.648 C 7.41 9.246 8.01 8.745 8.548 8.174 C 8.963 7.734 9.361 7.279 9.665 6.751 C 9.87 6.396 10.105 6.057 10.296 5.694 C 10.505 5.297 10.68 4.882 10.865 4.473 C 10.991 4.194 11.111 3.912 11.231 3.631 C 11.268 3.545 11.294 3.455 11.326 3.367 C 11.471 2.959 11.619 2.552 11.761 2.143 C 11.794 2.05 11.806 1.95 11.835 1.857 C 11.874 1.733 11.919 1.609 11.963 1.488 C 11.97 1.468 11.988 1.45 11.993 1.429 C 12.094 1.034 12.195 0.638 12.291 0.24 C 12.318 0.132 12.319 0.005 12.465 -0.001 C 12.611 -0.007 12.669 0.092 12.703 0.225 C 12.819 0.682 12.94 1.137 13.065 1.591 C 13.125 1.807 13.19 2.021 13.268 2.231 C 13.384 2.547 13.516 2.857 13.638 3.172 C 13.738 3.432 13.825 3.698 13.931 3.955 C 14.066 4.281 14.215 4.601 14.356 4.924 C 14.453 5.144 14.533 5.372 14.646 5.582 C 14.838 5.933 15.036 6.282 15.259 6.614 C 15.521 7.006 15.79 7.398 16.099 7.754 C 16.444 8.15 16.826 8.517 17.214 8.874 C 17.471 9.112 17.753 9.33 18.046 9.521 C 18.438 9.777 18.848 10.006 19.258 10.235 C 19.56 10.404 19.871 10.558 20.184 10.709 C 20.396 10.811 20.614 10.903 20.835 10.984 C 21.331 11.167 21.831 11.34 22.33 11.516 C 22.683 11.641 23.031 11.779 23.39 11.886 C 23.832 12.017 24.282 12.127 24.731 12.239 C 24.864 12.272 24.991 12.292 25.034 12.45 C 25.06 12.549 25.035 12.612 24.934 12.638 C 24.546 12.735 24.155 12.821 23.77 12.932 C 23.411 13.035 23.061 13.164 22.707 13.284 C 22.671 13.296 22.637 13.317 22.601 13.33 C 22.04 13.52 21.476 13.7 20.92 13.903 C 20.647 14.002 20.391 14.147 20.126 14.27 C 19.912 14.369 19.691 14.456 19.485 14.568 C 19.114 14.769 18.741 14.969 18.386 15.195 C 18.015 15.432 17.65 15.68 17.309 15.955 C 16.65 16.484 16.067 17.09 15.592 17.791 C 15.297 18.226 15.009 18.667 14.737 19.117 C 14.605 19.336 14.521 19.583 14.414 19.817 C 14.29 20.086 14.165 20.353 14.04 20.621 C 14.029 20.646 14.014 20.669 14.005 20.695 C 13.89 21.02 13.781 21.347 13.661 21.67 C 13.55 21.973 13.429 22.27 13.312 22.57 C 13.305 22.59 13.295 22.611 13.289 22.632 C 13.177 23.004 13.085 23.383 12.951 23.748 C 12.825 24.091 12.719 24.433 12.689 24.797 C 12.684 24.853 12.612 24.903 12.57 24.958 Z",fill:"#aa8867"})});e.s(["default",0,function(){return(0,i.jsx)("section",{style:{backgroundColor:"#ffffff",padding:"clamp(45px, 7.5vw, 117px) clamp(16px, 4vw, 60px)"},children:(0,i.jsxs)("div",{style:{maxWidth:"1320px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"clamp(16px, 2vw, 24px)",width:"100%"},children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.default,{text:"Meet the Team",style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(40px, 8vw, 112px)",letterSpacing:"clamp(-2px, -0.6vw, -6.8px)",lineHeight:"1em",color:"#02042d",margin:0}})}),(0,i.jsx)("style",{children:`
          .founder-grid {
            display: flex;
            gap: clamp(24px, 4vw, 64px);
            justify-content: space-between;
            align-items: flex-start;
            margin-top: clamp(20px, 3vw, 40px);
            flex-wrap: wrap;
            width: 100%;
          }
          .founder-img-wrap {
            height: clamp(500px, 60vw, 808px);
            overflow: hidden;
            position: relative;
          }
          .founder-text-wrap {
            flex: 1;
            max-width: 580px;
            min-width: 280px;
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding-top: clamp(10px, 2vw, 32px);
            margin-left: 0;
            margin-right: 0;
            position: relative;
            z-index: 2;
          }
          .ani-text-wrap {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .ani-img-wrap-outer {
            margin-right: 0;
          }
          @media (max-width: 900px) {
            .founder-grid {
              flex-direction: column;
              align-items: center;
            }
            .founder-text-wrap {
              margin-left: 0;
              margin-right: 0;
              padding-top: 24px;
              width: 100%;
              max-width: 100%;
            }
            .ani-text-wrap {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
            .ani-img-wrap-outer {
              margin-right: 0;
              order: -1;
            }
            .founder-img-wrap {
               height: clamp(400px, 60vw, 600px);
               width: 100%;
            }
          }
          .team-mail-link {
            color: #02042d;
            text-decoration: underline;
            text-underline-offset: 6px;
            text-decoration-color: #02042d;
            transition: color 0.3s ease, text-decoration-color 0.3s ease;
          }
          .team-mail-link:hover {
            color: #e0c996;
            text-decoration-color: #e0c996;
          }
        `}),(0,i.jsxs)("div",{className:"founder-grid",children:[(0,i.jsx)("div",{style:{flex:1,maxWidth:"680px",minWidth:"300px"},children:(0,i.jsx)("div",{className:"founder-img-wrap",children:(0,i.jsx)("img",{src:"/assets/images/about founder image.webp",alt:"Arash Ahmadi - Founder & CEO",className:"w-full h-full object-cover"})})}),(0,i.jsxs)("div",{className:"founder-text-wrap",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,i.jsx)("div",{style:{color:"#02042d"},children:(0,i.jsx)(t,{})}),(0,i.jsxs)("h1",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(30px, 3.75vw, 48px)",letterSpacing:"-1px",color:"#02042d",margin:0,lineHeight:1.2},children:["Arash Ahmadi ",(0,i.jsx)("span",{style:{display:"block",pointerEvents:"none",fontSize:"clamp(21px, 2.25vw, 27px)",color:"#555",marginTop:"6px"},children:"Founder & CEO, WeNest"})]})]}),(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"With nearly two decades of experience as a Civil Engineer, Architect, and Project Management expert, Arash Ahmadi brings a rare technical depth to the real estate market. He evaluates every investment from the ground up - not just the surface - ensuring clients benefit from strategic guidance, transparent partnerships, and the confidence to invest wisely in international property."})}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"24px",marginTop:"8px"},children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(18px, 2vw, 24px)",color:"#02042d",margin:"0 0 8px 0",display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsx)("span",{style:{color:"#e0c996"},children:"•"})," Our Vision"]}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Building trusted nests through a strategic mindset, quality real estate, and transparent partnerships."})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(18px, 2vw, 24px)",color:"#02042d",margin:"0 0 8px 0",display:"flex",alignItems:"center",gap:"8px"},children:[(0,i.jsx)("span",{style:{color:"#e0c996"},children:"•"})," Our Mission"]}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"WeNest provides strategic property solutions with a foundation of trust, quality, and transparency - helping clients confidently grow their real estate nest."})]})]}),(0,i.jsxs)("div",{style:{borderLeft:"2px solid #e0c996",paddingLeft:"24px",margin:"8px 0"},children:[(0,i.jsx)("p",{style:{fontFamily:'"Times New Roman", Times, serif',fontStyle:"italic",fontSize:"clamp(18px, 2vw, 24px)",color:"#02042d",margin:"0 0 12px 0",lineHeight:1.4},children:"\"Real estate is not just about location - it's about understanding what you're truly investing in, from the ground up.\""}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"14px",color:"#888",margin:0},children:"- Arash Ahmadi, Founder"})]})]})]}),(0,i.jsx)("div",{style:{height:"1px",backgroundColor:"rgba(2, 4, 45, 0.1)",margin:"clamp(30px, 5vw, 60px) 0"}}),(0,i.jsxs)("div",{className:"founder-grid",style:{marginTop:0},children:[(0,i.jsxs)("div",{className:"founder-text-wrap ani-text-wrap",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,i.jsx)("div",{style:{color:"#02042d"},children:(0,i.jsx)(t,{})}),(0,i.jsxs)("h1",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(30px, 3.75vw, 48px)",letterSpacing:"-1px",color:"#02042d",margin:0,lineHeight:1.2},children:["Ani Karoyan ",(0,i.jsx)("span",{style:{display:"block",pointerEvents:"none",fontSize:"clamp(21px, 2.25vw, 27px)",color:"#555",marginTop:"6px"},children:"Senior Real Estate Specialist, WeNest"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Ani Karoyan is a trusted real estate specialist at WeNest Real Estate, bringing strong expertise in Dubai’s fast-growing property market. She specializes in residential properties and investment opportunities, helping clients make confident real estate decisions with a smooth and well-guided experience from inquiry to post-sales support."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"With a background in sales, client relations, and property management, Ani is known for her professional approach, clear communication, and commitment to long-term client relationships. She focuses on understanding each client’s goals and delivering tailored property solutions that match their lifestyle and investment needs."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Fluent in Armenian, Russian, and English, Ani works closely with an international clientele across Dubai, offering personalized guidance and trusted support throughout every stage of the property journey. Her market understanding, client-first mindset, and attention to detail make her a valuable part of the WeNest Real Estate team."})]}),(0,i.jsxs)("div",{style:{borderTop:"1px solid rgba(2, 4, 45, 0.1)",paddingTop:"24px",marginTop:"8px"},children:[(0,i.jsx)("span",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"14px",color:"#888",display:"block",marginBottom:"8px"},children:"Direct Contact"}),(0,i.jsx)("a",{href:"mailto:Ani.karoyan@wenestre.com",className:"team-mail-link",style:{fontFamily:"Uxum Grotesque Medium, sans-serif",fontSize:"clamp(18px, 2.5vw, 28px)",display:"inline-block",letterSpacing:"-0.5px"},children:"Ani.karoyan@wenestre.com"})]})]}),(0,i.jsx)("div",{className:"ani-img-wrap-outer",style:{flex:1,maxWidth:"680px",minWidth:"280px"},children:(0,i.jsx)("div",{className:"founder-img-wrap",children:(0,i.jsx)("img",{src:"/images/team_ani.webp",alt:"Ani Karoyan - Senior Real Estate Specialist",className:"w-full h-full object-cover"})})})]}),(0,i.jsx)("div",{style:{height:"1px",backgroundColor:"rgba(2, 4, 45, 0.1)",margin:"clamp(30px, 5vw, 60px) 0"}}),(0,i.jsxs)("div",{className:"founder-grid",style:{marginTop:0},children:[(0,i.jsx)("div",{style:{flex:1,maxWidth:"680px",minWidth:"300px"},children:(0,i.jsx)("div",{className:"founder-img-wrap",children:(0,i.jsx)("img",{src:"/images/team_shorsh.webp",alt:"Shorsh Sinjawi - Market Expansion Director",className:"w-full h-full object-cover"})})}),(0,i.jsxs)("div",{className:"founder-text-wrap",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,i.jsx)("div",{style:{color:"#02042d"},children:(0,i.jsx)(t,{})}),(0,i.jsxs)("h1",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(30px, 3.75vw, 48px)",letterSpacing:"-1px",color:"#02042d",margin:0,lineHeight:1.2},children:["Shorsh Sinjawi ",(0,i.jsx)("span",{style:{display:"block",pointerEvents:"none",fontSize:"clamp(21px, 2.25vw, 27px)",color:"#555",marginTop:"6px"},children:"Market Expansion Director, WeNest"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Shorsh Sinjawi serves as the Market Expansion Director and Senior Property Advisor at WeNest. As an accomplished Australian professional with extensive experience across business leadership, operations management, and international trade, Shorsh brings strong commercial insights and strategic vision to WeNest's international investor network. His impressive career includes directing major multi-state transport operations in Australia and managing international import-export flows across East Asia and Japan."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Shorsh holds a Bachelor’s degree in Politics and a Master’s degree in Defence Studies, which provide him with a sophisticated understanding of geopolitical and macroeconomic factors that shape global property markets. This unique background makes him highly skilled at strategic planning, identifying premium real estate opportunities, and formulating high-value solutions for buyers."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Committed to WeNest’s core principles of trust, transparency, and seamless client journeys, Shorsh provides personal guidance and strategic support at every stage. Fluent in both English and Kurdish, he connects with diverse international audiences and builds strong relationships across cultures, expanding opportunities in dynamic markets."})]}),(0,i.jsxs)("div",{style:{borderTop:"1px solid rgba(2, 4, 45, 0.1)",paddingTop:"24px",marginTop:"8px"},children:[(0,i.jsx)("span",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"14px",color:"#888",display:"block",marginBottom:"8px"},children:"Direct Contact"}),(0,i.jsx)("a",{href:"mailto:shorsh.sinjawi@wenestre.com",className:"team-mail-link",style:{fontFamily:"Uxum Grotesque Medium, sans-serif",fontSize:"clamp(18px, 2.5vw, 28px)",display:"inline-block",letterSpacing:"-0.5px"},children:"shorsh.sinjawi@wenestre.com"})]})]})]}),(0,i.jsx)("div",{style:{height:"1px",backgroundColor:"rgba(2, 4, 45, 0.1)",margin:"clamp(30px, 5vw, 60px) 0"}}),(0,i.jsxs)("div",{className:"founder-grid",style:{marginTop:0},children:[(0,i.jsxs)("div",{className:"founder-text-wrap ani-text-wrap",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,i.jsx)("div",{style:{color:"#02042d"},children:(0,i.jsx)(t,{})}),(0,i.jsxs)("h1",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(30px, 3.75vw, 48px)",letterSpacing:"-1px",color:"#02042d",margin:0,lineHeight:1.2},children:["Shahab Aghnamian ",(0,i.jsx)("span",{style:{display:"block",pointerEvents:"none",fontSize:"clamp(21px, 2.25vw, 27px)",color:"#555",marginTop:"6px"},children:"Director of Operations, WeNest"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"With more than 18 years of international real estate experience across the UAE and the Middle East, Shahab Aghnamian serves as Director of Operations at WeNest Real Estate, where he oversees operational excellence while driving strategic growth and international collaboration."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Shahab plays a pivotal role in strengthening WeNest's presence across global markets by developing strategic partnerships with Australian real estate agencies, investors, developers, and industry professionals. His expertise spans operations management, business development, investment advisory, developer relations, and cross-border real estate partnerships, creating valuable opportunities between Australia and Dubai."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Throughout his career, Shahab has worked closely with high-net-worth individuals, investors, and leading developers, successfully facilitating residential and investment property transactions while building long-term client relationships. His extensive leadership experience in sales, operations, and business development enables him to deliver exceptional service and sustainable business growth."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"At WeNest Real Estate, Shahab is committed to fostering a culture of professionalism, integrity, and collaboration. He believes that successful real estate investment is built on trust, transparency, and a deep understanding of international markets, ensuring every client receives informed guidance and a seamless investment experience."})]}),(0,i.jsxs)("div",{style:{borderTop:"1px solid rgba(2, 4, 45, 0.1)",paddingTop:"24px",marginTop:"8px"},children:[(0,i.jsx)("span",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"14px",color:"#888",display:"block",marginBottom:"8px"},children:"Direct Contact"}),(0,i.jsx)("a",{href:"mailto:shahab.aghnamian@wenestre.com",className:"team-mail-link",style:{fontFamily:"Uxum Grotesque Medium, sans-serif",fontSize:"clamp(18px, 2.5vw, 28px)",display:"inline-block",letterSpacing:"-0.5px"},children:"shahab.aghnamian@wenestre.com"})]})]}),(0,i.jsx)("div",{className:"ani-img-wrap-outer",style:{flex:1,maxWidth:"680px",minWidth:"280px"},children:(0,i.jsx)("div",{className:"founder-img-wrap",children:(0,i.jsx)("img",{src:"/images/team-shahab.webp",alt:"Shahab Aghnamian - Director of Operations",className:"w-full h-full object-cover"})})})]}),(0,i.jsx)("div",{style:{height:"1px",backgroundColor:"rgba(2, 4, 45, 0.1)",margin:"clamp(30px, 5vw, 60px) 0"}}),(0,i.jsxs)("div",{className:"founder-grid",style:{marginTop:0},children:[(0,i.jsx)("div",{style:{flex:1,maxWidth:"680px",minWidth:"300px"},children:(0,i.jsx)("div",{className:"founder-img-wrap",children:(0,i.jsx)("img",{src:"/images/team-amir.webp",alt:"Amir Farrahi - Media & Marketing Manager",className:"w-full h-full object-cover"})})}),(0,i.jsxs)("div",{className:"founder-text-wrap",children:[(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[(0,i.jsx)("div",{style:{color:"#02042d"},children:(0,i.jsx)(t,{})}),(0,i.jsxs)("h1",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(30px, 3.75vw, 48px)",letterSpacing:"-1px",color:"#02042d",margin:0,lineHeight:1.2},children:["Amir Farrahi ",(0,i.jsx)("span",{style:{display:"block",pointerEvents:"none",fontSize:"clamp(21px, 2.25vw, 27px)",color:"#555",marginTop:"6px"},children:"Media & Marketing Manager, WeNest"})]})]}),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Amir Farrahi is the Media & Marketing Manager at WeNest Real Estate LLC, bringing over 18 years of experience in creative leadership, digital marketing, and multimedia production. With a strong background in real estate marketing, Amir specializes in developing compelling content strategies that showcase properties, strengthen brand identity, and connect buyers with exceptional real estate opportunities."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Combining expertise in video production, photography, social media marketing, SEO, and digital advertising, Amir leads the creation of engaging campaigns across multiple platforms, including Instagram, YouTube, TikTok, LinkedIn, and Google. His strategic approach blends creative storytelling with data-driven insights to maximize brand visibility, audience engagement, and lead generation."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Before joining WeNest, Amir led creative teams across North America and the GCC, producing high-impact marketing campaigns for real estate developers, agencies, and global brands. His experience spans luxury property showcases, lifestyle branding, digital content production, and integrated marketing strategies, ensuring every campaign reflects the quality and vision of the properties it represents."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"Passionate about innovation, Amir also leverages the latest AI-powered creative tools and emerging digital technologies to enhance marketing performance while maintaining exceptional visual quality and brand consistency."}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"clamp(14px, 1.4vw, 18px)",color:"#555555",margin:0,lineHeight:1.5},children:"At WeNest Real Estate, Amir is dedicated to delivering world-class marketing experiences that inspire confidence, build lasting relationships, and position the company as a trusted name in Dubai's dynamic real estate market."})]}),(0,i.jsxs)("div",{style:{borderTop:"1px solid rgba(2, 4, 45, 0.1)",paddingTop:"24px",marginTop:"8px"},children:[(0,i.jsx)("span",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"14px",color:"#888",display:"block",marginBottom:"8px"},children:"Direct Contact"}),(0,i.jsx)("a",{href:"mailto:amir.farrahi@wenestre.com",className:"team-mail-link",style:{fontFamily:"Uxum Grotesque Medium, sans-serif",fontSize:"clamp(18px, 2.5vw, 28px)",display:"inline-block",letterSpacing:"-0.5px"},children:"amir.farrahi@wenestre.com"})]})]})]})]})})}])},96410,e=>{"use strict";var i=e.i(43476),a=e.i(71645),t=e.i(59529);e.s(["default",0,function(){let e="#02042d";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        .awards-section {
          background-color: #ffffff;
          padding: clamp(22px, 3.8vw, 58px) 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          overflow: hidden;
        }
        .awards-ticker-wrap {
          overflow: hidden;
          width: 100%;
          height: 213px;
          display: flex;
          align-items: center;
          position: relative;
          margin-top: 40px;
        }
        .awards-ticker {
          display: flex;
          gap: 10px;
          align-items: center;
          animation: tickerScroll 40s linear infinite;
          white-space: nowrap;
        }
        .ticker-item {
          width: 240px;
          height: 120px;
          background-color: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ticker-item img {
          transition: opacity 0.3s, filter 0.3s;
        }
        .ticker-item img:hover {
          opacity: 1 !important;
        }
        .awards-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding-top: 80px;
          padding-left: 40px;
          padding-right: 40px;
        }
        .award-row {
          border-top: 1px solid rgba(170,136,103,0.4);
          display: flex;
          flex-direction: row;
          gap: 48px;
          padding: 28px 0;
          flex-wrap: wrap;
          align-items: flex-start;
        }
        .award-number {
          font-family: "Uxum Grotesque Regular", sans-serif;
          font-size: clamp(24px, 3.5vw, 50px);
          letter-spacing: -2.2px;
          color: #e0c996;
          margin: 0;
          font-weight: 400;
          flex-shrink: 0;
          min-width: 50px;
        }
        .award-title {
          font-family: "Uxum Grotesque Regular", sans-serif;
          font-size: clamp(20px, 3vw, 50px);
          letter-spacing: -2.2px;
          color: ${e};
          margin: 0;
          font-weight: 400;
          flex: 1 1 200px;
        }
        .award-desc {
          font-family: "Uxum Grotesque Regular", sans-serif;
          font-size: clamp(13px, 1.2vw, 18px);
          letter-spacing: 0.2px;
          color: rgba(255,255,255,0.65);
          margin: 0;
          font-weight: 400;
          flex: 1 1 240px;
          max-width: 600px;
          align-self: center;
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 600px) {
          .awards-section {
            padding: clamp(22px, 3.8vw, 58px) 20px;
          }
          .ticker-item {
            width: 180px;
            height: 90px;
          }
          .awards-ticker-wrap {
            height: 160px;
            margin-top: 24px;
          }
          .awards-list {
            padding-top: 40px;
            padding-left: 0;
            padding-right: 0;
          }
          .award-row {
            flex-direction: column;
            gap: 8px;
            padding: 20px 0;
          }
          .award-title {
            flex: none;
          }
          .award-desc {
            flex: none;
            max-width: 100%;
          }
        }
        @media (min-width: 601px) and (max-width: 1024px) {
          .awards-section {
            padding: clamp(22px, 3.8vw, 58px) 32px;
          }
          .awards-list {
            padding-left: 20px;
            padding-right: 20px;
          }
          .ticker-item {
            width: 200px;
            height: 100px;
          }
          .awards-ticker-wrap {
            height: 180px;
          }
        }
      `}),(0,i.jsxs)("section",{className:"awards-section",children:[(0,i.jsxs)("div",{style:{paddingLeft:"24px"},children:[(0,i.jsx)(t.default,{text:"Our Developer Partners",style:{fontFamily:'"Uxum Grotesque Regular", sans-serif',fontSize:"clamp(40px, 7.8vw, 112px)",letterSpacing:"-2.6px",lineHeight:"1em",color:e,margin:0,fontWeight:400}}),(0,i.jsx)("p",{style:{fontFamily:'"Uxum Grotesque Regular", sans-serif',fontSize:"clamp(14px, 1.8vw, 18px)",color:"rgba(2, 4, 45, 0.7)",lineHeight:1.4,margin:"16px 0 0 0",maxWidth:"700px"},children:"We partner with the UAE's most trusted developers to deliver curated off-plan investment opportunities with direct pricing."})]}),(0,i.jsx)("div",{className:"awards-ticker-wrap",children:(0,i.jsx)("div",{className:"awards-ticker",children:[void 0,void 0].map((e,t)=>(0,i.jsx)(a.default.Fragment,{children:[{name:"23",src:"/assets/images/client-logos/logos-wenest-23.png"},{name:"Arada",src:"/assets/images/client-logos/logos-wenest_arada.png"},{name:"Ayat",src:"/assets/images/client-logos/logos-wenest_ayat.png"},{name:"Azizi",src:"/assets/images/client-logos/logos-wenest_azizi.png"},{name:"Binghatti",src:"/assets/images/client-logos/logos-wenest_binghatti.png"},{name:"Condor",src:"/assets/images/client-logos/logos-wenest_condor.png"},{name:"Damac",src:"/assets/images/client-logos/logos-wenest_damac.png"},{name:"Deyaar",src:"/assets/images/client-logos/logos-wenest_deyaar.png"},{name:"Eight Square",src:"/assets/images/client-logos/logos-wenest_eight-square.png"},{name:"Ellington",src:"/assets/images/client-logos/logos-wenest_ellington.png"},{name:"Emaar",src:"/assets/images/client-logos/logos-wenest_emaar.png"},{name:"HRE",src:"/assets/images/client-logos/logos-wenest_hre.png"},{name:"Imtiaz",src:"/assets/images/client-logos/logos-wenest_imtiaz.png"},{name:"Marquis",src:"/assets/images/client-logos/logos-wenest_marquis.png"},{name:"Meraas",src:"/assets/images/client-logos/logos-wenest_meraas.png"},{name:"Mira",src:"/assets/images/client-logos/logos-wenest_mira .png"},{name:"Mr. Eight",src:"/assets/images/client-logos/logos-wenest_mr.eight.png"},{name:"Nakheel",src:"/assets/images/client-logos/logos-wenest_nakheel.png"},{name:"Object1",src:"/assets/images/client-logos/logos-wenest_object1.png"},{name:"Ohana",src:"/assets/images/client-logos/logos-wenest_ohana.png"},{name:"Ola",src:"/assets/images/client-logos/logos-wenest_ola.png"},{name:"Prestige One",src:"/assets/images/client-logos/logos-wenest_prestige-one.png"},{name:"Reportage",src:"/assets/images/client-logos/logos-wenest_reportage.png"},{name:"Samana",src:"/assets/images/client-logos/logos-wenest_samana.png"},{name:"Sobha",src:"/assets/images/client-logos/logos-wenest_sobha.png"},{name:"Sotheby's",src:"/assets/images/client-logos/logos-wenest_sothebys.png"}].map((e,a)=>(0,i.jsx)("div",{className:"ticker-item",children:(0,i.jsx)("img",{src:e.src,alt:`${e.name} Developer Partner Logo`,style:{maxWidth:"80%",maxHeight:"80%",objectFit:"contain",filter:"drop-shadow(1px 0 0 #e0c996) drop-shadow(-1px 0 0 #e0c996) drop-shadow(0 1px 0 #e0c996) drop-shadow(0 -1px 0 #e0c996)",opacity:"1"},loading:"lazy"})},a))},t))})})]})]})}])},43482,e=>{"use strict";var i=e.i(43476);let a={professionalism:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",width:"44",height:"44",stroke:"#e0c996",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),(0,i.jsx)("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),reliability:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",width:"44",height:"44",stroke:"#e0c996",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),(0,i.jsx)("path",{d:"M9 12l2 2 4-4"})]}),personalized:(0,i.jsx)("svg",{viewBox:"0 0 24 24",width:"44",height:"44",stroke:"#e0c996",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:(0,i.jsx)("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),transparent:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",width:"44",height:"44",stroke:"#e0c996",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"}),(0,i.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})},t=[{title:"Professionalism",text:"We hold ourselves to the highest standard of advisory practice - because the investments our clients make are significant, and they deserve guidance built on expertise, preparation and genuine market knowledge.",icon:a.professionalism},{title:"Reliability",text:"Our clients trust us with important decisions. We honour that trust by being consistent, accurate and fully accountable at every step of the process - from first enquiry to final handover.",icon:a.reliability},{title:"Personalised Approach",text:"Every nest is different. We take the time to understand each investor's unique goals, risk appetite and timeline before making any recommendation - because strategic advice is only valuable when it is truly tailored.",icon:a.personalized},{title:"Transparent Dealings",text:"We share the full picture - always. Fees, risks, realistic returns and honest project assessments are communicated clearly so our clients can invest with confidence rather than assumptions.",icon:a.transparent}];e.s(["default",0,function(){return(0,i.jsx)("section",{className:"w-full px-6 md:px-12 flex justify-center",style:{backgroundColor:"#02042d",paddingBottom:"clamp(45px, 7.5vw, 117px)",paddingTop:"clamp(45px, 7.5vw, 117px)"},children:(0,i.jsx)("div",{className:"max-w-[1400px] w-full",children:(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",children:t.map((e,a)=>(0,i.jsxs)("div",{className:"flex flex-col gap-6 p-10 transition-all duration-500 hover:-translate-y-2 group",style:{backgroundColor:"#02042d",border:"1px solid rgb(224, 201, 150)"},children:[(0,i.jsx)("div",{className:"transition-transform duration-300 group-hover:scale-110 origin-left",children:e.icon}),(0,i.jsxs)("div",{className:"flex flex-col gap-4 mt-2",children:[(0,i.jsx)("h3",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"24px",letterSpacing:"-0.5px",color:"#ffffff",margin:0,fontWeight:400},children:e.title}),(0,i.jsx)("p",{style:{fontFamily:"Uxum Grotesque Regular, sans-serif",fontSize:"15px",color:"rgba(255,255,255,0.65)",lineHeight:1.6,margin:0},children:e.text})]})]},a))})})})}])}]);

//# sourceMappingURL=40z9jybverded.js.map
let a={email:"",messagee:""};const t=document.querySelector(".feedback-form"),r="feedback-form-state";window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(r);if(e)try{a=JSON.parse(e),t.elements.email.value=a.email||"",t.elements.message.value=a.message||""}catch(s){console.error("Error parsing saved form data:",s)}});t.addEventListener("input",e=>{(e.target.name==="email"||e.target.name==="message")&&(a[e.target.name]=e.target.value,localStorage.setItem(r,JSON.stringify(a)))});t.addEventListener("submit",e=>{if(e.preventDefault(),a.email.trim()===""||a.message.trim()===""){alert("Fill please all fields");return}console.log("Submitted data:",a),a={email:"",message:""},localStorage.removeItem(r),t.reset()});
//# sourceMappingURL=2-form-DsItkF9J.js.map

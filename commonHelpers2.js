import"./assets/modulepreload-polyfill-ec808ebb.js";const o=document.querySelector(".feedback-form"),a=document.querySelector('input[name="email"]'),t=document.querySelector('textarea[name="message"]');if(localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email&&e.email!==""&&(a.value=e.email),e.message&&e.message!==""&&(t.value=e.message)}o.addEventListener("input",e=>{const m={email:"",message:""};e.target.tagName.toLowerCase()==="input"&&(m.email=e.target.value.trim()),e.target.tagName.toLowerCase()==="textarea"&&(m.message=e.target.value.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(m))});o.addEventListener("submit",e=>{e.preventDefault(),a.value.trim()&&a.value!==""&&t.value.trim()&&t.value!==""&&(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),a.value="",t.value="",localStorage.removeItem("feedback-form-state"))});
//# sourceMappingURL=commonHelpers2.js.map
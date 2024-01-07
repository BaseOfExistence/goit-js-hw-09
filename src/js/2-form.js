const email = document.querySelector(".form-cont > label > input");
const message = document.querySelector(".form-cont > label > textarea");
const form = document.querySelector(".feedback-form");
if (localStorage.getItem("feedback-form-state")) {
    const feedbackSave = JSON.parse(localStorage.getItem("feedback-form-state"));
    email.value = feedbackSave.email;
    message.value = feedbackSave.message;
}
const feedback = {
    email: "",
    message: "",
}
const feedbackSubmit = (event) => {
    event.preventDefault();
    console.log(localStorage.getItem("feedback-form-state"));
    email.value = "";
    message.value = "";
    localStorage.removeItem("feedback-form-state");
}
email.addEventListener("input", (event) => {
    feedback.email = event.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
})
message.addEventListener("input", (event) => {
    feedback.message = event.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
})
form.addEventListener("submit", feedbackSubmit);

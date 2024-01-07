const email = document.querySelector(".email");
const message = document.querySelector(".message");
const submit = document.querySelector(".submit");
if (localStorage.getItem("feedback-form-state")) {
    const feedbackSave = JSON.parse(localStorage.getItem("feedback-form-state"))
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
    localStorage.removeItem("feedback-form-state")
}
email.addEventListener("input", (event) => {
    feedback.email = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
})
message.addEventListener("input", (event) => {
    feedback.message = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
})
submit.addEventListener("click", feedbackSubmit)

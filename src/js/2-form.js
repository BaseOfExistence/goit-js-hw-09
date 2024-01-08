const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const form = document.querySelector(".feedback-form");
if (localStorage.getItem("feedback-form-state")) {
    const feedbackSave = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (feedbackSave.email) {
        email.value = feedbackSave.email;
    }
    if (feedbackSave.message) {
        message.value = feedbackSave.message;
    }
}
const feedback = {}
email.addEventListener("input", (event) => {
    feedback.email = event.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
})
message.addEventListener("input", (event) => {
    feedback.message = event.target.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value && message.value) {
    console.log(localStorage.getItem("feedback-form-state"));
    email.value = "";
    message.value = "";
    localStorage.removeItem("feedback-form-state");
    }
});

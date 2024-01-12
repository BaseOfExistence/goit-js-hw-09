const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
if (localStorage.getItem("feedback-form-state")) {
    const feedbackSave = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (feedbackSave.email && feedbackSave.email.trim() !== "") {
        email.value = feedbackSave.email;
    }
    if (feedbackSave.message && feedbackSave.message.trim() !== "") {
        message.value = feedbackSave.message;
    }
}
const feedback = {
    email: "",
    message: ""
}
form.addEventListener("input", (event) => {
    if (event.target.tagName.toLowerCase() === "input") {
        feedback.email = event.target.value.trim();
    }
    if (event.target.tagName.toLowerCase() === "textarea") {
        feedback.message = event.target.value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
})
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value && email.value !== "" && message.value && message.value !== "") {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    email.value = "";
    message.value = "";
    localStorage.removeItem("feedback-form-state");
    }
});

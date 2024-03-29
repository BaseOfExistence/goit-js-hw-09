const form = document.querySelector(".feedback-form");
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
let feedbackSave = {};

if (localStorage.getItem("feedback-form-state")) {
  feedbackSave = JSON.parse(localStorage.getItem("feedback-form-state"));
  if (feedbackSave.email && feedbackSave.email !== "") {
    email.value = feedbackSave.email;
  }
  if (feedbackSave.message && feedbackSave.message !== "") {
    message.value = feedbackSave.message;
  }
}

form.addEventListener("input", (event) => {
  const feedback = {
    email: email.value.trim(),
    message: message.value.trim()
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value.trim() && email.value !== "" && message.value.trim() && message.value !== "") {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    email.value = "";
    message.value = "";
    localStorage.removeItem("feedback-form-state");
  }
});

const form = document.getElementsByTagName("form")[0];

const fullName = document.getElementById("fullName");
const mail = document.getElementById("mail");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  // if the email field is valid, we let the form submit

  if (
    !email.validity.valid &&
    !names.validity.valid &&
    !message.validity.valid
  ) {
    event.preventDefault();
  }
});

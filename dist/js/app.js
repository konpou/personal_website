const form = document.getElementsByTagName("form")[0];

const fullName = document.getElementById("fullName");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const formInputs = document.getElementsByTagName("input");

function validate() {
  form.addEventListener("submit", function (event) {
    // if the email field is valid, we let the form submit

    if (
      !main.validity.valid &&
      !fullName.validity.valid &&
      !message.validity.valid
    ) {
      event.preventDefault();
    }
    //   else if (
    //     email.validity.valid &&
    //     names.validity.valid &&
    //     message.validity.valid
    //   ) {
    //     form.setAttribute("action", "/success.html");
    //   }
  });
}

// function validate() {
//   const fullName = document.getElementById("fullName").value;
//   const mail = document.getElementById("mail").value;
//   const message = document.getElementById("message").value;
//   const fullNameRGEX = /^[A-Za-z\s]{3,17} [A-Za-z]{4,17}$/;
//   const mailRGEX = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
//   const messageRGEX = /^[A-Za-z\s]{1,12} [A-Za-z]{1,12}$/i;
//   const fullNameResult = fullNameRGEX.test(fullName);
//   const mailResult = mailRGEX.test(mail);
//   const messageResult = messageRGEX.test(message);
//   if (fullNameResult == false) {
//     alert("Please enter a valid phone number");
//     return false;
//   }

//   if (mailResult == false) {
//     alert("Please enter a valid postal number");
//     return false;
//   }

//   if (messageResult == false) {
//     alert("Please enter a valid postal number");
//     return false;
//   }

//   return true;
// }

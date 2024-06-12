let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let button = document.getElementById("btn");

const getAllValues = () => {
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(message.value);
};

const clearToDefault = () => {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  message.value = "";
};

const isEmpty = () => {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    alert("Please fill all the fields");
  } else {
    alert("Thank you for your message. We will get back to you soon!");
    clearToDefault();
  }
};

button.addEventListener("click", (evt) => {
  getAllValues();
  isEmpty();
  evt.preventDefault();
});

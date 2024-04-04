// Q1. take input from user and let them know whether he can drive or not

let age = prompt("Enter your age: ");
age = parseInt(age);
if (age < 0) {
  console.error("Enter valid age");
}
const canDrive = (age) => {
  return age >= 18 ? true : false;
};

if (canDrive(age)) {
  alert("You can drive");
} else {
  alert("You can't drive");
}
let cond = confirm("Do you want to see prompt again?");

while (cond) {
  let age = prompt("Enter your age: ");
  age = parseInt(age);
  if (age < 0) {
    console.error("Enter valid age");
    break;
  }
  canDrive(age);
  if (canDrive(age)) {
    alert("You can drive");
  } else {
    alert("You can't drive");
  }
  cond = confirm("Do you want to see prompt again?");
}

// Q5. change background color according to user's choice
// let choice = prompt("Enter red or yellow");
// document.body.style.backgroundColor = choice;
// console.log("Background color changed to ", choice);

// // Q6. redirect to google if user enter num greater than 4
// let num = prompt("Enter a number");
// num = parseInt(num);
// if (num > 4) {
//   location.href = "https://www.google.com"; // redirect to google
// }

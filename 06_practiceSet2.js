// Age lies between 10 and 20 or not
let age = 14;
if (age >= 10 && age <= 20) {
  console.log("Age lies between 10 and 20");
}

// number is divided by 2 and 3
let num = 12;
if (num % 2 == 0 && num % 3 == 0) {
  console.log(` ${num}  is divided by 2 and 3`);
} else {
  console.log(` ${num} is not divided by 2 and 3`);
}

// Ternary operator
let yourAge = 3;
yourAge > 18 ? console.log("You can drive") : console.log("You can't drive");

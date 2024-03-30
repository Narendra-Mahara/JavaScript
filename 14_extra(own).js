// variables declaration
let variable;
// variable initialization
let name = "Narendra"; // string
let age = 21; // number
console.log(`My name is ${name}`); // template literals example

console.log("My age is " + age); // concatenation example

console.log("I can print anything using loop until some condition is met");

for (let i = 0; i < 6; i++) {
  console.log("I am fine? ");
}

const subject = {
  digitalLogic: "B",
  statistics: "B",
  maths: "A",
  "OOP(c)": "B",
  microprocessor: "F",
};

for (let marks in subject) {
  console.log("I got ", subject[marks], "in", marks);
}

// for of loop is used to iterate over the values of an iterable object like an array, string, map, set, etc.

// -------------------------Will be updated soon----------------------------

// -------------------------------------------------------------------------------

console.log("I also know about functions ( not really too much)");
//<<<<<<<<<<< Function are used to make a blocks of a program >>>>>>>>
// <<<<<<<<<< Always use arrow functions in javascript. >>>>>>>>>

const func = () => {
  console.log("I am a good boy according to my parents");
};

// Only defining a function does not run it. You have to call it to run it.
func();

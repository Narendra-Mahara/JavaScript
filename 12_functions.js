// function is a block of code that is used to solve a particular problem. It is executed when it is called. The function can take arguments and return a value. The syntax of a function is:

//  >>>>>>> function functionName(parameters) {    <<<<<<<
//     // code to be executed
// }

function hello() {
  // function with no parameters
  console.log("Hello World");
}

hello();

function sum(a, b) {
  // function with parameters
  console.log(a + b);
}

sum(10, 20);

// A arrow function is a shorter syntax for writing a function. The syntax of an arrow function is:

// <<<<<<<<     const functionName = (parameters) => {   >>>>>>>>
//     // code to be executed
// }

const arrow = () => {
  // function with no parameters
  console.log("Hello World");
};

arrow();

// In javascript there are two types of scopes:

// 1. Local Scope
// 2. Global Scope

// Local Scope: A variable declared inside a function is only accessible within that function. It is called local scope.
//example
function greet() {
  let message = "Hello World";
  console.log(message);
}
greet(); // Hello World
//   >>>>>>>>>>console.log(message); // ReferenceError: message is not defined because message is a local variable and it is not accessible outside the function.

// Global Scope: A variable declared outside a function is called a global variable. It is accessible from any function.
//example
let hello = "Hello World";
function greet1() {
  console.log(hello);
}
greet1(); // Hello World
console.log(hello); // Hello World

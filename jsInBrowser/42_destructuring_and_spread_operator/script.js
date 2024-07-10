// Destructuring in jacascript is a way to unpack values from arrays, or properties from objects, into distinct variables. The spread operator is used to expand an array or object into individual elements.

// Destructuring

let array = [100, 200];
let [a, b] = array;

console.log(a, b); // 100 200

let obj = {
  name: "Narendra",
  age: 21,
};
let { name, age } = obj;

console.log(name, age); // Narendra 21

// Spread Operator

let arr1 = [1, 2, 3];
let obj1 = { ...arr1 };
console.log(obj1); // {0: 1, 1: 2, 2: 3}

// Spread Operator in function is used to pass an array to a function that expects a list of arguments.
function sum(x, y, z) {
  return x + y + z;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6

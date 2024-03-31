// There are 4 types of loops in for arrays:
// 1. for loop
// 2. for-of loop
// 3. forEach loop
// 4. for-in loop
let array = ["Narendra", "is", "single", "and", "awesome"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("For-of loop");
for (let i of array) {
  console.log(i);
}

console.log("forEach loop");
array.forEach((element) => {
  console.log(element);
});

console.log("for-in loop");
for (let i in array) {
  console.log(i); // prints the key/index of the array
}

let str = "Narendra";
console.log(Array.from(str)); // converts a string to an array

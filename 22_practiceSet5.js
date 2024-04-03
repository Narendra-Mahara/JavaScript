// Q1.push a number to array
const prompt = require("prompt-sync")();
let array = [3, 5, 29, 19];
let num = prompt("Enter a number to add to the array: ");
num = Number.parseInt(num);
array.push(num);
console.log(array);

//Q2. push until number entered by user is 0
let new_array = [3, 5, 29, 19];
let number = prompt("Enter a number to add to the array: ");
num = Number.parseInt(number);
new_array.push(number);
while (number != 0) {
  array.push(number);
  number = prompt("Enter a number to add to the array: ");
  number = Number.parseInt(number);
}
console.log(new_array);

// Q3. filter out the number divisible by 10.
let arra = [3, 5, 29, 19, 21, 41, 10, 20, 30, 100];
let results = arra.filter((num) => {
  if (num % 10 == 0) {
    return num;
  }
});
console.log(results);

//Q4. Create a square of the number of this array
let arr = [3, 5, 29, 19, 21, 41, 10, 20, 30, 100];
let result = arr.map((num) => {
  return num * num;
});
console.log(result);

//Q4. calculate product of the elements of the array

let fact = [3, 4, 5, 6, 7];
let value = fact.reduce((n, m) => {
  return n * m;
});
console.log(value);

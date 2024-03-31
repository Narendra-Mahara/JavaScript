// map() is same as forEach() but it returns a new array with the results of calling a function for every array element.
// filter() is used to create a new array by keeping the items that return true.
// reduce() is used to accumulate a value by doing something to each item in an array.

let array = [3, 5, 29, 19, true, "Narendra"];

console.log("map()");
let newArray = array.map((element) => {
  return element + " is awesome";
});
console.log(newArray);

console.log("filter()");
let filteredArray = array.filter((element) => {
  return typeof element === "string";
});
console.log(filteredArray);

console.log("reduce()");
let reducedArray = array.reduce((accumulator, element) => {
  return accumulator + element;
});
console.log(reducedArray);
// The map() method creates a new array with the results of calling a function for every array element.

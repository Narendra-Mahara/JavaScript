// There are many array methods in JavaScript. Some of them are:
// 1. push() - add elements to the end of an array
// 2. pop() - remove elements from the end of an array
// 3. shift() - remove elements from the beginning of an array
// 4. unshift() - add elements to the beginning of an array
// 5. indexOf() - find the index of an item in the array
// 6. splice() - remove an item by index position
// 7. slice() - copy an array
// 8. concat() - merge arrays
// 9. forEach() - loop over an array
// 10. map() - create a new array by doing something with each item in an array
// 11. filter() - create a new array by keeping the items that return true
// 12. reduce() - accumulate a value by doing something to each item in an array
// 13. some() - check if at least one item in an array passes a condition
// 14. every() - check if all items in an array pass a condition
// 15. sort() - sort an array alphabetically
// 16. reverse() - reverse the order of items in an array
// 17. find() - find the first item that matches a condition
// 18. findIndex() - find the index of the first item that matches a condition
// 19. includes() - check if an array contains a certain item
// 20. toString() - convert an array to a string
// 21. join() - convert an array to a string with a custom separator
// 22. delete - delete an element from an array
// and so on..

let array = [3, 5, 29, 19, true, "Narendra"];
console.log(array.toString()); // convert an array to a string
console.log(array.join("_")); // convert an array to a string with a custom separator
console.log(array.pop()); // remove elements from the end of an array
console.log(array.push("isSingle")); // add elements to the end of an array
console.log(array.shift()); // remove elements from the beginning of an array
console.log(array.unshift("Hello World")); // add elements to the beginning of an array
delete array[4]; // delete element at 4th index from an array
console.log(array);
let anotherArray = [1, 2, 3, 4, 5];
console.log(array.concat(anotherArray)); // merge arrays
console.log(array.sort()); //sort an array alphabetically
const convert = (a, b) => a - b;
console.log(array.sort(convert)); // sort an array numerically
console.log(array.reverse()); // reverse the order of items in an array
console.log(array.splice(2, 3, "narendra", "is", "single")); // remove an item by index position
console.log(array);
console.log(array.slice(1, 4)); // copy an slice of an array

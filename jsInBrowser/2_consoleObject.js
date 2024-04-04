// console is a global object in the browser. It is a part of the window object
// There are different methods in console object like:
// 1. console.log() // to print the message
// 2. console.error() // to print the error message
// 3. console.warn() // to print the warning message
// 4. console.clear() // to clear the console
// 5. console.time() // to start the timer
// 6. console.timeEnd() // to end the timer
// 7. console.table() // to print the table
// 8. console.count() // to count the number of times the function is called
// 9. console.assert() // to check if the condition is true or false
console.clear();
console.time("a");
console.log("Hello world");
console.error("This is an error");
console.warn("This is a warning");
const obj = {
  name: "Narendra",
  age: 21,
  city: "Mahendranagar",
};
console.table(obj);
console.assert(2 == 12, "This is wrong");
console.timeEnd("a");

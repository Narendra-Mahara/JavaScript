// Q1.
console.log("Narendra's World".length);

// Q2.
let paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(paragraph.includes("The")); // returns true if the string contains the specified value, otherwise false
console.log(paragraph.startsWith("The")); // returns true if the string starts with the specified value, otherwise false
console.log(paragraph.endsWith("lazy?")); // returns true if the string starts with the specified value, otherwise false

let str = "I have Rs. 1000";
console.log(str.slice(11)); // slice string from index 11 to end

let name = "Narendra";
name[4] = "i";
console.log(name); // value doesn't change because strings are immutable.

// String is array of characters. In javascript, string can be declared using single quotes, double quotes or backticks(``).
let name = "Narendra"; // string
console.log("My name is", name);
console.log(name.length);

//Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
let age = 21;

console.log(`My name is ${name}and my age is ${age}`); // template literals example

//Escape Sequences Characters
console.log('Appl"e'.length); // 6 because of escape sequence character
console.log("Appl\ne"); // new line
console.log("Appl\te"); // tab
console.log("Appl\re"); // carriage return means it will remove the previous character
// carriage return vaneko, first Appl print garxa ra \r le cursor lai start ma laijhanxa ani e print garxa // result: epple

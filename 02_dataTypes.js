// There are two types of data types in JavaScript:
// 1. Primitive data types (7 primitive data types)
// NN BB SS U
// a.Null
// b.Undefined
// c.Boolean
// d.Number
// e.String
// f.Symbol
// g.BigInt

// 2. Reference(Non-Primitive) data types(only one i.e Object)

//<<<< typeof is used to check the data type of a variable.>>>>

// Primitive Data Types
let a = "Narendra"; // String
let b = 55; // Number
let c = true; // Boolean
let d = null; // Null
let e = undefined; // Undefined
let f = Symbol("This is a symbol"); // Symbol
let g = 1234567890123456789010n; // BigInt

console.log(a, b, c, d, e, f, g);
console.log("Type of a is : " + typeof a); // string
console.log("Type of b is : " + typeof b); // number
// ...

// Non Primitive Data Types
const item = {
    "name": "Narendra",
    "age": 22,
    "isSingle": true
}

console.log(item); // display all the elements of the object
console.log(item.name); // display the name of the object
console.log(item.age); // display the age of the object
console.log(item.isSingle); // display the value of isSingle
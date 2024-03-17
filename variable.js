// var is a global scope variable
// var can be redeclared and updated
// let and const are block scope variable
// let can be updated but not redeclared
// const can't be updated and redeclared
// const must be initialized at the time of declaration

var b = 44;
var b = 55; // no error because var can be redeclared
b = 66; // no error because var can be updated
console.log(b);

let a = 55;
// let a = 66; // Uncaught SyntaxError: Identifier 'a' has already been declared
a = 66; //no error because let can be updated
console.log(a);

// const c; //  SyntaxError: Missing initializer in const declaration
const c = 55; // no error because const must be initialized at the time of declaration
// c = 55; //  SyntaxError: const can't be redeclared
console.log(c);

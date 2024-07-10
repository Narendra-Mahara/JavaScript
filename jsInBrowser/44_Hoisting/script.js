// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
// But function expressions and class expression are not hoisted.

// This means we should always declare variables at the top of the scope to avoid bugs. This is why it is a good practice to declare all variables at the beginning of every scope.

// Example 1: Hoisting of variables
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// Example 2: Hoisting of functions
display(); // Hello World
function display() {
  console.log("Hello World");
}

// Example 3: Hoisting of function expressions
// display1(); // TypeError: display1 is not a function
var display1 = function () {
  console.log("Hello World");
};
display1();

// Example 4: Hoisting of class declarations
var obj = new Person("Narendra", 21);
obj.display();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Example 5: Hoisting of class expressions
// var obj1 = new Student("Narendra", 21);
// obj1.display(); // TypeError: Student is not a constructor

var Student = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
};

// Example 6: Hoisting of let and const
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
console.log(a); // 5

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 10;

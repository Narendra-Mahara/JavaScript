// There are 7 types of operators in JavaScript:
// 1. Arithmetic Operators
// 2. Comparison Operators
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operators
// 6. type of Operators

// 1. Arithmetic Operators
let a = 44;
let b = 6;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("2 ** 2 = ", 2 ** 2); // 2^2 = 4
console.log("a++ = ", a++); // a = a + 1 first print then increment
console.log("++a = ", +a); // a = a + 1 first increment then print
console.log("a-- = ", a--);
console.log("--a = ", --a);

// 2. Comparison Operators ( retrun true or false)
let x = 2;
let y = 3;
console.log("x = ", x, "y = ", y);
console.log("x == y is ", x == y);
console.log("x != y is ", x != y);
console.log("x > y is ", x > y);
console.log("x < y is ", x < y);
console.log("x >= y is ", x >= y);
console.log("x <= y is ", x <= y);
console.log("x === y is ", x === y); // check value and type
console.log("x !== y is ", x !== y); // check value and type
console.log("1 === '1' is ", 1 !== "1");

// 3. Logical Operators (to compare two or more conditions)
let p = 3;
let q = 4;
console.log("p = ", p, "q = ", q);
console.log("p<q && p>2 = ", p < q && p > 2);
console.log("p<q || p>2 = ", p < q || p > 2);
console.log("!false =", !false);

// 4. Assignment Operators
let n = 4; // = assign 4 to n
n += 2; // n = n + 2
n -= 2; // n = n - 2
n *= 2; // n = n * 2
n /= 2; // n = n / 2
n %= 2; // n = n % 2
console.log("n = ", n);

// 5. Ternary Operators
let apple = 5;
apple > 3
  ? console.log("apple is greater than 3")
  : console.log("apple is less than 3");

  // 6. Type of Operators
    console.log("Type of n = ", typeof n);// prints the type of the variable



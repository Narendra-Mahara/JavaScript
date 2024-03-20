// do while loop is used to execute a block of code at least once, and then the condition is checked. If the condition is true, the block of code is executed again. The syntax of do while loop is:
// do{
//     // code to be executed
// }while (condition);

let i = 1;
let num = 10;
do {
  console.log(i);
  i++;
} while (i <= num);

let a = 1;
let b = 2;
do {
  console.log("I am inside the loop");
} while (a > b); // prints the message once and then out of the loop

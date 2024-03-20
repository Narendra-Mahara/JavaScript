// There are 3 types of loops in JavaScript:
// 1. for loop
// 2. while loop
// 3. do while loop

// for loop
// There are 3 types of for loop:
// 1. for loop
// 2. for in loop
// 3. for of loop

// Program to print numbers from 1 to 10 using for loop
console.log("The numbers from 1 to 10 are:");
for( i = 1; i <= 10; i++)
{
    console.log(i);
}

// Program to print numbers from 10 to 1 using for loop
let sum = 0;
for(i = 1; i <= 10; i++)
{
    sum += i;
}
console.log("The sum of first ten numbers is", sum);

// Program to print the factorial of a number using for loop
let number = 5;
let fact = 1;
for( i= 1; i <= number; i++)
{
    fact *= i;
}
console.log("The factorial of 5 is", fact);
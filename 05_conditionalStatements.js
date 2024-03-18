// There are 4 types of conditional statements in JavaScript:
// 1. if statement
// 2. if-else statement
// 3. else-if statement
// 4. switch statement
let a = 44;
let b = 44; 
if(a > b){
    console.log('a is greater than b');
}
else if(a < b){  
    console.log('a is less than b');
}
else{
    console.log('a is equal to b');
}

let day= prompt("Enter the day:");
day = parseInt(day);
switch(day){
    case 1:
    console.log("Today is sunday");
    break;
    case 2:
    console.log("Today is monday");
    break;
    case 3:
    console.log("Today is tuesday");
    break;
    case 4:
    console.log("Today is wednesday");
    break;
    case 5:
    console.log("Today is thursday");
    break;
    case 6:
    console.log("Today is friday");
    break;
    case 7:
    console.log("Today is saturday");
    break;
    default:
    console.log("Invalid day!");
}
// try  and catch is used to handle the error in the code. If there is an error in the code, the code will not stop executing. It will continue to execute the code. The error will be caught by the catch block and the error will be printed in the console. The code will not stop executing.

try {
  console.log(Narendra);
} catch (error) {
  console.log("Error: ", error);
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
try {
  setTimeout(() => {
    console.log(Narendra);
  }, 2000);
} catch (error) {
  console.log("Error: ", error);
}
// The above code will not work because the setTimeout function is an asynchronous function. The code will not stop executing. The error will not be caught by the catch block. The code will continue to execute. The error will be printed in the console. The code will not stop executing.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
setTimeout(() => {
  try {
    console.log(Narendra);
  } catch (error) {
    console.log("Error: ", error);
  }
}, 2000);
// Do this instead
// The above code will work because the setTimeout function is an asynchronous function. The code will stop executing. The error will be caught by the catch block. The error will be printed in the console. The code will stop executing.

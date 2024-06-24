// Error object is a global object that contains information about the error that occurred. The Error object is created when an error occurs in the code. The Error object contains the following properties:
// name: The name of the error.
// message: The error message.
// stack: The stack trace of the error.
// The Error object is created when an error occurs in the code. The Error object is thrown using the throw keyword. The Error object is caught using the try and catch block. The Error object is printed in the console using the console.log() method.

//  We can throw our custom error using the throw keyword. We can catch our custom error using the try and catch block. We can print our custom error in the console using the console.log() method

// The error Object
try {
  console.log(Narendra);
} catch (error) {
  console.log("Error: ", error);
  console.log("Name: ", error.name);
  console.log("Message: ", error.message);
  console.log("Stack: ", error.stack);
}

// Custom Error
try {
  throw new Error("This is a custom error");
} catch (error) {
  console.log("Error: ", error);
  console.log("Name: ", error.name);
  console.log("Message: ", error.message);
  console.log("Stack: ", error.stack);
}

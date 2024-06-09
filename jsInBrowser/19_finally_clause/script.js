//  finally is always executed, regardless of the outcome of the try-catch block. It is used to clean up resources, close files, and release network connections.
// It is also executed if there is return statement in try or catch block.

try {
  console.log(Narendra);
} catch (error) {
  console.log("Error: ", error);
} finally {
  console.log("Finally block is always executed");
}

// finally in a function
function hello() {
  try {
    console.log(Narendra);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    console.log("Finally block is always executed");
  }
}
hello();
console.log("after hello() function");

// callback is a function that is passed as an argument to another function and is executed after the completion of some operation. Callbacks are used to handle asynchronous operations in JavaScript. They are commonly used in AJAX requests, event handling, and other asynchronous operations.


function fetchData(callback) {
  // Simulate an asynchronous operation (e.g., AJAX request)
  setTimeout(function () {
    const data = "Some data fetched from server";
    // Call the callback function and pass the fetched data to it
    callback(data);
  }, 2000); // Simulating a delay of 2 seconds
}

// Define a callback function to handle the fetched data
function handleData(data) {
  console.log("Data received:", data);
}

// Call the fetchData function and pass the handleData function as a callback
fetchData(handleData);

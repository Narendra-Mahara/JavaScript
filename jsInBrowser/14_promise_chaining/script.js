// Promise is used to handle asynchronous operations in JavaScript. It is a good practice to use promises for asynchronous operations instead of callbacks. It provides a better way to handle sequences of asynchronous operations.
// .then() is used to handle the resolved promise. It takes a callback function that will be called when the promise is resolved.
// .catch() is used to handle the rejected promise. It takes a callback function that will be called when the promise is rejected.

let p = new Promise((resolve, reject) => {
  resolve(29);
});

p.then((value) => {
  console.log(value);
});

let q = new Promise((resolve, reject) => {
  reject("Promise rejected");
});

q.catch((error) => {
  console.log(error);
});

//promise chaining
let p1 = new Promise((resolve, reject) => {
  resolve(1);
});

p1.then((value) => {
  console.log(value);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
})
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise rejected");
      }, 2000);
    });
  })
  .catch((error) => {
    console.log(error);
  });

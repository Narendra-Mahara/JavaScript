// There are 6 promises API methods that are used to handle promises in JavaScript. They are:
// 1. Promise.all(): It is used to handle multiple promises. It takes an array of promises as an input and returns a single promise that resolves when all the promises in the array have resolved. If any of the promises in the array is rejected, the promise returned by Promise.all() is rejected.
// 2. Promise.allSettled(): It is used to handle multiple promises. It takes an array of promises as an input and returns a single promise that resolves when all the promises in the array have settled (either resolved or rejected). The promise returned by Promise.allSettled() always resolves, even if some of the promises in the array are rejected.
// 3. Promise.race(): It is used to handle multiple promises. It takes an array of promises as an input and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.
// 4. Promise.any(): It is used to handle multiple promises. It takes an array of promises as an input and returns a single promise that resolves as soon as one of the promises in the array resolves. If all the promises in the array are rejected, the promise returned by Promise.any() is rejected.
// 5. Promise.resolve(): It is used to create a resolved promise with the given value.
// 6. Promise.reject(): It is used to create a rejected promise with the given reason.

let p = new Promise((resolve, reject) => {
  resolve(29);
});

let q = new Promise((resolve, reject) => {
  reject("Promise rejected");
});

// let x = Promise.all([p, q]);
// x.then((value) => {
//   console.log(value);
// });

// let x = Promise.allSettled([p, q]);
// x.then((value) => {
//   console.log(value);
// });

// let x = Promise.race([p, q]);
// x.then((value) => {
//   console.log(value);
// });

let x = Promise.any([p, q]);
x.then((value) => {
  console.log(value);
});

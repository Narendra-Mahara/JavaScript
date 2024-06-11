// >>>>>>>>async is a keyword that is used to define an asynchronous function. It returns a promise that resolves with the value returned by the async function. The await keyword is used to pause the execution of the async function and wait for the promise to be resolved. It can only be used inside an async function.
// >>>>>>>>await is used to handle the resolved promise. It waits for the promise to be resolved and returns the resolved value.
// It is used instead of .then() method in promises.

const hello = async () => {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 2000);
  });
  let q = new Promise((resolve, reject) => {
    resolve("Promise reselved");
  });
  let result = await p;
  let error = await q;
  return [result, error];
};

hello().then((value) => {
  console.log(value);
});

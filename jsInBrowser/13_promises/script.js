// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(29);
//   }, 2000);
// });
// p.then((value) => {
//   console.log(value);
// });

const LoadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);

    script.onload = () => {
      resolve("Script loaded successfully");
    };
    script.onerror = () => {
      reject("Failed to load the script");
    };
  });
};

LoadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.7.2/bluebird.min.js"
)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

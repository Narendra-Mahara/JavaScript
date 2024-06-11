// // program to load script file in browser using Promise
// Both the programs are correct but use second one

// let p = new Promise((resolve, reject) => {
//   let script = document.createElement("script");
//   script.src =
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
//   script.onload = () => {
//     resolve("script loaded");
//   };
//   script.onerror = () => {
//     reject("script not loaded");
//   };
//   document.body.append(script);
// });

// p.then((value) => {
//   console.log(value);
// });

// p.catch((error) => {
//   console.log(error);
// });

// const LoadScript = (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve("script loaded");
//     };
//     script.onerror = () => {
//       reject("script not loaded");
//     };
//     document.body.append(script);
//   });
// };

// let a = LoadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// );

// a.then((value) => {
//   console.log(value);
// });

// Load Script using async and await

// let LoadScript = async (src) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = () => {
//       resolve("Script Loaded");
//     };
//     script.onerror = () => {
//       reject("Script not Loaded");
//     };
//     document.body.append(script);
//   });
// };

// let temp = async () => {
//   let a = await LoadScript(
//     "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
//   );
//   console.log(a);
// };

// temp();

// ^^^^^^^^^^^^Promise that reject after 3 seconds and handle error using try and catch^^^^^^^^^^^^^

// let func = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Rejected");
//     }, 3000);
//   });
// };

// let temp = async () => {
//   try {
//     let a = await func(); // async ma resolve vako result matra aauxa reject wala error ho. So we use error handler try and catch
//     console.log(a);
//   } catch (error) {
//     console.log(error);
//   }
// };
// temp();

//>>>>>>>>>3 Promises

let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 resolved");
    }, 2000);
  });
};

let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P2 resolved");
    }, 3000);
  });
};

let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P3 resolved");
    }, 1000);
  });
};

let temp = async () => {
  console.time();
  // let a1 = await p1(); // runs in around 6.1 seconds
  // let a2 = await p2();
  // let a3 = await p3();
  // console.log(a1, a2, a3);

  // >>>>>>>>>>>>>>>>so use Promise.all()<<<<<<<<<<<<<<<<<<

  let a = await Promise.all([p1(), p2(), p3()]); // runs in 3 seconds parallelly
  console.log(a);
  console.timeEnd();
};

temp();

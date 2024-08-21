// p = fetch("https://goweather.herokuapp.com/weather/ktm");

// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   return response.json();
// }).then((response) => {
//   console.log(response);
// });

// >>>>>>>>>> code to fetch data after every 2 seconds
// setInterval(() => {
//   fetch("https://goweather.herokuapp.com/weather/ktm")
//     .then((response) => {
//       console.log(response.status);
//       console.log(response.ok);
//       return response.json();
//     })
//     .then((response) => {
//       console.log(response);
//     });
// }, 2000);

// Always use async and await to fetch the data

let getFacts = async () => {
  let response = await fetch("https://cat-fact.herokuapp.com/facts"); // returns promise
  let value = await response.json(); // .json() make it into readable format
  console.log(value[0].text); // This only prints first facts
};

getFacts();

// p = fetch("https://goweather.herokuapp.com/weather/ktm");

// p.then((response) => {
//   console.log(response.status);
//   console.log(response.ok);
//   return response.json();
// }).then((response) => {
//   console.log(response);
// });


// >>>>>>>>>> code to fetch data after every 2 seconds
setInterval(() => {
  fetch("https://goweather.herokuapp.com/weather/ktm")
    .then((response) => {
      console.log(response.status);
      console.log(response.ok);
      return response.json();
    })
    .then((response) => {
      console.log(response);
    });
}, 2000);
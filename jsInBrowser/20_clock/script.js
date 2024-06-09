let getHour = document.getElementById("hours");
let getMinute = document.getElementById("minutes");
let getSecond = document.getElementById("seconds");

setInterval(() => {
  getHour.innerHTML = `${new Date().getHours()}`;
  getMinute.innerHTML = new Date().getMinutes();
  getSecond.innerHTML = new Date().getSeconds();
}, 1000);

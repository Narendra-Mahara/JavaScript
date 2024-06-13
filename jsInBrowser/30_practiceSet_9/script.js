let div = document.getElementsByClassName("animePic")[0];
let btn = document.getElementById("btn");

const getNeko = async () => {
  const response = await fetch("https://nekos.best/api/v2/neko");
  const json = await response.json();
  //   console.log(json.results[0].url);
  URL = json.results[0].url;
  div.style.backgroundImage = `url(${URL})`;
  div.style.backgroundSize = "cover";
};

getNeko();

btn.addEventListener("click", getNeko);

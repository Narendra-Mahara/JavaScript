let meme = document.querySelector(".memes");
let button = document.querySelector("#btn");
let data;

const generateNewMeme = () => {
  let random = Math.floor(Math.random() * data.length);
  meme.innerHTML = `<img src="${data[random].example.url}" alt="${data[random].name}">`;
};

window.onload = () => {
  fetch("https://api.memegen.link/templates/")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      data = response;
      generateNewMeme();
    });
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (!data) {
    return;
  }
  generateNewMeme();
});

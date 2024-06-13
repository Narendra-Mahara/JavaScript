let button = document.getElementById("btn");
const container = document.getElementById("images");

let fetchImage = () => {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((response) => {
      const imageUrl = response.url;
      container.style.height = "500px";
      container.style.width = "1000px";
      container.style.backgroundImage = `url(${imageUrl})`;
      container.style.backgroundSize = "cover";
    });
};

button.addEventListener("click", fetchImage);

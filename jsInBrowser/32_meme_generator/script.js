let meme = document.querySelector(".memes");

fetch("https://api.memegen.link/templates/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].name);
      console.log(data[i].example.url);
      meme.innerHTML += `<img src="${data[i].example.url}" alt="${data[i].name}">`;
    }
  });


  
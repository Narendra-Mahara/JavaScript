let lists = document.getElementsByClassName("list-items");
let search = document.getElementById("search");
let container = document.getElementsByClassName("container")[0];

search.addEventListener("input", (e) => {
  let noResult = true; // Reset noResult on each input event
  Array.from(lists).forEach((listItem) => {
    if (!listItem.textContent.includes(search.value)) {
      listItem.style.display = "none";
    } else {
      listItem.style.display = "inline";
      noResult = false; // Found a match, set noResult to false
    }
  });

  if (noResult) {
    let noResultElement = document.createElement("h2");
    noResultElement.textContent = "No Result Found";
    noResultElement.style.textAlign = "center";
    noResultElement.style.color = "red";
    container.appendChild(noResultElement);
  } 
});

let felement = document.getElementsByClassName("menu")[0];
console.log(felement);
felement.firstElementChild.style.color = "red";
let li = document.getElementsByTagName("li");
// console.log(li);
// li.style.background="cyan";
let arr = Array.from(li);
arr.forEach((element) => {
  element.style.background = "cyan";
});

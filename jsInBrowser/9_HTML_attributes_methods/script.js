let h1 = document.getElementById("heading");
console.log(h1.hasAttribute("class")); // false
console.log(h1.hasAttribute("id")); // true
console.log(h1.getAttribute("id")); // display the value of the particular attribute
h1.setAttribute("class","added");
h1.removeAttribute("class"); // remove the particular attribute
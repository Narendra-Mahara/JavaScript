let div = document.getElementsByClassName("main")[0];
console.log("This is the innerHTML of the div element");
console.log(div.innerHTML); // This will print the innerHTML of the div element
console.log("This is the outerHTML of the div element");
console.log(div.outerHTML); // This will print the outerHTML of the div element (including the div element itself)

// We can also change the innerHTML and outerHTML of an element using innerHTML and outerHTML properties.

// div.innerHTML = "<h1>This is the new innerHTML</h1>";
let childDiv = document.getElementById("child");
childDiv.outerHTML = "<h1>This is the new outerHTML</h1>";

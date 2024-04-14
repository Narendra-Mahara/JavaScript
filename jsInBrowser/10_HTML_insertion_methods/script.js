let div = document.getElementsByClassName("hello")[0];
div.innerHTML = div.innerHTML + "<h2> This is added using innerHTML</h2>";
let p = document.createElement("p"); // This will create a new paragraph element
p.innerHTML = "<h2> This is added using createElement</h2>";
let button1 = document.createElement("button"); // This will create a new button element
let button2 = document.createElement("button"); // This will create a new button element
let button3 = document.createElement("button"); // This will create a new button element
let button4 = document.createElement("button"); // This will create a new button element
button1.innerHTML = "append";
button2.innerHTML = "prepend";
button3.innerHTML = "before";
button4.innerHTML = "after";
div.append(button1); // add button element to the ending of the div element(inside)
div.prepend(button2); // add button element to the starting of the div element (inside)
div.before(button3); // add button element to the starting of the div element(outside)
div.after(button4); // add button element to the ending of the div element(outside)
// To create four buttons, we need to create four separate button

// we can replace the existing element with the new element using the replaceWith method.
// let newDiv = document.createElement("div");
// newDiv.innerHTML = "<h2>This is the new div</h2>";
// div.replaceWith(newDiv); // This will replace the existing div element with the new div element

// localStorage is a global object that allows web pages to store key/value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.
// It stores the date in string format. So, we need to convert it into JSON format to store the data in the localStorage.
// JSON.stringify() is used to convert the data into JSON format.
// JSON.parse() is used to convert the data into the original format.
// There are different methods of localStorage:
// 1. setItem(): It is used to store the data in the localStorage. It takes two arguments, key and value.
// 2. getItem(): It is used to get the data from the localStorage. It takes one argument, key.
// 3. removeItem(): It is used to remove the data from the localStorage. It takes one argument, key.
// 4. clear(): It is used to remove all the data from the localStorage.
// 5. key(index): It is used to get the key of the data from the localStorage. It takes one argument, index.

localStorage.setItem("name", "Narendra");
console.log(localStorage.getItem("name"));
localStorage.setItem("age", "22");
console.log(localStorage.getItem("age"));
localStorage.removeItem("name");
// localStorage.clear(); // It will remove all the data from the localStorage

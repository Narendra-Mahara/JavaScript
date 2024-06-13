// cookie in browser is the way to store data in the browser. It is a small piece of data that is stored like a key-value pair. It is stored in the browser and sent to the server with every request. It is used to store user data, like user preferences, user data, etc

document.cookie = "name=Narendra";
console.log(document.cookie);

// encodeURIComponent is the function that is used to encode the cookie value
document.cookie = `age=${encodeURIComponent("22")}`;

console.log(document.cookie);

// decodeURIComponent is the function that is used to decode the cookie value

console.log(decodeURIComponent(document.cookie));

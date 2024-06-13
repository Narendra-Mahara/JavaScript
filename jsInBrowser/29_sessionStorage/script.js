// sessionStorage is a global object that maintains a storage area that's available for the duration of the page session. A page session lasts as long as the browser is open, and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated.
// sessionStorage is similar to localStorage; the only difference is while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends. A page session lasts as long as the browser is open, and survives over page reloads and restores. Opening a page in a new tab or window will cause a new session to be initiated.

sessionStorage.setItem("name", "Narendra");
console.log(sessionStorage.getItem("name"));
sessionStorage.setItem("age", "22");
console.log(sessionStorage.getItem("age"));
sessionStorage.removeItem("name");
sessionStorage.clear(); // It will remove all the data from the sessionStorage

// This function is used to check changes in the storage
window.onstorage = function (event) {
  alert("Storage changed");
  console.log(event);
};

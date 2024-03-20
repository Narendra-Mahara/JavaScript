// forin loop is used to iterate through the properties of an object.
// The syntax of forin loop is:
// for (variable in object)
// {
//     // code to be executed
// }

const narendra = {
  age: 22,
  isSingle: true,
  height: "6ft",
};
//prints all the keys of the object
for (let value in narendra) {
  console.log(value);
}

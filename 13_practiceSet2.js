// Q1.

const obj = {
  narendra: 100,
  harish: 40,
  sakat: 100,
};
for (let marks in obj) {
  console.log("The marks of ", marks, "is ", obj[marks]);
}

// Q2.

let guess;
let num = 44;
while (num !== guess) {
  guess = prompt("Enter a number");
  if (guess === num) {
    console.log("You guessed right");
    break;
  }
}

// Q3.

function average(a, b, c, d, e) {
  return (a + b + c + d + e) / 5;
}

console.log(average(4, 5, 3, 6, 5));

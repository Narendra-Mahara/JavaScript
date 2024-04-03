let score = 0;
let computer_guess = Math.floor(Math.random() * 100 + 1);
// console.log(computer_guess);
const prompt = require("prompt-sync")();

let userInput = prompt("Guess the number");
userInput = Number.parseInt(userInput);
console.log(userInput);
for (let i = 0; i < 100; i++) {
  score = 100 - i;
  if (userInput === computer_guess) {
    console.log("Hurray! you guessed right!");
    console.log("Your score is:", score);

    break;
  } else if (userInput > computer_guess) {
    console.log("Your guess is greater than computer guess");
    userInput = prompt("Another one:");
    userInput = Number.parseInt(userInput);
  } else {
    console.log("Your guess is lesser than computer guess");
    userInput = prompt("Another one:");
    userInput = Number.parseInt(userInput);
  }
}

// Computer Guesses
let computerGuess;
let cGuess = () => {
  let arr = ["rock", "paper", "scissor"];
  computerGuess = arr[Math.floor(Math.random() * arr.length)];
  console.log("computer guess", computerGuess);
};
// User Inputs
let userInput;
let uGuess = () => {
  userInput = prompt("Choose rock, paper or scissor");
  userInput = userInput.toLowerCase();
  console.log("user guess", userInput);
};

// Game Logic

let computerScore = 0;
let userScore = 0;
let winner;
for (let i = 0; i < 3; i++) {
  cGuess();
  uGuess();
  if (userInput === computerGuess) {
    continue;
  } else if (
    (userInput === "scissor" && computerGuess === "rock") ||
    (userInput === "paper" && computerGuess === "scissor") ||
    (userInput === "rock" && computerGuess === "paper")
  ) {
    computerScore++;
  } else {
    userScore++;
  }
}

let win = (winner, score) => {
  alert(`The ${winner} is the winner with score ${score}`);
};

let tie = () => {
  alert(`The match is tie`);
};

if (userScore > computerScore) {
  winner = "user";
  win(winner, userScore);
} else if (userScore == computerScore) {
  tie();
} else {
  winner = "computer";
  win(winner, computerScore);
}

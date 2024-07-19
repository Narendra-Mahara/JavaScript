const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; // Example array
const alphabets = ["A", "B", "C", "D", "E", "F", "G"]; // Example array
const specialChars = ['"', ",", ".", "<", ">", "?", "/", "~", "`"];

console.log(specialChars.length);

const div = document.getElementById("passwordDisplay"); // Example div element
const button = document.getElementById("generateButton"); // Example button element

class GeneratePassword {
  generateIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  }

  strongPassword() {
    let password = "";
    for (let i = 0; i < 8; i++) {
      let letterIndex = this.generateIndex(letters.length);
      let alphabetsIndex = this.generateIndex(alphabets.length);
      let specialCharsIndex = this.generateIndex(specialChars.length);
      password +=
        letters[letterIndex] +
        alphabets[alphabetsIndex] +
        specialChars[specialCharsIndex];
    }
    div.innerHTML = password;
  }

  funnyPassword() {
    let password = "";
    for (let i = 0; i < 8; i++) {
      let randomChoice = Math.floor(Math.random() * 3);
      if (randomChoice === 0) {
        password += letters[this.generateIndex(letters.length)];
      } else if (randomChoice === 1) {
        password += alphabets[this.generateIndex(alphabets.length)];
      } else {
        password += specialChars[this.generateIndex(specialChars.length)];
      }
    }
    div.innerHTML = password;
  }
}

const passwordGenerator = new GeneratePassword();

button.addEventListener("click", () => {
  passwordGenerator.strongPassword();
});

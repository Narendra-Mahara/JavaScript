let jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a fish wearing a crown? A kingfish!",
  "What do you call a pile of cats? A meowtain!",
  "What do you call a bear with no teeth? A gummy bear!",
  "What do you call a sleeping bull? A bulldozer!",
  "What do you call a belt made out of watches? A waist of time!",
  ",Why did the math book look sad? Because it had too many problems!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a fake noodle? An impasta!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "What do you call a factory that makes okay products? A satisfactory!",
  "Why did the computer go to the doctor? Because it had a virus!",
  "What do you call a bear with no teeth? A gummy bear!",
  "What do you call a sleeping bull? A bulldozer!",
  "What do you call a belt made out of watches? A waist of time!",
  "Why did the math book look sad? Because it had too many problems!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "What do you call a fake noodle? An impasta!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "What do you call a factory that makes okay products? A satisfactory!",
  "Why did the computer go to the doctor? Because it had a virus!",
];
let choosenJoke = jokes[Math.floor(Math.random() * jokes.length)];
console.log(jokes.length);
let value = document.getElementsByClassName("main");
value = Array.from(value)[0];
value.innerHTML = `<i>"${choosenJoke}"</i>`;

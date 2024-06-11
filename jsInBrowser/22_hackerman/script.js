let fetchedDiv = document.getElementsByClassName("hacking")[0];

let msg = [
  "hacking rohans facebook account",
  "initializing the attacks",
  "getting requests",
  "cracking username ...",
  "cracking password...",
  "password cracked successfully",
  "Hacked successfully",
];
let hack = async (msg) => {
  let i = 0;

  while (i < msg.length) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, 1000);
    });
    console.log(msg[i]);
    fetchedDiv.innerHTML += `<h2>${msg[i]}</h2>`;
    i++;
  }
};

let temp = async () => {
  let a = await hack(msg);
};

temp();

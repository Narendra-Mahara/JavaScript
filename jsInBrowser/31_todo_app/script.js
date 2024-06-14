let userInput = document.getElementsByClassName("add")[0];
let mainDiv = document.getElementsByClassName("main")[0];
let button = document.getElementById("btn");
let tTask = document.getElementById("t-task");
let ctask = document.getElementById("c-task");

let totalTask = 0;
let completedTask = 0;

const countTotalTask = () => {
  tTask.innerText = totalTask;
};

const addTask = () => {
  if (userInput.value == "") {
    alert("Enter any taksk");
  } else {
    totalTask++;
    console.log(userInput.value);
    let newTodo = document.createElement("div");
    newTodo.style.height = "35px";
    newTodo.style.width = "100%";
    newTodo.style.marginTop = "5px";
    newTodo.style.borderRadius = "0.7rem";
    newTodo.style.display = "flex";
    newTodo.style.alignItems = "center";
    newTodo.style.paddingLeft = "5px";
    newTodo.style.fontSize = "1.5rem";
    newTodo.style.cursor = "pointer";
    newTodo.style.backgroundColor = "#EADDA6";
    localStorage.setItem(`Task${totalTask}`, `${userInput.value}`);
    newTodo.innerHTML = userInput.value;
    mainDiv.append(newTodo);
    countTotalTask();
    newTodo.addEventListener("click", () =>
      countCompletedTask(newTodo, userInput.value)
    );
  }
};

const countCompletedTask = (newTodo, userInput) => {
  if (totalTask > completedTask) {
    console.log("task completed");
    completedTask++;
    ctask.innerText = completedTask;
    newTodo.innerHTML = `<del>${userInput}</del><span style="margin-left: 20px; font-size:1rem;">Completed</span>`;
    localStorage.removeItem(`Task${totalTask}`);
  }
};

button.addEventListener("click", addTask);

// window.onload = () => {
//   localStorage.clear();
// };

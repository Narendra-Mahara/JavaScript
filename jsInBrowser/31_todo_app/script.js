let userInput = document.getElementsByClassName("add")[0];
let mainDiv = document.getElementsByClassName("main")[0];
let todoLists = document.getElementsByClassName("todoLists")[0];
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
    let alert = document.createElement("div");
    alert.style.height = "50px";
    alert.style.width = "200px";
    alert.style.marginTop = "5px";
    alert.style.display = "flex";
    alert.style.alignItems = "center";
    alert.style.justifyContent = "space-around";
    mainDiv.before(alert);
    alert.style.border = " 1.5px solid white";
    alert.innerHTML = `<ion-icon name="warning-outline"></ion-icon><p> Please Enter One Task.</p>`;
    alert.style.backgroundColor = "red";
    alert.style.fontSize = "1.1rem";
    alert.style.color = "white";
    alert.style.border = "1px solid black";
    alert.style.borderRadius = "1rem";
    setTimeout(() => {
      alert.remove();
    }, 2000);
  } else {
    totalTask++;
    let newTodo = document.createElement("div");
    newTodo.style.height = "35px";
    newTodo.style.width = "100%";
    newTodo.style.marginTop = "5px";
    newTodo.style.borderRadius = "0.5rem";
    newTodo.style.display = "flex";
    newTodo.style.alignItems = "center";
    newTodo.style.paddingLeft = "15px";
    newTodo.style.fontSize = "1.5rem";
    newTodo.style.cursor = "pointer";
    newTodo.style.backgroundColor = "#EADDA6";
    localStorage.setItem(`Task${totalTask}`, `${userInput.value}`);
    newTodo.innerHTML = userInput.value;
    todoLists.append(newTodo);
    todoLists.removeAttribute("hidden");
    countTotalTask();
    userInput.value = "";
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
    newTodo.innerHTML = `<del>${newTodo.innerHTML}</del><div style=" height: 30px; padding:5px; border:1px solid white;margin-left: 20px; display:flex; align-items:center; justify-content:center; font-size:1rem; border-radius:0.5rem;">Completed</div>`;
    localStorage.removeItem(`Task${totalTask}`);
  }
};

button.addEventListener("click", addTask);

// window.onload = () => {
//   localStorage.clear();
// };

const tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");

function renderList() {
  // Clear the task list before re-rendering
  taskList.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" id="${task.id}" class="custom-checkbox" data-id="${
      task.id
    }" ${task.completed ? "checked" : ""}>
      <label for="${task.id}">${task.text}</label>
      <img src="bin.svg" class="delete" data-id="${task.id}" />
    `;
    li.querySelector("input").addEventListener("change", () =>
      toggleTask(task.id)
    );
    li.querySelector(".delete").addEventListener("click", () =>
      deleteTask(task.id)
    );
    taskList.appendChild(li);
  }
}

function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) {
      console.log(reponse);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function toggleTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  if (task) {
    task.done = !task.done;
    renderList();
    showNotification("Task toggled successfully");
  }
}

function deleteTask(taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
    renderList();
    showNotification("Task deleted successfully");
  }
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    renderList();
    showNotification("Task added successfully");
  } else {
    showNotification("Task cannot be added");
  }
}

function showNotification(text) {
  alert(text);
}

function handleInputKeyPress(e) {
  if (e.key === "Enter") {
    const text = e.target.value.trim();
    if (!text) {
      showNotification("Task text cannot be empty");
      return;
    }
    const task = {
      text,
      id: Date.now().toString(),
      done: false,
    };
    e.target.value = "";
    addTask(task);
  }
}

function intializeApp() {
  fetchTodos();
  addTaskInput.addEventListener("keyup", handleInputKeyPress);
  document.addEventListener("click", handleClickListener);
}
intializeApp();
addTaskInput.addEventListener("keyup", handleInputKeyPress);

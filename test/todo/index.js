// // A text box at the top to add a todo item to the list.
// // Add button: when a user clicks on the button, add that todo item to the list.
// // A delete button to delete the todo item completely from the list.
// // A checkbox to check the item off the list. (checked item should stay in the list, with some differentiation from rest of the todo items)
// // Total number of tasks in the list.
// // Extra points for creativity (think about user accessibility, some animations and things like that)

let tasks = [];
const input = document.querySelector('input[type="text"]');
const add = document.querySelector("button");
const label = document.getElementsByTagName("li");
const taskList = document.getElementById("taskList");
const doneTask = document.getElementsByClassName("doneTask");
const taskCounter = document.getElementById("taskCounter");
input.addEventListener("keyup", inputTasks);

function inputTasks(i) {
  if (i.key == "Enter") {
    const taskText = i.target.value;
    if (!taskText) {
      notification("Enter the task");
      return;
    }
    const task = {
      text: taskText,
      id: Date.now().toString(),
      done: false,
    };
    i.target.value = "";
    addTask(task);
  }
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    checkList();
    notification("Task is added in array");
  } else {
    notification("Task is not added in array");
  }
}

function deleteTasks(tasksId) {
  tasks = tasks.filter(function (task) {
    return task.id !== tasksId;
  });
  checkList();
  updateTaskCount();
}

function markCompletedTask(tasksId) {
  const taskIndex = tasks.findIndex(function (task) {
    return task.id === tasksId;
  });

  if (taskIndex > -1) {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    notification("marked as a completed task");
    checkList();
  } else {
    notification("Completed tasks are not marked");
  }

  for (let i = 0; i < taskIndex.length; i++) {
    const taskItem = taskIndex[i];
    taskItem.addEventListener("click", function () {
      // const tasksId = taskIndex;
      taskList_li.className += " " + "linethrow";
    });
  }
}
function markCompletedTask(tasksId) {
  const taskIndex = tasks.findIndex(function (task) {
    return task.id === tasksId;
  });

  if (taskIndex > -1) {
    let checkbox = document.querySelector('input[type="checkbox"]');

    if (checkbox) {
      checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
          checkbox.classList.add("linethrow");
        } else {
          checkbox.classList.remove("linethrow");
        }
      });

      checkbox.checked = !checkbox.checked;
      tasks[taskIndex].done = !tasks[taskIndex].done;
      notification("marked as a completed task");
      checkList();
    } else {
      notification("No checkbox found");
    }
  } else {
    notification("Completed tasks is not marked");
  }
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `
              <input class="doneTask" type="checkbox" id="${
                task.id
              }" name="done" ${
    task.done ? "checked" : ""
  } onclick="markCompletedTask('${task.id}')"/>
              <label for="${task.id}">${task.text}</label>
              <a href="#" data-id="${task.id}" onclick="deleteTasks('${
    task.id
  }')"><i class="fa-solid fa-trash"></i></a>
       
  `;
  taskList.append(li);
  updateTaskCount();
}

// here we will print all the task
function updateTaskCount() {
  const liElements = document.querySelectorAll("li");
  taskCounter.textContent = liElements.length;
}

function checkList() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
  }
  taskCounter.innerHTML = tasks.length;
}

function notification(message) {
  alert(message);
}

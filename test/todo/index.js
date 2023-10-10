// // A text box at the top to add a todo item to the list.
// // Add button: when a user clicks on the button, add that todo item to the list.
// // A delete button to delete the todo item completely from the list.
// // A checkbox to check the item off the list. (checked item should stay in the list, with some differentiation from rest of the todo items)
// // Total number of tasks in the list.
// // Extra points for creativity (think about user accessibility, some animations and things like that)

// For Initialization and Variable Declaration
let tasks = [];
let checkCount = " ";
const input = document.querySelector('input[type="text"]');
const add = document.querySelector("button");
const taskList = document.getElementById("taskList");
const doneTask = document.getElementsByClassName("doneTask");
const completedTaskCount = document.getElementById("completedTask");
const taskCounter = document.getElementById("taskCounter");

// ******* Here is my all event listeners ********
  // when user will Press Enter this Event will call
  input.addEventListener("keyup", inputTasks);
  // this event will call when user will click on Plus Button
  add.addEventListener("click", function () {
    const taskText = input.value;
    addTaskFromInput(taskText);
    input.value = "";
  });


// this function will called when the user presses a key in the input field (input).
function inputTasks(i) {
  if (i.key == "Enter") {
    const taskText = i.target.value;
    addTaskFromInput(taskText);
    i.target.value = "";
  }
}

// this function will create unique Id for every tasks and add task in the array
function addTaskFromInput(taskText) {
  if (!taskText) {
    notification("Enter the task");
    return;
  }
  const task = {
    text: taskText,
    id: Date.now().toString(),
    done: false,
  };
  tasks.push(task);
  checkList();
  notification("Task is added in array");
}

// This function will removes a task from the tasks array based on its id. It then calls checkList() to refresh the task list in the DOM and updates the task count.
function deleteTasks(tasksId) {
  const taskToDelete = tasks.find(function (task) {
    return task.id === tasksId;
  });

  if (taskToDelete) {
    if (taskToDelete.done) {
      // Decrease completedTaskCount if the deleted task was marked as completed
      checkCount--;
    }

    tasks = tasks.filter(function (task) {
      return task.id !== tasksId;
    });

    checkList();
    updateTaskCount();
    notification("Task deleted successfully");
  } else {
    notification("Task not found");
  }
}

// This function is called when a checkbox associated with a task is clicked. It toggles the done property of the corresponding task and updates the visual styling of the task. It also increments or decrements the checkCount depending on whether the checkbox is checked or unchecked. Finally, it updates the task count.
function markCompletedTask(tasksId, checkbox) {
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

  const label = document.querySelector(`label[for="${tasksId}"]`);
  if (checkbox.checked) {
    label.classList.add("completed");
    console.log("completed");
    checkCount++;
  } else {
    label.classList.remove("completed");
    checkCount--;
  }
  updateTaskCount();
}

// In this funtion we will add a task object to the tasks array. It also calls checkList() to refresh the task list in the DOM and displays a notification.
function addTask(task) {
  if (task) {
    tasks.push(task);
    checkList();
    notification("Task is added in array");
  } else {
    notification("Task is not added in array");
  }
}

// This function adds a task to the DOM by creating a new list item (li) with a checkbox, label, and a delete button. It also updates the task count in the DOM.
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `
  <input class="doneTask" type="checkbox" id="${task.id}" name="done" ${
    task.done ? "checked" : ""
  } onclick="markCompletedTask('${task.id}', this)"/>
  <label for="${task.id}" class="${task.done ? "completed" : ""}">${
    task.text
  }</label>
  <a href="#" data-id="${task.id}" onclick="deleteTasks('${
    task.id
  }')"><img src="img/trash-solid.svg" alt="trash"></a>
       `;
  taskList.append(li);
  updateTaskCount();
}

// here we will print all the task
function updateTaskCount() {
  const liElements = document.querySelectorAll("li");
  taskCounter.textContent = liElements.length;
  completedTaskCount.innerHTML = checkCount;
}

// This function updates the entire task list on the web page. It clears the existing list and iterates through the tasks array to add each task to the DOM using the addTaskToDOM function.
function checkList() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
  }
  taskCounter.innerHTML = tasks.length;
}

// for notification
function notification(message) {
  alert(message);
}

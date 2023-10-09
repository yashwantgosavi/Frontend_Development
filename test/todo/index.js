// // A text box at the top to add a todo item to the list.
// // Add button: when a user clicks on the button, add that todo item to the list.
// // A delete button to delete the todo item completely from the list.
// // A checkbox to check the item off the list. (checked item should stay in the list, with some differentiation from rest of the todo items)
// // Total number of tasks in the list.
// // Extra points for creativity (think about user accessibility, some animations and things like that)

// let tasks = [];
// const input = document.querySelector('input[type="text"]');
// const add = document.querySelector("button");
// const allTasks = document.getElementById("allTaskCount");
// const done = document.getElementById("completedTask");
// const deleteTask = document.querySelector("li a");
// const check = document.querySelector('input[type="radio"]');

// input.addEventListener("keyup", inputTasks);

// function inputTasks(i) {
//   // when user will click enter this code will take a input value
//   if (i.key == "Enter") {
//     const taskText = i.target.value;
//     // if there is not any text then alert to user for inputing a task
//     if (!taskText) {
//       notification("Enter the task");
//       return;
//     }
//     const tasks = {
//       text: taskText,
//       id: Date.now().toString(),
//       done: false,
//     };

//     i.target.value = " ";
//     addTask(tasks);

//     console.log(taskText);
//   }
// }

// function addTask(task) {
//   if (task) {
//     tasks.push(task);
//     checkList();
//     notification("task is added in array");
//     return;
//   }
//   notification("task is not added in array");
// }

// function deleteTasks(tasksId) {
//   const newTasks = tasks.filter(function (task) {
//     return task.id !== tasksId;
//   });
//   tasks = newTasks;
//   checkList();
//   displayTasks();
//   notification("Task is deleted");
// }

// function markCompletedTask(tasksId) {
//   const tasks = tasks.filter(function (task) {
//     return task.id === tasksId;
//   });
//   if (tasks.length > 0) {
//     let currentTask = tasks[0];

//     currentTask.done = !currentTask.done;
//     notification("completed tasks is marked");
//     checkList();
//     return;
//   }
//   notification("completed tasks is not marked");
// }
// function addTaskToDOM(tasks) {
//   const li = document.createElement("li");

//   li.innerHTML = `
//             <li>
//               <input type="radio" id="${tasks.id}" name="done" ${tasks.done ? 'checked': ''}/>
//               <h4 for="${tasks.id}">${tasks.text}</h4>
//               <a href="#" data-id="${tasks.id}"><i class="fa-solid fa-trash"></i></a>
//             </li>
//   `;
//   tasksList.append(li);
// }

// function checkList() {
//   taskList.innerHTML = " ";
//   for (let i = 0; i < tasks.length; i++) {
//     addTaskToDOM(tasks[i]);
//   }
//   taskCounter.innerHTML = tasks.length;
// }

// function renderList(){}

// // for getting all types of notifications
// function notification(message) {
//   alert(message);
// }

let tasks = [];
const input = document.querySelector('input[type="text"]');
const add = document.querySelector("button");
const taskList = document.getElementById("taskList");
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
}

function markCompletedTask(tasksId) {
  const taskIndex = tasks.findIndex(function (task) {
    return task.id === tasksId;
  });
  if (taskIndex > -1) {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    taskList.className += " "+"linethrow"
    notification("marked as a completed task");
    checkList();
  } else {
    notification("Completed tasks is not marked");
  }
}

function addTaskToDOM(task) {
  const li = document.createElement("li");

  li.innerHTML = `

    
              <input type="checkbox" id="${task.id}" name="done" ${task.done ? 'checked': ''} onclick="markCompletedTask('${task.id}')"/>
              <label for="${task.id}">${task.text}</label>
              <a href="#" data-id="${task.id}" onclick="deleteTasks('${task.id}')"><i class="fa-solid fa-trash"></i></a>
       
  `;
  taskList.append(li);
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


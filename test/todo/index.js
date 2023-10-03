// A text box at the top to add a todo item to the list.
// Add button: when a user clicks on the button, add that todo item to the list.
// A delete button to delete the todo item completely from the list.
// A checkbox to check the item off the list. (checked item should stay in the list, with some differentiation from rest of the todo items)
// Total number of tasks in the list.
// Extra points for creativity (think about user accessibility, some animations and things like that)

let tasks = [];
const input = document.querySelector('input[type="text"]');
const add = document.querySelector("button");
const allTasks = document.getElementById("allTaskCount");
const done = document.getElementById("completedTask");
const deleteTask = document.querySelector("li a");
const check = document.querySelector('input[type="radio"]');

input.addEventListener("keyup", inputTasks);

function inputTasks(i) {
  // when user will click enter this code will take a input value
  if (i.key == "Enter") {
    const taskText = i.target.value;
    // if there is not any text then alert to user for inputing a task
    if (!taskText) {
      notification("Enter the task");
      return;
    }
    const tasks = {
      text: taskText,
      id: Date.now().toString(),
      done: false,
    };

    i.target.value = " ";
    addTask(tasks);

    console.log(taskText);
  }
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    notification("task is added in array");
    return;
  }
  notification("task is not added in array");
}

function deleteTasks(tasksId){
  const newTasks = tasks.filter(function(task){
    return task.id !== tasksId;
  });
  tasks = newTasks;
  displayTasks();
  notification('Task is deleted');
}

function markCompletedTask(tasksId){
  const tasks = tasks.filter(function(task){
    return task.id === tasksId;
  });
  if(tasks.length>0){
    let currentTask =tasks[0];

    currentTask.done = !currentTask.done;
    notification('completed tasks is marked');
    checkList();
    return;
    }
    notification('completed tasks is not marked');
}




// for getting all types of notifications
function notification(message) {
  alert(message);
}



// A text box at the top to add a todo item to the list.
// Add button: when a user clicks on the button, add that todo item to the list.
// A delete button to delete the todo item completely from the list.
// A checkbox to check the item off the list. (checked item should stay in the list, with some differentiation from rest of the todo items)
// Total number of tasks in the list.
// Extra points for creativity (think about user accessibility, some animations and things like that)

const tasks = [];
const input = document.querySelector('input[type="text"]');
const add = document.querySelector("button");
const allTasks = document.getElementById("allTaskCount");
const done = document.getElementById("completedTask");
const deleteTask = document.querySelector("li a");
const check = document.querySelector('input[type="radio"]');

// for taking inputs from users
function inputTask(e) {
  console.log(input.value);
  if (e.key === "enter") {
    const text = e.target.value;
    const task = {
      text,
      id: Date.now().toString(),
      done: false,
    };
    e.target.value = " ";
    addTasks(task);
  }
}

function addTasks(taskId) {
  const newTasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  tasks = newTasks;
}

// for deleting a tasks.
function deleteTasks() {}

// when user will click on the radio button the task will add in completed task list
function completedTasks() {}

// here We will take care of alltaskcount
function allTasksCount() {}

// here we will take care about completed tasks counts
function completedTasksCount() {}

//
function showNotification(text) {
  alert(text);
}
add.addEventListener("click", inputTask);

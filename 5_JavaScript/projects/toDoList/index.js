// variables
var addTaskBtn = document.getElementById("addTask");
var inputBox = document.getElementsByTagName("input");

addTaskBtn.addEventListener("click", addTask);

// Add Task
function addTask() {
  inputBox[0].classList.toggle("visible");
}

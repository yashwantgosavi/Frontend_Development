var button = document.getElementById("btn");
var section = document.getElementsByTagName("section");
// for toggle controller
button.addEventListener("click", function () {
  button.classList.toggle("right");
  section[0].classList.toggle("black");
});
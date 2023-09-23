// handle scroll event on window
// check that skills sections container os visible or not
// ensure that initial width of colored skill width from 0 to skill
// store skill level -> HTML with the help data attribute

var progessBars = document.querySelector(".skill-progess > div");
var skillsCounter = document.getElementById("skills");
var animationDone = false;

window.addEventListener("scroll", checkscroll);

function checkscroll() {
  // you have to check whether skill container is visible
  var coordinates = skillsCounter.getBoundingClientRect();
  if (!animationDone && coordinates.top < window.innerHeight) {
    animationDone = true;
    console.log("skills Section visible");
  }
}

function initialiseBars() {
  for (let bar of progessBars) {
    bar.style.width = 0 + "%";
  }
}
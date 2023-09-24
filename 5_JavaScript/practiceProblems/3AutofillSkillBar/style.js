var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    console.log(targetSection);
    var interval = setInterval(function () {
      var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
}

// ********** auto feal scroll bar *********
// handle scroll event on window
// check that skills sections container os visible or not
// ensure that initial width of colored skill width from 0 to skill
// store skill level -> HTML with the help data attribute

// first of all we target all the elements
var progressbars = document.querySelectorAll(".skill-progress > div");
var skillContainer = document.getElementById("skills-container");
var animationDone = false;
window.addEventListener("scroll", checkScroll);

function initialiseBars() {
  for (let bar of progressbars) {
    bar.style.width = 0 + "%";
  }
}
initialiseBars();

function fillbars() {
  for (let bar of progressbars) {
    let targetWidth = bar.getAttribute("data-bar-width");
    let currentWidth = 0;
    let interval = setInterval(function () {
      if (currentWidth > targetWidth) {
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + "%";
    }, 3);
  }
}
fillbars();

// in this function we are checking whether skills container is visible or not
function checkScroll() {
  // it will check the container height.
  var coordinates = skillContainer.getBoundingClientRect();
  if (!animationDone && coordinates.top < window.innerHeight) {
    console.log("skills section is visible");
    animationDone = true;
    fillbars();

  } else if (coordinates.top > window.innerHeight) {
    animationDone = false;
    initialiseBars();
  }
}
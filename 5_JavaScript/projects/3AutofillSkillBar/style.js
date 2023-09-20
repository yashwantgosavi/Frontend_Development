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

// Auto fill skill bar
/*
          - Handle scroll event on window
          - check that skills section container is visible or not
          - ensure that initial width of colored skill divs is zero -> initialised/ reset to 0 width value
          - Shoot animation on every skill --> increase skill width from 0 to skill level
          - store skill level --> HTML with the help data attribute
*/

var scrollCounter = document.querySelector('#scrollCounter span');

// for checking the scroll position in percentage
window.addEventListener("scroll", function() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const maxScroll = documentHeight - windowHeight;
  const scrollY = window.scrollY;

  const scrollPercentage = (scrollY / maxScroll) * 100;
  scrollCounter.innerText = Math.round(scrollPercentage) + "%";
});

const ball = document.getElementById("ball");
let values = 0;
const keysToCheck = ["a", "s", "d", "w"];
// Add a keydown event listener to the window
window.addEventListener("keydown", function (event) {
  // Check if the pressed key is in the array
  if (keysToCheck.includes(event.key)) {
    if (event.key === "a") {
      values--;
      ball.style.left = values + "%";
    } else if (event.key === "w") {
      values++;
      ball.style.top = values + "%";
    } else if (event.key === "d") {
      values--;
      ball.style.left = values + "%";
    } else if (event.key === "s") {
      values--;
      ball.style.top = values + "%";
    }
  }
});``
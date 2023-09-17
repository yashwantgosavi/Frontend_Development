// variables of calculator
let op1 = 0;
let op2 = null;
let operator = "";
let button = document.getElementsByClassName("button");

// variables
var toggle = document.getElementById("toggle");
var switchBtn = document.getElementById("switchBtn");
var section = document.getElementsByTagName("section");
var outputScreen = document.getElementById("outputScreen");

// darkLight toggle -----------------------------------
switchBtn.addEventListener("click", function () {
  switchBtn.classList.toggle("rightPosition");
  section[0].classList.toggle("lightMode");
});

// calculator ------------------------------------------
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    console.log(value);
    
    if (value == "backSpace") {
      // Handle the backspace functionality
      let currentText = outputScreen.textContent;
      outputScreen.textContent = currentText.slice(0, -1);
      return;
    }
    
    outputScreen.style.color = "white";

    if (
      value == "+" ||
      value == "-" ||
      value == "*" ||
      value == "/" ||
      value == "AC" ||
      value == "%"
    ) {
      op1 = parseFloat(outputScreen.textContent);
      operator = value;
      outputScreen.textContent = " ";
    } else if (value == "=") {
      op2 = parseFloat(outputScreen.textContent);

      let total = eval(op1 + operator + op2);
      outputScreen.textContent = total;
    } else {
      outputScreen.innerText += value;
    }
  });
}
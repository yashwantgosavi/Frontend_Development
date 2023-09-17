var box = document.getElementById("box");
let clickCounts = document.getElementById("click-count");

let count=0;
    box.addEventListener('click', function() {
        count++;
        console.log(count);
        clickCounts.innerText= count + " ";
    });
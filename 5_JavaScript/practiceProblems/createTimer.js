//  Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output.

function printNumbersWithDelay() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

printNumbersWithDelay();
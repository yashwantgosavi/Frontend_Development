/*===================== Timing Events =======================
function sayHello(){
console.log("Say Hello");
}
setTimeout(sayHello, 3000); it will execute the function one's time
setInterval(1000); it will execute the function repetively after defined time
clearInterval(); clearInterval will stop the timing events.


Practice : This code will decrease value everysecond by 1
    var value = 10;
    function decreaseValue() {
          console.log(value);
          value--;
    if (value < 0) {
    clearInterval(interval);
      }
    }

    var interval = setInterval(decreaseValue, 1000);

    
//=========== coundown timer
var count = 10;
function timer(){
if(count == 0){
console.log("Time up !!");
clearInterval(id);
return;
}
console.log(count);
count--;
}
var id = setInterval(timer, 1000);


================== Pass by value vs Pass by Refernces. =================


================== Deap copy vs shallow copy ====================
deap


*/






// =================== Problems ====================

/* Write a JavaScript program to:
1. Create a student object with three properties: name, age, and roll no.
2. Create an object address with two properties, City and state and add this object property to the student object.
3. Now delete the roll no property.
*/

var main = function () {
    // Use it to set the student and address objects
   // var student = {}, address={};
    function setStudent() {
      // Update this function to set the student object (Step 1)
        
       var student = {
            "name": "yashwant",
             "age": 24,
             "rollNo": 98,
        };

       var address ={
            "city" : "Nashik",
            "state" : "Maharashtra",
        };
        
    }
    function setAddressAndUpdateStudent() {
      // Update this function to set the address object and set the student object again (Step 2)
        student.address = address;
        
    }
    function deleteRollNumber() {
      // Update this function to remove 'roll no' property from the student object (Step 3)
        
      delete student.rollNo;
      
    }
    function getStudent() {
      return student;
    }
    function getAddress() {
      return student.address;
    }
    return {
      setStudent,
      setAddressAndUpdateStudent,
      deleteRollNumber,
      getStudent,
      getAddress
    };
  };
  


  var studentModule = main();
  studentModule.setAddressAndUpdateStudent();
  console.log(studentModule.getStudent()); // Output: { name: 'yashwant', age: 24, address: { city: 'Mumbai', state: 'Maharashtra' } }
  
  studentModule.deleteRollNumber();
  console.log(studentModule.getStudent()); // Output: { name: 'yashwant', age: 24, address: { city: 'Mumbai', state: 'Maharashtra' } }
  console.log(studentModule.getAddress());



//======= Problem No: 2 =================
/* Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output.
Expected Output
Hello Ninjas!
1
2
3
4
5
*/

function timer() {
    console.log("Hello ninjas!");
    for (let i = 0; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);

    }
}
timer();



// ============= Problem 3 ===============
/*
Implement a function propertyExists(obj, path) that takes two arguments - an object and a path (string). It returns ‘False’ if the property is null or it doesn’t exist for that object, otherwise it will return the value of the property for that object.
Note: Properties can have single character only. So, path can be a string with concatenation of many properties.
Sample Input :
1  {"a":{"b":"dadsa"}} ac
Expected Output :
false
Sample Input :
2
{"a":{"b":"dadsa"}} ac
{"a":{"b":"dadsa"}} ab
Expected Output :
false
dadsa
*/



//Write your function here
function propertyExists(obj, path) {
    let current = obj;
    for (let i = 0; i < path.length; i++) {
      const property = path[i];
      if (current.hasOwnProperty(property)) {
        current = current[property];
      } else {
        return false;
      }
    }
    return current || false;
  }

// Input and output has already been handled for you



process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
  let lines = chunk.toString().split(' ')
    let t = parseInt(lines[0]);
    for (let i=0;i<t;i++) {
      let obj = lines[(i*2)+1];
      let str = lines[(i*2)+2];
      let arr = []
      for(let c of str) {
          if(c === '\r' || c === '\n') continue
          arr.push(c)
      }
      let ans = propertyExists(JSON.parse(obj),arr)
      process.stdout.write(ans.toString()+'\n');
    }

    process.exit()
});

/** defination =  JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.


for creating empty objects we can write like this: var student = {};

var student={
    "name" : "abc",
    rollno: 23,
    marks: 90
};


*for creating new empty object: var obj = new object();

================ Square bracket notation ================
- if we want any object from the package we need to do like this
     var student={
     "name": "yashwant",
     rollno: 135,
     marks: 90,
      }

      student.marks
      student["marks"];

  - if we want to delete any property from object we need to use
      delete student.marks
  
  - if we want to know which keys are used in a object, we can write like this
      var keys = Object.keys(student); and
     var keys = getOwnPropertyNames(student);

=================== Nested objects ==================
var student = {
"name": "yashwant",
rollno:135,
marks: 90,
address:{
    city:"Nashik",
    pincode:422001,
        }
};

if we wan some value specificly then we can do like this
student.address.city; or
student.address[city]


object is key value pairs
================== Array and Objects ===================
Array in object:     
    
we can write array like this in object
var obj = {
"0":10,
"1":20,
"2":30,
"3":40
}
obj; 
if we want to add some value on some positio we can do this
    obj[2]="add text on 2nth postion";

*/
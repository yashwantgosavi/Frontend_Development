/*
- Promises is developed in ES6

*/

// we will write promise like this
var promise = new Promise((resolve, reject) => {
  // wait for 1sec
  setTimeout(() => {
    // Promise is resolved
    if (userLoggedIn) {
      resolve();
    } else {
      // Reject
      reject();
    }
  }, 1000);
});

setTimeout(() => {
  userLoggedIn = false;
}, 500);

promise
  .then(() => {
    console.log("user Logged in");
  })
  .catch(() => {
    console.log("User Not Logged In");
  });




// Passing Parameters



// chaining Process

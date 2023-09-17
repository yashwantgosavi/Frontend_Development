// Email varification
// Input an email
// length of the email >11
// after .only 2 or 3 characters allowed
// minimum 3 chachracters between @ and .

//first of all we need to take input from user
const email = prompt("Enter the email address");
//then we need to check the email length
const emailLen = email.length;
//after storing the length of email let's check last index.
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");

const lastIndex = emailLen - 1;

if (
  emailLen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex < 3
) {
  console.log("Invalid Email");
}else{
  console.log('valid email');
}





//Second Approichfunction main(email){
    let result;
    let atindex = email.indexOf("@");
    let dotindex = email.lastIndexOf(".");
    let len = email.length;
    if (atindex >= 3 && dotindex - atindex >= 4 && len - dotindex - 1 >= 2) {
            result = "Welcome " + email + " to our site";
    } else {
            result = "invalid email";
    }
    return result;
}


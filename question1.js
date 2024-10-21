const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

/*
Challenge Plan:
Create new function for a new password input.
Call this function if user's password input === forgot or input === reset.
If this new password === the old password,let them know access granted, but display they should not use it because it will glitch the system
Else if length.userInput < 5, let them know password is inadequate, and needs to be more than 5 characters
Else let them know the new password is set.
*/


//Plan:
//Ask user(s) for two inputs, one for setting the password, and one for enterring the password
//Use if statement, if password is === to user input, respond with access granted
//Else if input === forgot, display hint
//Else if input === reset, show let's reset your account
//Else, respond with access denied.

//determine a proper function name and parameter variable name
function PasswordFunction(setPassword, inputPassword){

  //write your code here
  if(inputPassword === setPassword){
    console.log("Access granted!");
  }
  else if(inputPassword === "forgot"){
    console.log("Hint: Your pet's name.");
  }
  else if(inputPassword === "reset"){
    console.log("Let's reset your account.");
  }
  else{
    console.log("Access denied!");
  }
  
}

//CHALLENGE FUNCTION
// function forgotPassword(){
//   readline.question("Please reset your password here: ", resetPassword => {
//   if(resetPassword === setPassword){
//     console.log("Access granted, but please reset your password as it will glitch the system.");
//   }
//   else if(length.resetPassword < 5){
//     console.log("Password is inadequate. Must be 5 or more characters.");
//   }
//   else{
//     console.log("Password reset. Access Granted!");
//   }
//   });
// }


function StartApp(){
  readline.question('Please set a password for your email account: ', setPassword => {
    readline.question('Please enter your password to login to your email: ', inputPassword => {

      //call your function here.
      PasswordFunction(setPassword, inputPassword);
      // readline.close();
      if(inputPassword !== "quit"){
        StartApp();
      } 
      // else if(inputPassword === "forgot"){
      //   forgotPassword();
      // }
      // else if(inputPassword === "reset"){
      //   forgotPassword();
      // }
      else {
        readline.close();
      }
    });
  });
}

StartApp();
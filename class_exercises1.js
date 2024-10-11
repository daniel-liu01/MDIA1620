const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/

//I'm going to set 4 variable for each age level
//I will ask user what their age is to determine if they are of drinking age
//I will compare the user's input to each variable to determine what to say to the user


let adult = 19
let child = 13
let old = 50
let senior = 70

function CheckDrinkingAge(age){
  if(age < 13){
    console.log('leave');
  }
  else if(age > 19 && age < 50){
    console.log('drink away');
  }
  else if(age > 50){
    console.log('You should look out for your health');
  }
  else if(age > 70){
    console.log('If you keep drinking, your life may be at risk');
  }
}

//determine a proper question to ask and the proper variable name for user input
readline.question('To determine if you are of drinking age, please enter your age.', age => {
  CheckDrinkingAge(Number(age));

  readline.close();
    // if (userage !== "exit"){
    //     CheckDrinkingAge();
    // } else{
    //     readline.close();
});

//comments from Bruno, if and else statement is not required after readline close.


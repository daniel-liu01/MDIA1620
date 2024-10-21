const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."


Plan:
Ask user(s) for two inputs, one for their name, the other for their score.
- Use if and else if statements to give responlse
- if >= 86, they get an A
- else if >= 72, <= 85, they get a B
- else if >= 60, < 72, they get a C
- else if >= 50, < 60, they get a D
- else if < 50, the failed.
- Make sure to use variables in console.log() so the student's names will show in the response

*/

// Original Function

// function gradeChecker(studentName, grade){
//   if(grade >= 86){
//     console.log("Excellent! " + studentName + " has an A");
//   }
//   else if(grade >= 72 && grade <= 85){
//     console.log("Great job! " + studentName + " has a B.");
//   }
//   else if(grade >= 60 && grade < 72){
//     console.log("Good effort! " + studentName + " has a C.");
//     }
//   else if(grade >= 50 && grade < 60){
//     console.log("Needs improvement. " + studentName + " has a D.");
//   }
//   else if(grade < 50){
//     console.log("Fail. " + studentName + " has a F.");
//   }
// }

//Challenge Plan
//Nest an if statement in each if/else if for each grade
//If within 2 pts of the next grade, let them know they are close to the next grade
//If within 2 pts of the previous grade, let them know they need to work hard so they do not fall down
//Else, just show what it would have previously shown

//determine a proper function name and parameter variable name

function gradeChecker(studentName, grade){
  if(grade >= 86){
    if(grade >= 86 && grade < 88){
      console.log("Work hard! " + studentName + " is almost falling to a B");
    }
    else{
    console.log("Excellent! " + studentName + " has an A");
    }
  }
  else if(grade >= 72 && grade <= 85){
    if(grade >= 84 && grade < 86){
      console.log("Almost there! " + studentName + " is close to an A.");
    }
    else if(grade >= 72 && grade < 74){
      console.log("Work hard! " + studentName + " is almost falling to a C.");
    }
    else{
    console.log("Great job! " + studentName + " has a B.");
    }
  }
  else if(grade >= 60 && grade < 72){
    if(grade >= 70 && grade<72){
      console.log("Almost there! " + studentName + " is close to an B.");
    }
    else if(grade >= 60 && grade < 62){
      console.log("Work hard! " + studentName + " is almost falling to a D.");
    }
    else{
    console.log("Good effort! " + studentName + " has a C.");
    }
  }
  else if(grade >= 50 && grade < 60){
    if(grade >= 58 && grade < 60){
      console.log("Almost there! " + studentName + " is close to an C.");
    }
    else if(grade >= 50 && grade < 52){
      console.log("Work hard! " + studentName + " is almost falling to a F.");
    }
    else{
    console.log("Needs improvement. " + studentName + " has a D.");
  }
}
  else if(grade < 50){
    if(grade >= 48 && grade < 50){
      console.log("Almost there! " + studentName + " is close to a D.");
  }
    else{
    console.log("Fail. " + studentName + " has a F.");
  }
}
  //write your code here
}

function StartApp(){
  readline.question('We are checking your grade, please enter your name: ', studentName => {
    readline.question('What did you score on the MDIA 1620 Midterm? ', grade => {

      //call your function here.
      gradeChecker(studentName, grade);
      // readline.close();
      if(grade !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();
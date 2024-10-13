const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

//determine a proper parameter variable name

// Plan:
// Get two users to participate
// User one makes up an answer between 1 to 25
// User two guesses a number between 1 to 25
// Compare user one's answer to user two's guess and repond accordingly

function GuessingGame(answer, guess) {
  if (guess === answer){
    console.log("You win!");
    return true;
  }
  else if (guess > answer){
    console.log("Your guess is too high!");
  }
  else if (guess < answer){
    console.log("Your guess is too low!");
  }
}

//determine a proper question to ask and the proper variable name for the answer
readline.question("This is a guessing game for you and one other person. Pick a number between 1 to 25.", (answerinput) => {

//comment from Reagan: make this input a constant with Number() 
const answer = Number(answerinput)
  
//make an infinite recall for guessing question
  function StartGame() {

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("Please pick a number between 1 to 25 for this guessing game.", (guessinput) => {
    
    //comment from Reagan: make this input a constant with Number() 
    const guess = Number(guessinput)  
      
    //call your function here
      GuessingGame(answer, guess);
      if (guessinput === "quit") {
        readline.close();
      }
      else if(guess === answer){
        readline.close();
      }
      else { 
        StartGame();
      } 
    });
  }

StartGame();
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

/*
Plan
- Ask user(s) for 4 inputs: Name, how much lunch money they have, lunch item from menu, and cost
- Compare how much lunch money they have to the cost 
- If lunch money >= cost, let them know they have purchased it
- Else if lunch money < cost, let them know they don't have enough money to purchase the item
- In each if/else if statement, make sure to input the variables in console.log, so the student name and item name will show

*/
// Original 
// function buyLunch(studentName, lunchMoney, lunchItem, cost){
// if(lunchMoney >= cost){ 
//   console.log(studentName + " purchased " + lunchItem + "!");
//   }
// else if(lunchMoney < cost){
//   console.log(studentName + " does not have sufficient funds to purchase " + lunchItem + ".");
// }
// }

//Challenge Plan
//Compare the difference of lunch money and item cost for each if/else statement
//If balance is < $5, let them know their balance is low
//If balance is === $0, let them know they should add more funds
//If balance is negative, let them know insufficient funds, and how much more they need.
//Else, they have purchased the item and let them know their balance.

//determine a proper function name and parameter variable name
function buyLunch(studentName, lunchMoney, lunchItem, cost){
 
//write your code here
  if(Number(lunchMoney - cost) < 5 && Number(lunchMoney - cost) > 0){
    console.log(studentName + " purchased " + lunchItem + "! Your balance is low. Reamining balance: $" + Number(lunchMoney-cost));
    }
  else if(Number(lunchMoney - cost) === 0){
    console.log(studentName + " purchased " + lunchItem + "! Balance depleted. Please add more funds.");
    }
  else if(Number(lunchMoney-cost) > 5){ 
    console.log(studentName + " purchased " + lunchItem + "! Remaining balance is: $" + Number(lunchMoney-cost));
    }
  else if(lunchMoney < cost){
    console.log(studentName + " does not have sufficient funds to purchase " + lunchItem + ". You are short $" + Number(cost-lunchMoney));
  }
}

function StartApp(){
  readline.question('What is your name? ', studentName => {
    readline.question('How much money do you have for lunch today? ', lunchMoney => {
      readline.question('What would you like for lunch today: Hot Dog | Hamburger | Chicken wrap ', lunchItem => {
        readline.question('Please read the price under the item name for me. ', cost => {

          //call your function here.
          buyLunch(studentName, lunchMoney, lunchItem, cost);
          // readline.close();
          if(cost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not

Plan:
Create functions for each command
- Add: Ａsk user for input and add to the users array
- Check: Use for loop to call out each name in the User list
- Ban: Ask user for input and move that name to the banlist
- Check banned: Use for loop to call out each name in the Banned list
- Challenge 1: Use if and else statement
      if name is in the banned array, console log a message saying user was banned already
- Challenge 2: Use settings.allowAdd, add if statement to the adduser function, 
  if true go through with the function. If false, console log message
*/


let users = ["Daniel", "David", "Matthew"];
let banned = [];

let settings = {
  addRegistry:true
}

function StartApp(){
  readline.question("What would you like to do? ", (_command) => {
    //add other commands here to add
    if(_command === "add"){
      AddUserToRegistry();
    }
    else if(_command === "check"){
      CheckRegistry();
    }
    else if(_command === "ban"){
      BanUser();
    }
    else if(_command === "blacklist"){
      CheckBanned();
    }
    else if(_command === "toggle"){
      //toggle the setting, using "!" <-- Changes to opposite setting
      settings.addRegistry = !settings.addRegistry;
      StartApp();
  }
  else if(_command !== "quit") {
    StartApp();
  }
  });
}

function AddUserToRegistry() {
  //user readline to prompt for the name of the user to be added
  if(settings.addRegistry === true){
    readline.question("What is the name? ", name=>{
      //Challenge check if user is banned
      if(banned.includes(name)){
        console.log("This user is on the blacklist already. They will not be allowed to join the registry");
        StartApp();
      }
      else{
      users.push(name)
      console.log(`${name} is now added to the directory!`)
      StartApp();
      }
    });
  }
  else{
    console.log("Permission denied, come back in 2138721392178 days.")
    StartApp();
  }

}

function CheckRegistry() {
  //loop through all the users and log them
  for(let i=0; i<users.length; i++){
    console.log(`User: ${users[i]}`)
  }
  StartApp();
}

function BanUser(){
  //use readline to prompt for the name of the user to be banned
  readline.question("Which user index do you want to ban? ", ban=>{
    const bannedUser = users.splice(ban, 1); //const will push the name instead of number
    banned.push(bannedUser);
    console.log(`${banned[bannedUser]} is now banned.`)
    StartApp();
  })
}

function CheckBanned(){
  //loop through all the banned users and log them
  for(let i=0; i<banned.length; i++){
    console.log(`Banned: ${banned[i]}`)
  }
  StartApp();
}

StartApp();

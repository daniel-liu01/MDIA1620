const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role

========================================================================================================================================================================================================

PLAN:
- Create function for adding users: Ask for input and add to the users array
- Creat function to read users array with for loop
- Create startapp function: Ask user for an input for what command they want to use
  - If and else if statements for toggling each command using settings.xyz = !settings.xyz

Challenge 1:
Create a function and use for loop to run each setting and turn each value to true

Challenge 2:
Create function asking users for a new role name, and the permissions they want for each setting
With all the inputs, push the new role and settings to the role container

for showpermissions, loop through the 
*/

let users = ["Adam", "Bob", "Carl"];

//CHALLENGE 2 ONLY
let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};

let settings = {
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:true,
    createChannels:true,
    editChannels:true
}

function createUsers(){
      //user readline to prompt for the name of the user to be added
      readline.question("What is the name of the user you would like to add? ", userName => {
        users.push(userName);
        console.log(`User "${userName}" has been added.`);
        StartApp();
      });
}

//Challenge 1
//Key represents each setting in the for loop
function toggleAllpermissions(){
  for (let key in settings){
    if (settings.hasOwnProperty(key)){
      settings[key] = true;
    }
  }
  StartApp();
}

//CHALLENGE 2 ONLINE
function assignRole(){
    //user readline to prompt for the new roles to be added to system
    readline.question("What role would you like to add? ", newRole => {
    if(role[newRole]) {
      console.log(`${role[newRole]}already exists!`);
    } else {
      role[newRole] = {
        darkMode: true,
        sensitivityAmount: false,
        editAccounts: true,
        deleteAccounts: false,
        createChannels: true,
        editChannels: false
    };
  }
    console.log(`${newRole} has been added to the roles list`);
  });
  StartApp();
}

function listUsers(){
    //user readline to list out users
    for(let i=0; i<users.length; i++){
      console.log(`The name is ${users[i]}`)
  }
  StartApp();
}

function assignPermissions(){
    //user readline to prompt for the admin to give list out added users and give individual permissions for each setting. 
    //This should give roles automatically based on whats assigned to the user based on conditions met.
    readline.question("Which user do you want to assign roles to? " , userNew =>{
      //Ask what role they want
      readline.question("What roles do you want to assign to this user? [moderator, coAdmin, or simple] ", userUpdates =>{
        if (role[userUpdates]){
          userNew.permissions = role[userUpdates];
          // role[userUpdates] = role[users];
          console.log(`User "${userNew}" has been given the "${userUpdates}" role.`);
        }
        StartApp();
      });
    });
}

function showPermissions(){
    // loop through all the users settings and roles based on their permissions
    for (let i =0; i <users.length; i++){
      console.log(`${users[i]} is assigned with ${users[i].role}`);
  }
     StartApp();
}

function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      
      //add other commands here to add
      if (_command === "add") {
        createUsers();
      }
      else if (_command === "read"){
        listUsers();
      }
      else if (_command === "dark"){
        settings.darkMode = !settings.darkMode;
        console.log("Dark Mode has been toggled.");
        StartApp();
      }
      else if (_command === "sensitivity"){
        settings.sensitivityAmount = !settings.sensitivityAmount;
        console.log("Sensitivity option has been toggled.");
        StartApp();
      }
      else if (_command === "edit"){
        settings.editAccounts = !settings.editAccounts;
        console.log("Account editing capability has been toggled.");
        StartApp();
      }
      else if (_command === "delete"){
        settings.deleteAccounts = !settings.deleteAccounts;
        console.log("Permission for deleting accounts has been toggled.");
        StartApp();
      }
      else if (_command === "create"){
        settings.createChannels = !settings.createChannels;
        console.log("Permission for creating channels has been toggled");
        StartApp();
      }
      else if (_command === "turn on all"){
        toggleAllpermissions();
        console.log("All setting permissions have been turned on.");
        // StartApp();
      }
      else if (_command === "new role"){
        assignRole();
      }
      else if (_command === "change user perms"){
        assignPermissions();
      }
      else if (_command === "check user perms"){
        showPermissions();
      }
      else if (_command === "quit"){
        StartApp();
      }
      else {
        readline.close();
      }
    });
  }

StartApp(); 

//Reviewed by Sohpia:
//Code works nicely, except for challenge 2, though it looks like you tried!!
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

// create function
var fight = function() {
    //Alert playerts that they are starting the round
window.alert("Welcome to Robot Gladiators!");

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

/* subtract the value pf 'playerAttack' from the value of 'enemyHealth and use that
result to update the value in the 'enemyHealth' variable */

/*Log a resulting message to the conole so we know that it worked. */

/* Subtract the value of 'enemyAttack from the value of 'playerHealth and use that result to update the value in the 'playersHealth' variable. */

/* Log a resulting message to the console so we know that it worked.  */

};

// execute function
fight();


































// // this creates a prompt for the robot's name
//     var playerName = window.prompt("What is your robot's name?");

// // what is this
// console.log(playerName);

// // what is this
// console.log("this logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10+10);
// // what is this?
// console.log("Our robot's name is" + playerName);

// // Note the lack of quotation marks around playerName
//     // window.alert(playerName);

// // this creates a function named "fight"
// function fight() {
//     window.alert("The fight has begun!");
//   }
  
//   // fight();

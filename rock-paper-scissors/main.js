//Rock, Paper, Scissors console game
//Version 0.1

//Get Player Choice
do {
    var playerChoice = prompt("Rock(1), Paper(2), or Scissors(3)?").toLowerCase();
    switch(playerChoice) {
      case 'rock':
        playerChoice = 1;
        break;
      case 'paper':
        playerChoice = 2;
        break;
      case 'scissors':
        playerChoice = 3;
        break;
      default:
        playerChoice = parseInt(playerChoice);
    }
} while(playerChoice !== 1 && playerChoice !== 2 && playerChoice !== 3);

//Get Computer Choice
var computerChoice = Math.floor(Math.random() * 3 + 1);

//Determine and display the Winner
var selection = ["Rock", "Paper", "Scissors"];
console.log("Player Choice: " + selection[playerChoice - 1] + "\nComputer Choice: " + selection[computerChoice - 1] + "\n\n");
switch(playerChoice) {
  case 1:
    switch(computerChoice) {
      case 1:
        console.log("The game resulted in a tie.");
        break;
      case 2:
        console.log("The computer won!");
        break;
      case 3:
        console.log("You won!");
        break;
    }
    break;
  case 2:
    switch(computerChoice) {
      case 1:
        console.log("You won!");
        break;
      case 2:
        console.log("The game resulted in a tie.");
        break;
      case 3:
        console.log("The computer won!");
        break;
    }
    break;
 case 3:
  switch(computerChoice) {
    case 1:
      console.log("The computer won!");
      break;
    case 2:
      console.log("You won!");
      break;
    case 3:
      console.log("The game resulted in a tie.");
      break;
  }
  break;
}

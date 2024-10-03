let humanSchore = 0;
let computerScore = 0;

function getComputerChoice() {
  let max = 3;
  let computerChoice = Math.floor(Math.random() * max);
  switch(computerChoice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default: 
      console.log("An error Occured!");
  }
    
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice (Rock, Papper, Scissors): ");
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  return humanChoice;
}


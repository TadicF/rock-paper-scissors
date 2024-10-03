let humanScore = 0;
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
  let humanChoice = prompt("Enter your choice (Rock, Paper, Scissors): ");
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if ((humanChoice == "Rock" && computerChoice == "Scissors")
   || (humanChoice == "Paper" && computerChoice == "Rock") 
   || (humanChoice == "Scissors" && computerChoice == "Paper")) 
   {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${computerChoice}`)
   }

  else if((computerChoice == "Rock" && humanChoice == "Scissors") 
      || (computerChoice == "Paper" && humanChoice == "Rock") 
      || (computerChoice == "Scissors" && humanChoice == "Paper")) 
  {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
  }
  else {
    console.log(`It's a draw!`);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



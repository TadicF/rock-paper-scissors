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
    return "player";
   }

  else if((computerChoice == "Rock" && humanChoice == "Scissors") 
      || (computerChoice == "Paper" && humanChoice == "Rock") 
      || (computerChoice == "Scissors" && humanChoice == "Paper")) 
  {
    return "computer";
  }
  else {
    return "tie";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  let result = playRound(humanSelection, computerSelection);
  
    if(result === "player") {
      humanScore++;
      console.log(`You won the round! ${humanSelection} beats ${computerSelection}`);
      console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
    
    else if(result === "computer") {
      computerScore++;
      console.log(`You lose the round! ${computerSelection} beats ${humanSelection}`);
      console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
    
    else if(result === "tie") {
      console.log(`It's a tie!`);
      console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
  }
  
  if(humanScore > computerScore) {
    console.log(`You won the game!`);
  }
  else if(computerScore > humanScore) {
    console.log(`You lose the game!`);
  }
  else {
    console.log(`It's a draw.`);
  }
  
}

playGame();
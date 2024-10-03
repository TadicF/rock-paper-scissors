function getComputerChoice(max) {
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


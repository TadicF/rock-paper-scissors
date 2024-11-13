let humanScore = 0;
let computerScore = 0;
let winner; // 0 if player win, and 1 if computer wins, 2 if it's draw

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelector(".buttons");
const score = document.querySelector("#score");
const playerOneScore = document.querySelector(".playerOneScore");
const playerTwoScore = document.querySelector(".playerTwoScore");
const results = document.querySelector("#results");
const displayResults = document.createElement("div");
displayResults.classList.add("displayResults");
results.appendChild(displayResults);
const displayWinner = document.createElement("div");
displayWinner.classList.add(".displayWinner");
results.appendChild(displayWinner);

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

buttons.addEventListener("click", (event) => {
  let targetButton = event.target;
  if(humanScore == 5 || computerScore == 5) {
    return false;
  }
  else {
    switch(targetButton.id) {
      case "rock": 
        playRound("Rock");
        break;
      case "paper":
        playRound("Paper");
        break;
      case "scissors":
        playRound("Scissors");
        break;
   }
  }
})

function playRound(humanSelection) { // store the results, and add a logic for final winner
  let humanChoice = humanSelection;
  let computerChoice = getComputerChoice();
  if ((humanChoice == "Rock" && computerChoice == "Scissors")
     || (humanChoice == "Paper" && computerChoice == "Rock") 
     || (humanChoice == "Scissors" && computerChoice == "Paper")) 
   {
    humanScore++;
    playerOneScore.textContent = `${humanScore}`;
    winner = 0;
   }
  else if((computerChoice == "Rock" && humanChoice == "Scissors") 
      || (computerChoice == "Paper" && humanChoice == "Rock") 
      || (computerChoice == "Scissors" && humanChoice == "Paper")) 
   {
    computerScore++;
    playerTwoScore.textContent = `${computerScore}`;
    winner = 1;
   }
  else {
    winner = 2;
  }

  displayRoundResult(winner, humanChoice, computerChoice);
  checkWinner(humanScore, computerScore);

}

function checkWinner(humanScore, computerScore) {
  if(humanScore === 5) {
    displayResults.textContent = ' ';
    displayWinner.textContent = 'You Won The Game!';
    playAgain();
  }
  else if(computerScore === 5) {
    displayResults.textContent = ' ';
    displayWinner.textContent = 'You Lost The Game!';
    playAgain();
  }
}

function displayRoundResult(winner, humanChoice, computerChoice) {
  if(winner === 0) {
    displayResults.textContent = `You won! You chose ${humanChoice} and the AI chose ${computerChoice}`;
  }
  else if(winner === 1) {
    displayResults.textContent = `You lost! You chose ${humanChoice} and the AI chose ${computerChoice}`;
  } 
  else if(winner === 2) {
    displayResults.textContent = `It's a draw! Choose again.`;
  }
}

function playAgain() {
  const playAgainBtn = document.createElement("button");
  playAgainBtn.classList.add("playAgainBtn");
  results.appendChild(playAgainBtn);
  playAgainBtn.textContent = "Play Again";

  playAgainBtn.addEventListener("click", () => {
   humanScore = 0;
   computerScore = 0;
   playerOneScore.textContent = `${humanScore}`;
   playerTwoScore.textContent = `${computerScore}`;
   displayResults.textContent = ` `;
   displayWinner.textContent = ` `;
   winner = ' ';
   playAgainBtn.remove();
 });
}

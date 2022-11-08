const handState = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return handState[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
  return prompt("Enter your choice (Rock, Paper or Scissors)").toLowerCase();
}

function playSingleRound(playerSelection, computerSelection) {
  switch (true) {
    case computerSelection === "rock" && playerSelection === "paper":
    case computerSelection === "paper" && playerSelection === "scissors":
    case computerSelection === "scissors" && playerSelection === "rock":
      return `Your choice is ${playerSelection}, computer\'s choice is ${computerSelection}. You Win!`;
    case computerSelection === "rock" && playerSelection === "scissors":
    case computerSelection === "paper" && playerSelection === "rock":
    case computerSelection === "scissors" && playerSelection === "paper":
      return `Your choice is ${playerSelection}, computer\'s choice is ${computerSelection}. You Lose!`;
    default:
      return `Your choice is ${playerSelection}, computer\'s choice is ${computerSelection}. Draw!`;
  }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerSelection();

console.log(playSingleRound(playerSelection, computerSelection));

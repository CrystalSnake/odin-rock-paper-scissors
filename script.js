const handState = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return handState[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
  return prompt("Enter your choice (Rock, Paper or Scissors)").toLowerCase();
}

function playSingleRound(playerSelection, computerSelection) {
  var computerSelection = getComputerChoice();
  var playerSelection = getPlayerSelection();
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. Draw!`
      );
    } else if (computerSelection === "paper") {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. You Lose!`
      );
    } else {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. You Win!`
      );
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. Draw!`
      );
    } else if (computerSelection === "scissors") {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. You Lose!`
      );
    } else {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. You Win!`
      );
    }
  } else {
    if (computerSelection === "scissors") {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. Draw!`
      );
    } else if (computerSelection === "rock") {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. You Lose!`
      );
    } else {
      console.log(
        `Your choice ${playerSelection}, computer's choice ${computerSelection}. You Win!`
      );
    }
  }
}

playSingleRound();

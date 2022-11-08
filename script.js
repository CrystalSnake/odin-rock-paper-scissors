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
      return [
        `Your choice is ${playerSelection}, computer\'s choice is ${computerSelection}. You Win!`,
        1,
      ];
    case computerSelection === "rock" && playerSelection === "scissors":
    case computerSelection === "paper" && playerSelection === "rock":
    case computerSelection === "scissors" && playerSelection === "paper":
      return [
        `Your choice is ${playerSelection}, computer\'s choice is ${computerSelection}. You Lose!`,
        -1,
      ];
    default:
      return [
        `Your choice is ${playerSelection}, computer\'s choice is ${computerSelection}. Draw!`,
        0,
      ];
  }
}

function game() {
  var playerScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerSelection();
    console.log(playSingleRound(playerSelection, computerSelection)[0]);
    playerScore += playSingleRound(playerSelection, computerSelection)[1];
  }
  if (playerScore === 0) {
    console.log("Draw!");
  } else if (playerScore > 0) {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
}

game();

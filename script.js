const handState = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return handState[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());

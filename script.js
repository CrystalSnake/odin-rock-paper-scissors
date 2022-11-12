let playerChoice;

const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
  playerChoice = 'rock';
});
rock.addEventListener('click', playSingleRound);

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
  playerChoice = 'paper';
});
paper.addEventListener('click', playSingleRound);

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
  playerChoice = 'scissors';
});
scissors.addEventListener('click', playSingleRound);

function getComputerChoice() {
  const handState = ['rock', 'paper', 'scissors'];
  let computerChoice = handState[Math.floor(Math.random() * 3)];
  return computerChoice;
}

const body = document.querySelector('body');
const results = document.createElement('div');

function playSingleRound() {
  switch (true) {
    case getComputerChoice() === 'rock' && playerChoice === 'paper':
    case getComputerChoice() === 'paper' && playerChoice === 'scissors':
    case getComputerChoice() === 'scissors' && playerChoice === 'rock':
      results.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${getComputerChoice()}. You Win!`;
      body.appendChild(results);
      return 1;
    case getComputerChoice() === 'rock' && playerChoice === 'scissors':
    case getComputerChoice() === 'paper' && playerChoice === 'rock':
    case getComputerChoice() === 'scissors' && playerChoice === 'paper':
      results.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${getComputerChoice()}. You Lose!`;
      body.appendChild(results);
      return -1;
    default:
      results.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${getComputerChoice()}. Draw!`;
      body.appendChild(results);
      return 0;
  }
}

let playerChoice;
let score = 0;
const handState = ['rock', 'paper', 'scissors'];
const maxCount = 3;

const results = document.querySelector('.results');
const roundResult = document.createElement('p');
results.appendChild(roundResult);
const scoreMessage = document.createElement('p');
results.appendChild(scoreMessage);
const gameResult = document.createElement('p');
results.appendChild(gameResult);

function getComputerChoice() {
  return handState[Math.floor(Math.random() * 3)];
}

function playSingleRound() {
  let computerChoice = getComputerChoice();

  const outcomes = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (playerChoice === computerChoice) {
    roundResult.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${computerChoice}. Draw!`;
  } else if (outcomes[playerChoice] === computerChoice) {
    roundResult.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${computerChoice}. You Win!`;
    score += 1;
  } else {
    roundResult.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${computerChoice}. You Lose!`;
    score -= 1;
  }
  scoreMessage.textContent = `Your score: ${score}`;
}

function checkGameResult() {
  if (score > maxCount - 1) {
    gameResult.textContent = 'You win game!';
    score = 0;
  } else if (score < -maxCount - 1) {
    gameResult.textContent = 'You lose game!';
    score = 0;
  }
}

handState.map((choice) => {
  const element = document.getElementById(choice);
  element.addEventListener('click', () => {
    playerChoice = choice;
    playSingleRound();
    checkGameResult();
  });
});

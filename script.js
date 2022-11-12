let playerChoice;
let score = 0;

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
body.appendChild(results);
const roundResult = document.createElement('p');
const scoreMessage = document.createElement('p');
const gameResult = document.createElement('p');

function playSingleRound() {
  let computerChoice = getComputerChoice();
  switch (true) {
    case computerChoice === 'rock' && playerChoice === 'paper':
    case computerChoice === 'paper' && playerChoice === 'scissors':
    case computerChoice === 'scissors' && playerChoice === 'rock':
      roundResult.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${computerChoice}. You Win!`;
      results.appendChild(roundResult);
      score += 1;
      scoreMessage.textContent = `Your score: ${score}`;
      results.appendChild(scoreMessage);
      break;
    case computerChoice === 'rock' && playerChoice === 'scissors':
    case computerChoice === 'paper' && playerChoice === 'rock':
    case computerChoice === 'scissors' && playerChoice === 'paper':
      roundResult.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${computerChoice}. You Lose!`;
      results.appendChild(roundResult);
      score -= 1;
      scoreMessage.textContent = `Your score: ${score}`;
      results.appendChild(scoreMessage);
      break;
    default:
      roundResult.textContent = `Your choice is ${playerChoice}, computer\'s choice is ${computerChoice}. Draw!`;
      results.appendChild(roundResult);
      scoreMessage.textContent = `Your score: ${score}`;
      results.appendChild(scoreMessage);
      break;
  }

  if (score > 4) {
    gameResult.textContent = 'You win game!';
    results.appendChild(gameResult);
    score = 0;
  } else if (score < -4) {
    gameResult.textContent = 'You lose game!';
    results.appendChild(gameResult);
    score = 0;
  }
}

let playerChoice: string;
let score: number = 0;
const handState: string[] = ['rock', 'paper', 'scissors'];
const maxCount: number = 3;

const results: HTMLElement | null = document.querySelector('.results');
const roundResult: HTMLParagraphElement = document.createElement('p');
const scoreMessage: HTMLParagraphElement = document.createElement('p');
const gameResult: HTMLParagraphElement = document.createElement('p');
if (results) {
  results.appendChild(roundResult);
  results.appendChild(scoreMessage);
  results.appendChild(gameResult);
}

function getComputerChoice(): string {
  return handState[Math.floor(Math.random() * 3)];
}

function playSingleRound(): void {
  let computerChoice: string = getComputerChoice();

  const outcomes: Record<string, string> = {
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

function checkGameResult(): void {
  if (score > maxCount - 1) {
    gameResult.textContent = 'You win game!';
    score = 0;
  } else if (score < -(maxCount - 1)) {
    gameResult.textContent = 'You lose game!';
    score = 0;
  }
}

handState.map((choice: string) => {
  const element: HTMLElement | null = document.getElementById(choice);
  if (element) {
    element.addEventListener('click', () => {
      playerChoice = choice;
      playSingleRound();
      checkGameResult();
    });
  }
});

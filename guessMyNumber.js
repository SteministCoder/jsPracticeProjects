const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const scoreInnerText = document.querySelector(".score");
const computerInputInnerText = document.querySelector(".number");
const highScoreInnerText = document.querySelector(".highscore");
let isError = false;
let computerInput = 0;
let score = 20;
let highScore = 0;

function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function isInvalidInput(str) {
  const num = parseInt(str);
  return isNaN(num) || num < 1 || num > 20;
}

function checkGuess() {
  const userInput = parseInt(document.querySelector(".guess").value);
  computerInput = randomNumber();
  if (isInvalidInput(userInput)) {
    // Handle invalid input
    return;
  } else {
    computerInputInnerText.innerText = `${computerInput}`;
    if (userInput === computerInput) {
      score += 1;
      scoreInnerText.innerText = score;
    }
    if (score > highScore && score > 20) {
      highScore = score;
      highScoreInnerText.innerText = highScore;
    }
  }
}

function again() {
  score = 20;
  scoreInnerText.innerText = score;
  highScore = 0;
  highScoreInnerText.innerText = highScore;
}
checkButton.addEventListener("click", checkGuess);
againButton.addEventListener("click", again);

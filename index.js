"use strict";

const gameData = {
  homeScore: 0,
  guestScore: 0,
  defaultRemainingTime: 10,
  timerInterval: 1000,
  remainingTime: 10,
  timerId: -1,
  isGameEnd: false,
};
Object.preventExtensions(gameData);

const buttonIdScoreMap = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
]);

const homeScoreElement = document.getElementById("home-score");
const guestScoreElement = document.getElementById("guest-score");
const remainingTimeElement = document.getElementById("remaining-time");

// buttons
const newGameBtn = document.getElementById("new-game-btn");
const endGameBtn = document.getElementById("end-game-btn");

// model
const gameOverModelContainer = document.getElementById(
  "game-over-model-container"
);
const winnerSpan = document.getElementById("winner-span");

const scoreButtons = document.querySelectorAll("button[id*='-score-btn-']");

scoreButtons.forEach((button) => {
  const idPartArray = button.id.split("-");
  const toAddScore = buttonIdScoreMap.get(idPartArray[idPartArray.length - 1]);
  const toAddPlayer = idPartArray[0];
  button.addEventListener("click", () => {
    if (toAddPlayer === "home") gameData.homeScore += toAddScore;
    else gameData.guestScore += toAddScore;
    render();
  });
});

let checkGameEndTimer = setInterval(showGameOverModel, 1000);

function setWinnerText() {
  const winner =
    gameData.homeScore > gameData.guestScore
      ? "HOME"
      : gameData.homeScore < gameData.guestScore
      ? "GUEST"
      : "Everyone";

  winnerSpan.textContent = winner;
}

function showGameOverModel() {
  if (gameData.isGameEnd) clearInterval(checkGameEndTimer);
  else {
    if (gameData.remainingTime === 0) {
      gameOverModelContainer.style.top = "0px";
      gameOverModelContainer.style.left = "0px";
      setWinnerText();
      clearInterval(checkGameEndTimer);
    }
  }
}

const newTimer = resetTimer();

function resetTimer() {
  gameData.timerId = setInterval(countDown, gameData.timerInterval);
  return () => {
    clearInterval(gameData.timerId);
    gameData.timerId = setInterval(countDown, gameData.timerInterval);
    clearInterval(checkGameEndTimer);
    checkGameEndTimer = setInterval(showGameOverModel, 1000);
  };
}

function countDown() {
  if (gameData.remainingTime <= 0) clearInterval(gameData.timerId);
  else gameData.remainingTime -= 1;
  render();
}

function resetGame(isEnd) {
  gameData.homeScore = 0;
  gameData.guestScore = 0;
  if (isEnd) {
    gameData.remainingTime = 0;
    gameData.isGameEnd = true;
    clearInterval(gameData.timerId);
  } else {
    gameData.remainingTime = gameData.defaultRemainingTime;
    gameData.isGameEnd = false;
    newTimer();
  }
  render();
}
gameOverModelContainer.addEventListener("click", () => {
  gameOverModelContainer.style.top = "-9999px";
  gameOverModelContainer.style.left = "-9999px";
});

newGameBtn.addEventListener("click", () => {
  resetGame(false);
});

endGameBtn.addEventListener("click", () => {
  resetGame(true);
});

function render() {
  homeScoreElement.textContent = gameData.homeScore;
  guestScoreElement.textContent = gameData.guestScore;
  remainingTimeElement.textContent = gameData.remainingTime;
}

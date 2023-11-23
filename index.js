"use strict";

import { PLAYER_NAME } from "./constants.js";
import { CSS_LAYOUT_VALUE } from "./constants.js";
import { buttonIdScoreMap } from "./constants.js";

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
      ? PLAYER_NAME.HOME
      : gameData.homeScore < gameData.guestScore
      ? PLAYER_NAME.GUEST
      : PLAYER_NAME.EVERYONE;

  winnerSpan.textContent = winner;
}

function showGameOverModel() {
  if (gameData.isGameEnd) clearInterval(checkGameEndTimer);
  else {
    if (gameData.remainingTime === 0) {
      gameOverModelContainer.style.top = CSS_LAYOUT_VALUE.DEFAULT;
      gameOverModelContainer.style.left = CSS_LAYOUT_VALUE.DEFAULT;
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
    checkGameEndTimer = setInterval(showGameOverModel, gameData.timerInterval);
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
  gameOverModelContainer.style.top = CSS_LAYOUT_VALUE.OUT_OF_SCREEN;
  gameOverModelContainer.style.left = CSS_LAYOUT_VALUE.OUT_OF_SCREEN;
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

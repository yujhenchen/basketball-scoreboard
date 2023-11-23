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
  hasShownGameOverModel: false,
  gameTimerID: -1,
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

gameOverModelContainer.addEventListener("click", () => {
  gameOverModelContainer.style.top = CSS_LAYOUT_VALUE.OUT_OF_SCREEN;
  gameOverModelContainer.style.left = CSS_LAYOUT_VALUE.OUT_OF_SCREEN;
});

newGameBtn.addEventListener("click", () => {
  newGame();
  render();
});

endGameBtn.addEventListener("click", () => {
  endGame();
  render();
});

function resetGameTimer() {
  gameData.gameTimerID = setInterval(playGame, gameData.timerInterval);
  return (isGameEnded = true) => {
    clearInterval(gameData.gameTimerID);
    if (!isGameEnded) {
      gameData.gameTimerID = setInterval(playGame, gameData.timerInterval);
    }
  };
}

const endGameTimer = resetGameTimer();

function playGame() {
  gameData.remainingTime -= 1;
  if (gameData.remainingTime === 0) {
    if (!gameData.hasShownGameOverModel) {
      showGameOverModel();
      gameData.hasShownGameOverModel = true;
    }
    endGameTimer();
  }
  render();
}

function newGame() {
  cleanScores();
  gameData.remainingTime = gameData.defaultRemainingTime;
  endGameTimer(false);
  gameData.hasShownGameOverModel = false;
}

function endGame() {
  cleanScores();
  gameData.remainingTime = 0;
  endGameTimer();
}

function cleanScores() {
  gameData.homeScore = 0;
  gameData.guestScore = 0;
}

function getWinnerText() {
  return gameData.homeScore > gameData.guestScore
    ? PLAYER_NAME.HOME
    : gameData.homeScore < gameData.guestScore
    ? PLAYER_NAME.GUEST
    : PLAYER_NAME.EVERYONE;
}

function showGameOverModel() {
  gameOverModelContainer.style.top = CSS_LAYOUT_VALUE.DEFAULT;
  gameOverModelContainer.style.left = CSS_LAYOUT_VALUE.DEFAULT;
  winnerSpan.textContent = getWinnerText();
}

function render() {
  homeScoreElement.textContent = gameData.homeScore;
  guestScoreElement.textContent = gameData.guestScore;
  remainingTimeElement.textContent = gameData.remainingTime;
}
render();

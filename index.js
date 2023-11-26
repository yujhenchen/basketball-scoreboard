"use strict";

import { PLAYER_NAME } from "./constants.js";
import { CSS_LAYOUT_VALUE } from "./constants.js";
import { buttonIdScoreMap } from "./constants.js";
import gameData from "./store.js";

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
    if (toAddPlayer === PLAYER_NAME.HOME.toLowerCase())
      gameData.increaseHomeScore(toAddScore);
    else gameData.increaseGuestScore(toAddScore);
    render();
  });
});

gameOverModelContainer.addEventListener("click", () => {
  gameOverModelContainer.style.top = CSS_LAYOUT_VALUE.OUT_OF_SCREEN;
  gameOverModelContainer.style.left = CSS_LAYOUT_VALUE.OUT_OF_SCREEN;
  render();
});

newGameBtn.addEventListener("click", () => {
  newGame();
  render();
});

endGameBtn.addEventListener("click", () => {
  endGame();
  render();
});

const endGameTimer = gameData.resetGameTimer(playGame);

function playGame() {
  gameData.decreaseRemainingTime();
  if (gameData.getRemainingTime() === 0) {
    if (!gameData.getHasShownGameOverModel()) {
      showGameOverModel();
      gameData.setHasShownGameOverModel(true);
    }
    endGameTimer();
  }
  render();
}

function newGame() {
  gameData.resetScores();
  gameData.resetRemainingTime();
  endGameTimer(false);
  gameData.setHasShownGameOverModel(false);
}

function endGame() {
  gameData.resetScores();
  gameData.clearRemainingTime();
  endGameTimer();
}

function getWinnerText() {
  return gameData.getScore().home > gameData.getScore().guest
    ? PLAYER_NAME.HOME
    : gameData.getScore().home < gameData.getScore().guest
    ? PLAYER_NAME.GUEST
    : PLAYER_NAME.EVERYONE;
}

function showGameOverModel() {
  gameOverModelContainer.style.top = CSS_LAYOUT_VALUE.DEFAULT;
  gameOverModelContainer.style.left = CSS_LAYOUT_VALUE.DEFAULT;
  winnerSpan.textContent = getWinnerText();
}

function render() {
  homeScoreElement.textContent = gameData.getScore().home;
  guestScoreElement.textContent = gameData.getScore().guest;
  remainingTimeElement.textContent = gameData.getRemainingTime();
}

render();

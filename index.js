"use strict";

import { PLAYER_NAME } from "./constants.js";
import { CSS_LAYOUT_VALUE } from "./constants.js";
import { buttonIdScoreMap } from "./constants.js";
import gameData from "./store.js";

const homeScore = document.querySelector("#home-score");
const guestScore = document.querySelector("#guest-score");
const remainingTime = document.querySelector("#remaining-time");
const newGameButton = document.querySelector("#new-game-btn");
const endGameButton = document.querySelector("#end-game-btn");
const gameOverModel = document.querySelector("#game-over-model-container");
const winnerText = document.querySelector("#winner-span");
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

gameOverModel.addEventListener("click", () => {
  gameOverModel.style.top = gameOverModel.style.left =
    CSS_LAYOUT_VALUE.OUT_OF_SCREEN;
  render();
});

newGameButton.addEventListener("click", () => {
  newGame();
  render();
});

endGameButton.addEventListener("click", () => {
  endGame();
  render();
});

const endGameTimer = gameData.resetGameTimer(playGame);

function playGame() {
  gameData.decreaseRemainingTime();
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
  gameData.resetScores();
  gameData.resetRemainingTime();
  endGameTimer(false);
  gameData.hasShownGameOverModel = false;
}

function endGame() {
  gameData.resetScores();
  gameData.clearRemainingTime();
  endGameTimer();
}

function getWinnerText() {
  return gameData.scores.home > gameData.scores.guest
    ? PLAYER_NAME.HOME
    : gameData.scores.home < gameData.scores.guest
    ? PLAYER_NAME.GUEST
    : PLAYER_NAME.EVERYONE;
}

function showGameOverModel() {
  gameOverModel.style.top = gameOverModel.style.left = CSS_LAYOUT_VALUE.DEFAULT;
}

function render() {
  homeScore.textContent = gameData.scores.home;
  guestScore.textContent = gameData.scores.guest;
  remainingTime.textContent = gameData.remainingTime;
  winnerText.textContent = getWinnerText();
}

render();

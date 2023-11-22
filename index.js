const homeScoreElement = document.getElementById("home-score");
const guestScoreElement = document.getElementById("guest-score");
const remainingTimeElement = document.getElementById("remaining-time");

// buttons
const newGameBtn = document.getElementById("new-game-btn");
const endGameBtn = document.getElementById("end-game-btn");

const homeAddOneBtn = document.getElementById("home-add-one-btn");
const homeAddTwoBtn = document.getElementById("home-add-two-btn");
const homeAddThreeBtn = document.getElementById("home-add-three-btn");

const guestAddOneBtn = document.getElementById("guest-add-one-btn");
const guestAddTwoBtn = document.getElementById("guest-add-two-btn");
const guestAddThreeBtn = document.getElementById("guest-add-three-btn");

// model
const gameOverModelContainer = document.getElementById(
  "game-over-model-container"
);

let homeScore = 0;
let guestScore = 0;
const defaultRemainingTime = 10;
const timerInterval = 1000;
let remainingTime = defaultRemainingTime;
let timerId;
let isGameEnd = false;

let checkGameEndTimer = setInterval(showGameOverModel, 1000);

function showGameOverModel() {
  if (isGameEnd) clearInterval(checkGameEndTimer);
  else {
    if (remainingTime === 0) {
      gameOverModelContainer.style.display = "flex";
      clearInterval(checkGameEndTimer);
    }
  }
}

const newTimer = resetTimer();

function resetTimer() {
  timerId = setInterval(countDown, timerInterval);
  return () => {
    clearInterval(timerId);
    timerId = setInterval(countDown, timerInterval);
    clearInterval(checkGameEndTimer);
    checkGameEndTimer = setInterval(showGameOverModel, 1000);
  };
}

function countDown() {
  if (remainingTime <= 0) clearInterval(timerId);
  else remainingTime -= 1;
  render();
}

function resetGame(isEnd) {
  homeScore = 0;
  guestScore = 0;
  if (isEnd) {
    remainingTime = 0;
    isGameEnd = true;
    clearInterval(timerId);
  } else {
    remainingTime = defaultRemainingTime;
    isGameEnd = false;
    newTimer();
  }
  render();
}
gameOverModelContainer.addEventListener("click", () => {
  gameOverModelContainer.style.display = "none";
});

newGameBtn.addEventListener("click", () => {
  resetGame(false);
});

endGameBtn.addEventListener("click", () => {
  resetGame(true);
});

// home
homeAddOneBtn.addEventListener("click", () => {
  homeScore += 1;
  render();
});

homeAddTwoBtn.addEventListener("click", () => {
  homeScore += 2;
  render();
});

homeAddThreeBtn.addEventListener("click", () => {
  homeScore += 3;
  render();
});

// guest
guestAddOneBtn.addEventListener("click", () => {
  guestScore += 1;
  render();
});

guestAddTwoBtn.addEventListener("click", () => {
  guestScore += 2;
  render();
});

guestAddThreeBtn.addEventListener("click", () => {
  guestScore += 3;
  render();
});

function render() {
  homeScoreElement.textContent = homeScore;
  guestScoreElement.textContent = guestScore;
  remainingTimeElement.textContent = remainingTime;
}

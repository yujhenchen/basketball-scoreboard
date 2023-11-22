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

let homeScore = 0;
let guestScore = 0;
const defaultRemainingTime = 60;
const timerInterval = 1000;
let remainingTime = defaultRemainingTime;
let timerId;

const newTimer = resetTimer();

function resetTimer() {
  timerId = setInterval(countDown, timerInterval);
  return () => {
    clearInterval(timerId);
    timerId = setInterval(countDown, timerInterval);
  };
}

function countDown() {
  remainingTime -= 1;
  render();
}

function resetGame(isEnd) {
  homeScore = 0;
  guestScore = 0;
  if (isEnd) {
    remainingTime = 0;
    clearInterval(timerId);
  } else {
    remainingTime = defaultRemainingTime;
    newTimer();
  }
  render();
}

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

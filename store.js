"use strict";

let instance = null;

class GameData {
  #score;
  #defaultRemainingTime;
  #timerInterval;
  #remainingTime;
  #hasShownGameOverModel;
  #gameTimerID;

  constructor() {
    if (instance) {
      console.log("GameData object exists");
      return;
    }
    this.#score = {
      home: 0,
      guest: 0,
    };
    this.#defaultRemainingTime = 10;
    this.#timerInterval = 1000;
    this.#remainingTime = 10;
    this.#hasShownGameOverModel = false;
    this.#gameTimerID = -1;

    instance = this;
  }

  getScore = () => this.#score;

  resetScores = () => {
    this.#score.home = 0;
    this.#score.guest = 0;
  };

  increaseHomeScore = (score) => (this.#score.home += score);

  increaseGuestScore = (score) => (this.#score.guest += score);

  getDefaultRemainingTime = () => this.#defaultRemainingTime;

  getTimerInterval = () => this.#timerInterval;

  setRemainingTime = (time) => (this.#remainingTime = time);

  getRemainingTime = () => this.#remainingTime;

  resetRemainingTime = () => (this.#remainingTime = this.#defaultRemainingTime);

  clearRemainingTime = () => (this.#remainingTime = 0);

  setHasShownGameOverModel = (shown) => (this.#hasShownGameOverModel = shown);

  getHasShownGameOverModel = () => this.#hasShownGameOverModel;

  decreaseRemainingTime = () => (this.#remainingTime -= 1);

  getGameTimerID = () => this.#gameTimerID;

  resetGameTimer(func) {
    this.#gameTimerID = setInterval(func, this.#timerInterval);
    return (isGameEnded = true) => {
      clearInterval(this.#gameTimerID);
      //   console.log(`timer: ${this.#gameTimerID} is cleared`);
      if (!isGameEnded) {
        this.#gameTimerID = setInterval(func, this.#timerInterval);
        // console.log(`timer: ${this.#gameTimerID} is created`);
      }
    };
  }
}

const gameData = Object.freeze(new GameData());
export default gameData;

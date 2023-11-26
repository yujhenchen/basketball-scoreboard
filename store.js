"use strict";

let instance = null;

class GameData {
  #_scores;
  #_defaultRemainingTime;
  #_timerInterval;
  #_remainingTime;
  #_hasShownGameOverModel;
  #_gameTimerID;

  constructor() {
    if (instance) {
      console.log("GameData object exists");
      return;
    }
    this.#_scores = {
      home: 0,
      guest: 0,
    };
    this.#_defaultRemainingTime = 10;
    this.#_timerInterval = 1000;
    this.#_remainingTime = 10;
    this.#_hasShownGameOverModel = false;
    this.#_gameTimerID = -1;

    instance = this;
  }

  get scores() {
    return this.#_scores;
  }

  get timerInterval() {
    return this.#_timerInterval;
  }

  set remainingTime(time) {
    this.#_remainingTime = time;
  }

  get remainingTime() {
    return this.#_remainingTime;
  }

  set hasShownGameOverModel(shown) {
    this.#_hasShownGameOverModel = shown;
  }

  get hasShownGameOverModel() {
    return this.#_hasShownGameOverModel;
  }

  resetScores = () => {
    this.#_scores.home = 0;
    this.#_scores.guest = 0;
  };

  increaseHomeScore = (score) => (this.#_scores.home += score);

  increaseGuestScore = (score) => (this.#_scores.guest += score);

  resetRemainingTime = () =>
    (this.#_remainingTime = this.#_defaultRemainingTime);

  clearRemainingTime = () => (this.#_remainingTime = 0);

  decreaseRemainingTime = () => (this.#_remainingTime -= 1);

  resetGameTimer(func) {
    this.#_gameTimerID = setInterval(func, this.#_timerInterval);
    return (isGameEnded = true) => {
      clearInterval(this.#_gameTimerID);
      //   console.log(`timer: ${this.#_gameTimerID} is cleared`);
      if (!isGameEnded) {
        this.#_gameTimerID = setInterval(func, this.#_timerInterval);
        // console.log(`timer: ${this.#_gameTimerID} is created`);
      }
    };
  }
}

const gameData = Object.freeze(new GameData());
export default gameData;

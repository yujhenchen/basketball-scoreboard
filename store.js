"use strict";

let instance = null;

class GameData {
  #_scores;
  #_defaultRemainingTime;
  #_timerInterval;
  #_remainingTime;
  #_hasShownGameOverModel;

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
    let timer = setInterval(func, this.#_timerInterval);
    return (isGameEnded = true) => {
      clearInterval(timer);
      if (!isGameEnded) {
        timer = setInterval(func, this.#_timerInterval);
      }
    };
  }
}

const gameData = Object.freeze(new GameData());
export default gameData;

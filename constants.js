"use strict";

export const PLAYER_NAME = Object.freeze({
  HOME: "HOME",
  GUEST: "GUEST",
  EVERYONE: "EVERYONE",
});

export const CSS_LAYOUT_VALUE = Object.freeze({
  OUT_OF_SCREEN: "-9999px",
  DEFAULT: "0px",
});

export const buttonIdScoreMap = Object.freeze(
  new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
  ])
);

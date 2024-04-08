import { useState } from "react";
import { SCORE } from "../js/game";
import { cardList } from "../js/cards";

export default function SecondMenu({ score, setMenu, setDifficulty }) {
  const actualScore = () => {
    let count = 0;
    cardList.forEach((obj) => {
      if (obj.wasClicked === true) count += 1;
    });
  };

  const handleResetBtn = () => {
    setMenu(true);
    setDifficulty(null);
    updateScore(0);
    cardList.forEach((obj) => {
      if (obj.wasClicked === true) obj.wasClicked = false;
    });
  };

  return (
    <div id="second-menu">
      <div id="score-sct">Your score: {score}</div>
      <button id="restart-game-btn" onClick={handleResetBtn}>
        Reset
      </button>
    </div>
  );
}

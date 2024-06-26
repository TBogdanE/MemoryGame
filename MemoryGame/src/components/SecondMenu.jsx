import { useState } from "react";
import { cardList } from "../js/cards";

export default function SecondMenu({
  score,
  updateScore,
  setMenu,
  setDifficulty,
}) {
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

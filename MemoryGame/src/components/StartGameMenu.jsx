import { useState } from "react";
import GameBoard from "./GameBoard";
import SecondMenu from "./SecondMenu";
import { SCORE } from "../js/game";

export default function StartGameMenu() {
  const [showMenu, setShowMenu] = useState(true);
  const [gameDifficulty, setGameDifficulty] = useState(null);

  const [score, updateScore] = useState(SCORE);

  const startGame = (difficulty) => {
    setGameDifficulty(difficulty);
    setShowMenu(false);
  };

  return (
    <>
      {showMenu && (
        <div id="start-game-menu">
          <div id="start-game-title">Start Game</div>
          <div id="start-game-difficulty-menu">
            <button
              className="start-game-difficulty"
              onClick={() => startGame(4)}
            >
              Easy
            </button>
            <button
              className="start-game-difficulty"
              onClick={() => startGame(6)}
            >
              Medium
            </button>
            <button
              className="start-game-difficulty"
              onClick={() => startGame(8)}
            >
              Hard
            </button>
          </div>
        </div>
      )}
      {gameDifficulty && (
        <>
          <GameBoard
            difficulty={gameDifficulty}
            score={score}
            updateScore={updateScore}
            setMenu={setShowMenu}
            setDifficulty={setGameDifficulty}
          />
          <SecondMenu
            score={score}
            setMenu={setShowMenu}
            setDifficulty={setGameDifficulty}
          />
        </>
      )}
    </>
  );
}

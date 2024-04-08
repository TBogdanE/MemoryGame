import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import SecondMenu from "./SecondMenu";
import WinMenu from "./WinMenu";
import DifficultyStartMenu from "./SelectDifficultyMenu";

export default function StartGameMenu() {
  const [showMenu, setShowMenu] = useState(true);
  const [gameDifficulty, setGameDifficulty] = useState(null);
  const [score, updateScore] = useState(0);
  const [isWin, setWin] = useState(false);

  useEffect(() => {
    if (score === gameDifficulty) {
      setWin(true);
      setGameDifficulty(null);
      setTimeout(() => {
        setWin(false);
        setShowMenu(true);
      }, 4000);
    }
  }, [score]);

  const startGame = (difficulty) => {
    setGameDifficulty(difficulty);
    setShowMenu(false);
  };

  return (
    <>
      {showMenu && <DifficultyStartMenu startGame={startGame} />}
      {isWin && <WinMenu />}
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
            updateScore={updateScore}
            setMenu={setShowMenu}
            setDifficulty={setGameDifficulty}
          />
        </>
      )}
    </>
  );
}

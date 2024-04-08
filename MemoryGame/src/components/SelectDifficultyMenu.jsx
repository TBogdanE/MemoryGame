export default function DifficultyStartMenu({ startGame }) {
  return (
    <div id="start-game-menu">
      <div id="start-game-title">Start Game</div>
      <div id="start-game-difficulty-menu">
        <button className="start-game-difficulty" onClick={() => startGame(4)}>
          Easy
        </button>
        <button className="start-game-difficulty" onClick={() => startGame(6)}>
          Medium
        </button>
        <button className="start-game-difficulty" onClick={() => startGame(8)}>
          Hard
        </button>
      </div>
    </div>
  );
}

import { allCards } from "../js/cards";

export default function Card({ id, name, image }) {
  return (
    <div
      className="gameboard-card"
      onClick={() => {
        handleCardClick(id);
      }}
    >
      <div className="gameboard-card-image-container">
        <img src={image} className="gameboard-card-image"></img>
      </div>
      <div className="gameboard-card-name">{name}</div>
    </div>
  );
}

function handleCardClick(id) {
  const element = allCards.find((obj) => obj.id === id);
  //if (element.wasClicked) { resetGame()};
  element.click();
}

import { cardList } from "../js/cards";
import Card from "./Cards";
import { useState, useEffect } from "react";
import shuffleArray from "../js/shuffleArray";

export default function GameBoard({
  difficulty,
  score,
  updateScore,
  setMenu,
  setDifficulty,
}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledCards = shuffleArray(cardList);
    const selectedCards = shuffledCards.slice(0, difficulty);
    setCards(selectedCards);
  }, [difficulty]);

  const handleCardClick = (id) => {
    const element = cardList.find((obj) => obj.id === id);
    if (element.wasClicked) {
      setMenu(true);
      setDifficulty(null);
      updateScore(0);
      cardList.forEach((obj) => {
        if (obj.wasClicked === true) obj.wasClicked = false;
      });
      return;
    }

    element.click();
    updateScore(score + 1);
    const shuffleCards = shuffleArray(cards);
    setCards(shuffleCards);
  };

  return (
    <div id="gameboard">
      {cards.map((card) => (
        <Card
          id={card.id}
          name={card.name}
          image={card.imgUrl}
          onClick={() => {
            handleCardClick(card.id);
          }}
        />
      ))}
    </div>
  );
}

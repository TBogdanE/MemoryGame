import { cardList } from "../js/cards";
import Card from "./Cards";
import { useState, useEffect } from "react";
import shuffleArray from "../js/shuffleArray";

export default function GameBoard({ difficulty }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledCards = shuffleArray(cardList);
    const selectedCards = shuffledCards.slice(0, difficulty);
    setCards(selectedCards);
  }, [difficulty]);

  function handleCardClick(id) {
    const element = cardList.find((obj) => obj.id === id);
    //if (element.wasClicked) { resetGame(); return;};
    element.click();
    const shuffleCards = shuffleArray(cards);
    setCards(shuffleCards);
    console.log(cards);
  }

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

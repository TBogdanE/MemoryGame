import { allCards } from "../js/cards";
import Card from "./Cards";
import { searchImage } from "./getImages";
import { useState, useEffect } from "react";

export default function GameBoard({ difficulty }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledCards = shuffleArray(allCards);
    const selectedCards = shuffledCards.slice(0, difficulty);
    setCards(selectedCards);
  }, [difficulty]);

  return (
    <div id="gameboard">
      {cards.map((card) => (
        <Card id={card.id} name={card.name} image={card.imgUrl} />
      ))}
    </div>
  );
}

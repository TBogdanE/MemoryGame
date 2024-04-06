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

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div id="gameboard">
      {cards.map((card, id) => (
        <Card key={id} name={card.name} image={card.imgUrl} />
      ))}
    </div>
  );
}

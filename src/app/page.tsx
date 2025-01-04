"use client";

import { useEffect, useState } from "react";
import { ICard } from "@/types/component/card";
import { DoOrDrinkCard, FindThenDrinkCard, EmptyCard, MagicCard, GameCard, Card } from "@/components/card";
import shuffle from "@/utils/shuffle";
import cardData from "../../public/data/cards.json";

export default function Page() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [currentCard, setCurrentCard] = useState<ICard>();
  const [flipped, setFlipped] = useState<number>(0);

  useEffect(() => {
    setCards(shuffle(cardData));
  }, []);

  const flipCard = () => {
    if (cards.length === 0) {
      setCurrentCard(undefined);
      return;
    }
    const nextCard = cards.pop();
    setCurrentCard(nextCard);
    setCards([...cards]);
    setFlipped(flipped + 1);
  };

  const resetDeck = () => {
    setCards(shuffle(cardData));
    setCurrentCard(undefined);
    setFlipped(0);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <p className="font-rugeBoogie text-regular60">Drinking Game</p>
        <div className="flex gap-2 justify-center items-center">
          <p className="font-handjet text-medium32">Màn:</p>
          <p className="font-handjet text-medium32">{flipped}</p>
        </div>
      </div>
      {!currentCard ? <EmptyCard /> : <Card card={currentCard} />}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-full"
          onClick={flipCard}
        >
          Lật bài mới
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-full"
          onClick={resetDeck}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

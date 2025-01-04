"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ICard } from "@/types/component/card";
import { DoOrDrinkCard } from "@/components/card";

export function Deck({ initialCards }: { initialCards: ICard[] }) {
  const [cards, setCards] = useState<ICard[]>(initialCards);

  const removeCard = () => {
    if (cards.length === 0) return;
    setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
  };

  return (
    <div className="relative w-[300px] h-[500px]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-full h-full flex justify-center items-center"
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          onDragEnd={(_, info) => {
            if (Math.abs(info.offset.x) > 100) removeCard();
          }}
          initial={{ scale: 1, y: index * -4 }}
          animate={{ scale: 1, y: index * -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <DoOrDrinkCard card={card} />
        </motion.div>
      ))}
    </div>
  );
}

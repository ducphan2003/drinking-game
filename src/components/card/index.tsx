"use client";

import { JSX } from "react";
import { ICard } from "@/types/component/card";
import cards from "@/styles/images/cards";

export function DoOrDrinkCard({ card }: { card: ICard }): JSX.Element {
  return (
    <div
      className="w-[300px] h-[500px] rounded-xl shadow-lg shadow-coolGray-500 cursor-pointer"
      style={{
        backgroundImage: `url(${cards.doOrDrink})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col gap-2 py-8 px-6 rounded-t-2xl h-full">
          <p className="text-regular32 text-[#951334] font-denkOne">Do:</p>
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-center text-[#2B0B00] font-gluten text-bold24">
              {card?.do}
            </p>
          </div>
        </div>
        <p className="text-[#422C1E] text-regular36 font-denkOne text-center">
          Or
        </p>
        <div className="flex flex-col gap-5 py-8 px-6 rounded-b-full h-full">
          <p className="text-regular32 text-[#31AFE1] font-denkOne">Drink:</p>
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-center text-[#2B0B00] font-gluten text-bold24">
              {card?.drink}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FindThenDrinkCard({ card }: { card: ICard }): JSX.Element {
  return (
    <div
      className="w-[300px] h-[500px] rounded-xl shadow-lg shadow-coolGray-500 cursor-pointer"
      style={{
        backgroundImage: `url(${cards.findThenDrink})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col gap-2 py-8 px-6 rounded-t-2xl h-full">
          <p className="text-regular32 text-[#3E3332] font-denkOne">Find:</p>
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-center text-[#2B0B00] font-gluten text-bold24">
              {card?.find}
            </p>
          </div>
        </div>
        <p className="text-[#D4B127] text-regular32 font-denkOne text-center">
          Then
        </p>
        <div className="flex flex-col gap-5 py-8 px-6 rounded-b-full h-full">
          <p className="text-regular32 text-[#31AFE1] font-denkOne">Drink:</p>
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-center text-[#2B0B00] font-gluten text-bold24">
              {card?.drink}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MagicCard({ card }: { card: ICard }): JSX.Element {
  return (
    <div
      className="w-[300px] h-[500px] rounded-xl shadow-lg shadow-coolGray-500 cursor-pointer"
      style={{
        backgroundImage: `url(${cards.magic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col gap-8 py-8 px-2 rounded-t-2xl h-full">
          <p className="text-center text-regular24 text-[#6C7B85] font-denkOne">
            Lá bài phép
          </p>
          <p className="text-center text-regular32 text-[#195A86] font-denkOne">
            {card?.title}
          </p>
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-center text-[#666161] font-gluten text-bold20">
              {card?.content}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-end w-full h-full pb-6">
          <p className="text-center text-[#195A86] font-gluten text-medium20">
            {card.penalty_first}
          </p>
        </div>
      </div>
    </div>
  );
}

export function GameCard({ card }: { card: ICard }): JSX.Element {
  return (
    <div
      className="w-[300px] h-[500px] rounded-xl shadow-lg shadow-coolGray-500 cursor-pointer"
      style={{
        backgroundImage: `url(${cards.game})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col gap-8 py-8 px-2 rounded-t-2xl h-full">
          <p className="text-center text-regular24 text-[#53482C] font-denkOne">
            Lá bài trò chơi
          </p>
          <p className="text-center text-regular32 text-[#801010] font-denkOne">
            {card?.title}
          </p>
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-center text-[#5E393A] font-gluten text-bold20">
              {card?.content}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-end w-full h-full pb-6">
          <p className="text-center text-[#801010] font-gluten text-medium20">
            {card.penalty_first}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SelfCard({ card }: { card: ICard }): JSX.Element {
  return (
    <div
      className="w-[300px] h-[500px] rounded-xl shadow-lg shadow-coolGray-500 cursor-pointer"
      style={{
        backgroundImage: `url(${cards.self})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-center text-[#9E8348] font-gluten text-bold20">
          {card?.content}
        </p>
      </div>
    </div>
  );
}

export function Card({ card }: { card: ICard }): JSX.Element {
  switch (card.type) {
    case "do_or_drink":
      return <DoOrDrinkCard card={card} />;
    case "find_then_drink":
      return <FindThenDrinkCard card={card} />;
    case "magic":
      return <MagicCard card={card} />;
    case "game":
      return <GameCard card={card} />;
    case "self":
      return <SelfCard card={card} />;
    default:
      return <EmptyCard />;
  }
}

export function EmptyCard(): JSX.Element {
  return (
    <div className="w-[300px] h-[500px] bg-border-tertiaryDisabled rounded-lg shadow-lg shadow-coolGray-500 flex justify-center items-center cursor-pointer">
      <div className="">
        <div className="w-full h-full bg-border-tertiaryDisabled rounded-lg">
          Empty
        </div>
      </div>
    </div>
  );
}

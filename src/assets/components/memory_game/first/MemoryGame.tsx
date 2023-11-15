/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Card from "./Card";
import { uuid } from "../utils";

const grid = [
  [0, 3, 5, 1],
  [1, 2, 2, 4],
  [4, 3, 5, 0],
];

const MemoryGame = () => {
  const [guess, setGuess] = useState<any>([]);

  const openCard = (value: number, id: string) => {
    return () => setGuess([...guess, { value, id }]);
  };

  const isOpen = (id: string) => {
    return guess.some((el: any) => el.id === id);
  };

  return (
    <div>
      <h2>Memory Game</h2>
      {grid.map((row, ri) => (
        <div key={uuid()} style={style.row}>
          {row.map((card, i) => {
            const id = `${ri}${i}${card}`;

            return (
              <Card
                key={id}
                card={card}
                openCard={openCard(card, id)}
                isOpen={isOpen(id)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;

const style = {
  row: { display: "flex", justifyContent: "center" },
  card: {
    height: "150px",
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    margin: "5px",
    cursor: "pointer",
  },
};

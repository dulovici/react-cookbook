/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const grid = [
  [0, 3, 5, 1],
  [1, 2, 2, 4],
  [4, 3, 5, 0],
];

const gridMap = () => {
  return new Array(grid.length)
    .fill("")
    .map(() => new Array(grid[0].length).fill(false));
};
const Memory = () => {
  const [revealedGrid, setRevealedGrid] = useState(gridMap());

  const [previusClick, setPreviusClick] = useState<any>(null);

  const handleCardClicked = (rowI: number, colI: number) => {
    if (revealedGrid[rowI][colI]) return;

    const clickedValue = grid[rowI][colI];

    const newRevealedGrid = [...revealedGrid];
    newRevealedGrid[rowI][colI] = `${clickedValue}`;
    setRevealedGrid(newRevealedGrid);

    if (previusClick) {
      const previusValue = grid[previusClick.row][previusClick.col];

      if (previusValue !== clickedValue) {
        setTimeout(() => {
          newRevealedGrid[rowI][colI] = false;
          newRevealedGrid[previusClick.row][previusClick.col] = false;
          setRevealedGrid([...newRevealedGrid]);
        }, 500);
      }

      setPreviusClick(null);

      const isWon = revealedGrid.flat().every((field) => field);
      if (isWon) {
        setRevealedGrid(gridMap());
        alert("idemoo");
        return;
      }

      return;
    }

    setPreviusClick({ row: rowI, col: colI });
  };

  return (
    <div>
      <h2>Memory Game</h2>
      {grid.map((row, ri) => (
        <div key={ri} style={style.row}>
          {row.map((card, ci) => {
            const showCard = revealedGrid[ri][ci] ?? true;

            return (
              <div
                key={ci}
                style={style.card}
                onClick={() => handleCardClicked(ri, ci)}
              >
                {showCard ? card : <p style={{ color: "red" }}>?</p>}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Memory;

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
    fontWeight: 700,
  },
};

// const [grid, setGrid] = useState([
//   [0, 3, 5, 1],
//   [1, 2, 2, 4],
//   [4, 3, 5, 0],
// ]);

import React, { useEffect, useMemo, useState } from "react";
import { generateRandomColor, shuffle } from "./utils";
import { usePopup } from "./hooks";

const ColorPickerQuiz = () => {
  const [collor, setCollor] = useState("");
  const { popup, isPopup } = usePopup();

  const setRandomCollor = () => {
    const randomCollor = generateRandomColor();
    setCollor(randomCollor);
  };

  const checkAnswer = (pickedCollor: string) => {
    const isCorrect = collor === pickedCollor;
    isCorrect ? setRandomCollor() : popup();
  };

  const buttons = useMemo(() => {
    return shuffle([collor, generateRandomColor(), generateRandomColor()]);
  }, [collor]);

  useEffect(() => {
    setRandomCollor();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "3px solid black",
          backgroundColor: `${collor}`,
        }}
      ></div>
      <div style={{ display: "flex", gap: 3 }}>
        {buttons.map((btn: string) => (
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              const buttonText = (e.currentTarget as HTMLButtonElement)
                .innerText;
              checkAnswer(buttonText);
            }}
            key={btn}
          >
            {btn}
          </button>
        ))}
      </div>
      <p style={{ visibility: `${isPopup ? "visible" : "hidden"}` }}>Wrong</p>
    </div>
  );
};

export default ColorPickerQuiz;

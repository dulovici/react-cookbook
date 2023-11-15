import React, { useState } from "react";

const Card = ({ card, openCard, isOpen }) => {
  //   const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => {
        openCard();
      }}
      style={style.card}
    >
      <div style={{ fontWeight: 700 }}>
        {isOpen ? card : <p style={{ color: "red" }}>?</p>}
      </div>
    </div>
  );
};

export default Card;

const style = {
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

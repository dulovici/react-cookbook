/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password = "78396";

const PassCode = () => {
  const [passcode, setPasscode] = useState("");
  const [standBy, setStandBy] = useState(false);

  const handleButtonClick = (num: string) => {
    setPasscode((prevPasscode) => prevPasscode + num);
  };

  const handleStandBy = () => {
    setStandBy(true);

    setTimeout(() => {
      setStandBy(false);
    }, 3000);
  };

  useEffect(() => {
    if (passcode.length === password.length) {
      if (passcode === password) {
        alert("You are in");
        setPasscode("");
      } else {
        setPasscode("");
        handleStandBy();
      }
    }
  }, [passcode]);

  return (
    <div style={{ marginTop: "50px" }}>
      <input
        style={{ marginRight: "20px" }}
        type="password"
        value={passcode}
        readOnly
      />
      {numbers.map((num) => (
        <button
          disabled={passcode.length === password.length || standBy}
          key={num}
          onClick={() => handleButtonClick(num.toString())}
        >
          {num}
        </button>
      ))}
      <h5>{standBy ? "You need to wait for some time" : ""}</h5>
    </div>
  );
};

export default PassCode;

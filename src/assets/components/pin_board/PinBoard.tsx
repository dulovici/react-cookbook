/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const PinBoard = () => {
  const [pins, setPins] = useState<any>([]);
  const [removedPins, setRemovedPins] = useState<any>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPins([...pins, { x: clientX, y: clientY }]);
  };

  const handleReset = () => {
    setPins([]);
    setRemovedPins([]);
  };

  const handleUndo = () => {
    const pinState = [...pins];
    const undoPin = pinState.pop();
    setRemovedPins([...removedPins, undoPin]);
    setPins(pinState);
  };

  const handleRedo = () => {
    const undoPins = [...removedPins];
    const redoPin = undoPins.pop();
    setPins([...pins, redoPin]);
    setRemovedPins(undoPins);
  };

  return (
    <>
      <div>
        <button disabled={!pins.length} onClick={handleReset}>
          RESET
        </button>
        <button disabled={!pins.length} onClick={handleUndo}>
          UNDO
        </button>
        <button disabled={!removedPins.length} onClick={handleRedo}>
          REDO
        </button>
      </div>

      <div onClick={handleClick} style={{ height: "100vh", marginTop: "20px" }}>
        {pins.map((pin: any) => {
          const uuid = self.crypto.randomUUID();

          return (
            <div
              key={uuid}
              style={{
                border: "2px solid red",
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                backgroundColor: "red",
                position: "absolute",
                left: `${pin.x}px`,
                top: `${pin.y}px`,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default PinBoard;

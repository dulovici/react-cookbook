import React, { useState } from "react";
import Slide from "./Slide";

const slides = [
  "https://images.freeimages.com/variants/k1wQB7egQotJ7Hr3ZBPP1S5c/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
  "https://images.freeimages.com/images/large-previews/76e/green-field-landscape-1337336.jpg",
  "https://images.freeimages.com/images/large-previews/c11/field-1367922.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastSlide = currentIndex === slides.length - 1;

  let interval: number | undefined;

  const prevHandler = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const nextHandler = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const startHandler = () => {
    interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === slides.length - 1) return 0;
        return prev + 1;
      });
    }, 1000);
  };

  const stopHandler = () => {
    clearInterval(interval);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Slide url={slides[currentIndex]} />

      <div>
        <button disabled={!currentIndex} onClick={prevHandler}>
          Prev
        </button>
        <button disabled={lastSlide} onClick={nextHandler}>
          Next
        </button>

        <button onClick={startHandler}>Play</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
};

export default ImageSlider;

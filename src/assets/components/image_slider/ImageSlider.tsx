import React, { useRef, useState } from "react";
import Slide from "./Slide";

const slides = [
  "https://images.freeimages.com/variants/k1wQB7egQotJ7Hr3ZBPP1S5c/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
  "https://images.freeimages.com/images/large-previews/76e/green-field-landscape-1337336.jpg",
  "https://images.freeimages.com/images/large-previews/c11/field-1367922.jpg",
  "https://images.freeimages.com/images/large-previews/224/wheat-field-1323744.jpg",
  "https://images.freeimages.com/images/large-previews/d01/misty-field-1358966.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const lastSlide = currentIndex === slides.length - 1;
  const intervalRef = useRef(0);

  const prevHandler = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const nextHandler = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const startHandler = () => {
    if (isActive) return;

    setIsActive(true);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === slides.length - 1) return 0;
        return prev + 1;
      });
    }, 1000);
  };

  const stopHandler = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Slide url={slides[currentIndex]} />

      <div>
        <button disabled={isActive || !currentIndex} onClick={prevHandler}>
          Prev
        </button>
        <button disabled={isActive || lastSlide} onClick={nextHandler}>
          Next
        </button>

        <button disabled={isActive} onClick={startHandler}>
          Play
        </button>
        <button disabled={!isActive} onClick={stopHandler}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

/* eslint-disable @typescript-eslint/no-explicit-any */

export const shuffle = (array: any[]) => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hexColor = `#${"0".repeat(6 - randomColor.length)}${randomColor}`;
  return hexColor;
};

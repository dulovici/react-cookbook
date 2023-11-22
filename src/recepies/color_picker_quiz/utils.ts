/* eslint-disable @typescript-eslint/no-explicit-any */

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const hexColor = `#${"0".repeat(6 - randomColor.length)}${randomColor}`;
  return hexColor;
};

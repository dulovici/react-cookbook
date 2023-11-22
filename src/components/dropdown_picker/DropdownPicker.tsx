/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { fruitsData } from "./data";
import "./style.css";

const DropdownPicker = () => {
  const [selectedFruits, setSelectedFruits] = useState<any>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCheckboxChange = (index: number) => {
    setSelectedFruits([...selectedFruits, fruitsData[index]]);
  };

  const isSelected = (id: number) => {
    return selectedFruits.some((fruit: any) => fruit.id === id);
  };

  const handleReset = () => {
    setSelectedFruits([]);
  };

  const handleSubmit = () => {
    alert(
      selectedFruits.length
        ? JSON.stringify(selectedFruits)
        : "You need to select some fruits"
    );
  };

  return (
    <div className="container">
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>
        {`Select fruit (${selectedFruits.length})`}
      </button>
      {dropdownOpen ? (
        <>
          <div className="fruit-checkbox-container">
            {fruitsData.map((fruit, index) => (
              <div key={fruit.id}>
                <input
                  type="checkbox"
                  id={`fruitCheckbox${fruit.id}`}
                  checked={isSelected(fruit.id)}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={`fruitCheckbox${fruit.id}`}>{fruit.name}</label>
              </div>
            ))}
          </div>
          <div className="form-btns">
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
            <button className="reset" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DropdownPicker;

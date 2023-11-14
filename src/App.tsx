import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ColorPickerQuiz from "./assets/components/color_picker_quiz/ColorPickerQuiz";
import SynonymFinder from "./assets/components/synonym_finder/SynonymFinder";

function App() {
  return (
    <div className="app">
      {/* <ColorPickerQuiz /> */}
      <SynonymFinder />
    </div>
  );
}

export default App;

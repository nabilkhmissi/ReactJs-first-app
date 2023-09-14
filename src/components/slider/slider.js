import { useState } from "react";
import "../slider/slider.css";
export default function Slider() {
  const [level, setLevel] = useState(1);

  const messages = ["Learn React", "Get a Job", "Receive the first Income"];

  function handlePrevious() {
    if (level > 1) setLevel(level - 1);
  }
  function handleNext() {
    if (level < 3) setLevel(level + 1);
  }

  return (
    <div className="slider">
      <div className="points">
        <div className={`point ${level >= 1 ? "active" : ""}`}>1</div>
        <div className={`point ${level >= 2 ? "active" : ""}`}>2</div>
        <div className={`point ${level >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="message">
        step {level} : {messages[level - 1]}
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

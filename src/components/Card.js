import React, { useState } from "react";
import "../css/card.css";

export default function Card({ number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (number) => {
    setIsFlipped(!isFlipped);
    console.log(number);
  };

  return (
    <div>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div
            onClick={() => handleFlip(number)}
            className="flip-card-front"
          ></div>
          <div onClick={() => handleFlip(number)} className="flip-card-back">
            <img
              src={require(`../img/pixar/${number}.png`)}
              alt="backdrop"
              className="flip-card-back-image"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../css/matchgame.css";
import Card from "./Card.js";

export default function MatchGame() {
  let cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13,
  ];

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <main className="main">
      {shuffle(cards).map((item) => (
        <Card number={item} />
      ))}
    </main>
  );
}

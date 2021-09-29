import React, { useState } from "react";
import "./styles.css";

const creatures = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦊": "Fox",
  "🐴": "Horse",
  "🐘": "Elephant",
  "🐓": "Rooster",
  "🐍": "Snake",
  "🐟": "Fish",
  "🐶": "Dog",
  "🐷": "Pig"
};

var animals = Object.keys(creatures);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = creatures[userInput];
    if (!meaning) {
      meaning = "The creature detail is not available at our database";
    }
    setMeaning(meaning);
  }

  function clickHandler(index) {
    var meaning = creatures[animals[index]];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtttt</h1>
      <input placeholder="Search creature" onChange={inputHandler} />
      <p>
        translation will appear below{" "}
        <span role="img" aria-labelledby="fingers">
          👇
        </span>
      </p>
      <h2>{meaning}</h2>
      <div>
        {animals.map((item, index) => {
          return (
            <span
              key={item}
              onClick={() => clickHandler(index)}
              style={{ cursor: "pointer" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

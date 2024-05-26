import React, { useState } from "react";
import styles from "./RandomNumberGenerator.module.css";

const RandomNumberGenerator = () => {
  const [startRange, setStartRange] = useState("");
  const [endRange, setEndRange] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomHandler = () => {
    //check for valid inputs, not empty and non a NON-Number
    if (!startRange || !endRange || isNaN(startRange) || isNaN(endRange)) {
      setRandomNumber("Invalid Input");
      return;
    }

    //sanitise inputs by parsing them
    const start = parseInt(startRange, 10);
    const end = parseInt(endRange, 10);

    //math function to create a random number between two given numbers
    const random = Math.floor(Math.random() * (end - start + 1) + start);
    setRandomNumber(random);
  };

  return (
    <div className={styles.main}>
      <div className={styles.inputContainer}>
        <label>Start Range:</label>
        <input
          type="number"
          id="startRange"
          value={startRange}
          onChange={(e) => setStartRange(e.target.value)}
        />
        <label>End Range:</label>
        <input
          type="number"
          id="endRange"
          value={endRange}
          onChange={(e) => setEndRange(e.target.value)}
        />
        <button onClick={generateRandomHandler}>Generate Random</button>
      </div>
      <h1>
        Random Number is : <span>{randomNumber}</span>
      </h1>
    </div>
  );
};

export default RandomNumberGenerator;

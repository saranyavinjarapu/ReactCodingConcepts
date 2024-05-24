import React, { useState } from "react";
import styles from "./ReactTile.module.css";

function Tile(props) {
  const { letter, tally, setTally, output, setOutput } = props;

  const onLetterClickHandler = () => {
    if (!tally[letter]) {
      setTally({ ...tally, [letter]: 1 });
      setOutput([...output, letter]);
    } else if (tally[letter] && tally[letter] === 2) {
      setTally({ ...tally, [letter]: 0 });
      const slicedArray = output.slice(0, output.length - 2);
      setOutput([...slicedArray, "_"]);
    } else {
      setTally({ ...tally, [letter]: tally[letter] + 1 });
      setOutput([...output, letter]);
    }
  };

  return (
    <button className={styles.letter} onClick={onLetterClickHandler}>
      {letter}
    </button>
  );
}

const ReactTile = () => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabetArray = alpha.map((x) => String.fromCharCode(x));

  const [output, setOutput] = useState([]);
  const [tally, setTally] = useState({});
  return (
    <div className={styles.main}>
      <aside className={styles.letterContainer} id="letterContainer">
        {alphabetArray.map((item, index) => (
          <Tile
            letter={item}
            key={index}
            tally={tally}
            setTally={setTally}
            output={output}
            setOutput={setOutput}
          />
        ))}
      </aside>
      <div className={styles.outputString} id="outputString">
        <h3>OUTPUT STRING IS :</h3>
        <h2 style={{ color: "green", fontWeight: "bold" }}>
          {output.join("")}
        </h2>
      </div>
    </div>
  );
};

export default ReactTile;

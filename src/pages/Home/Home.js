import React, { useState } from "react";
import styles from "./Home.module.css";
import { Header } from "../../components";
import { displayList, componentsList } from "../../utils/helpers";

const Home = () => {
  const [clickedChallengeId, setClickedChallengeId] = useState("");
  const ClickedChallengeComponent = componentsList[clickedChallengeId];

  return (
    <div className={styles.home}>
      <Header></Header>
      <div className={styles.main}>
        {displayList.map((item, index) => (
          <button
            className={styles.displayButton}
            key={index}
            id={item.id}
            onClick={() => setClickedChallengeId(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div style={{ border: "1px solid grey", padding: "10px", margin: "5px" }}>
        {clickedChallengeId ? (
          <ClickedChallengeComponent />
        ) : (
          <h1>Please Click a button to see the component</h1>
        )}
      </div>
    </div>
  );
};

export default Home;

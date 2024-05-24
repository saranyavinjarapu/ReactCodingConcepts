import { useState } from "react";
import { Header } from "./components";
import "./App.css";
import { displayList, componentsList } from "./utils/helpers";

function App() {
  const [clickedChallengeId, setClickedChallengeId] = useState("");
  const ClickedChallengeComponent = componentsList[clickedChallengeId];

  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        {displayList.map((item, index) => (
          <button
            key={index}
            id={item.id}
            onClick={() => setClickedChallengeId(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {clickedChallengeId ? (
        <ClickedChallengeComponent />
      ) : (
        <h1>Please Click a button to see the component</h1>
      )}
    </div>
  );
}

export default App;

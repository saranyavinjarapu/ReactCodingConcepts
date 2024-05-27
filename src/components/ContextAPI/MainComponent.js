import React, { useContext } from "react";
import { HomeContext } from "./context/HomeContext";

const MainComponent = () => {
  const { setTitle } = useContext(HomeContext);
  return (
    <div className="border-4 border-yellow-400 p-4">
      <div className="text-3xl">MAIN COMPONENT</div>
      <button
        className="bg-blue-200 mt-8"
        onClick={() => setTitle("MainComponent-Title")}
      >
        Set Title From Main
      </button>
    </div>
  );
};

export default MainComponent;

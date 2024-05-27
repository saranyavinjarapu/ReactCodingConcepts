import React, { useState } from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import { HomeContext } from "./context/HomeContext";

const HomeCA = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="flex gap-4">
      <HomeContext.Provider value={{ title, setTitle }}>
        <Header></Header>
        <MainComponent></MainComponent>
        <div className="border-2 border-green-300 flex-1 p-5">
          TITLE IS: <br />
          <span className="text-red">{title}</span>
        </div>
      </HomeContext.Provider>
    </div>
  );
};

export default HomeCA;

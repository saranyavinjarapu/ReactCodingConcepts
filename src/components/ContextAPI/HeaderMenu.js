import React, { useContext } from "react";
import { HomeContext } from "./context/HomeContext";

const HeaderMenu = () => {
  const { setTitle } = useContext(HomeContext);
  return (
    <div className="flex gap-4 justify-center items-center p-4 border-4 border-red-500 ">
      <h1>Header Menu</h1>
      <h1>Test1</h1>
      <h1>Test2</h1>
      <button
        className="bg-blue-200"
        onClick={() => setTitle("HeaderMenu-Title")}
      >
        Set Title from Header's Child i.e Header Menu
      </button>
    </div>
  );
};

export default HeaderMenu;

import React from "react";
import Users from "./Users";
import Posts from "./Posts";

const HigherOrderMain = () => {
  return (
    <div>
      <Users></Users>
      <hr className="border-4 border-red-500 m-8" />
      <Posts></Posts>
    </div>
  );
};

export default HigherOrderMain;

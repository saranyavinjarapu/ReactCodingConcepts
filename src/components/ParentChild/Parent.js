import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Saranya");
  const changeName = (propsName) => {
    setName(propsName);
  };
  return (
    <div className="flex flex-col gap-4">
      PARENT CONTAINER
      <Child name={name} setName={setName} changeName={changeName}></Child>
    </div>
  );
};

export default Parent;

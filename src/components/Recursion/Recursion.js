import React from "react";
import DataList from "./DataList";
import { useState, useEffect } from "react";

const Recursion = () => {
  const [jsonData, setJsonData] = useState([]);
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  const getJSONData = () => {
    fetch("https://api.npoint.io/b15247b25b683d4f6ef3")
      .then((response) => response.json())
      .then((data) => setJsonData(data.children))
      .catch((error) => console.log("error is: ", error));
  };

  useEffect(() => {
    getJSONData();
  }, []);
  return (
    <div className="flex gap-4 ">
      <div className="border border-gray-400">
        <DataList data={jsonData} setId={setId} setText={setText} />
      </div>
      <div className="flex flex-col gap-4 text-3xl flex-1 p-6 border border-gray-400 text-left">
        <strong>JSON DETAIL</strong>
        <p>ID: {id}</p>
        <p>Text: {text}</p>
      </div>
    </div>
  );
};

export default Recursion;

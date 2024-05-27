import React, { useEffect, useState } from "react";

const HigherOrder = (Component, request) => {
  return function HOC() {
    const [data, setData] = useState([]);
    const getData = async () => {
      let apidata = await fetch(
        `https://jsonplaceholder.typicode.com/${request}`
      )
        .then((response) => response)
        .catch("error");
      setData(await apidata.json());
    };

    useEffect(() => {
      getData();
    }, []);

    return (
      <div>
        <h1 className="text-3xl mb-4 p-4">HELLO FROM HOC</h1>
        <Component data={data}></Component>
      </div>
    );
  };
};

export default HigherOrder;

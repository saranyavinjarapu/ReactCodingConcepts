import React, { useEffect, useState } from "react";
import axios from "axios";

const Debounce = () => {
  const [pin, setPin] = useState("");
  const [records, setRecords] = useState([]);
  const endPoint = "https://api.postalpincode.in/pincode/";

  useEffect(() => {
    const debounceAPI = setTimeout(() => {
      axios
        .get(endPoint + pin)
        .then((response) => setRecords(response.data[0].PostOffice))
        .catch("error");
    }, 2000);

    return () => {
      clearTimeout(debounceAPI);
    };
  }, [pin]);

  console.log(records);

  return (
    <div>
      <div className="mb-4 text-3xl p-4">DEBOUNCE</div>
      <label>Input Pincode : </label>
      <input
        className="border border-gray-500 rounded-md px-4 py-1 mb-4"
        type="number"
        name="pincode"
        onChange={(e) => setPin(e.target.value)}
      ></input>
      <div className="flex flex-col mt-4 p-4 gap-4 justify-center items-center border border-cyan-600">
        {records.map((item, index) => (
          <h1 key={index} className="border border-gray-400 p-2  rounded-md">
            {item.Name} - {item.BranchType}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Debounce;

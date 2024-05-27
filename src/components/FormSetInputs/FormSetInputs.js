import React, { useState } from "react";

const FormSetInput = () => {
  const [inputs, setInputs] = useState([]);

  const getInputValues = (data) => {
    let { name, value } = data.target;
    let input = { [name]: value };
    setInputs({ ...inputs, ...input });
  };
  console.log("inputs are :", inputs);
  return (
    <div className="flex flex-col gap-8 p-4 justify-center items-center">
      <div className="flex flex-col gap-4">
        <input
          className="border border-gray-500 rounded-md px-4 py-1"
          placeholder="Name"
          type="text"
          name="name"
          onChange={getInputValues}
        ></input>
        <input
          className="border border-gray-500 rounded-md px-4 py-1"
          placeholder="Age"
          type="age"
          name="age"
          onChange={getInputValues}
        ></input>
        <input
          className="border border-gray-500 rounded-md px-4 py-1"
          placeholder="Email"
          type="email"
          name="email"
          onChange={getInputValues}
        ></input>
      </div>
      <button className="border rounded-md bg-lime-200 ">Submit</button>
      {inputs && JSON.stringify(inputs)}
    </div>
  );
};

export default FormSetInput;

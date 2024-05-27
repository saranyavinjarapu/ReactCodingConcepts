import React from "react";

const Child = ({ name, setName, changeName }) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center m-4 p-4 border border-cyan-300">
      <div className="text-3xl">CHILD CONTAINER</div>
      <div className="flex gap-4">
        <button
          className=" bg-green-200 border rounded-md"
          onClick={() => changeName("Chintu")}
        >
          Change Name
        </button>
        <button
          className=" bg-green-200 border rounded-md"
          onClick={() => setName("Vinjarapu")}
        >
          Change Name using setName method directly
        </button>
      </div>
      <div>NAME IS : {name}</div>
    </div>
  );
};

export default Child;

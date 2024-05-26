import React, { useEffect, useState } from "react";

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(5);

  const [simpleInterest, setSimpleInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculatedInterest = (principal * rate * time) / 100;
    setSimpleInterest(calculatedInterest.toFixed(2));
    setTotalAmount((principal + calculatedInterest).toFixed(2));
  }, [principal, rate, time]);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex justify-center items-center gap-8 pt-10">
        <label className=" text-lg font-medium">Principal Amount</label>
        <input
          className="border border-gray-500 rounded-md p-2"
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
        <label className=" text-lg font-medium">Interest Rate</label>
        <input
          className="border border-gray-500 rounded-md p-2"
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        <label className=" text-lg font-medium">Time</label>
        <input
          className="border border-gray-500 rounded-md p-2"
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
      </div>
      <div className="flex justify-center items-center gap-8 pt-20 mb-10 uppercase font-bold">
        <div id="simpleInterest">
          Simple Interest :
          <span className="text-blue-700 font-bold text-lg">
            {" "}
            {simpleInterest}
          </span>
        </div>
        <div id="totalAmount">
          Total Amount :
          <span className="text-blue-700 font-bold text-lg">
            {" "}
            {totalAmount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InterestCalculator;

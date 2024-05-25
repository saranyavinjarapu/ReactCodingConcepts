import React, { useEffect, useState } from "react";
import styles from "./InterestCalculator.module.css";

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
    <div className={styles.main}>
      <div className={styles.inputContainer}>
        <label>Principal Amount</label>
        <input
          type="number"
          id="principal"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
        <label>Interest Rate</label>
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
        <label>Interest Rate</label>
        <input
          type="number"
          id="time"
          value={time}
          onChange={(e) => setTime(parseFloat(e.target.value))}
        />
      </div>
      <div className={styles.outputContainer}>
        <div id="simpleInterest">Simple Interest : {simpleInterest}</div>
        <div id="totalAmount">Total Amount : {totalAmount}</div>
      </div>
    </div>
  );
};

export default InterestCalculator;

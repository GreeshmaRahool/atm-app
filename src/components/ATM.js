import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import Result from "./Result";
import "./ATM.css";

const ATM = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [submittedAmount, setSubmittedAmount] = useState("");
  const [view, setView] = useState("keypad"); // New state to manage views

  const moneyTypes = [
    { type: "note", value: 1000 },
    { type: "note", value: 500 },
    { type: "note", value: 200 },
    { type: "note", value: 100 },
    { type: "note", value: 50 },
    { type: "coin-large", value: 20 },
    { type: "coin-small", value: 10 },
    { type: "coin-large", value: 5 },
    { type: "coin-large", value: 2 },
    { type: "coin-small", value: 1 },
  ];

  const handleButtonClick = (value) => {
    setAmount((prev) => prev + value);
  };

  const handleSubmit = () => {
    const parsedAmount = parseInt(amount, 10);
    if (!isNaN(parsedAmount)) {
      const result = calculateWithdrawal(parsedAmount);
      setResult(result);
      setSubmittedAmount(parsedAmount);
      setAmount("");
      setView("result"); // Switch to result view
    } else {
      console.error("Invalid amount");
    }
  };

  const calculateWithdrawal = (amount) => {
    let remainingAmount = amount;
    const result = {
      notes: [],
      coinsLarge: [],
      coinsSmall: [],
    };

    moneyTypes.forEach((denomination) => {
      while (remainingAmount >= denomination.value) {
        remainingAmount -= denomination.value;
        if (denomination.type === "note") {
          result.notes.push(denomination.value);
        } else if (denomination.type === "coin-large") {
          result.coinsLarge.push(denomination.value);
        } else {
          result.coinsSmall.push(denomination.value);
        }
      }
    });

    return result;
  };

  const handleBack = () => {
    setView("keypad"); // Switch back to keypad view
  };

  return (
    <div className="atm-container">
      {view === "keypad" && (
        <>
          <h1>Enalyzer ATM</h1>
          <Display amount={amount} />
          <Keypad onButtonClick={handleButtonClick} onSubmit={handleSubmit} />
        </>
      )}
      {view === "result" && (
        <Result result={result} amount={submittedAmount} onBack={handleBack} />
      )}
    </div>
  );
};

export default ATM;

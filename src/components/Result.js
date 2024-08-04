import React from "react";
import "./Result.css";

const Result = ({ result, amount, onBack }) => {
  const formatResult = (arr) => {
    const countMap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(countMap).map((key) => (
      <div key={key} className="result-item">
        <img src="/500-bill.png" alt="Bullet" className="bullet-icon" />
        <p key={key}>
          {countMap[key]} x £{key}
        </p>
      </div>
    ));
  };

  return (
    <div className="result">
      <button className="back-arrow" onClick={onBack}>
        <img src="/back-arrow-icon.png" alt="Back" />
      </button>
      <h3>Depositing</h3>
      <div className="amount">£ {amount}</div>
      <div className="denominations">
        <div className="title-notes">
          <h4>Notes</h4>
          {formatResult(result.notes)}
        </div>
        <div className="title-coinslessthan20">
          <h4>Coins {">"} 20mm</h4>
          {formatResult(result.coinsLarge)}
        </div>
        <div className="title-coinsgreaterthan20">
          <h4>Coins ≤ 20mm</h4>
          {formatResult(result.coinsSmall)}
        </div>
      </div>
      <div className="thank-you">Thank you for using Enalyzer ATM</div>
    </div>
  );
};

export default Result;

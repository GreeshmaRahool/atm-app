import React from "react";
import "./Display.css";

const Display = ({ amount }) => {
  return (
    <div className="display-container">
      <p className="display-text">Select amount</p>
      <div className="display-input">£ {amount}</div>
    </div>
  );
};

export default Display;

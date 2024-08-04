import React from 'react';
import './Keypad.css';

const Keypad = ({ onButtonClick, onSubmit }) => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="keypad">
     
      {buttons.map((button, index) => (
        <button key={index} onClick={() => onButtonClick(button.toString())}>
          {button}
        </button>
      ))}       
      <button className="submit" onClick={onSubmit}>
        submit
      </button>
    </div>
  );
};

export default Keypad;

import React from "react";

const Cell = ({ value, onClick, className }) => {
  //Object destructuring

  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;

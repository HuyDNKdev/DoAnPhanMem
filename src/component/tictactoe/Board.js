import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  //   console.log(props);
  //     const cells = [null, null, null, "X", "X", "X", null, null, null];
  //     console.log(calculateWinner(cells));

  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onclick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};
export default Board;

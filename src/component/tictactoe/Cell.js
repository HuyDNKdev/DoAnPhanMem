import React from "react";
// const {value, onClick} = props;
// console.log(value,onClick); 
const Cell = ({value,onClick})=> {
    return(
        <div className="game-cell" onClick={onClick}>
            {value}
        </div>
    );
}
export default Cell;


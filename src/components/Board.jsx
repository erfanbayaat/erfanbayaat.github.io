import React from "react";
import Square from "./Square";

export default function Board({ squares, onSquareClick, currentPlayer, winner }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl">
        {winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => onSquareClick(idx)} />
        ))}
      </div>
    </div>
  );
}

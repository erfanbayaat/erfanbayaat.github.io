import React from 'react';
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="w-16 h-16 text-2xl border">
      {value}
    </button>
  );
}

function Board({ squares, onSquareClick, currentPlayer, winner }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-xl">
        {winner
          ? `winner : ${winner}`
          : ` current Player: ${currentPlayer}`}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {squares.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => onSquareClick(idx)} />
        ))}
      </div>
    </div>
  );
}

export default Board;

import React from 'react';

function ScoreBoard({ scores }) {
  return (
    <div className="flex gap-6 text-lg font-semibold mb-4">
      <span className="text-blue-600">X: {scores.X}</span>
      <span className="text-red-600">O: {scores.O}</span>
      <span className="text-gray-600">Draw: {scores.draws}</span>
    </div>
  );
}

export default ScoreBoard;

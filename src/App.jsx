import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(Math.random() < 0.5);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });
  const [gameStatus, setGameStatus] = useState("ongoing"); // 'ongoing', 'won', 'draw'
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  useEffect(() => {
    if (winner) {
      setGameStatus("won");
      setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
      setTimeout(resetBoard, 1500);
    } else if (squares.every(Boolean)) {
      setGameStatus("draw");
      setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
      setTimeout(resetBoard, 1500);
    } else {
      setGameStatus("ongoing");
    }
  }, [squares, winner]);

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(Math.random() < 0.5);
    setGameStatus("ongoing");
  };

  const resetGame = () => {
    resetBoard();
    setScores({ X: 0, O: 0, draws: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-start py-8 px-4 sm:px-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Tic Tac Toe
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 lg:gap-12">
          {/* Game Board Section */}
          <div className="w-full max-w-md lg:max-w-none lg:flex-1 flex flex-col items-center">
            <div className="w-full max-w-xs sm:max-w-sm bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4">
              <div className="mb-4 flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  نوبت فعلی:
                </span>
                <span className={`text-2xl font-bold ${xIsNext ? 'text-blue-600' : 'text-purple-600'}`}>
                  {xIsNext ? "X" : "O"}
                </span>
              </div>
              
              <Board
                squares={squares}
                onSquareClick={handleClick}
                currentPlayer={xIsNext ? "X" : "O"}
                winner={winner}
              />
              
              {gameStatus === "won" && (
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold text-green-600 animate-pulse">
                    {winner} برنده شد
                  </p>
                </div>
              )}
              {gameStatus === "draw" && (
                <div className="mt-4 text-center">
                  <p className="text-xl font-bold text-yellow-600 animate-pulse">
                    مساوی شد!
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-4 mt-2">
              <button
                onClick={resetBoard}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                ریست کردن کامل
              </button>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                بازی جدید
              </button>
            </div>
          </div>

          {/* Score Board Section */}
          <div className="w-full max-w-md lg:max-w-none lg:flex-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                آمار بازی
              </h2>
              <ScoreBoard scores={scores} />
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">قوانین بازی</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    اولین بازیکن به صورت تصادفی انتخاب می‌شود
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    X همیشه در بازی‌های جدید حرف اول شروع میکند  .
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    با پر کردن 3 خانه متوالی برنده شوید .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function calculateWinner(sq) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) return sq[a];
  }
  return null;
}
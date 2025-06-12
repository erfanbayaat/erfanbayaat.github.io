export default function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-20 h-20 text-3xl border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

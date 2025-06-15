import React from "react";

export default function Square({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 text-3xl border border-gray-400 flex items-center justify-center hover:bg-gray-100 transition"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

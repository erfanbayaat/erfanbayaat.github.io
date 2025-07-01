import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import aerospaceImg from "../assets/aerospace.jpg";
import aiImg from "../assets/ai.png";
import mediaImg from "../assets/media.png";
import psImg from "../assets/ps.png";
import cryptoImg from "../assets/crypto.png";
import pythonImg from "../assets/python.png";
import cinemaImg from "../assets/cinema.png";
import biotechImg from "../assets/biotech.png";

const categories = [
  { title: "هوافضا", img: aerospaceImg },
  { title: "هوش مصنوعی", img: aiImg },
  { title: "رسانه‌ها", img: mediaImg },
  { title: "گرافیک", img: psImg },
  { title: "ارز دیجیتال", img: cryptoImg },
  { title: "برنامه نویسی", img: pythonImg },
  { title: "فیلم و سینما", img: cinemaImg },
  { title: "بیوتکنولوژی", img: biotechImg },
];

const Categories = () => {
  return (
    <div className="w-full px-4 pt-6 pb-3 bg-white text-right flex items-center justify-center flex-col">
      <div className="flex items-center justify-between flex-row-reverse mb-6 w-100">
        <h2 className="text-xl font-semibold text-gray-800">دسته بندی ها</h2>
        <div className="w-50 h-0.5 bg-gray-400 mx-4 rounded-2xl"></div>
        <IoIosArrowBack />
      </div>
      <div className="grid grid-cols-4 gap-y-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 mx-4"
          >
            <img
              src={cat.img}
              alt={cat.title}
              className="w-16 h-16 rounded-full object-cover border border-gray-200 shadow-md"
            />
            <span className="text-xs text-gray-700 text-center leading-tight">
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

import React from "react";
import { IoIosArrowBack } from "react-icons/io";

// تصاویر دسته‌بندی‌ها
import aerospaceImg from "../assets/aerospace.jpg";
import aiImg from "../assets/ai.png";
import mediaImg from "../assets/media.png";
import psImg from "../assets/ps.png";
import cryptoImg from "../assets/crypto.png";
import pythonImg from "../assets/python.png";
import cinemaImg from "../assets/cinema.png";
import biotechImg from "../assets/biotech.png";
import accountingImg from "../assets/accounting.png";
import transportImg from "../assets/transport.png";
import musicImg from "../assets/music.png";
import scienceImg from "../assets/science.png";
import ecommerceImg from "../assets/ecommerce.jpg";
import medicalImg from "../assets/medical.png";

// تمام دسته‌بندی‌ها
const categories = [
  { title: "هوافضا", img: aerospaceImg },
  { title: "رسانه‌ها", img: mediaImg },
  { title: "گرافیک", img: psImg },
  { title: "حسابداری", img: accountingImg },
  { title: "ارز دیجیتال", img: cryptoImg },
  { title: "برنامه نویسی", img: pythonImg },
  { title: "هوش مصنوعی", img: aiImg },
  { title: "بیوتکنولوژی", img: biotechImg },
  { title: "حمل و نقل", img: transportImg },
  { title: "فیلم و سینما", img: cinemaImg },
  { title: "موسیقی", img: musicImg },
  { title: "علمی", img: scienceImg },
  { title: "تجارت الکترونیک", img: ecommerceImg },
  { title: "پزشکی", img: medicalImg },
];

const Categories = () => {
  return (
    <div className="w-full px-4 py-6 bg-white text-right">
      {/* هدر */}
      <div className="flex items-center justify-between flex-row-reverse mb-6">
        <h2 className="text-xl font-semibold text-gray-800">دسته بندی ها</h2>
        <div className="flex-1 h-0.5 bg-gray-300 mx-4 rounded-2xl"></div>
        <IoIosArrowBack size={20} className="text-gray-700" />
      </div>

      {/* گرید آیتم‌ها */}
      <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4">
        {categories.map((cat, index) => {
          // در موبایل فقط ۸ آیتم اول، در تبلت/دسکتاپ همه نمایش داده می‌شن
          const isHiddenOnMobile = index >= 8;

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                isHiddenOnMobile ? "hidden sm:flex" : "flex"
              }`}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-blue-500 shadow-md flex items-center justify-center overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="mt-2 text-sm sm:text-base text-gray-700 text-center leading-tight">
                {cat.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

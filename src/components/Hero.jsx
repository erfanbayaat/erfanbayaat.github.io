import React from "react";
import heroImage from "../assets/heroImage.png";
const Hero = () => {
  return (
    <div className="container py-8 px-4 text-center flex justify-center items-center flex-col">
      <div className="mb-10">
        <h1 className="text-2xl font-extrabold text-black pb-4">
          با سرچ کمتر نتیجه بهتر بگیر
        </h1>
        <p className="text-[#013075] text-sm my-4 max-w-md mx-auto">
          کانسپتو اولین مرجع معتبر معرفی استارتاپ‌ها و شرکت‌های ایرانی
        </p>
        <div className="flex justify-center items-center gap-2 mt-4 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1">
            رایگان شروع کن!
            <span>⚡</span>
          </button>
          <button className="border border-[#2E303B] text-[#2E303B] px-4 py-2 rounded-md text-sm">
            درباره کانسپتو
          </button>
        </div>
      </div>

      <div className="mt-6">
        <img
          src={heroImage}
          alt="app preview"
          className="rounded-lg shadow-md w-[219px] h-[250px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import heroMain from "../assets/heroMain.png";     // تصویر دسکتاپ
import heroCard from "../assets/heroCard.png";     // کارت پایین چپ
import heroMobile from "../assets/heroMobile.png"; // موبایل

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#F5F9FF] to-white py-12 md:py-20">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 text-center flex flex-col items-center">
        {/* ---------- متن ---------- */}
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold leading-tight text-black">
          با سرچ کمتر <span className="block md:inline">نتیجه بهتر بگیر</span>
        </h1>

        <p className="mt-4 max-w-[800px] text-sm sm:text-lg md:text-xl leading-relaxed text-[#013075]">
          کانسپتو اولین مرجع معتبر معرفی استارتاپ‌ها و شرکت‌های ایرانی
        </p>

        {/* ---------- دکمه‌ها ---------- */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button className="flex items-center gap-1 rounded-md bg-[#007AFF] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0065d6]">
            رایگان شروع کن! <span>⚡</span>
          </button>
          <button className="rounded-md border border-[#2E303B] px-5 py-2 text-sm font-medium text-[#2E303B] transition hover:bg-gray-50">
            درباره کانسپتو
          </button>
        </div>

        {/* ---------- تصویر موبایل (فقط در موبایل نمایش داده شود) ---------- */}
        <div className="relative mt-10 w-full max-w-xs md:hidden">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
            <img
              src={heroMobile}
              alt="موبایل"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* افکت محو پایین عکس */}
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* ---------- تصاویر دسکتاپ ---------- */}
        <div className="relative mt-14 w-full hidden md:flex justify-center">
          {/* تصویر اصلی دسکتاپ */}
          <img
            src={heroMain}
            alt="پیش‌نمایش وب‌اپ"
            className="w-[1016px] max-w-3xl rounded-xl shadow-lg"
          />

          {/* کارت پایین چپ */}
          <img
            src={heroCard}
            alt="کارت آماری"
            className="absolute -bottom-16 left-4 w-[450px] rounded-lg shadow-md"
          />

          {/* موبایل بالا راست */}
          <img
            src={heroMobile}
            alt="نمای موبایل"
            className="absolute -top-12 right-12 w-[290px] rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

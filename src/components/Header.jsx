import React, { useState } from "react";
import { Menu, LogIn, Zap, Search } from "lucide-react";

export default function Header() {
  /* باز و بسته شدن سرچ موبایل */
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="w-full px-4 md:px-20 pt-6 pb-4">
      {/* -------- ردیف بالای هدر -------- */}
      <div className="flex items-center justify-between md:justify-start md:gap-10">
        {/* ← گروهِ دکمه‌های سمت چپ (ورود / شروع رایگان) */}
        <div className="flex items-center gap-2 md:order-1">
          {/* ورود / ثبت‌نام */}
          <button className="flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 shadow-sm hover:bg-gray-50 transition">
            <LogIn className="w-5 h-5 text-gray-700" />
            <span className="hidden sm:inline text-sm font-medium text-gray-700">
              ورود / ثبت نام
            </span>
          </button>

          {/* شروع رایگان */}
          <button className="flex items-center gap-2 rounded-xl bg-[#007AFF] px-4 py-2 text-white shadow-sm hover:bg-[#0065d6] transition">
            <Zap className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-semibold">
              رایگان شروع کن!
            </span>
          </button>
        </div>

        {/* لوگو (سمت راست در دسکتاپ) */}
        <h1 className="mx-auto select-none text-2xl font-extrabold tracking-tight text-[#007AFF] md:mx-0 md:text-3xl md:order-3">
          CONCEPTO
        </h1>

        {/* سرچ دسکتاپ */}
        <div className="hidden md:flex md:order-2 mx-auto flex-1 max-w-md items-center rounded-xl bg-[#F3F4F6] px-4 py-2">
          <input
            type="text"
            placeholder="جستجو کسب و کار"
            className="w-full bg-transparent text-right text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <Search className="w-4 h-4 text-gray-500" />
        </div>

        {/* منوی همبرگری موبایل */}
        <button
          onClick={() => setShowMobileSearch((p) => !p)}
          className="block w-10 h-10 rounded-xl bg-gray-100 md:hidden flex items-center justify-center"
        >
          <Menu className="w-5 h-5 text-gray-800" />
        </button>
      </div>

      {/* سرچ موبایل (بازشونده) */}
      {showMobileSearch && (
        <div className="mt-4 md:hidden">
          <div className="flex items-center rounded-xl bg-[#F3F4F6] px-4 py-3">
            <input
              type="text"
              placeholder="جستجو کسب و کار"
              className="flex-1 bg-transparent text-right text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      )}

      {/* منوی لینک‌های دسکتاپ */}
      <nav className="hidden md:flex justify-end mt-6">
        <ul className="flex gap-8 text-sm font-medium text-gray-700">
          <li>
            <a href="#" className="transition hover:text-[#007AFF]">
              شرکت‌ها
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#007AFF]">
              فرصت‌های شغلی
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#007AFF]">
              اخبار و رویدادها
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#007AFF]">
              درباره ما
            </a>
          </li>
          <li>
            <a href="#" className="transition hover:text-[#007AFF]">
              تماس با ما
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

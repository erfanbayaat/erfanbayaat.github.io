import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

// وارد کردن تصاویر
import snapImage from "../assets/PopularCompany3.jpg";
import digikalaImage from "../assets/PopularCompany4.jpg";
import aparatImage from "../assets/PopularCompany1.jpg";
import zoodfoodImage from "../assets/PopularCompany2.png";

const companies = [
  {
    name: "اسنپ",
    field: "تجارت الکترونیک",
    image: snapImage,
    tags: [
      { label: "مخاطبین جدید", value: "۳۱٬۳۹۴" },
      { label: "سرمایه‌گذاران", value: "۳۹۸" },
    ],
    location: "تهران، ایران",
  },
  {
    name: "دیجی‌کالا",
    field: "فروشگاه اینترنتی",
    image: digikalaImage,
    tags: [
      { label: "مخاطبین جدید", value: "۲۵٬۱۲۰" },
      { label: "سرمایه‌گذاران", value: "۲۵۰" },
    ],
    location: "تهران، ایران",
  },
  {
    name: "آپارات",
    field: "رسانه آنلاین",
    image: aparatImage,
    tags: [
      { label: "مخاطبین جدید", value: "۱۴٬۲۰۰" },
      { label: "سرمایه‌گذاران", value: "۱۸۰" },
    ],
    location: "تهران، ایران",
  },
  {
    name: "زودفود",
    field: "سفارش غذا",
    image: zoodfoodImage,
    tags: [
      { label: "مخاطبین جدید", value: "۱۱٬۰۰۰" },
      { label: "سرمایه‌گذاران", value: "۲۱۰" },
    ],
    location: "تهران، ایران",
  },
];

const PopularCompanies = () => {
  return (
    <div className="w-full px-4 pt-6 pb-2 text-right">
      <h2 className="text-right text-lg font-bold text-gray-800 mb-4">
        شرکت‌های محبوب
      </h2>
      <div
        className="flex flex-row-reverse space-x-reverse space-x-4 overflow-x-auto pr-1"
        dir="rtl"
      >
        {companies.map((company, index) => (
          <div
            key={index}
            className="w-[242px] h-[360px] rounded-3xl bg-white shadow-md overflow-hidden flex-shrink-0 relative"
          >
            <div className="rounded-b-[40%]">
                <img
              src={company.image}
              alt={company.name}
              className="w-full h-[160px] object-cover rounded-b-[20%] overflow-hidden"
            />
            </div>

            <div className="px-4 pt-4">
              <h3 className="text-right font-semibold text-base text-gray-800">
                {company.name}
              </h3>
              <p className="text-right text-xs text-gray-500 mb-3">
                {company.field}
              </p>

              <div className="flex justify-between gap-2 mb-4">
                {company.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="w-1/2 bg-[#F6F6F6] rounded-xl py-2 text-center text-[10px]"
                  >
                    <p className="text-gray-600 font-medium">{tag.label}</p>
                    <p className="text-[#0032A0] font-bold">{tag.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-[11px] text-gray-500 px-1">
                <div className="flex items-center gap-1">
                  <IoLocationOutline size={14} />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" size={14} />
                  <span>۵</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCompanies;
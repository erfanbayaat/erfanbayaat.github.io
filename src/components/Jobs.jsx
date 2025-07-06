import React from "react";
import { IoIosArrowBack } from "react-icons/io";

// ایمپورت لوگوها
import asiatekLogo from "../assets/asiatek.png";
import bluLogo from "../assets/blu.png";
import farabiLogo from "../assets/farabi.png";
import bimaBazarLogo from "../assets/bimeBazar.png";
import alibabaLogo from "../assets/alibaba.png";

const jobs = [
  { name: "آسیاتک", logo: asiatekLogo, positions: 16 },
  { name: "بلو بانک", logo: bluLogo, positions: 12 },
  { name: "کارگزاری فارابی", logo: farabiLogo, positions: 11 },
  { name: "بیمه بازار", logo: bimaBazarLogo, positions: 14 },
  { name: "گروه علی‌بابا", logo: alibabaLogo, positions: 18 },
];

const JobOpportunities = () => {
  return (
    <div className="w-full px-4 py-8 bg-white text-right flex flex-col items-center">
      {/* هدر */}
      <div className="w-full flex justify-between items-center flex-row-reverse mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">فرصت‌های شغلی</h2>
        <IoIosArrowBack className="text-2xl font-bold text-gray-800" />
      </div>

      {/* لیست فرصت‌های شغلی */}
      <div className="w-full">
        {/* دسکتاپ گرید */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 pt-10">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative w-[228px] h-[215px] bg-[#F9F9F9] rounded-[24px] shadow-md flex flex-col items-center pt-12 pb-4 text-center"
            >
              {/* لوگو */}
              <div className="absolute top-[-32px] w-[64px] h-[64px] bg-white rounded-[16px] shadow-md flex items-center justify-center">
                <img
                  src={job.logo}
                  alt={job.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* متن */}
              <p className="text-sm font-medium text-gray-700 mb-1 mt-2">
                {job.positions} فرصت شغلی
              </p>
              <p className="text-sm font-bold text-blue-600">{job.name}</p>
            </div>
          ))}
        </div>

        {/* موبایل کروسل */}
        <div className="flex sm:hidden gap-4 overflow-x-auto pt-10 pb-6 pr-1 scrollbar-hide">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative w-[150px] h-[170px] bg-[#F9F9F9] rounded-[24px] shadow-md flex flex-col items-center pt-12 pb-4 text-center shrink-0"
            >
              {/* لوگو */}
              <div className="absolute top-[-32px] w-[64px] h-[64px] bg-white rounded-[16px] shadow-md flex items-center justify-center">
                <img
                  src={job.logo}
                  alt={job.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* متن */}
              <p className="text-sm font-medium text-gray-700 mb-1 mt-2">
                {job.positions} فرصت شغلی
              </p>
              <p className="text-sm font-bold text-blue-600">{job.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;

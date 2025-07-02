import React from "react";

// ایمپورت عکس‌ها
import asiatekLogo from "../assets/asiatek.png";
import bluLogo from "../assets/blu.png";
import farabiLogo from "../assets/farabi.png";
import bimaBazarLogo from "../assets/bimeBazar.png";
import alibabaLogo from "../assets/alibaba.png";

const jobs = [
  { name: "آسیاتک", logo: asiatekLogo, positions: 16 },
  { name: "بلو بانک", logo: bluLogo, positions: 12 },
  { name: "فارابی", logo: farabiLogo, positions: 25 },
  { name: "دیجی‌کالا", logo: bimaBazarLogo, positions: 30 },
  { name: "آپارات", logo: alibabaLogo, positions: 18 },
];

const JobOpportunities = () => {
  return (
    <div className="w-full px-4 pt-6 pb-4 text-right">
      <h2 className="text-right text-lg font-bold text-gray-800 mb-4">
        فرصت‌های شغلی
      </h2>

      {/* المان والد برای اسکرول افقی */}
      <div className="relative overflow-x-auto">
        {/* المان داخلی برای نمایش کاردها */}
        <div className="flex flex-row-reverse gap-3 pr-1" dir="rtl">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="relative w-[152px] h-[150px] bg-[#F9F9F9] rounded-[24px] shadow-md pt-10 pb-4 px-4 flex flex-col items-center text-center flex-shrink-0"
            >
              {/* لوگو بیرون‌زده از بالا */}
              <div className="absolute -top-10 w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                <img
                  src={job.logo}
                  alt={job.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* متن‌ها */}
              <p className="text-base font-semibold text-[#1E1E1E] mb-1 mt-2">
                {job.positions} فرصت شغلی
              </p>
              <p className="text-sm font-bold text-[#0032A0]">{job.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
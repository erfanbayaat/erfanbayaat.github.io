import React from "react";

const Invesment = () => {
  const stats = [
    { number: "+496", label: "سرمایه‌گذار" },
    { number: "+11", label: "میلیارد تومان سرمایه‌گذاری" },
    { number: "+112,610", label: "شرکت فعال" },
  ];

  return (
    <div className="container py-8 px-4 flex justify-center items-center">
      <div className="flex flex-col items-end gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex flex-row-reverse items-center gap-2 relative -right-8">
              <p className="text-lg font-semibold">{stat.number}</p>
              <p className="text-xs font-normal">{stat.label}</p>
            </div>
            <div className="w-12 h-12 bg-[#FFECB3] rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invesment;
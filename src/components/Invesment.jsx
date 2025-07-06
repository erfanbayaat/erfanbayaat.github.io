import React from 'react';

const Invesment = () => {
  const stats = [
    { number: "+1396", label: "سرمایه گذار" },
    { number: "+11", label: "میلیارد تومان سرمایه گذاری" },
    { number: "+113,650", label: "شرکت فعال" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center flex-row-reverse gap-4">
              <div className="w-13 h-13 sm:w-17 sm:h-17 bg-[#FFECB3] rounded-full flex-shrink-0"></div>
              <div className="text-right flex items-center font-bold relative left-10">
                <div className="text-sm sm:text-xl t text-gray-700">
                  {stat.label}
                </div>
                <div className="text-lg sm:text-[44px] font-bold text-gray-800">
                  {stat.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Invesment;
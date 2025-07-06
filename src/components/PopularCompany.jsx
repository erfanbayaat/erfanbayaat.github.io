import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

// --------- تصاویر ---------
import snapCover from "../assets/PopularCompany3.jpg";
import snapLogo from "../assets/snapplogo.png";
import digiCover from "../assets/PopularCompany4.jpg";
import digiLogo from "../assets/dijikalalogo.png";
import alibabaCover from "../assets/PopularCompany1.jpg";
import alibabaLogo from "../assets/alibabalogo.png";
import farabiCover from "../assets/PopularCompany2.png";
import farabiLogo from "../assets/farabilogo.jpg";
import banner from "../assets/Banner.png";
// ---------------------------

const companies = [
  {
    name: "اسنپ",
    field: "تجارت الکترونیک",
    image: snapCover,
    logo: snapLogo,
    tags: [
      { label: "مخاطبین جدید", value: "۳۱٬۳۹۴" },
      { label: "سرمایه‌گذاران", value: "۳۹۸" },
    ],
    location: "تهران، ایران",
    rate: "۴٫۸",
  },
  {
    name: "دیجی‌کالا",
    field: "فروشگاه اینترنتی",
    image: digiCover,
    logo: digiLogo,
    tags: [
      { label: "مخاطبین جدید", value: "۲۵٬۱۲۰" },
      { label: "سرمایه‌گذاران", value: "۲۵۰" },
    ],
    location: "تهران، ایران",
    rate: "۴٫۶",
  },
  {
    name: "کارگزاری فارابی",
    field: "تجارت الکترونیک",
    image: farabiCover,
    logo: farabiLogo,
    tags: [
      { label: "مخاطبین جدید", value: "۱۴٬۲۰۰" },
      { label: "سرمایه‌گذاران", value: "۱۸۰" },
    ],
    location: "تهران، ایران",
    rate: "۴٫۵",
  },
  {
    name: "علی‌بابا",
    field: "تجارت الکترونیک",
    image: alibabaCover,
    logo: alibabaLogo,
    tags: [
      { label: "مخاطبین جدید", value: "۱۱٬۰۰۰" },
      { label: "سرمایه‌گذاران", value: "۲۱۰" },
    ],
    location: "تهران، ایران",
    rate: "۴٫۴",
  },
];

const PopularCompanies = () => {
  return (
    <section className="relative w-full overflow-hidden pb-10">
      {/* بک‌گراند منحنی بالا */}
      <div className="absolute top-0 left-0 w-full h-[180px] z-0 overflow-hidden">
        <img
          src={banner}
          alt="bg"
          className="w-full h-full object-cover"
          style={{
            clipPath: "ellipse(140% 100% at 50% 0%)",
          }}
        />
      </div>

      {/* انحنای سفید در پایین بک‌گراند */}
      <svg
        className="absolute top-[165px] md:top-[175px] left-0 w-full h-8 text-white z-10"
        viewBox="0 0 344 32"
        preserveAspectRatio="none"
      >
        <path d="M0 0 C86 32 258 32 344 0 L344 32 L0 32 Z" fill="currentColor" />
      </svg>

      {/* محتوا */}
      <div dir="rtl" className="relative z-20 px-4 pt-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className=" text-xl font-bold text-center text-white">
          شرکت‌های محبوب
        </h2>
        <div className="w-3xl h-1 bg-gray-400"></div>
        <div className="flex items-center text-white">
          <p>مشاهده همه</p>
          <IoIosArrowBack size={20} className="text-white" />
        </div>
        </div>
        

        {/* کارت‌ها */}
        <div
          className="
            flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar
            md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none
          "
        >
          {companies.map((c, idx) => (
            <article
              key={idx}
              className="
                flex-none snap-center bg-white rounded-3xl shadow-xl overflow-hidden
                w-[260px] sm:w-[280px] h-[400px]
                md:w-full md:h-[420px]
              "
            >
              {/* تصویر بالا */}
              <div className="relative h-[140px]">
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* بدنه کارت */}
              <div className="px-5 pt-5 pb-5">
                {/* نام و لوگو */}
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="w-10 h-10 object-contain rounded-md border border-gray-100 shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{c.name}</h3>
                    <span className="text-sm text-gray-500">{c.field}</span>
                  </div>
                </div>

                {/* تگ‌ها */}
                <div className="flex gap-3 mb-5">
                  {c.tags.map((tag, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-xl border border-gray-200 py-2 px-1 text-center"
                    >
                      <span className="block text-xs text-gray-500">
                        {tag.label}
                      </span>
                      <span className="font-bold text-[#0032A0]">
                        {tag.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* مکان و امتیاز */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <IoLocationOutline size={16} />
                    <span>{c.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-400" size={16} />
                    <span>{c.rate}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCompanies;

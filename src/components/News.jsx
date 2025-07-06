import React from "react";
import { CalendarDays, User } from "lucide-react";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import blueBg from "../assets/Banner.png"; // ← تصویر بک‌گراند آبی

const News = () => {
  const newsData = [
    {
      title: "اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست",
      desc: "در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر روزانه در سرویس خودرو و پیک را زد.",
      date: "۱۴۰۲/۱۲/۱۶",
      author: "فرهاد رضوی",
      category: "تجارت الکترونیک",
      img: news1,
    },
    {
      title: "بار دیگر اسنپ از دسترس خارج شد",
      desc: "بار دیگر اسنپ از دسترس کاربران خارج شد و بهمن هم تکرار شد.",
      date: "۱۴۰۲/۱۱/۱۰",
      author: "امیر بهادری",
      category: "تجارت الکترونیک",
      img: news2,
    },
    {
      title: "همکاری جدید اسنپ با فروشگاه‌ها",
      desc: "اسنپ با فروشگاه‌های زنجیره‌ای برای سرویس سریع خرید قرارداد بست.",
      date: "۱۴۰۲/۱۰/۲۰",
      author: "سارا محسنی",
      category: "فناوری",
      img: news1,
    },
    {
      title: "توسعه اسنپ‌مارکت در شهرهای جدید",
      desc: "اسنپ‌مارکت فعالیت خود را در شهرهای شمالی گسترش داد.",
      date: "۱۴۰۲/۰۹/۰۸",
      author: "میلاد رضایی",
      category: "بازار",
      img: news2,
    },
  ];

  return (
    <div className="relative w-full bg-white pb-10 overflow-hidden md:hidden">
      {/* تصویر پس‌زمینه آبی */}
      <div className="absolute top-0 left-0 w-full h-[180px] z-0 overflow-hidden">
        <img
          src={blueBg}
          alt="bg"
          className="w-full h-full object-cover"
          style={{
            clipPath: "ellipse(140% 100% at 50% 0%)", // انحنای بالا
          }}
        />
      </div>

      <div className="relative z-10 px-4 pt-6">
        {/* تیتر سفید بالای بخش */}
        <h2 className="text-center text-white text-lg font-bold mb-6">
          تازه ترین اخبار
        </h2>

        {/* کارت‌ها با اسکرول افقی و استایل دقیق‌تر */}
        <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="flex-none w-[288px] h-[338px] bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] text-right snap-center"
            >
              {/* تصویر بالا */}
              <div className="overflow-hidden rounded-t-[24px]">
                <img
                  src={item.img}
                  alt="news"
                  className="w-full h-[120px] object-cover"
                />
              </div>

              {/* محتوا */}
              <div className="p-4 flex flex-col justify-between h-[calc(100%-120px)]">
                <div>
                  <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                  <h3 className="text-sm font-bold leading-[1.4] mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {item.author}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

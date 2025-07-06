import React from "react";
import img1 from "../assets/instruction_1.png";
import img2 from "../assets/instruction_2.png";

const InstructionCard = ({ imageSrc, text }) => {
  return (
     <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-[320px] h-[170px] sm:w-[390px] sm:h-[270px]">
      {/* بخش تصویر - نمایش کامل بدون برش */}
      <div className="w-full h-[85px] sm:h-[135px] flex items-center justify-center bg-gray-100">
        <img
          src={imageSrc}
          alt="Instruction Icon"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex-1 flex items-center justify-center px-2 text-center text-sm font-semibold text-gray-800 sm:text-base">
        {text}
      </div>
    </div>
  );
};

const Instruction = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
      <InstructionCard imageSrc={img2} text="شرکت‌های مورد علاقت رو پیدا کن" />
      <InstructionCard imageSrc={img1} text="کسب و کارهای مناسب رو پیدا کن" />
      <InstructionCard imageSrc={img2} text="با کسب و کارها ارتباط بگیر" />
    </div>
  );
};

export default Instruction;

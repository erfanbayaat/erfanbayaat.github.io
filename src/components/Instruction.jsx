import React from "react";
import img1 from "../assets/instruction_1.png";
import img2 from "../assets/instruction_2.png";

const InstructionCard = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col items-center w-full bg-white rounded-xl shadow-md overflow-hidden mb-4">
      <div className="relative w-full h-32 flex items-center justify-center ">
        <img
          src={imageSrc}
          alt="Instruction Icon"
          className="w-full h-full object-contain z-10 overflow-hidden"
        />
      </div>
      <div className="p-4 text-center text-sm font-semibold text-gray-800">
        {text}
      </div>
    </div>
  );
};

const Instruction = () => {
  return (
    <div className="container mx-auto px-4 py-4 max-w-xs">
      <InstructionCard
        className="mb-6"
        imageSrc={img2}
        text="شرکت‌های مورد علاقت رو پیدا کن"
      />
      <InstructionCard
      className="mb-6"
        imageSrc={img1}
        text="کسب و کارهای مناسب رو پیدا کن"
      />
      <InstructionCard
        imageSrc={img2}
        text="با کسب و کارها ارتباط بگیر"
      />
    </div>
  );
};

export default Instruction;

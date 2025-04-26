import React from "react";
import Image from "next/image";

interface GlimpseCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const GlimpseCard = ({ title, description, imgSrc }: GlimpseCardProps) => {
  return (
    <div className="box-border w-full max-w-[536px] min-h-[300px] bg-white border-1 mb-8 mx-auto shadow-[-4px_6px_1px_rgba(0,0,0,0.25)]">
      <div className="w-full h-full flex flex-col items-center p-4 relative">
        {/* Border elements */}
        <div className="w-[calc(100%+16px)] h-[4px] rounded-2xl bg-black absolute top-0 -left-2"></div>
        <div className="w-[4px] h-[calc(100%+16px)] rounded-2xl bg-black absolute left-0 -top-2 shadow-[-6px_4px_1px_rgba(0,0,0,0.25)]"></div>
        <div className="w-[4px] h-[calc(100%+16px)] rounded-2xl bg-black absolute right-0 -top-2"></div>
        <div className="w-[calc(100%+16px)] h-[4px] rounded-2xl bg-black absolute bottom-0 -left-2 shadow-[-4px_6px_1px_rgba(0,0,0,0.25)]"></div>

        {/* Image */}
        <Image
          src={imgSrc}
          alt="Glimpse"
          width={463}
          height={350}
          className="w-full max-w-[463px] h-[200px] sm:h-[250px] md:h-[350px] object-cover border-2"
          loading="lazy"
        />

        {/* Content */}
        <div className="w-full max-w-[90%] py-4 flex flex-col items-start justify-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[36px] font-bold">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[24px] mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GlimpseCard;

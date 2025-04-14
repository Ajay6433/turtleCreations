import React from "react";

interface GlimpseCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const GlimpseCard = ({ title, description, imgSrc }: GlimpseCardProps) => {
  return (
    <div className="box-border w-full max-w-[536px] min-h-[300px] bg-white border-1 mb-8 mx-auto">
      <div className="w-full h-full flex flex-col items-center p-4 relative">
        {/* Border elements */}
        <div className="w-full h-[4px] rounded-2xl bg-black absolute top-0"></div>
        <div className="w-[4px] h-full rounded-2xl bg-black absolute left-0 -top-3"></div>
        <div className="w-[4px] h-full rounded-2xl bg-black absolute right-0 -top-3"></div>
        <div className="w-full h-[4px] rounded-2xl bg-black absolute bottom-0"></div>

        {/* Image */}
        <img
          src={imgSrc}
          alt="Glimpse"
          className="w-full max-w-[463px] h-[200px] sm:h-[250px] md:h-[350px] object-cover border-2"
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

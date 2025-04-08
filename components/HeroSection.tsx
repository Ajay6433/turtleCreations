import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[700px] max-w-[1251px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 bg-[#F7FCFC] px-4 lg:px-0 py-10">
      
      {/* Left Content */}
      <div className="flex flex-col items-start lg:items-start text-center lg:text-left">
        
        {/* Star Image */}
        <div>
          <Image width={100} height={100} alt="Start-Image" src="/turtle.png" />
        </div>

        {/* Heading */}
        <div className="max-w-[618px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black text-start leading-tight">
            "Plan, Book, Celebrate- <br /> Effortlessly!"
          </h3>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#FBDBD5] text-black font-medium rounded-full border-4 border-black transition hover:bg-[#f5c2bb]">
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-[400px] h-[300px] relative">
        <Image 
          alt="Hero-Image"
          src="/hero-Rectangle.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Image 
        alt="Hero-Image"
        src="/turtle.png"
        width={400}
        height={300}
        className="hidden lg:block absolute top-48 right-[450px] opacity-10"/>
    </div>
  );
};

export default HeroSection;

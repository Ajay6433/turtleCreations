import Image from "next/image";
import React from "react";
import ServicesFrame from "./ServicesFrame";

const HeroSection = () => {
  return (
    <div className="w-full h-[700px] max-w-[1251px] mx-auto flex flex-col lg:flex-row items-center justify-evenly gap-6 lg:gap-0 bg-[#F7FCFC] px-4 lg:px-0 py-10 overflow-hidden">
      
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
       <ServicesFrame/>
      </div>
      <Image 
        alt="Hero-Image"
        src="/turtle.png"
        width={900}
        height={700}
        className="hidden lg:block absolute top-32 right-[440px] opacity-10"/>
    </div>
  );
};

export default HeroSection;

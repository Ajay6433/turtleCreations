import React from "react";

const SendMessage = () => {
  return (
    <div className="w-[1200px] h-[466px] border-4 m-auto flex justify-center items-center ">
      <div className="w-4/5 h-3/5 flex flex-col justify-center items-center">
        <div className="w-[696px] h-[122px]  m-auto">
          <h2 className="text-[48px] font-bold bg-gradient-to-r from-[#5F8385] to-[#96BEC1] bg-clip-text text-transparent">
            Let’s plan your Eventhassle-free and unforgettable{" "}
          </h2>
        </div>
        <div className="w-[831px] h-[72px] m-auto">
          <p className="text-[28px]">
            Let’s plan your Event hassle-free and unforgettable{" "}
          </p>
        </div>
        {/* Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#F3ABCB] text-black font-medium rounded-full border-4 border-black transition hover:bg-[#f5c2bb]">
            Send us message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;

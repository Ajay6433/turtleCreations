import Image from "next/image";
import React from "react";

const SendMessage = () => {
    return (
        <div className="w-[90%] max-w-[1200px] min-h-[466px] border-3 m-auto relative flex justify-center items-center px-4 py-8 mb-32 boxShadow">
            <Image src="/smallIcons/sendMsgVector.png" className="absolute -top-8 md:right-88" width={100} height={100} alt="VectorStar"/>
            <div className="w-full max-w-4/5 flex flex-col justify-center items-center">
                <div className="w-full max-w-[696px] text-center">
                    <h2 className="text-[32px] md:text-[48px] font-bold bg-gradient-to-r from-[#5F8385] to-[#96BEC1] bg-clip-text text-transparent leading-tight">
                        Let's plan your Eventsdajnfjsndjkfnkjnsdf hassle-free and unforgettable{" "}
                    </h2>
                </div>
                <div className="w-full max-w-[831px] mt-4 text-center">
                    <p className="text-[20px] md:text-[28px]">
                        Let's plan your Event hassle-free and unforgettable{" "}
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

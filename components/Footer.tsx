import React from "react";

const Footer = () => {
    return (
        <div className="h-auto min-h-[237px] w-full bg-[linear-gradient(to_bottom_right,_#335E60,_#6AC1C6)] max-w-[1440px] mx-auto mt-10 px-4 lg:px-0 flex items-center justify-between">
            <div className="w-full max-w-[1341px] flex flex-col md:flex-row items-center justify-between py-8 md:py-12 lg:px-8 mx-auto space-y-6 md:space-y-0">
                <div className="flex items-center justify-center space-x-4">
                        <span className="text-[24px] md:text-[36px] text-white">✦</span> 
                        <p className="text-[24px] md:text-[36px] text-white">Turtle Creations</p>
                </div>
                <div className="text-center md:text-left">
                        <p className="text-[18px] md:text-[24px] text-white mb-2">Follow us on</p>
                        <div className="flex items-center space-x-4">
                                <span className="text-[24px] md:text-[36px] text-white">✦</span> 
                                <span className="text-[24px] md:text-[36px] text-white">✦</span> 
                                <span className="text-[24px] md:text-[36px] text-white">✦</span>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

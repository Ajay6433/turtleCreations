import React from 'react'
import Image from 'next/image'


const GlimpseHeading = () => {
    return (
        <div className='h-20 sm:h-24 md:h-32 flex items-center justify-center border-t-2 mb-6 sm:mb-8 md:mb-10'>
                <div>
                        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-black font-semibold relative">
                                Some Glimpse
                                <Image 
                                    src="/smallIcons/glimpse.png" 
                                    alt="glimpseHeading" 
                                    width={120} 
                                    height={120} 
                                    className="inline-block ml-2 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]" 
                                />
                                <Image 
                                    src="/smallIcons/glimpseUnderline.png" 
                                    alt="glimpseHeading" 
                                    width={220} 
                                    height={30} 
                                    className="inline-block ml-2 absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 right-16 sm:right-20 md:right-24 lg:right-32 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px]" 
                                />
                        </h2>
                </div>
        </div>
    )
}

export default GlimpseHeading
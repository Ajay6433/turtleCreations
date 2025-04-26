import React from 'react'
import Image from 'next/image'


const GlimpseHeading = () => {
    return (
        <div className='h-20 sm:h-24 md:h-32 flex items-center justify-center border-t-2 mb-6 sm:mb-8 md:mb-10'>
                <div>
                        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-black font-semibold">
                                Some Glimpse
                                <Image src="/images/glimpse.png" alt="glimpseHeading" width={200} height={50} className="inline-block ml-2" />
                        </h2>
                </div>
        </div>
    )
}

export default GlimpseHeading
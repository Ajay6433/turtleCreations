import React from 'react'
import Image from 'next/image'

const GlimpseCards = () => {
    return (
        <div className='min-h-[600px] lg:h-[850px] flex items-center justify-center w-[100vw] max-w-[1251px] mx-auto mt-10 px-4 lg:px-0'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-[800px]'>
                        <Image
                                src="/glimpse.png"
                                alt="star"
                                width={100}
                                height={100}
                                className="w-full h-auto"
                        />
                        <Image
                                src="/glimpse.png"
                                alt="star"
                                width={100}
                                height={100}
                                className="w-full h-auto"
                        />
                        <Image
                                src="/glimpse.png"
                                alt="star"
                                width={100}
                                height={100}
                                className="w-full h-auto"
                        />
                        <Image
                                src="/glimpse.png"
                                alt="star"
                                width={100}
                                height={100}
                                className="w-full h-auto"
                        />
                </div>
        </div>
    )
}

export default GlimpseCards
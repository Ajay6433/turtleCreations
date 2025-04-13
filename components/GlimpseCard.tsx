import React from 'react'

interface GlimpseCardProps {
    title: string;
    description: string;
    imgSrc: string;
}

const GlimpseCard = ({title, description, imgSrc}: GlimpseCardProps) => {
  return (
    <div className='w-full max-w-[536px] min-h-[300px] md:h-[536px] bg-white border-1'>
        <div className='w-full h-full flex flex-col items-center justify-center p-4'>
            <img src={imgSrc} alt="Glimpse" className='w-full h-[200px] md:h-[55%] object-cover' />
            <h2 className='text-xl md:text-[24px] font-bold mt-4'>{title}</h2>
            <p className='text-sm md:text-[16px] mt-2 text-center'>{description}</p>
        </div>
    </div>
  )
}

export default GlimpseCard
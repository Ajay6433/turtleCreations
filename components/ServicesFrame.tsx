import React from 'react'
import Image from 'next/image'

const ServicesFrame = () => {
  return (
    <div className="relative w-[350px] h-[350px] mx-auto bg-transparent">
      {/* Outer hand-drawn frame */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="330" height="330" stroke="#222" strokeWidth="4" />
          {/* Decorative lines */}
          <line x1="0" y1="0" x2="30" y2="0" stroke="#222" strokeWidth="4"/>
          <line x1="0" y1="0" x2="0" y2="30" stroke="#222" strokeWidth="4"/>
          <line x1="350" y1="0" x2="320" y2="0" stroke="#222" strokeWidth="4"/>
          <line x1="350" y1="0" x2="350" y2="30" stroke="#222" strokeWidth="4"/>
          <line x1="0" y1="350" x2="30" y2="350" stroke="#222" strokeWidth="4"/>
          <line x1="0" y1="350" x2="0" y2="320" stroke="#222" strokeWidth="4"/>
          <line x1="350" y1="350" x2="320" y2="350" stroke="#222" strokeWidth="4"/>
          <line x1="350" y1="350" x2="350" y2="320" stroke="#222" strokeWidth="4"/>
          {/* Top right squiggle */}
          <path d="M335 15 Q345 30 335 45" stroke="#222" strokeWidth="4" fill="none"/>
        </svg>
      </div>
      {/* Inner white square */}
      <div className="absolute left-[30px] top-[30px] w-[290px] h-[290px] bg-white z-10 flex items-center justify-center">
        {/* Inner gray square */}
        <div className="relative w-[220px] h-[220px] bg-gray-200 flex items-center justify-center">
          {/* Smiley face */}
          <svg width="90" height="90" viewBox="0 0 90 90" className="absolute inset-0 m-auto">
            <ellipse cx="30" cy="35" rx="4" ry="6" fill="#222"/>
            <ellipse cx="60" cy="35" rx="4" ry="6" fill="#222"/>
            <path d="M30 60 Q45 75 60 60" stroke="#222" strokeWidth="4" fill="none" />
          </svg>
        </div>
        {/* Top dots */}
        <div className="absolute left-1/2 -top-4 -translate-x-1/2 flex space-x-6">
          <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
          <span className="w-4 h-4 bg-black rounded-full inline-block"></span>
        </div>
      </div>
      {/* Lightbulb icon (left) */}
      <div className="absolute -left-12 top-1/6 z-20">
        <Image
          src="/smallIcons/lightbulb.png"
          alt="lightbulb"
          width={100}
          height={100}
        />
      </div>
      {/* Blue star (bottom right) */}
      <div className="absolute -right-8 bottom-6 z-20">
        <Image
          src="/smallIcons/blueStar.png"
          alt="blue star"
          width={70}
          height={70}
        />
      </div>
    </div>
  )
}

export default ServicesFrame
import React from 'react'
import Image from 'next/image'

const ServicesHeading = () => {
  return (
    <div className="relative w-full max-w-[1251px] mx-auto mt-10 px-4 lg:px-0 py-8 bg-[#f8fcfc] overflow-visible">
      {/* Top Left Star + Ellipse */}
      <div className="absolute left-0 top-0 z-10">
        <Image
          src="/smallIcons/servicesEllipse.png"
          alt="Ellipse"
          width={60}
          height={60}
          className="absolute left-0 top-0"
        />
        <Image
          src="/smallIcons/servicesStar.png"
          alt="star"
          width={60}
          height={60}
          className="absolute left-0 top-0"
        />
      </div>
      {/* Top Right Star */}
      <div className="absolute -right-1 top-6 z-10">
        <Image
          src="/smallIcons/servicesVector.png"
          alt="star"
          width={70}
          height={70}
        />
      </div>
      {/* Heading and Smiley */}
      <div className="flex flex-col items-center justify-center relative">
        <div className="relative flex">
          <h2 className="text-[2rem] font-semibold text-black text-center">
            Services we’re{' '}
            <span className="relative">
              <span className="z-0 absolute left-0 bottom-1 w-full h-5 bg-[#f9d9d7] rounded-md"></span>
              <span className="relative z-10">providing</span>
            </span>
          </h2>
          {/* Smiley */}
          <span className='absolute right-4 sm:-right-10'>
            <Image
              src="/smallIcons/servicesSmile.png"
              alt="smile"
              width={40}
              height={40}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default ServicesHeading
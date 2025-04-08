import React from 'react'
import Image from 'next/image'

const ServicesHeading = () => {
  return (
    <>
    <div className="flex justify-between items-center w-[100vw] max-w-[1251px] mx-auto mt-10 px-4 lg:px-0">
        <div className="flex items-center max-w-1/6">
          <Image
            src="/smallIcons/servicesStar.png"
            alt="star"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center">
          <p>Services we're providing</p>
          <Image
            src="/smallIcons/servicesSmile.png"
            alt="star"
            width={100}
            height={100}
            className="w-full h-auto"
          />

        </div>
        <div>
          <Image
            src="/smallIcons/servicesVector.png"
            alt="star"
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </div>

      </div></>
  )
}

export default ServicesHeading
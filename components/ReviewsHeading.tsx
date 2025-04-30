import React from 'react';
import Image from 'next/image';

const ReviewsHeading = () => {
  return (
    <div className='h-20 sm:h-24 md:h-32 flex items-center justify-center border-t-2'>
      <div>
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-black font-semibold relative">
          Reviews
          <Image
            src="/smallIcons/blueStar.png"
            alt="reviewsHeading"
            width={60}
            height={60}
            className="inline-block ml-2 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] lg:w-[60px] lg:h-[60px]"
          />
          
        </h2>
      </div>
    </div>
  );
};

export default ReviewsHeading;
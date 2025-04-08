'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CorporatePartyCarousel = () => {
  // JSON-based Text Data
  const textSlides = [
    { id: 1, text: "Networking Opportunities" },
    { id: 2, text: "Professional Gatherings" },
    { id: 3, text: "Corporate Bonding" },
    { id: 4, text: "Team Celebrations" },
    { id: 5, text: "Exclusive Events" }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div
      className="w-full py-6 px-4"
      style={{
        background: `linear-gradient(
          to left, 
          rgba(148,199,202,1) 0%, 
          rgba(111,149,151,0.4) 50%, 
          rgba(92,124,126,0.6) 75%, 
          rgba(73,99,100,0.2) 100%)`
      }}
    >
      <Slider {...settings}>
        {textSlides.map((slide) => (
          <div key={slide.id} className="px-2">
            <div className="text-white text-lg font-semibold px-6 py-3 text-center w-full">
              {slide.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CorporatePartyCarousel;

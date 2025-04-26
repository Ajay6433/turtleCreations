'use client';
import React from 'react';
import { useEffect, useState } from 'react';

const EventStatsGrid = () => {

  const useIsLargeScreen = () => {
    const [isLarge, setIsLarge] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      const update = () => setIsLarge(mediaQuery.matches);
      update();
  
      mediaQuery.addEventListener('change', update);
      return () => mediaQuery.removeEventListener('change', update);
    }, []);
  
    return isLarge;
  };

  const isLarge = useIsLargeScreen();

  return (
    <div
      id='events-container'
      
      style={
        isLarge
          ? {
              display: 'grid',
              gridTemplateAreas: `
                'events          corpEvents     outdoorEvents'
                'happyCustomers  corpDetails    outdoorDetails'
                'happyCustomers  eduEvents      personalEvents'
                'happyCustomers  eduDetails     personalDetails'
              `,
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: '1fr .3fr 1fr .3fr',
              marginBottom: '2rem',
            }
          : {
            border: '2px solid black',
            width: '90%',
            margin: '0 auto',
          }
      }
    >
      {/* Events Stat */}
      <div className='first flex items-center justify-center px-6 py-10 text-3xl font-bold border border-black bg-white'>
        <div>
          <p>550+</p>
          <span className="block text-base font-normal">Events</span>
        </div>
      </div>

      {/* Happy Customers Stat */}
      <div className='second flex items-center justify-center px-6 py-10 text-3xl font-bold border border-black bg-white'>
        <div>
          <p>3M+</p>
          <span className="block text-base font-normal">Happy Customers</span>
        </div>
      </div>

      {/* Corporate Event */}
      <div className='third border border-black px-6 py-10 bg-white'>
        <div className="flex flex-col justify-center h-full space-y-4">
          <div className="bg-green-200 rounded-full w-12 h-12 flex items-center justify-center">
            🎤
          </div>
          <h3 className="font-medium text-[32px]">Corporate Event</h3>
          <p className="text-[18px]">Professional, Polished, and Perfect—We Make it Easy for You!!</p>
        </div>
      </div>

      <div className='fourth border border-black px-6 py-10 flex items-center justify-center font-semibold bg-white'>
        Learn more
      </div>

      {/* Outdoor Trips */}
      <div className='fifth border border-black px-6 py-10 bg-white'>
        <div className="flex flex-col justify-center h-full space-y-4">
          <div className="bg-yellow-200 rounded-full w-12 h-12 flex items-center justify-center">
            🦋
          </div>
          <h3 className="font-medium text-[32px]">Outdoor Trips</h3>
          <p className="text-[18px]">Breathe in Nature, Leave the Planning to Us!!</p>
        </div>
      </div>

      <div className='sixth border border-black px-6 py-10 flex items-center justify-center font-semibold bg-white'>
        Learn more
      </div>

      {/* Educational Event */}
      <div className='seventh border border-black px-6 py-10 bg-white'>
        <div className="flex flex-col justify-center h-full space-y-4">
          <div className="bg-pink-200 rounded-full w-12 h-12 flex items-center justify-center">
            ✏️
          </div>
          <h3 className="font-medium text-[32px]">Educational Event</h3>
          <p className="text-[18px]">From Workshops to Seminars—We've Got You Covered</p>
        </div>
      </div>

      <div className='eighth border border-black px-6 py-10 flex items-center justify-center font-semibold bg-white'>
        Learn more
      </div>

      {/* Personal Event */}
      <div className='ninth border border-black px-6 py-10 bg-white'>
        <div className="flex flex-col justify-center h-full space-y-4">
          <div className="bg-blue-200 rounded-full w-12 h-12 flex items-center justify-center">
            🎉
          </div>
          <h3 className="font-medium text-[32px]">Personal Event</h3>
          <p className="text-[18px]">From Birthdays to Anniversaries—We Make It Magical!</p>
        </div>
      </div>

      <div className='tenth border border-black px-6 py-10 flex items-center justify-center font-semibold bg-white'>
        Learn more
      </div>
    </div>
  );
};

export default EventStatsGrid;

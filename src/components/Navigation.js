import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Navigation() {
  return (
    <div className='font-important'>
      {/* Show the flex container */}
      <div
        className='flex justify-between items-center px-[30px] py-2 h-[50px] relative'
      >
        {/* Show the left links */}
        <div className='flex text-xl'>
          <span>
            SHOP
          </span>

          <span className='pl-5'>
            STORY
          </span>
        </div>

        {/* Show the logo */}
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <img src="/logo.svg" className='h-[30px] w-[140px]' />
        </div>

        {/* Show the right button */}
        <div>
          <span className='text-xl'>
            BASKET&nbsp;

            {/* Show the number of items */}
            <span className='font-emphasized'>
              (0)
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
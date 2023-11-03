import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Product() {
  return (
    <div className='product'>
      {/* Show a grid */}
      <div className='grid grid-cols-12'>
        {/* Leave an offset */}
        <div className='col-span-1'></div>

        {/* Show the image carousel on left */}
        <div className='product__carousel col-span-5'>

        </div>

        {/* Leave an offset */}
        <div className='col-span-1'></div>

        {/* Show the text section here */}
        <div className='product__content col-span-4 max-w-[450px]'>
          {/* Show the product links */}
          <div className='flex justify-between'>
            <span className='uppercase font-important'>
              London Dry
            </span>

            <span className='uppercase font-important font-bold underline'>
              Spiced Blend
            </span>

            <span className='uppercase font-important'>
              Aperitif
            </span>

            <span className='uppercase font-important'>
              Trio
            </span>
          </div>

          {/* Show a horizontal divider */}
          <div className='h-[1px] w-full bg-black my-4'></div>

          {/* Show the product name */}
          <div className='text-3xl'>
            <div className='uppercase font-important'>
              SPICED BLEND
            </div>
            {/* Show the subtext */}
            <div>
              <span className='font-emphasized'>
                made with&nbsp;
              </span>
              <span>
                Caribbean Rum
              </span>
            </div>
          </div>

          {/* Show additional information */}
          <div className='flex justify-between my-6 text-xl'>
            <span>
              Blended <span className='font-emphasized'>in</span> England
            </span>

            <span className='font-important'>
              10%/vol / 700ml
            </span>
          </div>

          {/* Show the add to cart button */}
          <button
            className='w-full text-[22px] leading-none p-3 bg-primary hover:bg-secondary transition-colors duration-300 text-white rounded-3xl'
          >
            &pound;29.95 - Add to Bag
          </button>

          {/* Show suggestive text */}
          <div className='uppercase mt-3 text-center text-secondary font-important'>
            Free UK Delivery
          </div>

          {/* Show a horizontal divider */}
          <div className='h-[1px] w-full bg-black mt-4 mb-6'></div>

          {/* Show the carousels */}
        </div>

        {/* Leave an offset */}
        <div className='col-span-1'></div>
      </div>
    </div>
  );
}
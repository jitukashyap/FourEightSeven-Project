import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Product() {
  return (
    <div className='product'>
      {/* Show a grid */}
      <div className='grid grid-cols-12'>
        {/* Show the image carousel on left */}
        <div className='product__carousel col-span-6'>

        </div>

        {/* Show the text section here */}
        <div className='product__content col-span-6'>

        </div>
      </div>
    </div>
  );
}
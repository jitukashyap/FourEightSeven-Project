import { useState, useEffect } from 'react';

export default function Navigation() {
  const [shouldHaveWhiteBackground, setShouldHaveWhiteBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !shouldHaveWhiteBackground) {
        setShouldHaveWhiteBackground(true);
      }
      else if (window.scrollY <= 300 && shouldHaveWhiteBackground) {
        setShouldHaveWhiteBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldHaveWhiteBackground]);

  return (
    <div className={`font-important sticky top-0 transition-colors duration-500 ${shouldHaveWhiteBackground ? "bg-white" : ""}`}>
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
          <img src="/logo.svg" className='h-[30px] w-[140px]' alt='Company Logo' />
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
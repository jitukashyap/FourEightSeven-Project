import Accordion from "../components/Accordion";
import ImageSlider from "../components/ImageSlider";

export default function Product() {
  return (
    <div className='product mt-12'>
      {/* Show a grid */}
      <div className='grid grid-cols-12'>
        {/* Leave an offset */}
        <div className='col-span-1'></div>

        {/* Show the image carousel on left */}
        <div className='product__carousel col-span-5 pl-12'>
          <ImageSlider />
        </div>

        {/* Leave an offset */}
        <div className='col-span-1'></div>

        {/* Show the text section here */}
        <div className='product__content flex items-center col-span-4 max-w-[450px]'>
          <div>
            {/* Show the product links */}
            <div className='flex justify-between'>
              <span className='uppercase font-important text-sm'>
                London Dry
              </span>

              <span className='uppercase font-important text-sm font-bold underline'>
                Spiced Blend
              </span>

              <span className='uppercase font-important text-sm'>
                Aperitif
              </span>

              <span className='uppercase font-important text-sm'>
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
            <div className='h-[1px] w-full bg-black mt-4'></div>

            {/* Show the carousels */}
            <Accordion />
          </div>
        </div>

        {/* Leave an offset */}
        <div className='col-span-1'></div>
      </div>
    </div>
  );
}
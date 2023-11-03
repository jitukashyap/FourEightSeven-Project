import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useSwipeable } from 'react-swipeable';

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  const [animationProps, setAnimation] = useSpring(() => ({
    opacity: 1,
    from: {
      opacity: 0
    }
  }));

  const handlePaginationClick = (newIndex) => {
    setAnimation({
      opacity: 0.6,
      config: {
        duration: 150,
      },
      onRest: () => {
        setIndex(newIndex);
        setAnimation({ opacity: 1 });
      }
    });
  }

  const swipeHandlers = useSwipeable({
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,

    onSwipedLeft: () => {
      // If we're at the end of the array go back to the start
      if (index === images.length - 1) {
        handlePaginationClick(0);
        return;
      }

      // Otherwise
      handlePaginationClick(index + 1);
    },

    onSwipedRight: () => {
      // If we're at the start of the array go back to the end
      if (index === 0) {
        handlePaginationClick(images.length - 1);
        return;
      }

      // Otherwise
      handlePaginationClick(index - 1);
    }
  });

  const images = [
    "/images/product-slide-1.png",
    "/images/product-slide-2.png",
    "/images/product-slide-3.png",
  ];

  return (
    <div className="image-slider w-[528px] p-3">
      <div
        className='image-container relative flex justify-center items-center mx-auto rounded-[50%] h-0 pb-[120%] border border-[#1d1d1b]'
        {...swipeHandlers}
      >
        {/* For each image */}
        {images.map((image, i) => (
          <animated.img
            key={i}
            src={image}
            alt={`Slide ${i + 1}`}
            className="select-none"
            draggable="false"
            onDragStart={(e) => e.preventDefault()}
            style={{
              ...animationProps,
              visibility: index === i ? "visible" : "hidden",
              height: '482px',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      {/* Show the pagination bullets */}
      <div className='pagination flex justify-center pt-4'>
        {images.map((image, i) => (
          <div
            key={i}
            className={`rounded-full w-[18px] h-[18px] mx-1 cursor-pointer ${index === i ? 'bg-primary' : 'border border-primary'}`}
            onClick={() => handlePaginationClick(i)}
          ></div>
        ))}
      </div>
    </div>
  );
}

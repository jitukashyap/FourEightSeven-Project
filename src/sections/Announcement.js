import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Announcement() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const [animationStyle, setAnimation] = useSpring(() => ({
    from: { opacity: 1, height: '50px' },

    onRest: () => {
      // Hide the announcement bar after the animation is complete
      setShowAnnouncement(false);
    }
  }))

  const handleClose = () => {
    setAnimation.start({
      to: { opacity: 0, height: '0px' },
    });
  }

  return showAnnouncement ? (
    // Show a closeable announcement bar at the top of the page
    <animated.div
      style={animationStyle}
      className="bg-secondary text-white font-important text-sm flex justify-center items-center relative"
    >
      <div className="text-center">
        Use code <span className="font-bold">DECEM10</span> for <span className="font-bold">&pound;10 OFF</span> your first order
      </div>

      {/* Show the close icon which on click hides it */}
      <div className="absolute right-0 mr-2 cursor-pointer" onClick={handleClose}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </animated.div>
  ) : null;
}
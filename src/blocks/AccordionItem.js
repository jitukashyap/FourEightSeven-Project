import { useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function AccordionItem({ title, text, isOpen, onClick }) {
  const textContentRef = useRef();

  // Get spring animation
  const springStyle = useSpring({
    height: isOpen ? `${textContentRef.current.scrollHeight}px` : '0px',
    opacity: isOpen ? 1 : 0,
  });

  const { opacity } = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { tension: 220, friction: 20 }
  });

  useEffect(() => {
    if (isOpen && textContentRef.current) {
      textContentRef.current.style.height = 'auto';
    }
  }, [isOpen])

  return (
    <div className="accordion-item border-b border-primary overflow-hidden">
      <div className="font-important uppercase flex justify-between py-3 cursor-pointer" onClick={onClick}>
        <span>
          {title}
        </span>

        <span className={`icon ${!isOpen ? 'open' : ''}`} />
      </div>

      <animated.div style={{ overflow: isOpen ? 'visible' : 'hidden', ...springStyle }} ref={textContentRef}>
        <div className="content pb-8">{text}</div>
      </animated.div>
    </div>
  );
}
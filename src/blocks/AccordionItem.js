import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

export default function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const textContentRef = useRef();

  // Get spring animation
  const { height } = useSpring({
    from: { height: '0px' },
    to: { height: isOpen ? `${textContentRef.current.clientHeight}px` : '0px' },
  });

  return (
    <div className="accordion-item">
      <div className="title flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <span>
          {title}
        </span>

        <span>{isOpen ? "-" : "+"}</span>
      </div>

      <animated.div style={{ overflow: 'hidden', ...height }} ref={textContentRef}>
        <div className="content">{text}</div>
      </animated.div>
    </div>
  );
}
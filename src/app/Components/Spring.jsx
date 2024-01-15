import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function Spring() {
    const [isVisible, setIsVisible] = useState(false);

  const fadeIn = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > 100); // You can adjust the scroll threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '100vh', paddingTop: '50vh' }}>
    <animated.div style={fadeIn}>
      <h1 className="text-4xl text-center">Scroll down to see the transition!</h1>
    </animated.div>

    <div style={{ height: '200vh' }}>
      {/* Additional content to make scrolling possible */}
    </div>
  </div>
  )
}

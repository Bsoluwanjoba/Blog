"use client"
import React from 'react'
import New from './Components/New'
import Cart from './Components/Cart'
import Comments from './Components/Comments'
import Suscribe from './Components/Suscribe'
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Demo from './Components/Demo'





export default function Page() {
  const [isVisible, setIsVisible] = useState(false);

  const slideInLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? 0 : -50,
    from: { opacity: 0, marginLeft: -50 },
    config: { duration: 800 },
  });
   const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollY > 10); // You can adjust the scroll threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="py-[5em]">

      <New />
    
      <animated.div style={slideInLeft}>
      <Cart />
      <Demo />
      <Comments />
      <Suscribe />
      </animated.div>
   </div>
  )
}

"use client"
import React, { useRef } from 'react';
import './Parallax.css';

export default function Parallax() {
    const parallax = useRef();

 const handleScroll = () => {
    const scrolled = window.pageYOffset;
    parallax.current.style.transform = `translateY(${-scrolled * 0.5}px)`;
 };

 React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);


  return (
    <div className="App">
    <div className="content">
      <h1>Welcome to the parallax world!</h1>
      <p>Scroll down to see the parallax effect.</p>
    </div>
    <div className="parallax" ref={parallax}>
      <img src="https://source.unsplash.com/random/1600x900" alt="Parallax Image" />
    </div>
  </div>
  )
}

"use client"
import React from 'react'
import styles from './withvideos.module.css'
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


export default function page() {
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
    <section>
      <div className={styles.header}>
      <div className='flex flex-col justify-center items-center h-64 text-white'>
        <h2 className='text-[32px] md:text-6xl font-normal mt-[240px]'>Our Recipes With detailed Video</h2>
        <p className='text-[15px] md:text-xl'>Below are the recipes with videos for easier making process</p>
    </div>
      </div>
    
      <animated.div style={slideInLeft}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] w-[70%] p-[100px] m-auto'>
        <div>
        <iframe width="350" height="250" src="https://www.youtube.com/embed/8eITNSfct3Q?si=LmlfC6h5yn1fN6Kl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className='font-semibold mt-[20px] text-[red] text-center text-xl mr-[50px]'>Beef and Brocoli Stir-fry</h2>
          <p className='text-center mr-[50px]'><span className='font-semibold'>Author:</span>Angelina Frisps</p>
        </div>

        <div>
        <iframe width="350" height="250" src="https://www.youtube.com/embed/IEicmeRLpoM?si=qV-BUcLjIOH3h49C"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className='font-semibold mt-[20px] text-[red] text-center text-xl mr-[50px]'>Eggplant In Garlic Sauce</h2>
          <p className='text-center mr-[50px]'><span className='font-semibold'>Author:</span>John Jacob</p>
        </div>

        <div>
        <iframe width="350" height="250" src="https://www.youtube.com/embed/fOg0J2Qfh1w?si=JSK0jsTY8GjkUqTH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className='font-semibold mt-[20px] text-[red] text-center text-xl mr-[50px]'>Chinese Chicken Salad</h2>
          <p className='text-center mr-[50px]'><span className='font-semibold'>Author:</span>Nick Fury</p>
        </div>

        <div>
        <iframe width="350" height="250" src="https://www.youtube.com/embed/pNuXYzVG7us?si=8sQvkpxMyitSQvCh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className='font-semibold mt-[20px] text-[red] text-center text-xl mr-[50px]'>Cashew Chicken</h2>
          <p className='text-center mr-[50px]'><span className='font-semibold'>Author:</span>Abraham Smith</p>
        </div>

        <div>
        <iframe width="350" height="250" src="https://www.youtube.com/embed/Kk3KQ032z0o?si=Z_NBiaef658S9G_-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className='font-semibold mt-[20px] text-[red] text-center text-xl mr-[50px]'>Beef and Noodle Soup</h2>
          <p className='text-center mr-[50px]'><span className='font-semibold'>Author:</span>Tony Stark</p>
        </div>
        
        <div>
        <iframe width="350" height="250" src="https://www.youtube.com/embed/JorxPdgku_Q?si=mczQhW132llaAso5"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h2 className='font-semibold mt-[20px] text-[red] text-center text-xl mr-[50px]'>Beef and Spinach Soup</h2>
          <p className='text-center mr-[50px]'><span className='font-semibold'>Author:</span>Natasha Romanoff</p>
        </div>

    </div>
      </animated.div>
   
        
       

        
     

    </section>
  )
}

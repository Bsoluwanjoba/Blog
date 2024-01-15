"use client"
import { foods } from '../page'
import Link from 'next/link'
import { FaRegClock } from "react-icons/fa"
import styles from './salad.module.css'
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const saladFood = foods.filter(food => food.category == 'Salad')

const foodCategory = saladFood.map(food => (
  <Link href={`/chinese/${food.id}`} title={`${food.category} of ${food.title}`} key={food.id}>
    <section key={food.id} style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.600), rgba(0, 0, 0, 0.600)), url(/images/${food.image}.jpeg)`}}
    className='shadow-2xl rounded-md h-[250px] w-[350px] gap-2'>
  
          <span className='ml-[250px] mt-[550px] text-black text-[12px] font-semibold bg-[gold] rounded p-[5.8px] tracking-[2px]'>{food.category}</span>
        
          <section className='mt-[150px] text-center text-white'>
   <h2 className='font-semibold tracking-[2.8px]'>{food.title}</h2>

    <p className='flex flex-row gap-2 ml-[110px] mt-[11px]'><FaRegClock />
    <span>{food.time > 60 ? parseInt(food.time/60)+'hr ' +(food.time % 60)+ 'mins' : food.time + 'mins'}</span>
    </p>

   
   </section>
  
    </section>
    </Link>
))
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
  <div>
     <section className='my-[-5em]'>
      <div className={`${styles.head}`}>
          <div className='flex flex-col justify-center items-center h-[60vh] text-white'>
            <h1 className='text-7xl font-normal'>Our Recipes</h1>
            <h2 className='1xl'>Feel free to pick from our variety of recipes</h2>
          </div>
      </div>

      </section>

      <animated.div style={slideInLeft}>
    <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 p-20 w-[95%] ml-[50px] mt-[90px]'>
    {foodCategory}
    </div>
    </animated.div>
    </div>
  )
}
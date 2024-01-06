"use client"
import React from 'react'
import { Carousel } from "./components/Carousel";
import { slides } from "./data/carouselData.json";
import Slider from './Components/Slider';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


export default function page() {
  return (
    <div className="py-[5em]">
    <Carousel data={slides} />
    <Slider />
   <ParallaxProvider>  <Parallax /> </ParallaxProvider>
  </div>
  )
}

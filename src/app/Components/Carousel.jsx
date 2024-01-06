"use client"
import React, { useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import Image from "next/image";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <div key={idx} style={{backgroundImage: `/images/${item.src}`}} className={slide === idx ? "slide" : "slide slide-hidden"}>
            <span className="text-2xl font-bold text-[yellow]">Welcome To Kreator's Chinese Recipe Blog</span>
          </div>
          // <Image
          //   src={item.src}
          //   alt={item.alt}
          //   key={idx}
          //   width={3040}
          //   height={1540}
          //   className={slide === idx ? "slide" : "slide slide-hidden"}
          // />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
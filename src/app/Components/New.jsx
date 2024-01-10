import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle} from "react-icons/io"

const images = [
  { path: '/images/image2.jpg', text: `Welcome To Kreator's Chinese Recipe Blog`, fontSize: 'text-3xl', textColor: 'text-[yellow]', bg: 'bg-black', opac: 'opacity-85', left: 'left-[45em]' },
  { path: '/images/image1.jpg', text: 'Image 2 Text', fontSize: 'text-4xl', textColor: 'text-white', bg: 'bg-black', opac: 'opacity-85', left: 'left-[70em]' },
  { path: '/images/image.jpg', text: 'Image 3 Text', fontSize: 'text-4xl', textColor: 'text-white', bg: 'bg-black', opac: 'opacity-85', left: 'left-[70em]' },
         ];

 
export default function New() {
    const [currentImage, setCurrentImage] = useState(0);
      
    const nextSlide = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        // Autoplay functionality
        const autoplayInterval = setInterval(() => {
          nextSlide();
        }, 6000); // Change the interval (in milliseconds) as needed
    
        return () => clearInterval(autoplayInterval); // Cleanup on component unmount
      }, [currentImage]);

      
  return (
    <div className="relative w-full max-w-[1000px]">
  <div className="relative overflow-hidden rounded-md md:w-full lg:w-[1499px] z-[-1]">
    <div className="flex transition-transform duration-300 ease-in-out transform -translate-x-full" style={{ width: `${images.length}00%`, transform: `translateX(-${currentImage * 100}%)` }}>
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-auto flex-shrink-0">
          <Image
            key={index}
            src={image.path}
            alt={`Slide ${index + 1}`}
            className="w-[1490px] h-[500px] object-cover"
            width={1000}
            height={1000}
          />
          <div className={`absolute bottom-8 md:bottom-40 ${image.left} right-0 p-4 ${image.bg} ${image.opac} md:h-[200px] ${image.textColor} w-[500px]`}>
            <p className={`${image.fontSize} font-semibold leading-9 tracking-widest transition-transform duration-300 ease-in-out`}>{image.text}</p>
          </div>
        </div>
          ))}
          </div>
        </div>
      </div>
  )
}

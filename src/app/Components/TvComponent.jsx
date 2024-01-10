import React from 'react'



export default function TvComponent({ images }) {
  return (
    <div className="relative w-full max-w-md mx-auto z-[-2]">
    {/* TV frame */}
    <div className="relative border-4 border-gray-800 bg-black rounded-lg overflow-hidden">
      {/* Screen */}
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full" />
        ))}
      </div>

      {/* TV stand */}
      <div className="bg-gray-800 h-8 w-16 mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </div>

  )
}

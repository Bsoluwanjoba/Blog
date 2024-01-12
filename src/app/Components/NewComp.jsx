"use client"
import { useState } from 'react';


export default function NewComp() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen((prev) => !prev);
    };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow gap-y-[20px]">
      <button
        onClick={toggleAccordion}
        className="w-full py-2 px-4 bg-[red] text-white font-medium rounded-md focus:outline-none"
      >
        Why Chinese Recipes?
      </button>

      {isOpen && (
        <div className="mt-4">
          <p>This is the content of the accordion. It can include any information or components.</p>
        </div>

        
      )}

<button
        onClick={toggleAccordion}
        className="w-full py-2 px-4 bg-[red] text-white font-medium rounded-md focus:outline-none"
      >
        Why Chinese Soups?
      </button>

      {isOpen && (
        <div className="mt-4">
          <p>This is the content of the accordion. It can include any information or components.</p>
        </div>

        
      )}

<button
        onClick={toggleAccordion}
        className="w-full py-2 px-4 bg-[red] text-white font-medium rounded-md focus:outline-none"
      >
        Why Our Chefs Recipes?
      </button>

      {isOpen && (
        <div className="mt-4">
          <p>This is the content of the accordion. It can include any information or components.</p>
        </div>

        
      )}

<button
        onClick={toggleAccordion}
        className="w-full py-2 px-4 bg-[red] text-white font-medium rounded-md focus:outline-none"
      >
        What does our Special Recipes Contain?
      </button>

      {isOpen && (
        <div className="mt-4">
          <p>This is the content of the accordion. It can include any information or components.</p>
        </div>

        
      )}
    </div>
  )
}



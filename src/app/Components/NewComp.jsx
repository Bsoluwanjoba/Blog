import { useState } from 'react';
import { motion } from 'framer-motion'

export default function NewComp() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen((prev) => !prev);
    };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow">
      <button
        onClick={toggleAccordion}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md focus:outline-none"
      >
        Toggle Accordion
      </button>

      {isOpen && (
        <div className="mt-4">
          <p>This is the content of the accordion. It can include any information or components.</p>
        </div>
      )}
    </div>
  )
}



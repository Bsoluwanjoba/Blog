"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"

export default function Slider() {
const [visible, setVisible] = useState(true)

 const handleToggle = () => {
    setVisible(!visible);
 }

 const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
 }

  return (
    <div>
       <motion.div
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
        transition={spring}
        className="bg-red-500 p-4 rounded"
      >
      {` Welcome To Kreator's Chinese Recipe Blog`}
      </motion.div>
      <button onClick={handleToggle} className="mt-4 p-2 rounded bg-blue-500 text-white">
        {`Toggle Visibility`}
      </button>  
    </div>
  )
}

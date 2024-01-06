import React from 'react'
import Image from 'next/image'

export default function Logobar() {
  return (
    <div className=' m-auto items-center justify-center h-[80px] -mt-[95px]'>
         
            <Image src='/android-chrome-512x512.png' alt='logo' height={75} width={75} className='pt-[5px] pb-[15px] ml-[190px]'/>
   
    </div>
  )
}

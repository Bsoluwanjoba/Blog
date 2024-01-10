import React from 'react'
// import styles from './pc.module.css'

export default function PopularCategories() {
  return (
    <section className='w-[80%] py-[5em] m-auto'>
    <div className='md:w-1/2 leading-[40px] md:ml-8 md:mb-8 lg:ml-[300px] '>
    <h1 className='ml-[49px] lg:ml-[20px] text-4xl text-black font-black gap-2 tracking-widest leading-6 md:text-[48px]'>Recipes Category</h1>
     <p className='text-black ml-5 md:mr-4 text-[16px] font-thin mt-[15px]'>Be sure not to miss out this categories. Enjoy trying them out!</p>
    </div>

    <section className='flex flex-wrap md:flex-col lg:flex-row ml-[40px]'>
    <div style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.650)), url(/images/dish43.jpeg)`}} className='bg-cover bg-no-repeat w-full md:w-[350px] h-[250px] md:mr-4 mt-4 md:mt-0 rounded'>
        <h1 className='mt-[180px] ml-4 md:ml-4 tracking-wider text-white'>Main Dish</h1>
        <p className='font-thin text-[14px] ml-4 md:ml-4 text-white'>View All Recipes</p>
    </div>

    <div style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.650)), url(/images/dish44.jpeg)`}} className='bg-cover bg-no-repeat w-full md:w-[350px] h-[250px] md:mr-4 mt-4 md:mt-0 rounded'>
        <h1 className='mt-[180px] ml-4 md:ml-4 tracking-wider text-white'>Salad</h1>
        <p className='font-thin text-[14px] ml-4 md:ml-4 text-white'>View All Recipes</p>
    </div>

    <div style={{backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.650), rgba(0, 0, 0, 0.650)), url(/images/dish46.jpeg)`}} className='bg-cover bg-no-repeat w-full md:w-[350px] h-[250px] mt-4 md:mt-0 rounded'>
        <h1 className='mt-[180px] ml-4 md:ml-4 tracking-wider text-white'>Soup</h1>
        <p className='font-thin text-[14px] ml-4 md:ml-4 text-white'>View All Recipes</p>
    </div>
</section>

    <section className='' style={{backgroundImage: `url(/pexels-roman-odintsov-4958641.jpg)`}}>

    </section>
    </section>
  )
}

import React from 'react'
import styles from './header.module.css'
export default function Head() {
  return (
    <div className={styles.head}>
    <div className='flex flex-col justify-center items-center h-[60vh] text-white'>
      <h1 className='text-7xl font-normal'>Our Recipes</h1>
      <h2 className='1xl'>Feel free to pick from our variety of recipes</h2>
    </div>
</div>
  )
}

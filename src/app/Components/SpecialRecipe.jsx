import React from 'react'
import Image from 'next/image'
import styles from './demo.module.css'

export default function Demo() {
  return (
    <div className='header mr-[80px] md:mr-0'>
      {/* <h1 className='text-3xl font-black tracking-wider m-auto'>Special Recipe Menu</h1> */}
     <ul className={`${styles.accordion} sm:ml-[200px] md:ml-[498px] lg:ml-[498px]`}>
      <li className={styles.item}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
       </ul>
    </div>
  )
}

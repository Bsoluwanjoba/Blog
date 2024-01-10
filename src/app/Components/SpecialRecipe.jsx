import React from 'react'
import Image from 'next/image'
import styles from './demo.module.css'

export default function Demo() {
  return (
    <div className='header'>
      {/* <h1 className='text-3xl font-black tracking-wider m-auto'>Special Recipe Menu</h1> */}
     <ul className={styles.accordion}>
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

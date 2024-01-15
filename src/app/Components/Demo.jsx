import React from 'react'
import Image from 'next/image'
import styles from './demo.module.css'

export default function Demo() {
  return (
    <div className='header'>
      <h2 className='font-black text-[38px] ml-[500px]'>SPECIAL RECIPE SECTION</h2>
     <ul className={styles.accordion}>
      <li className={styles.item}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item1}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item2}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item3}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item4}>
        <div className={styles.content}>
            <span>
                <h2>Babs da Kreator</h2>
                 <p>Full-Stack</p>
            </span>
        </div>
      </li>
      <li className={styles.item5}>
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

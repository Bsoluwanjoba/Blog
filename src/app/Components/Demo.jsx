import React from 'react'
import Image from 'next/image'
import styles from './demo.module.css'

export default function Demo() {
  return (
    <div className='header'>
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

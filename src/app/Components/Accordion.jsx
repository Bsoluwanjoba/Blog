import React from 'react'
import styles from './accordion.module.css'


export const bulls = [
    {
      id: '001',
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      image: "imag1",
    },
     {
     id: '002',
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag2",
    },
    {
     id: '003',
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag3",
    },
    {
     id: '004',
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag4",
    },
    {
     id: '005',
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag5",
    },
    {
      id: '006',
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag6",
    },
    {
      id: '007',
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag7",
    },
    {
      id: '008',
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag8",
    },
    {
      id: '009',
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag9",
    },
    {
      id: '010',
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "imag",
    },
  ];
  
export default function Accordion() {
const returned = bulls.map(bull =>(
    <section key={bull.id} className={styles.section} style={{backgroundImage: `url(/images/${bull.image}.jpg)`}}>
      <div>
        <span>
            <h2>{bull.title}</h2>
            <p>{bull.content}</p>
        </span>
      </div>
    </section>
))
  return (
    <div className={styles.header}>
     {returned}
    </div>
  )
}

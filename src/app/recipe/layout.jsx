import React from 'react'
import Recipess from './Recipess'


export const metadata = {
  title: 'All Recipes',
  description: 'Bringing food recipes closer to your doorstep ',
}

export default function layout({children}) {
  return (
    <section>
    <Recipess />
    {children}
 
    </section>
  )
}

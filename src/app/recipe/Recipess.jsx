import Link from 'next/link'
import styles from './recipe.module.css'

export default function Recipess() {
  return (
    <section>
       <nav className={styles.nav}>
       <ul>
             <Link href="/recipes" className='cursor-pointer hover:bg-[gold]'>
             <li >
                All Categories
                </li>
             </Link>


               <Link href="/recipe/maindish">
               <li>
                Main Dishes
                </li>
               </Link>

              <Link href="/recipe/salad">
              <li>
                Salads
                </li>
              </Link>

             <Link href="/recipe/soups">
             <li>
                Soups
                </li>

             </Link>
                
                <Link href="/videorecipe">
                <li>
                Video Recipes
                </li>

                </Link>
                </ul>
       </nav>

      
    </section>
  )
}

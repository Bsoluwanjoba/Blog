import Link from 'next/link'
import styles from './recipe.module.css'

export default function Recipess() {
  return (
    <section className='py-[5em]'>
       <nav>
       <ul className='bg-[red] text-white flex top-[186px] right-0 left-0 h-[70px] z-[-1] justify-center items-center cursor-pointer gap-[20px] flex-wrap'>
             <Link href="/recipe" className='cursor-pointer hover:bg-[darkred] p-[5px] rounded-md active:hover:bg-[darkred] '>
             <li >
                All Categories
                </li>
             </Link>


               <Link href="/recipe/maindish" className='cursor-pointer hover:bg-[darkred] p-[5px] rounded-md'>
               <li>
                Main Dishes
                </li>
               </Link>

              <Link href="/recipe/salad" className='cursor-pointer hover:bg-[darkred] p-[5px] rounded-md'>
              <li>
                Salads
                </li>
              </Link>

             <Link href="/recipe/soups" className='cursor-pointer hover:bg-[darkred] p-[5px] rounded-md'>
             <li>
                Soups
                </li>

             </Link>
                
                <Link href="/videorecipe" className='cursor-pointer hover:bg-[darkred] p-[5px] rounded-md'>
                <li>
                Video Recipes
                </li>

                </Link>
                </ul>
       </nav>
       
   
      
    </section>
  )
}

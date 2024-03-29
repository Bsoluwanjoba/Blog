import styles from './footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  return (
    <footer className={`${styles.footer} lg:h-[50vh]`}>
      <section className='lg:h-[50vh]'>
         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-32 ml-[60px] md:ml-[105px] py-12 w-[90%] md:w-[60%] lg:w-[90%]">
      <div className='mt-[8px]'>
      <Image src='/android-chrome-512x512.png' alt='logo' width={100} height={100} className='ml-[65px] shadow-inner'/>
      <p className='mt-[30px] text-[13px]'>Taking you closer to the Chinese food fantasies</p>
      </div>

     <div>
      <ul>
        <h2>Recipes Creator</h2>
        <li>John Kreator</li>
        <li>Jessica Kreator</li>
        <li>Amanda Kreator</li>
        <li>Nathaniel Kreator</li>
        </ul>
     </div>

     <div>
       <ul>
        <h2>Favorite Recipes</h2>
        <li>Sichuan Hot Pot</li>
        <li>Kung Pao Chicken</li>
        <li>Hot and Sour Soup</li>
        <li>Winter Melon Soup</li>
         </ul>
     </div>

     <div>
      <ul>
        <h2>Recently Added</h2>
        <li>Grilled Kebab</li>
        <li>Tofu</li>
        <li>Spring Rolls</li>
        <li>10-minutes Dumplings</li>
      </ul>
     </div>
          </div>
     
      

        <div className='flex justify-center border-[gray] w-[50%] md:w-[60%] pb-[40px] ml-[75px]'>
        <ul className='ml-[-100px] md:mr-[-310px] text-black font-semibold tracking-widest text-[13px]'>
         Copyright &copy;Kreator   Powered By <Link href="https://vercel.com/kreators-projects">Vercel io</Link>
        </ul>

          <div>
          <ul className='flex justify-center items-stretch gap-2 tracking-widest text-[13px] mr-[-200px] md:mr-[-1000px] font-semibold'>
           <Link href='/recipes'> <li>Recipes</li> </Link>
            <Link href='/blog'> <li>Blog</li>  </Link>
           <Link href='/about'>  <li>About Us</li> </Link>
           <Link href='/contact'>  <li>Contact Us</li> </Link>
        </ul>
          </div>
        </div>
      </section>
     
   

    </footer>
  )
}

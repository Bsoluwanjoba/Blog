import { GoArrowUp } from "react-icons/go"
import { FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa6"
import styles from './contact.module.css'
import Link from "next/link"
export default function page() {
  return (
    <section>
     <div className={styles.header}>
        <div className='flex flex-col justify-center items-center h-64 text-white'>
        <h1 className='text-7xl font-normal mt-[240px]'>Contact Us</h1>
        <h2 className='text-1xl'>Suggestions? Questions? Contact us below.</h2>

        </div>
    </div>


    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-[40px] ml-[140px] md:m-auto py-[40px] w-[75%]'>
    <div className="w-60 text-center pt-[45px] md:pt:0 lg:pt-[90px] h-[100px]">
        <h2 className="text-center font-semibold text-[red]">Summary?</h2>
        <p className="w-[250px]">Do you have suggestions on how we can improve the blog recipe?</p>
        <button className="bg-[red] h-[38px] rounded text-white font-medium w-[178px] m-auto">Send a Suggestion</button>
        </div>

        <div className='text-center w-60 pt-[95px] md:pt:0 lg:pt:0 h-[200px]'>
        <h2 className="font-semibold text-[red] mt-[20px]">Questions?</h2>
        <p>Do you have unanswered questions about any recipe?</p>
        <p className="bg-[red]  rounded text-white font-medium w-[110px] m-auto p-1 cursor-pointer">Send a Mail</p>
        </div>

        <div className='flex flex-col items-center justify-center w-60  h-[200px] pt-[100px] md:pt:0 lg:pt:0'>
            <h2 className="font-semibold text-[red]">Follow Us!</h2>
            <p>To stay updated, follow us on our social media handles!</p>
            <p className="flex gap-3 h-[90px] p-1">
             <span className="bg-[red] text-white text-2xl rounded p-1"><Link href='https://web.facebook.com/?_rdc=1&_rdr'><FaFacebookF /></Link></span>
            
           <span className="bg-[red] text-white text-2xl rounded p-1"><Link href='https://twitter.com/X?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><FaXTwitter /> </Link></span>
             
          <span className="bg-[red] text-white text-2xl rounded p-1"><Link href='https://wa.link/vx9kq6'><FaWhatsapp /></Link></span>
          </p>
       </div>
    </div>

    <div className={styles.topbtn}>
     <span> <GoArrowUp /></span>
    <button>
      <Link href='#top'>Back To Top</Link>
    </button>
    </div>
   
    </section>
  )
}

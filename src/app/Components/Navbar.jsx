"use client"
import { Poppins, Lemon } from 'next/font/google'
import { RiHomeFill } from "react-icons/ri"
import { TfiReceipt } from "react-icons/tfi"
import { FaBloggerB } from "react-icons/fa6"
import { IoLogoYoutube } from "react-icons/io"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { RiContactsBook2Fill } from "react-icons/ri"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdOutlineCancel } from "react-icons/md"
import React, {useState} from 'react'
import Link from 'next/link'
import styles from "./components.module.css"
// import { Parallax } from 'react-scroll-parallax'
import Image from "next/image"

const le = Lemon({subsets: ['latin'], weight: ['400']})

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)


    function onClick(){
      setShowNav(!showNav)
    }
  

  return (
    // <Parallax speed={-8}>
             <nav className="p-5 bg-white shadow fixed right-0 left-0 md:flex md:items-center md:justify-around">
                <div>
                    <span className={`${le.className}`}>
                      <Image src="/android-chrome-512x512.png" alt="logo" height={50} width={50} className="h-10 inline"/>
                     {` Kreator's Blog`}
                    </span>
                </div>

                <RxHamburgerMenu  className={`${showNav ? 'hidden' : 'block md:hidden'} ml-auto mt-[-33px] cursor-pointer text-[30px]`} onClick={onClick} />
                <MdOutlineCancel className={`${showNav ? 'block md:hidden' : 'hidden'} ml-auto mt-[-33px] cursor-pointer text-[30px]`} onClick={onClick} />
            <ul className={`md:flex md:flex-row ${showNav ? 'flex' : 'hidden'} flex-col justify-between md:h-10 h-[60vh] items-center cursor-pointer`}>
            <Link href="/"  className="text-[15px] hover:text-[red] duration-500">
                <li className="flex flex-row items-center gap-[5px] mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] pd-[70px] duration-500">
                <span><RiHomeFill /></span>
               {` Home`}
                </li>
            </Link>

            <Link href="/recipe"  className="text-[15px] hover:text-[red] duration-500">
                <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-500">
                    <span><TfiReceipt /></span>
                {`Recipe`}
                </li>
            </Link>

            <Link href="/blog"  className="text-[15px] hover:text-[red] duration-500">
             <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-500">
                <span><FaBloggerB /></span>
              {`Blog`}
                </li>
            </Link>

            <Link href="/videorecipe"  className="text-[15px] hover:text-[red] duration-500">
            <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-500">
                <span><IoLogoYoutube /></span>
                {`Video Recipe`}
                </li>
            </Link>

            <Link href="/about"  className="text-[15px] hover:text-[red] duration-500">
            <li className="flex flex-row items-center gap-[5px] mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-700">
                <span><HiOutlineSpeakerphone /></span>
               {` About Us`}
                </li>
            </Link>

            <Link href="/contact"  className="text-[15px] hover:text-[red] duration-500">
            <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-1000">
                <span><RiContactsBook2Fill /></span>
               {` Contact Us`}
                </li>
            </Link>

            <button className="bg-[red] duration-700 px-6 py-2 mx-4 font-normal rounded text-[yellow] hover:shadow-2xl">
           {` Buy me a Coffee!`}
            </button>
        </ul>

      
     </nav>
    // </Parallax>
  )
}

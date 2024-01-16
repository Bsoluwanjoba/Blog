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
import Image from "next/image"


const le = Lemon({subsets: ['latin'], weight: ['400']})

    const navItems = [
        { text: 'Home', icon: <RiHomeFill />, link: '/' },
        { text: 'Recipe', icon: <TfiReceipt />, link: '/recipe' },
        { text: 'Blog', icon: <FaBloggerB />, link: '/blog' },
        { text: 'Video Recipe', icon: <IoLogoYoutube />, link: '/videorecipe' },
        { text: 'About Us', icon: <HiOutlineSpeakerphone />, link: '/about' },
        { text: 'Contact Us', icon: <RiContactsBook2Fill />, link: '/contact' },
      ]

export default function Navbar() {
    const [showNav, setShowNav] = useState(false)


    function toggleNav(){
      setShowNav(!showNav)
    }
  
 
  return (
        <header>
                 <nav className="p-5 bg-white shadow fixed right-0 left-0 md:flex md:items-center md:justify-around max-w-full flex-wrap">
      <div>
        <span>
                        <span className={`${le.className}`}>
                       <Image src="/android-chrome-512x512.png" alt="logo" height={50} width={50} style={{width: "full", height: "full"}} className="h-10 inline"/>
                      {` Kreator's Blog`}
                     </span>
        </span>
      </div>

      <div className={`${showNav ? 'hidden' : 'block md:hidden'}`}>
        <RxHamburgerMenu
          className={`block ml-auto mt-[-33px] cursor-pointer text-[30px]`}
          onClick={toggleNav}
        />
      </div>

      <div className={`${showNav ? 'block md:hidden' : 'hidden'}`}>
        <MdOutlineCancel
          className="ml-auto mt-[-33px] cursor-pointer text-[30px]"
          onClick={toggleNav}
        />
      </div>

      <ul className={`md:flex md:flex-row ${showNav ? 'flex' : 'hidden'} flex-col justify-between md:h-[50px] h-[55vh] items-center cursor-pointer flex-wrap`}>
        {navItems.map((item, index) => (
          <Link key={index} href={item.link} className="text-[14px] hover:text-[red] ease-in-out duration-500 flex-shrink">
            <li className="flex flex-row items-center gap-[5px] mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] pd-[70px] duration-500">
              <span>{item.icon}</span>
              {item.text}
            </li>
          </Link>
        ))}

<button className="bg-[red] duration-700 px-6 py-2 mx-4 font-normal rounded text-[gold] hover:shadow-2xl flex-wrap">
           {` Buy me a Coffee!`}
            </button>
      </ul>

       </nav>
        </header>

    
  )
}

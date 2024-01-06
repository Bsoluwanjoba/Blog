"use client"
import { RiHomeFill } from "react-icons/ri"
import { TfiReceipt } from "react-icons/tfi"
import { FaBloggerB } from "react-icons/fa6"
import { IoLogoYoutube } from "react-icons/io"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { RiContactsBook2Fill } from "react-icons/ri"
import Link from 'next/link'
import styles from "./components.module.css"
// import { Parallax } from 'react-scroll-parallax'
import { Poppins } from "next/font/google"
import Image from "next/image"

export default function Navbar() {
  return (
    // <Parallax speed={-8}>
             <nav className="p-5 bg-white shadow fixed right-0 left-0 md:flex md:items-center md:justify-around sm:flex sm:items-center sm:justify-between">
                <div>
                    <span className="text-xl font-bold cursor-pointer leading-8">
                      <Image src="/android-chrome-512x512.png" alt="logo" height={50} width={50} className="h-10 inline"/>
                      Kreator's Blog
                    </span>
                </div>

            <ul className="sm:flex sm:items-center">
            <Link href="/"  className="text-[15px] hover:text-purple-900 duration-500">
                <li className="flex flex-row items-center gap-[5px] mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] pd-[70px] duration-500">
                <span><RiHomeFill /></span>
                Home
                </li>
            </Link>

            <Link href="/"  className="text-[15px] hover:text-purple-900 duration-500">
                <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-500">
                    <span><TfiReceipt /></span>
                Recipe
                </li>
            </Link>

            <Link href="/"  className="text-[15px] hover:text-purple-900 duration-500">
             <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-500">
                <span><FaBloggerB /></span>
                Blog
                </li>
            </Link>

            <Link href="/"  className="text-[15px] hover:text-purple-900 duration-500">
            <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-500">
                <span><IoLogoYoutube /></span>
                Video Recipe
                </li>
            </Link>

            <Link href="/"  className="text-[15px] hover:text-purple-900 duration-500">
            <li className="flex flex-row items-center gap-[5px] mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-700">
                <span><HiOutlineSpeakerphone /></span>
                About Us
                </li>
            </Link>

            <Link href="/"  className="text-[15px] hover:text-purple-900 duration-500">
            <li className="flex flex-row items-center gap-[5px]  mx-4 my-3 hover:border-b-[5px] border-solid border-[gold] duration-1000">
                <span><RiContactsBook2Fill /></span>
                Contact Us
                </li>
            </Link>

            <button className="bg-[red] text-white duration-700 px-6 py-2 mx-4 font-semiboldhover: rounded">
            Get a Coupon!
            </button>
        </ul>
     </nav>
    // </Parallax>
  )
}

'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import MidNavbar from './MidNavbar'

import { Lora } from 'next/font/google'
const lora = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Navbar = () => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full transition-all bg-black mx-auto md:px-12">
      <div className="hidden lg:flex h-16 items-center justify-between xl:px-0 max-w-screen-2xl mx-auto">
        {/* for left margin */}

        <div className="w-[37.5%] h-16 items-center flex justify-between space-x-6 text-gray-200">
          <Link
            href="#"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Our Works
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-[#ff5200] origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>

          <Link
            href="#"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Get Quotes
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-[#ff5200] origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Collaborate
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-[#ff5200] origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
        </div>
        <div className="w-1/4 h-16 flex justify-center items-center">
          <Link href="/">
            <div className="flex h-16 justify-center items-center">
              <Image
                src="/images/logo.png"
                alt=""
                width={1000}
                height={1000}
                className="w-16 h-16"
              />
            </div>
          </Link>
        </div>
        <div className=" w-[37.5%] h-16 items-center flex justify-between space-x-6 text-gray-200">
          <Link
            href="#"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Our Story
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-[#ff5200] origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base inline-block relative transition duration-300 ease-in-out group px-2 py-1"
          >
            Insights
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-[#ff5200] origin-left transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </Link>
          <Link
            href="#"
            className="whitespace-nowrap font-semibold text-sm 2xl:text-base rounded-full px-4 py-2 bg-[#ff5200] hover:text-[#ff5200] border border-black hover:border-[#ff5200] hover:bg-black transition duration-300 ease-in-out"
          >
            Hire Us
          </Link>
        </div>
      </div>
      {/* mid navbar */}
      <div className="">
        <MidNavbar />
      </div>

      {/* mobile nav */}
      <div className="">
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar

'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Links from './Links'
import Link from 'next/link'
import Image from 'next/image'
import ToggleButton from './ToggleButton'

const MidNavbar = ({ openModal }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="lg:hidden hidden sm:flex flex-col items-center justify-center"
      animate={open ? 'open' : 'closed'}
    >
      <div className="flex justify-between w-full">
        <div className="w-24 h-14 flex justify-start p-4 items-center">
          <Link href="/">
            <div className="flex flex-row h-14 justify-center items-center">
              <Image
                src="/images/logo.png"
                alt=""
                width={1000}
                height={1000}
                className="w-14 h-14"
              />
            </div>
          </Link>
        </div>
        <div className="w-full flex justify-end items-center">
          <div className="flex flex-row gap-4 text-gray-200">
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
            <button
              onClick={openModal}
              className="whitespace-nowrap font-semibold text-sm 2xl:text-base rounded-full px-4 py-2 bg-[#ff5200] hover:text-[#ff5200] border border-black hover:border-[#ff5200] hover:bg-black transition duration-300 ease-in-out"
            >
              Hire Us
            </button>
          </div>
        </div>
        <div className="m-2  flex justify-center items-center">
          <ToggleButton setOpen={setOpen} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="h-[calc(100vh-3rem)] overflow-y-auto scroll-smooth"
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            exit={{ y: -700 }}
            transition={{ duration: 0.5 }}
          >
            <Links />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default MidNavbar

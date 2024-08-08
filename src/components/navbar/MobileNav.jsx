'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Links from './Links'
import Link from 'next/link'
import Image from 'next/image'
import ToggleButton from './ToggleButton'


const MobileNav = ({ openModal }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="sm:hidden flex flex-col items-center justify-center"
      animate={open ? 'open' : 'closed'}
    >
      <div className="flex justify-between w-full">
        <div className=" h-14 flex justify-start p-4 items-center">
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
        <div className="m-2 flex justify-center items-center">
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
            <Links openModal={openModal} setOpen={setOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default MobileNav

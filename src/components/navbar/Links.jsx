'use client'
import React from 'react'
import { motion } from 'framer-motion'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import CallIcon from '@mui/icons-material/Call'

import Link from 'next/link'

const variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    // transition: {
    //   duration: 1,
    //   staggerChildren: 0.1,
    //   type: 'spring',
    //   stiffness: 50,
    // },
  },
}
const itemVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    // transition: {
    //   duration: 1,
    //   staggerChildren: 0.1,
    //   type: 'spring',
    //   stiffness: 50,
    // },
  },
}
const Links = ({ openModal, setOpen }) => {
  const links = [
    {
      name: 'Our Works',
      slug: '#',
      text: 'What we do.',
    },
    { name: 'Get Quotes', slug: '#', text: 'Get estimates.' },
    { name: 'Collaborate', slug: '#', text: 'Work with us.' },
    { name: 'Our Story', slug: '#', text: 'Know the brand.' },
  ]
  const handleClick = () => {
    openModal()
    setOpen(false)
  }
  return (
    <div className="w-[100vw] min-h-[100vh] z-50 flex flex-col bg-black text-gray-200 gap-16 px-4 pt-4 pb-40">
      {links.map((item) => (
        <>
          <div key={item} className="inline-block relative py-2">
            <div className=" flex ">
              <Link href={item.slug} key={item} className="text-4xl flex-1">
                {item.name}
              </Link>
              <p className="flex justify-center items-end pb-1">{item.text}</p>
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-300 origin-lef"></span>
          </div>
        </>
      ))}

      {/* get in touch */}
      <div className="inline-block relative py-2">
        <div className="flex">
          <button
            onClick={handleClick}
            className="text-4xl text-left flex-1 text-[#ff5200]"
          >
            Hire Us
          </button>
          <div className="flex justify-center items-center px-4">
            <svg
              width="47"
              height="40"
              viewBox="0 0 75 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M62.4062 30.4242L31.982 0H41.1744L72.5505 31.3761L74.8486 33.6742L72.5505 35.9723L41.1729 67.3499H31.9805L62.4062 36.9242H0V30.4242H62.4062Z"
                fill="#F54E07"
              ></path>
            </svg>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full bg-gray-300 origin-lef"></span>
        </div>
      </div>
      {/* social links */}
      <div className="flex justify-evenly items-center ">
        <a href="tel:+91 ">
          <CallIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://wa.me/">
          <WhatsAppIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="https://www.instagram.com/">
          <InstagramIcon sx={{ fontSize: 40 }} />
        </a>
        <a href="mailto:your-email-address">
          <MailOutlineIcon sx={{ fontSize: 40 }} />
        </a>
      </div>
      <div className="py-2 text-center text-[10px] flex flex-col justify-between mb-8">
        <p>© 2022 TRIP TRIBE.</p>
      </div>
    </div>
  )
}

export default Links

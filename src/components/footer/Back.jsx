// 'use client'
// import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
// import HireModal from '../HireModal'

import { FaInstagram, FaBehanceSquare, FaFacebookSquare } from 'react-icons/fa'

import { FaSquareXTwitter } from 'react-icons/fa6'
const Back = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(false)
  // const closeModal = () => {
  //   setModalIsOpen(false)
  // }
  // const openModal = () => {
  //   setModalIsOpen(true)
  // }
  return (
    <div className="z-0 p-4 md:px-40 max-h-[500px] bg-white lg:max-h-[300px] rounded-t-3xl fixed bottom-0 w-full flex flex-col md:flex-row gap-4 justify-between overflow-hidden">
      {/* for logo and hireus */}
      <div className="flex flex-col justify-center items-center gap-4">
        {' '}
        <div>
          <h2 className="text-7xl font-bold text-[#ff5200]">TRIP</h2>
          <h2 className="text-7xl font-bold text-[#ff5200]">TRIBE</h2>
        </div>
        {/* <button
          onClick={openModal}
          className="text-2xl font-semibold rounded-full border-4 border-[#ff5200] px-8 py-2 hover:text-[#ff5200]"
        >
          HIRE US
        </button> */}
      </div>
      <div className="flex flex-col gap-4">
        {/* for reach us */}
        <div className="flex flex-col justify-between items-start gap-4">
          <p className="text-sm text-gray-600">REACH US</p>
          <a
            href="mailto:hellotriptribe@gmail.com"
            className="text-xl font-semibold hover:underline"
          >
            hellotriptribe@gmail.com
          </a>

          <a
            href="tel:+917489190166"
            className="text-xl font-semibold hover:underline"
          >
            +91-7489190166
          </a>
        </div>
        {/* for social */}
        <div className="flex flex-col justify-between items-start gap-4">
          <p className="text-sm text-gray-600">FOLLOW US</p>
          <div className="flex justify-between gap-4 items-center max-w-60 md:max-w-80">
            <Link
              href="https://www.instagram.com/official_triptribe"
              className="text-3xl"
            >
              <FaInstagram className="w-12 h-12 text-gray-600 hover:text-black" />
            </Link>
            {/* <Link href="#" className="text-3xl">
              <FaBehanceSquare className="w-12 h-12 text-gray-600 hover:text-black" />
            </Link>
            <Link href="#" className="text-3xl">
              <FaFacebookSquare className="w-12 h-12 text-gray-600 hover:text-black" />
            </Link>
            <Link href="#" className="text-3xl">
              <FaSquareXTwitter className="w-12 h-12 text-gray-600 hover:text-black" />
            </Link> */}
          </div>
        </div>
      </div>
      {/* <div>
        <HireModal isOpen={modalIsOpen} onClose={closeModal} />
      </div> */}
    </div>
  )
}

export default Back

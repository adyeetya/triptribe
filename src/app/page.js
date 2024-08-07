'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { Poppins } from 'next/font/google'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Fourth from '@/components/Fourth'
import OurServices from '@/components/OurServices'
import AutoOpenModal from '@/components/AutoModal'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true)
    }, 10000) // Open modal after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <main className={`${poppins.className} bg-white`}>
      <Hero />
      <Second />
      <OurServices />
      <Third />
      <Fourth />
      <AutoOpenModal isOpen={modalIsOpen} onClose={closeModal} />
    </main>
  )
}

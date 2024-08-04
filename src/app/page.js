import Image from 'next/image'
import Hero from '../components/Hero'
import { Poppins } from 'next/font/google'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Fourth from '@/components/Fourth'
import OurServices from '@/components/OurServices'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
export default function Home() {
  return (
    <main className={`${poppins.className} bg-white`}>
      <Hero />
      <Second />
      <OurServices/>
      <Third />
      <Fourth />
    </main>
  )
}

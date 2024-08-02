import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.css'
import Back from '@/components/footer/Back'
import ScrollProgressCircle from '@/components/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TripTribe | The Companion of your Journey.',
  description: 'Websites | Networking | Branding | Marketing | UI/UX | Consulting',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ScrollProgressCircle />
        <div className="relative z-10">{children}</div>
        <Footer />
        <Back />
      </body>
    </html>
  )
}

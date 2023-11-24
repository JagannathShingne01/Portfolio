import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-[5000px]'>
      <Navbar/>
      <Header/>
      <Contact/>
    </div>
  )
}

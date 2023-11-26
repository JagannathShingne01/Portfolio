import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import { Figtree } from 'next/font/google';

const figtree = Figtree({ subsets: ['latin'] })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`h-[5000px] ${figtree.className}`}>
      <Navbar/>
      <Header/>
      <Contact/>
    </div>
  )
}

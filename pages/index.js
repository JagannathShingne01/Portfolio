import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import { Figtree } from 'next/font/google';
import About from '@/components/About'
import Project from '@/components/Project'
import Skills from '@/components/Skills'

const figtree = Figtree({ subsets: ['latin'] })

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${figtree.className} `}>
      <Navbar/>
      <Header/>
      <Skills/>
      {/* <Project/> */}
      <About/>

      <Contact/>
    </div>
  )
}

import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import { Figtree } from 'next/font/google';
import About from '@/components/About'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import { ActiveSectionContextProvider } from '@/context/active-context'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/Theme-Switch';
const figtree = Figtree({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
      <div className={`${figtree.className} `}> 
      
    <ActiveSectionContextProvider>
      <Navbar/>
      <Header/>
      <Project/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer />
      <ThemeSwitch/>
    </ActiveSectionContextProvider>
     </div>

     </>
  )
}

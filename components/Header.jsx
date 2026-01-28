"use client"
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link'
import self from "@/public/js.png"
import selfl from "@/public/jsl.png"
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {useInView} from 'react-intersection-observer'
import { ActiveSectionContex } from '@/context/active-context';
import { Roboto_Mono } from 'next/font/google';


const roboto = Roboto_Mono({subsets: ['latin']})

const Header = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useContext(ActiveSectionContex)

  useEffect(()=>{
      if (inView) {
          setActiveSection("Home")
      }
  },[inView, setActiveSection]);

  return (
    <>
    


    <div ref={ref} id="home" className={`md:mb-36 mb-28 scroll-mt-44 ${roboto.className}`}>
      <div   className="relative lg:max-w-7xl xl:mx-auto place-items-center flex md:flex-row flex-col-reverse justify-center items-center mx-4 md:mx-4 md:justify-between md:my-10">
          <motion.div   className="text-gray-500 gap-2 "
           initial={{ opacity: 0, y:100 }}
           animate={{ opacity: 1, y:0 }}
           transition={{ delay: 0.175 }}
          >
              <h2 className="text-xl md:text-3xl mt-3 text-gray-700 dark:text-white/80">Hello,&#128075; </h2>
              <span className="text-3xl md:text-5xl text-gray-700 dark:text-white/80">I&apos;m Jagannath Shingne </span>
              <h1 className="text-lg md:text-3xl md:mt-2 text-gray-700 dark:text-white/80">Software Developer</h1>
              <p className="md:w-96 pt-2 dark:text-white">I am a MERN Stack Developer with 1.2+ years of hands-on experience building,
  scaling, and deploying Full-stack applications.</p>
             <div className="flex">
                <div className="">
                      <button  className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 mr-8 flex text-gray-700 dark:text-white/80 dark:bg-gray-900/10">
                            <a href="/JagannathDEVResume.pdf"  download target="_blank">Resume</a>
                            <FaFileDownload className="mt-1 ml-1"/>
                        </button>
                  </div>
                <div>
                    <Link href={"https://github.com/JagannathShingne01"} target="_blank" className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 flex text-gray-700 dark:bg-gray-900/10 dark:text-white/80">
                      <span>Git Hub</span>
                      <FaGithub className="mt-1 ml-1 "/>
                    </Link>
                  </div>
             
             </div>
            
             
              {/* <HorizontalTextMover text={"Web Devloper"}/> */}
             
             
          </motion.div>
          <div className="block dark:hidden">
              <Image 
                  src={self}
                  width={500}
                  height={500}
                  alt="Jagannath Shingne"
                  className="md:h-[450px] rounded-full"
              />
          </div>
          <div className="hidden dark:block">
              <Image 
                  src={selfl}
                  width={500}
                  height={500}
                  alt="Jagannath Shingne"
                  className="md:h-[450px] rounded-full"
              />
          </div>
        
      </div>
    </div>
    </>
  )
};

export default Header;
"use client"
import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link'
import self from "@/public/jspic.jpeg"
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {useInView} from 'react-intersection-observer'
import { ActiveSectionContex } from '@/context/active-context';



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
    <div ref={ref} id="home" className="md:mb-36 mb-28 scroll-mt-48">
      <div   className="relative lg:max-w-7xl xl:mx-auto place-items-center flex md:flex-row flex-col-reverse justify-center items-center mx-4 md:justify-between md:my-10">
          <motion.div   className="text-gray-500 gap-2 "
           initial={{ opacity: 0, y:100 }}
           animate={{ opacity: 1, y:0 }}
           transition={{ delay: 0.175 }}
          >
              <h2 className="text-xl md:text-3xl mt-3 text-gray-700">Hello, </h2>
              <span className="text-3xl md:text-5xl text-gray-700">I&apos;m Jagannath Shingne</span>
              <h1 className="text-lg md:text-3xl md:mt-2 text-gray-700">Web Devloper</h1>
              <p className="md:w-96 pt-2">Experienced in crafting dynamic web applications with a commitment to clean code and user-centric design. Committed to continuous learning, I am eager to contribute innovative solutions to complex challenges.</p>
             <div className="flex">
                <div className="">
                      <button  className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 mr-8 flex text-gray-700">
                            <a href="/Resume.pdf"  download target="_blank">Resume</a>
                            <FaFileDownload className="mt-1 ml-1"/>
                        </button>
                  </div>
                <div>
                    <Link href={"https://github.com/JagannathShingne01"} target="_blank" className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 flex text-gray-700">
                      <span>Git Hub</span>
                      <FaGithub className="mt-1 ml-1"/>
                    </Link>
                  </div>
             
             </div>
            
             
              {/* <HorizontalTextMover text={"Web Devloper"}/> */}
             
             
          </motion.div>
          <div className="">
              <Image 
                  src={self}
                  width={500}
                  height={500}
                  alt="Jagannath Shingne"
                  className="md:max-h-[450px] rounded-full"
              />
          </div>
        
      </div>
    </div>
  )
};

export default Header;
"use client"
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data.js';
import Link from "next/link"
import clsx from 'clsx';
import { ActiveSectionContex } from '@/context/active-context';

function Navbar() {
    const {activeSection, setActiveSection, setTimeOfLastClick} = useContext(ActiveSectionContex)

  return (
    
    <header className='z-[999] relative text-black'>
      <motion.div
        className='fixed  top-0 left-1/2 h-[5.9rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-opacity-75 dark:bg-gray-900 dark:border-black/40'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className='fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex flex-wrap justify-center items-center gap-y-1 text-[0.9rem] font-medium text-gray-500 dark:text-gray-200 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {links.map(link=>(
                <motion.li
                    className='h-3/4 flex items-center justify-center relative' key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}   >
                    <Link 
                        className={clsx('w-full flex items-center justify-center px-3 py-3 hover:text-gray-950 transition text-base dark:text-gray-200 dark:hover:text-gray-300',
                        {
                          "text-gray-950 dark:text-gray-200": activeSection === link.name,
                        }
                        )} 
                        href={link.hash}
                        onClick={() => {
                          setActiveSection(link.name)
                          setTimeOfLastClick(Date.now())

                        }}
                        >
                        {link.name}
                        {
                          link.name === activeSection && (
                            <motion.span 
                            className='bg-gray-200 rounded-full absolute inset-0 -z-10 dark:bg-gray-700'
                            layoutId='activeSection'
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                            ></motion.span>
                          )
                        }
                    </Link>
                </motion.li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar

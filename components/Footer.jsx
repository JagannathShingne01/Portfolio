import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Roboto_Mono } from 'next/font/google';
const roboto = Roboto_Mono({subsets: ['latin']})

const Footer = () => {
  return (
   <footer className='text-center mb-4 px-4'>
  <div className='border-t-2 mx-2 md:mx-44'></div>
    <p className={`${roboto} text-gray-700 flex justify-center mt-1 gap-5 text-sm font-semibold `}>lets catch up -
        <a className='mt-1 text-lg' href="https://x.com/MrShingne?t=8y5ycfGfNCP80sQ-jmOTYA&s=08"><FaXTwitter/></a>
        <a className='mt-1 text-lg' href="https://www.instagram.com/mr.shingne_2161/?igshid=MzMyNGUyNmU2YQ%3D%3D"><FaInstagram/></a>
        <a className='mt-1 text-lg' href="https://www.linkedin.com/in/jagannath-shingne-201aba236"><FaLinkedinIn/></a>
     </p>
     <small className='text-gray-500   '>
        &copy; Design And Devlop by Jagannath Shingne.  
        {/* <span className='text-xl mt-1 text-red-600'>&#9829;</span> */}
    </small>
   </footer>
  )
}

export default Footer
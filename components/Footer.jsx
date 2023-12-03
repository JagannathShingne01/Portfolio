import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
   <footer className='text-center mb-4 px-4'>
    <small className='text-gray-500   '>
        &copy; Design And Devlop by <a target='_blank' href="">@Jagannath</a>.
    </small>
    <p className='text-gray-700 flex justify-center mt-1 gap-5 text-sm font-semibold'>Lets catch up - 
        <a className='mt-1 text-lg' href="https://x.com/MrShingne?t=8y5ycfGfNCP80sQ-jmOTYA&s=08"><FaXTwitter/></a>
        <a className='mt-1 text-lg' href=""><FaInstagram/></a>
        <a className='mt-1 text-lg' href=" "><FaLinkedinIn/></a>
     </p>
   </footer>
  )
}

export default Footer
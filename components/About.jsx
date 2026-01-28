"use client"
import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { ActiveSectionContex } from '@/context/active-context';
import { FadeUp } from '@/lib/Animation';


const About = () => {

  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useContext(ActiveSectionContex)

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About")
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <div id='about' ref={ref} className='text-gray-700 mb-28 md:mb-36  text-center flex flex-col justify-center items-center scroll-mt-28 mx-4 dark:text-white/80'

    >

      <h1 className=' text-5xl mb-4 md:mb-8'>About Me</h1>
      <FadeUp>
        <p className="text-black dark:text-white/50 mb-3 md:w-[40rem] text-left md:text-center leading-7">
          I am a MERN Stack Developer with 1.2+ years of hands-on experience building,
          scaling, and deploying full-stack applications using Node.js, Express.js,
          React.js, and Next.js. I specialize in designing features from scratch and
          building secure, high-performance systems with a strong focus on scalable
          microservices architecture.
        </p>

        <p className="text-black dark:text-white/50 md:w-[40rem] text-left md:text-center leading-6">
          Currently, I work at Kairosoft AI Solutions as a Founding Engineer, where I
          played a key role in building Volkai HR, an agentic AI platform for interview
          automation, from the ground up. My work includes designing scalable RESTful
          APIs, implementing SSO-based authentication, building AI-driven workflows using
          LangChain and LangGraph, integrating RabbitMQ for asynchronous processing, and
          deploying production-ready applications using Docker, CI/CD pipelines, and
          DigitalOcean.
        </p>
      </FadeUp>
    </div>
  )
}

export default About
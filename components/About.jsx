"use client"
import React, { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import { ActiveSectionContex } from '@/context/active-context';
import { FadeUp } from '@/lib/Animation';


const About = () => {

  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useContext(ActiveSectionContex)

  useEffect(()=>{
      if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection("About")
      }
  },[inView, setActiveSection, timeOfLastClick]);

  return (
    <div id='about' ref={ref} className='text-gray-700 mb-28 md:mb-36  text-center flex flex-col justify-center items-center scroll-mt-28 mx-4 dark:text-white/80'
       
    >

            <h1 className=' text-5xl mb-4 md:mb-8'>About Me</h1>
            <FadeUp>
            <p className='text-black dark:text-white/50 mb-3 md:w-[40rem] text-left md:text-center leading-7' >
            Greetings from my corner of the web! I&apos;m a passionate full-stack developer based in Dombivli, India, holding a B.Sc in Information Technology from K V Pendharkar College.
            Beyond coding, you&apos;ll find me immersed in the rhythm of music, with a deep love for listening to songs. I also enjoy the thrill of the cricket pitch, where I indulge in friendly games to unwind. Additionally, I find inspiration and knowledge in podcasts, expanding my horizons beyond the lines of code.            </p>
            <p className=' text-black dark:text-white/50 md:w-[40rem] text-left md:text-center leading-6'> 
            As a fresher actively seeking opportunities, I bring a fresh perspective and a strong skill set, including mastery of HTML, React.js, Express.js, CSS, Tailwind CSS, Node.js, and MongoDB. This rich skill set forms a robust toolkit for crafting dynamic and efficient web applications.
            
My commitment to excellence is exemplified in my recent completion of the Full Stack Developer course with PW Skills. Through self-directed online learning, I gained a comprehensive understanding of building dynamic web applications. Guided by the course content, I prioritized clean code, reusability, and readability, ensuring each project meets the highest standards. I am enthusiastic about contributing my skills and learning from new challenges in a professional setting.            </p>
</FadeUp>
</div>
  )
}

export default About
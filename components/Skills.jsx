import { skillsData } from '@/lib/data'
import React from 'react'
import { motion } from 'framer-motion'

const animation = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (idx) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * idx,
        },
    }),
};
const Skills = () => {
  return (
    <div id='skills' className='text-gray-700 mb-28 scroll-mt-28'>
        <main className=' flex justify-center   text-center mb-10 text-5xl '>My Skills</main>
        <ul className='flex flex-wrap justify-center gap-2 md:text-lg text-gray-800 mx-2 md:mx-auto lg:w-[700px] '>
            {skillsData.map((skill, idx) => (
                
                <motion.li 
                variants={animation}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                custom={idx}
                className='bg-white border border-black/[0.1] rounded-xl px-4 py-2 md:px-5 md:py-3 flex gap-1' key={skill.title}>{skill.title}

                <p className='mt-1 text-lg'>{skill.logo}</p>
                </motion.li>
                
                
                

            ))}
        </ul>
    </div>
  )
}

export default Skills
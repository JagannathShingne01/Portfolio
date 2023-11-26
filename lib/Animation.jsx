import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const HorizontalTextMover = ({ props, text }) => {
  const controls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      await controls.start({
        x: ['0%', '100%'],
        transition: {
          duration: 5,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        },
      });
    };

    runAnimation();
  }, [controls]);

  return (
    <motion.div className='m-0 absolute z-10 whitespace-nowrap -bottom-[270px] -left-[100px] font-bold text-[30vh] text-gray-500 opacity-10 overflow-hidden'animate={controls}>
      {text}
      {props}
    </motion.div>
  );
};

export default HorizontalTextMover;

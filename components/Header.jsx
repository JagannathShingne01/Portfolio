import Image from "next/image";
import self from "@/public/self.jpg"
import { motion } from 'framer-motion';

const sliderVariants = {
  inital:{
    x:0,
  },
  animate:{
    x: "-220%",
    transition:{
      repeat: Infinity,
      duration: 20,
      repeatType:"mirror"
    }
  }
}


const Header = () => {
  return (
    <div className="h-screen">
      <div  className="relative max-w-3xl lg:max-w-7xl xl:mx-auto place-items-center  flex md:flex-row flex-col-reverse justify-center md:justify-between md:my-10">
          <div className="text-gray-500 gap-2 ">
              <h2 className="text-xl md:text-5xl">hello,I'm Jagannath Shingne</h2>
              <h1 className="text-xl md:text-3xl mt-2">Web Devloper</h1>
              <p className="w-96 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime ratione necessitatibus reprehenderit excepturi porro similique reiciendis libero deserunt. Sapiente consequatur suscipit magnam consectetur dolore sed sint beatae mollitia autem?</p>
              <div>
                <button className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 mr-8">Resume</button>
                <button className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6">Git Hub</button>
              </div>
              {/* <motion.div variants={sliderVariants} inital="initial" animate="animate" className="mx-2 absolute whitespace-nowrap -bottom-[250px] max-w-7xl font-bold text-[30vh] text-gray-500 opacity-10 ">
 Web Devloper
              </motion.div> */}
          </div>
          <div className="">
              <Image 
                  src={self}
                  width={500}
                  height={500}
                  alt="Jagannath Shingne"
                  className=""
              />
          </div>
        
      </div>
    </div>
  )
};

export default Header;
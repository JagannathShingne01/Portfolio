import Image from "next/image";
import Link from 'next/link'
import self from "@/public/admin.jpeg"
// import resume from "@/public/Resume.pdf"
import HorizontalTextMover from '@/lib/Animation.jsx'
import { FaFileDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const Header = () => {
  return (
    <div className="h-screen">
      <div  className="relative lg:max-w-7xl xl:mx-auto place-items-center flex md:flex-row flex-col-reverse justify-center items-center mx-4 md:justify-between md:my-10">
          <div className="text-gray-500 gap-2 ">
              <h2 className="text-xl md:text-3xl mt-3">Hello, </h2>
              <span className="text-2xl md:text-5xl">I&apos;m Jagannath Shingne</span>
              <h1 className="text-lg md:text-3xl md:mt-2">Web Devloper</h1>
              <p className="md:w-96 pt-2">Experienced in crafting dynamic web applications with a commitment to clean code and user-centric design. Committed to continuous learning, I am eager to contribute innovative solutions to complex challenges.</p>
             <div className="flex">
                <div className="">
                      <button  className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 mr-8 flex">
                            <span>Resume</span>
                            <FaFileDownload className="mt-1 ml-1"/>
                        </button>
                  </div>
                <div>
                    <Link href={"https://github.com/JagannathShingne01"} target="_blank" className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 flex">
                      <span>Git Hub</span>
                      <FaGithub className="mt-1 ml-1"/>
                    </Link>
                  </div>
             
             </div>
            
             
              {/* <HorizontalTextMover text={"Web Devloper"}/> */}
             
             
          </div>
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
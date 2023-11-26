import Image from "next/image";
import self from "@/public/admin.jpeg"
import HorizontalTextMover from '@/lib/Animation.jsx'




const Header = () => {
  return (
    <div className="h-screen">
      <div  className="relative lg:max-w-7xl xl:mx-auto place-items-center flex md:flex-row flex-col-reverse justify-center items-center mx-4 md:justify-between md:my-10">
          <div className="text-gray-500 gap-2 ">
              <h2 className="text-xl md:text-3xl mt-3">Hello, </h2>
              <span className="text-2xl md:text-5xl">I&apos;m Jagannath Shingne</span>
              <h1 className="text-lg md:text-3xl md:mt-2">Web Devloper</h1>
              <p className="md:w-96 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maxime ratione necessitatibus reprehenderit excepturi porro similique reiciendis libero deserunt. Sapiente consequatur suscipit magnam consectetur dolore sed sint beatae mollitia autem?</p>
              <div>
                <button className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6 mr-8">Resume</button>
                <button className="py-1 px-5 ring-2 ring-gray-500 rounded-md mt-6">Git Hub</button>
              </div> 
             
              {/* <HorizontalTextMover text={"Web Devloper"}/> */}
             
             
          </div>
          <div className="">
              <Image 
                  src={self}
                  width={500}
                  height={500}
                  alt="Jagannath Shingne"
                  className="max-h-[450px]"
              />
          </div>
        
      </div>
    </div>
  )
};

export default Header;
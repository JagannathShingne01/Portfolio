import Image from "next/image";
import self from "@/public/self.jpg"
const Header = () => {
  return (
    <div className="h-screen">
      <div  className="flex flex-col md:flex-row justify-between items-center mx-44">
          <div className="text-gray-500 text-3xl">
              <h2>Jagannath Shingne</h2>
              <h1>Web Devloper</h1>
          </div>
        <div className="flex-col-reverse">
              <Image 
                  src={self}
                  width={500}
                  height={500}
                  alt="Jagannath Shingne"
              />
        </div>
      </div>
    </div>
  )
};

export default Header;
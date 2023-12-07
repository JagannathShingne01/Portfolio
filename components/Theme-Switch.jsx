import React, { useEffect, useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

const ThemeSwitch = () => {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () =>{
        if(theme === "light"){
            setTheme("dark");
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add("dark")
        } else{
            setTheme("light");
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove("dark")

        }
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme")
        if(localTheme){
            setTheme(localTheme)
            if(localTheme === "dark"){
                document.documentElement.classList.add("dark");
            }else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
                setTheme("dark");
                document.documentElement.classList.add("dark");

            }

        }
    },[])

  return (
   <button className='fixed bottom-4 right-4 text-gray-700 bg-white h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
   onClick={toggleTheme}
   >
    {
       theme === "light" ? <BiSolidSun className='text-xl'/> : <BiSolidMoon/>
       
    }
   </button>
  )
}

export default ThemeSwitch
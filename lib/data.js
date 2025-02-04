import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { DiMysql } from "react-icons/di";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] 

export const projectData = [
  {
    title: "Summize",
    description: "A web app that uses OpenAI GPT-4 via RapidAPI to generate concise article summaries. Built with Tailwind CSS for responsiveness and Redux for state management. ",
    slug: "https://sumzdev-ai.vercel.app/",
    git: "https://github.com/JagannathShingne01/Sumz",
    tech: ["ReactJS"],
    img: "/sumz.png"
    
  },
  {
    title: "Pokedex",
    description: "A Pokedex project in React.js is a web application that simulates a digital encyclopedia or database for Pokemon, which are fictional creatures from the Pokémon franchise. ",
    slug: "https://pokedex-s6r4.vercel.app/",
    git: "https://github.com/JagannathShingne01/LMS_Client",
    tech: ["ReactJS"],
    img: "/proPokedex.png"
    
  },
  {
    title: "Coursify (Learning Management System)",
    description: "Learning Management System with secure Razorpay payments. Achieved project excellence through robust authentication mechanisms and a responsive design for an optimal user experience.",
    slug: "https://coursify-dun.vercel.app/",
    git: "https://github.com/JagannathShingne01/Pokedex",
    tech: ["rect", "next"],
    img: "/proCourse.png"
    
  },
  // {
  //   title: "Tic Tac Toe (Game)",
  //   description: "This project is a simple implementation of the game using HTML, CSS, and JavaScript.",
  //   slug: "https://tic-tac-toe-gamejs.netlify.app/",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   img: "/ticTac.png"
    
  // },
]

export const skillsData = [
  {
    title:"HTML",
    logo: <FaHtml5/>
  },
  {
    title:"CSS",
    logo: <FaCss3/>
  },
  {
    title:"Tailwind",
    logo: <TbBrandTailwind/>
  },
  {
    title:"JavaScript",
    logo: <BiLogoJavascript/>
  },
  {
    title:"ReactJS",
    logo: <FaReact/>
  },
  {
    title:"Express",
    logo: <SiExpress/>
  },
  {
    title:"NodeJS",
    logo: <FaNode/>
  },
  {
    title:"NextJS",
    logo: <SiNextdotjs/>
  },
  {
    title:"Java",
    logo: <FaJava />
  },
   {
    title:"DSA",
    logo: <TbBrandLeetcode  />
  },
  {
    title:"Git",
    logo: <FaGitAlt/>
  },
  {
    title:"MongoDB",
    logo: <SiMongodb/>
  },
  {
    title:"MySQL",
    logo: <DiMysql/>
  },
  {
    title:"Hygraph CMS",
    logo: <GrGraphQl/>
  },
  
   
] 

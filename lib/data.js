import { FaDocker, FaGithub, FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { TbApi, TbBrain, TbBrandTailwind, TbGitMerge, TbHierarchy, TbPlug, TbProgress, TbTopologyComplex } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiDigitalocean, SiExpress, SiGithubactions, SiJest, SiJsonwebtokens, SiRabbitmq, SiRadixui, SiRedis, SiTypescript, SiWebrtc } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
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
    title: "Coursify (Learning Management System)",
    description: "Learning Management System with secure Razorpay payments. Achieved project excellence through robust authentication mechanisms and a responsive design for an optimal user experience.",
    slug: "https://coursify-dun.vercel.app/",
    git: "https://github.com/JagannathShingne01/Pokedex",
    tech: ["rect", "next"],
    img: "/proCourse.png"
    
  },
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
 
  // {
  //   title: "Tic Tac Toe (Game)",
  //   description: "This project is a simple implementation of the game using HTML, CSS, and JavaScript.",
  //   slug: "https://tic-tac-toe-gamejs.netlify.app/",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   img: "/ticTac.png"
    
  // },
]

export const skillsData = [
  // Languages
  { title: "TypeScript", logo: <SiTypescript /> },
  { title: "JavaScript", logo: <BiLogoJavascript /> },
  { title: "Java", logo: <FaJava />},
  { title: "SQL", logo: <DiMysql /> },

  // Frontend
  { title: "HTML", logo: <FaHtml5 /> },
  { title: "Tailwind CSS", logo: <TbBrandTailwind />},
  { title: "React.js", logo: <FaReact /> },
  { title: "Next.js", logo: <SiNextdotjs />},
  { title: "shadcn/ui", logo: <SiRadixui /> },

  // Backend
  { title: "Node.js", logo: <FaNode />, category: "Backend" },
  { title: "Express.js", logo: <SiExpress />, category: "Backend" },
  { title: "REST APIs", logo: <TbApi />, category: "Backend" },
  { title: "JWT", logo: <SiJsonwebtokens />, category: "Backend" },
  { title: "Microservices", logo: <TbTopologyComplex />, category: "Backend" },

  // Databases
  { title: "MongoDB", logo: <SiMongodb />, category: "Databases" },
  { title: "MySQL", logo: <DiMysql />, category: "Databases" },
  { title: "Redis", logo: <SiRedis />, category: "Databases" },

  // Messaging & Real-Time
  { title: "RabbitMQ", logo: <SiRabbitmq />, category: "Messaging & Real-Time" },
  { title: "WebSockets", logo: <TbPlug />, category: "Messaging & Real-Time" },
  { title: "WebRTC", logo: <SiWebrtc />, category: "Messaging & Real-Time" },

  // DevOps & Cloud
  { title: "Docker", logo: <FaDocker />, category: "DevOps & Cloud" },
  { title: "CI/CD", logo: <TbGitMerge />, category: "DevOps & Cloud" },
  { title: "GitHub Actions", logo: <SiGithubactions />, category: "DevOps & Cloud" },
  { title: "DigitalOcean", logo: <SiDigitalocean />, category: "DevOps & Cloud" },

  // Testing & Tools
  { title: "Jest", logo: <SiJest />, category: "Testing & Tools" },
  { title: "Git", logo: <FaGitAlt />, category: "Testing & Tools" },
  { title: "GitHub", logo: <FaGithub />, category: "Testing & Tools" },
  // { title: "n8n", logo: <SiN8N />, category: "Testing & Tools" },

  // AI & Automation
  { title: "LangChain", logo: <TbBrain />, category: "AI & Automation" },
  { title: "LangGraph", logo: <TbHierarchy />, category: "AI & Automation" },

  // Concepts
  { title: "Data Structures & Algorithms", logo: <TbBrandLeetcode />, category: "Concepts" },
  // { title: "System Design", logo: <TbArchitecture />, category: "Concepts" },
  { title: "SDLC", logo: <TbProgress />, category: "Concepts" },
];
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFileDownload } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiJavascript, SiMysql, SiRedis, SiRabbitmq, SiDocker, SiGithubactions, SiDigitalocean, SiJest, SiGit } from "react-icons/si";
import Link from "next/link";
import { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Roboto_Mono } from "next/font/google";
import { ActiveSectionContex } from "@/context/active-context";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbApi, TbBrandTailwind } from "react-icons/tb";

// Font
const roboto = Roboto_Mono({ subsets: ["latin"] });

const floatingSkills = [
  { Icon: SiTypescript, x: "15%", y: "35%", delay: 0.5 },
  { Icon: SiJavascript, x: "85%", y: "15%", delay: 1.2 },
  // { Icon: SiJava, x: "60%", y: "85%", delay: 2.1 },
  { Icon: BiLogoPostgresql, x: "30%", y: "55%", delay: 1.7 },

  { Icon: TbApi, x: "5%", y: "50%", delay: 2.4 }, // HTML
  { Icon: TbBrandTailwind, x: "45%", y: "80%", delay: 1.9 },

  { Icon: FaReact, x: "75%", y: "45%", delay: 0.8 },
  { Icon: SiNextdotjs, x: "55%", y: "5%", delay: 2.8 },

  { Icon: FaNodeJs, x: "25%", y: "10%", delay: 1.3 },
  { Icon: SiExpress, x: "90%", y: "40%", delay: 2.6 },

  { Icon: SiMongodb, x: "10%", y: "85%", delay: 3.1 },
  { Icon: SiMysql, x: "40%", y: "20%", delay: 2.0 },
  { Icon: SiRedis, x: "65%", y: "65%", delay: 1.5 },
  { Icon: SiRabbitmq, x: "80%", y: "75%", delay: 2.9 },

  { Icon: SiDocker, x: "5%", y: "15%", delay: 3.3 },
  { Icon: SiGithubactions, x: "95%", y: "10%", delay: 2.2 },
  { Icon: SiDigitalocean, x: "50%", y: "90%", delay: 3.6 },
  { Icon: SiJest, x: "35%", y: "75%", delay: 1.1 },

  { Icon: SiGit, x: "20%", y: "60%", delay: 2.7 },
  { Icon: FaGithub, x: "88%", y: "55%", delay: 1.6 },

  // { Icon: SiLangchain, x: "58%", y: "30%", delay: 2.3 },
];


export default function Header() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useContext(ActiveSectionContex);

  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection]);

  return (
    <div
      ref={ref}
      id="home"
      className={`relative md:mb-36 mb-28 scroll-mt-44 overflow-hidden ${roboto.className}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Tech Stack Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingSkills.map(({ Icon, x, y, delay }, i) => (
            <motion.div
              key={i}
              className="absolute text-gray-400/40 dark:text-white/20"
              style={{ left: x, top: y }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
            >
              <Icon size={28} />
            </motion.div>
          ))}
        </div>

        {/* Gradient Blobs */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 150, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -120, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative lg:max-w-7xl xl:mx-auto flex flex-col justify-center items-center text-center mx-4 md:mx-4 md:my-16 min-h-[70vh]">
        <motion.div
          className="text-gray-500 gap-3"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-3xl mt-3 text-gray-700 dark:text-white/80">
            Hello 👋
          </h2>

          <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 dark:text-white/90">
            I’m Jagannath Shingne
          </h1>

          <h3 className="text-lg md:text-2xl mt-2 text-gray-600 dark:text-white/70">
            Software Developer | MERN Stack Engineer
          </h3>

          <p className="md:w-[480px] mx-auto pt-4 text-gray-600 dark:text-white/70 leading-relaxed">
            I build scalable, high-performance full-stack applications using modern
            web technologies. Passionate about clean architecture, performance, and
            user-focused design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 justify-center">
            <a
              href="/JagannathDEVResume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group py-2 px-6 rounded-lg border border-gray-500/40 backdrop-blur-md
                         hover:bg-gray-200/20 dark:hover:bg-white/10 transition-all
                         text-gray-700 dark:text-white/80 flex items-center gap-2"
            >
              Resume
              <FaFileDownload className="group-hover:translate-y-[2px] transition-transform" />
            </a>

            <Link
              href="https://github.com/JagannathShingne01"
              target="_blank"
              className="group py-2 px-6 rounded-lg border border-gray-500/40 backdrop-blur-md
                         hover:bg-gray-200/20 dark:hover:bg-white/10 transition-all
                         text-gray-700 dark:text-white/80 flex items-center gap-2"
            >
              GitHub
              <FaGithub className="group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

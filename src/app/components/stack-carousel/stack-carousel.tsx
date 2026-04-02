import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaTrello } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiFirebase, SiRedis, SiNextdotjs, SiVite, SiJavascript, SiExpress, SiNpm, SiAxios, SiGooglecloud, SiPostman, SiSelenium, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

type StackItem = {
    label: string;
    icon: IconType;
}

const STACK_ITEMS: StackItem[] = [

    {
        label: 'Node.js',
        icon: FaNodeJs
    },
    {
        label: 'TypeScript',
        icon: SiTypescript
    },
    {
        label: 'Java',
        icon: FaJava
    },
    {
        label: 'Express.js',
        icon: SiExpress
    },
    {
        label: 'NPM',
        icon: SiNpm
    },
    {
        label: 'PostgreSQL',
        icon: SiPostgresql
    },
    {
        label: 'MongoDB',
        icon: SiMongodb
    },
    {
        label: 'Firebase',
        icon: SiFirebase
    },
    {
        label: 'Redis',
        icon: SiRedis
    },
    {
        label: 'React',
        icon: FaReact
    },
    {
        label: 'JavaScript',
        icon: SiJavascript
    },
    {
        label: 'Tailwind CSS',
        icon: SiTailwindcss
    },
    {
        label: 'Axios',
        icon: SiAxios
    },
    {
        label: 'HTML5',
        icon: FaHtml5
    },
    {
        label: 'CSS3',
        icon: FaCss3Alt
    },
    {
        label: 'Vite',
        icon: SiVite
    },
    {
        label: 'Next.js',
        icon: SiNextdotjs
    },
    {
        label: 'Vercel',
        icon: SiVercel
    },
    {
        label: 'Google Cloud',
        icon: SiGooglecloud
    },
    {
        label: 'Postman',
        icon: SiPostman
    },
    {
        label: 'Git',
        icon: FaGitAlt
    },
    {
        label: 'Trello',
        icon: FaTrello
    },
    {
        label: 'Selenium',
        icon: SiSelenium
    },
    {
        label: 'Figma',
        icon: FaFigma
    },

]

export default function StackCarousel() {
  return (
    <div className="relative overflow-hidden w-full py-8 bg-transparent mt-30">

      {/* Fade lateral */}
      <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-background to-transparent z-10"></div>

      <div className="flex gap-20 w-max animate-marquee">
        {[...STACK_ITEMS, ...STACK_ITEMS].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-center"
              title={item.label}
            >
              <Icon
                className={`
                  text-8xl
                  "text-white"}
                  hover:scale-110
                  transition
                  cursor-pointer
                `}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
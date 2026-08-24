import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  {
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    icon: SiNextdotjs,
    color: "#ffffff",
  },
  {
    icon: FaNodeJs,
    color: "#68A063",
  },
  {
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    icon: FaDocker,
    color: "#2496ED",
  },
  {
    icon: FaAws,
    color: "#FF9900",
  },
];

export default function TechStack() {
  return (
    <section
      className="
        w-full
        pt-0
        pb-4
        sm:pb-5
        overflow-hidden
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            flex
            items-center
            justify-center
            flex-wrap
            gap-x-8
            sm:gap-x-10
            lg:gap-x-12
            gap-y-4
          "
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 8,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                  scale: 1.12,
                }}
                className="
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  transition-transform
                  duration-300
                "
              >
                <Icon
                  size={25}
                  style={{
                    color: tech.color,
                  }}
                  className="
                    opacity-55
                    transition-all
                    duration-300
                    hover:opacity-100
                    hover:drop-shadow-[0_0_8px_currentColor]
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
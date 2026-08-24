import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Code2,
  FolderKanban,
  Lightbulb,
  Target,
  GraduationCap,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const techStack = [
  {
    name: "React",
    icon: "⚛",
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: "⬡",
    color: "text-green-400",
  },
  {
    name: "Express",
    icon: "EX",
    color: "text-white",
  },
  {
    name: "MongoDB",
    icon: "◆",
    color: "text-green-500",
  },
  {
    name: "JavaScript",
    icon: "JS",
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: "TS",
    color: "text-blue-400",
  },
  {
    name: "Tailwind",
    icon: "〰",
    color: "text-cyan-400",
  },
  {
    name: "Git",
    icon: "◆",
    color: "text-orange-400",
  },
];

const stats = [
  {
    icon: Code2,
    value: "Fresher",
    label: "Experience",
    color: "text-cyan-400",
  },
  {
    icon: FolderKanban,
    value: "5+",
    label: "Projects",
    color: "text-blue-400",
  },
  {
    icon: Lightbulb,
    value: "10+",
    label: "Technologies",
    color: "text-yellow-400",
  },
  {
    icon: Target,
    value: "100%",
    label: "Learning",
    color: "text-pink-400",
  },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        px-5
        sm:px-8
        lg:px-10
        xl:px-12
        pt-24
        sm:pt-28
        lg:pt-24
        pb-14
        lg:pb-16
      "
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="
            absolute
            top-[-5%]
            left-[-8%]
            w-[300px]
            h-[300px]
            rounded-full
            bg-blue-600/[0.07]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            bottom-[-5%]
            right-[-5%]
            w-[320px]
            h-[320px]
            rounded-full
            bg-purple-600/[0.07]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            top-[35%]
            right-[30%]
            w-[220px]
            h-[220px]
            rounded-full
            bg-cyan-500/[0.025]
            blur-[110px]
          "
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.92fr_1.08fr]
            gap-10
            xl:gap-14
            items-start
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="max-w-[550px]"
          >
            {/* Availability */}
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
                duration: 0.45,
              }}
              className="
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/[0.06]
                text-cyan-400
                text-[11px]
                font-medium
                mb-4
              "
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    rounded-full
                    bg-cyan-400
                    opacity-60
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-400
                  "
                />
              </span>

              Available for new opportunities
            </motion.div>

            {/* Heading */}
            <h1
              className="
                font-display
                font-bold
                tracking-tight
                leading-[0.94]
                text-white
              "
            >
              <span
                className="
                  block
                  text-4xl
                  sm:text-5xl
                  lg:text-[54px]
                  xl:text-[60px]
                "
              >
                Hi, I'm
              </span>

              <span
                className="
                  block
                  text-4xl
                  sm:text-5xl
                  lg:text-[54px]
                  xl:text-[60px]
                  mt-1
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Ankit
              </span>

              <span
                className="
                  block
                  text-4xl
                  sm:text-5xl
                  lg:text-[54px]
                  xl:text-[60px]
                  mt-1
                  bg-gradient-to-r
                  from-blue-500
                  via-indigo-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Vishwakarma
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[520px]
                text-gray-400
                text-sm
                sm:text-base
                leading-6
              "
            >
              Passionate Full Stack Developer and problem solver. I build
              clean, scalable and user-friendly web applications using
              modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-lg
                  bg-gradient-to-r
                  from-blue-500
                  to-purple-500
                  text-white
                  text-sm
                  font-semibold
                  shadow-[0_8px_25px_-10px_rgba(59,130,246,0.7)]
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.8)]
                  transition-all
                  duration-300
                "
              >
                View My Work

                <ArrowRight
                  size={15}
                  className="
                    group-hover:translate-x-1
                    transition-transform
                    duration-300
                  "
                />
              </a>

              <Link
  to="/resume"
  className="
    group
    inline-flex
    items-center
    gap-2
    px-4
    py-2.5
    rounded-lg
    border
    border-white/15
    bg-white/[0.02]
    text-gray-200
    text-sm
    font-semibold
    hover:bg-white/[0.06]
    hover:border-white/25
    hover:-translate-y-0.5
    transition-all
    duration-300
  "
>
  Download Resume

  <Download
    size={15}
    className="
      group-hover:translate-y-0.5
      transition-transform
      duration-300
    "
  />
</Link>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5 mt-4">
              <span className="text-xs text-gray-500 mr-1">
                Let's connect
              </span>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={14} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={14} />
              </a>

              <a
                href="mailto:hello@ankit.dev"
                aria-label="Email"
                className="
                  w-8
                  h-8
                  rounded-full
                  bg-white/[0.04]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT PROFILE CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              relative
              w-full
              max-w-[560px]
              ml-auto
              self-start
              lg:mt-8
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                -inset-3
                bg-gradient-to-r
                from-blue-500/8
                via-purple-500/8
                to-cyan-500/8
                blur-3xl
                rounded-[35px]
                pointer-events-none
              "
            />

            {/* Card */}
            <div
              className="
                relative
                rounded-2xl
                border
                border-white/[0.09]
                bg-[#080d18]/90
                backdrop-blur-xl
                overflow-hidden
                shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]
              "
            >
              {/* Profile Header */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative shrink-0">
                      <div
                        className="
                          w-12
                          h-12
                          sm:w-13
                          sm:h-13
                          rounded-full
                          bg-gradient-to-br
                          from-cyan-400
                          via-blue-500
                          to-purple-600
                          flex
                          items-center
                          justify-center
                          text-white
                          text-lg
                          font-bold
                          shadow-[0_0_25px_rgba(59,130,246,0.25)]
                        "
                      >
                        A
                      </div>

                      <span
                        className="
                          absolute
                          right-0
                          bottom-0
                          w-3
                          h-3
                          rounded-full
                          bg-green-400
                          border-2
                          border-[#080d18]
                        "
                      />
                    </div>

                    <div>
                      <h2
                        className="
                          text-lg
                          sm:text-xl
                          font-bold
                          text-white
                        "
                      >
                        Ankit Vishwakarma
                      </h2>

                      <p className="text-cyan-400 text-xs sm:text-sm mt-0.5">
                        Full Stack Developer
                      </p>

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-1
                          mt-1
                          px-2
                          py-0.5
                          rounded-full
                          bg-blue-500/10
                          border
                          border-blue-500/20
                          text-blue-300
                          text-[10px]
                        "
                      >
                        <GraduationCap size={11} />
                        Fresher
                      </span>
                    </div>
                  </div>

                  {/* Availability */}
                  <div
                    className="
                      hidden
                      sm:flex
                      items-center
                      gap-2
                      px-2.5
                      py-1.5
                      rounded-lg
                      border
                      border-green-400/20
                      bg-green-400/[0.05]
                    "
                  >
                    <span className="text-green-400 text-sm">
                      ↗
                    </span>

                    <div>
                      <p className="text-[9px] text-gray-500">
                        Open to
                      </p>

                      <p className="text-[10px] font-semibold text-green-400">
                        Opportunities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="
                    text-gray-400
                    text-xs
                    sm:text-sm
                    leading-5
                    mt-3
                  "
                >
                  A motivated fresher eager to contribute, learn and grow
                  while building impactful digital solutions.
                </p>

                <div className="h-px bg-white/[0.07] my-3.5" />

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                      <motion.div
                        key={stat.label}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.4 + index * 0.07,
                          duration: 0.35,
                        }}
                        className="
                          group
                          rounded-lg
                          bg-white/[0.025]
                          border
                          border-white/[0.06]
                          p-2
                          text-center
                          hover:bg-white/[0.05]
                          hover:border-white/10
                          transition-all
                          duration-300
                        "
                      >
                        <Icon
                          size={14}
                          className={`
                            ${stat.color}
                            mx-auto
                            mb-1
                            group-hover:scale-110
                            transition-transform
                            duration-300
                          `}
                        />

                        <p className="text-sm font-bold text-white">
                          {stat.value}
                        </p>

                        <p className="text-[9px] text-gray-500 mt-0.5">
                          {stat.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-5 sm:px-6 pt-4 pb-5">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-xs font-semibold text-white">
                    Tech Stack I Work With
                  </h3>

                  <a
                    href="#skills"
                    className="
                      text-[10px]
                      text-cyan-400
                      hover:text-cyan-300
                      flex
                      items-center
                      gap-1
                      transition-colors
                    "
                  >
                    View all
                    <ArrowRight size={10} />
                  </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex
                        items-center
                        gap-1.5
                        px-2
                        py-1.5
                        rounded-lg
                        bg-white/[0.025]
                        border
                        border-white/[0.06]
                        hover:bg-white/[0.06]
                        hover:border-white/10
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        className={`
                          w-5
                          text-center
                          text-xs
                          font-bold
                          ${tech.color}
                        `}
                      >
                        {tech.icon}
                      </span>

                      <span className="text-[10px] text-gray-300 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus */}
              <div
                className="
                  px-5
                  sm:px-6
                  py-4
                  border-t
                  border-white/[0.07]
                  bg-white/[0.015]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-white/[0.06]
                      flex
                      items-center
                      justify-center
                      text-gray-300
                      shrink-0
                    "
                  >
                    <GraduationCap size={15} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white">
                      Currently Focused On
                    </p>

                    <p className="text-[10px] text-gray-500 mt-0.5 truncate">
                      DSA, System Design & real-world projects
                    </p>
                  </div>

                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
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
  Sparkles,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

/* =========================================================
   TECH STACK
========================================================= */

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

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    icon: Code2,
    value: "Freelancer",
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
    value: "Growing",
    label: "Every Day",
    color: "text-emerald-400",
  },
];

/* =========================================================
   HERO SECTION
========================================================= */

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        px-5
        pt-24
        pb-16
        sm:px-8
        sm:pt-28
        lg:px-10
        lg:pt-28
        lg:pb-20
        xl:px-12
      "
    >
      {/* =================================================
          BACKGROUND
          Very subtle — keeps your dark portfolio clean.
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* top left */}

        <div
          className="
            absolute
            -left-24
            -top-24
            h-[360px]
            w-[360px]
            rounded-full
            bg-cyan-500/[0.035]
            blur-[120px]
          "
        />

        {/* bottom right */}

        <div
          className="
            absolute
            -bottom-32
            -right-24
            h-[380px]
            w-[380px]
            rounded-full
            bg-blue-600/[0.035]
            blur-[130px]
          "
        />

        {/* center */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/[0.018]
            blur-[120px]
          "
        />
      </div>

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[0.92fr_1.08fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

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
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              max-w-[590px]
            "
          >
            {/* =================================================
                AVAILABILITY BADGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
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
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-emerald-400/20
                bg-emerald-400/[0.045]
                px-3.5
                py-1.5
                text-[11px]
                font-medium
                text-emerald-400
              "
            >
              <span
                className="
                  relative
                  flex
                  h-1.5
                  w-1.5
                "
              >
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-50
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              Open to Full-Stack Opportunities
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                font-display
                font-bold
                leading-[0.95]
                tracking-tight
                text-white
              "
            >
              <span
                className="
                  block
                  text-4xl
                  sm:text-5xl
                  lg:text-[56px]
                  xl:text-[64px]
                "
              >
                Hi, I'm
              </span>

              <span
                className="
                  mt-1
                  block
                  text-4xl
                  sm:text-5xl
                  lg:text-[56px]
                  xl:text-[64px]
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Ankit Vishwakarma
              </span>

              <span
                className="
                  mt-3
                  block
                  text-2xl
                  font-semibold
                  text-gray-300
                  sm:text-3xl
                  lg:text-[34px]
                "
              >
                Full Stack Developer
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-6
                max-w-[550px]
                text-sm
                leading-7
                text-gray-400
                sm:text-base
              "
            >
              I build modern web applications across the frontend,
              backend, and database layer — with a focus on clean
              architecture, reliable APIs, and thoughtful user
              experiences.
            </p>

            <p
              className="
                mt-3
                max-w-[540px]
                text-sm
                leading-6
                text-gray-500
              "
            >
              Currently strengthening my fundamentals through
              real-world projects, backend systems, databases,
              DSA, and software engineering.
            </p>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              {/* View projects */}

              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_-12px_rgba(6,182,212,0.65)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_15px_35px_-12px_rgba(6,182,212,0.8)]
                "
              >
                Explore My Work

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Resume */}

              <Link
                to="/resume"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.025]
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-gray-200
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/20
                  hover:bg-white/[0.05]
                "
              >
                View Resume

                <Download
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </Link>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  mr-1
                  text-xs
                  text-gray-600
                "
              >
                Let's connect
              </span>

              {/* GitHub */}

              <a
                href="https://github.com/ankitkvishwakarma"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.025]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.07]
                  hover:text-white
                "
              >
                <FaGithub size={15} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/ankit-kumar-vishwakarma-4a86561b1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.025]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.07]
                  hover:text-white
                "
              >
                <FaLinkedin size={15} />
              </a>

              {/* Email */}

              <a
                href="ankit789.en@gmail.com"
                aria-label="Email"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.025]
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.07]
                  hover:text-white
                "
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT PROFILE CARD
          ================================================= */}

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
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              relative
              w-full
              max-w-[570px]
              justify-self-end
            "
          >
            {/* =================================================
                VERY SUBTLE CARD GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-[32px]
                bg-cyan-500/[0.025]
                blur-3xl
              "
            />

            {/* =================================================
                PROFILE CARD
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#080d14]/95
                shadow-[0_25px_70px_-40px_rgba(0,0,0,0.95)]
              "
            >
              {/* =================================================
                  CARD HEADER
              ================================================= */}

              <div
                className="
                  p-5
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  {/* Profile identity */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    {/* Avatar */}

                    <div
                      className="
                        relative
                        shrink-0
                      "
                    >
                      <div
                        className="
                          flex
                          h-13
                          w-13
                          items-center
                          justify-center
                          rounded-full
                          bg-gradient-to-br
                          from-cyan-400
                          via-blue-500
                          to-purple-500
                          text-lg
                          font-bold
                          text-white
                        "
                      >
                        A
                      </div>

                      <span
                        className="
                          absolute
                          bottom-0
                          right-0
                          h-3
                          w-3
                          rounded-full
                          border-2
                          border-[#080d14]
                          bg-emerald-400
                        "
                      />
                    </div>

                    <div>
                      <h2
                        className="
                          text-lg
                          font-bold
                          text-white
                          sm:text-xl
                        "
                      >
                        Ankit Vishwakarma
                      </h2>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          text-cyan-400
                          sm:text-sm
                        "
                      >
                        Full Stack Developer
                      </p>

                      <span
                        className="
                          mt-1.5
                          inline-flex
                          items-center
                          gap-1
                          rounded-full
                          border
                          border-blue-400/15
                          bg-blue-400/[0.05]
                          px-2
                          py-0.5
                          text-[9px]
                          text-blue-300
                        "
                      >
                        <GraduationCap size={11} />
                        Early Career Developer
                      </span>
                    </div>
                  </div>

                  {/* Availability */}

                  <div
                    className="
                      hidden
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-emerald-400/15
                      bg-emerald-400/[0.04]
                      px-2.5
                      py-1.5
                      sm:flex
                    "
                  >
                    <Sparkles
                      size={13}
                      className="text-emerald-400"
                    />

                    <div>
                      <p className="text-[8px] text-gray-600">
                        Open to
                      </p>

                      <p className="text-[10px] font-semibold text-emerald-400">
                        Opportunities
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CARD DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-4
                    max-w-[500px]
                    text-xs
                    leading-5
                    text-gray-400
                    sm:text-sm
                  "
                >
                  I enjoy turning ideas into practical products —
                  from responsive interfaces and REST APIs to
                  databases, authentication, and deployment.
                </p>

                <div
                  className="
                    my-4
                    h-px
                    bg-white/[0.06]
                  "
                />

                {/* =================================================
                    STATS
                ================================================= */}

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-2
                    sm:grid-cols-4
                  "
                >
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                      <motion.div
                        key={stat.label}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            0.4 +
                            index * 0.07,
                          duration: 0.35,
                        }}
                        className="
                          group
                          rounded-xl
                          border
                          border-white/[0.06]
                          bg-white/[0.02]
                          p-2.5
                          text-center
                          transition-all
                          duration-300
                          hover:border-white/[0.1]
                          hover:bg-white/[0.04]
                        "
                      >
                        <Icon
                          size={14}
                          className={`
                            ${stat.color}
                            mx-auto
                            mb-1
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          `}
                        />

                        <p
                          className="
                            text-sm
                            font-bold
                            text-white
                          "
                        >
                          {stat.value}
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[9px]
                            text-gray-600
                          "
                        >
                          {stat.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  TECH STACK
              ================================================= */}

              <div
                className="
                  px-5
                  pb-5
                  sm:px-6
                "
              >
                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                  "
                >
                  <h3
                    className="
                      text-xs
                      font-semibold
                      text-white
                    "
                  >
                    Technologies I Work With
                  </h3>

                  <a
                    href="#skills"
                    className="
                      flex
                      items-center
                      gap-1
                      text-[10px]
                      text-cyan-400
                      transition-colors
                      hover:text-cyan-300
                    "
                  >
                    Explore stack
                    <ArrowRight size={10} />
                  </a>
                </div>

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-1.5
                    sm:grid-cols-4
                  "
                >
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex
                        items-center
                        gap-1.5
                        rounded-lg
                        border
                        border-white/[0.06]
                        bg-white/[0.02]
                        px-2
                        py-1.5
                        transition-all
                        duration-300
                        hover:border-white/[0.11]
                        hover:bg-white/[0.045]
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

                      <span
                        className="
                          truncate
                          text-[10px]
                          text-gray-300
                        "
                      >
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  CURRENT FOCUS
              ================================================= */}

              <div
                className="
                  border-t
                  border-white/[0.06]
                  bg-white/[0.012]
                  px-5
                  py-4
                  sm:px-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  {/* icon */}

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-cyan-400/10
                      bg-cyan-400/[0.04]
                      text-cyan-400
                    "
                  >
                    <GraduationCap size={15} />
                  </div>

                  {/* text */}

                  <div
                    className="
                      min-w-0
                      flex-1
                    "
                  >
                    <p
                      className="
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      Currently Building
                    </p>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[10px]
                        text-gray-500
                      "
                    >
                      Full-Stack Projects & Backend Systems
                    </p>
                  </div>

                  {/* status */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        animate-pulse
                        rounded-full
                        bg-cyan-400
                      "
                    />

                    <span
                      className="
                        hidden
                        text-[9px]
                        text-gray-600
                        sm:block
                      "
                    >
                      Building
                    </span>
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
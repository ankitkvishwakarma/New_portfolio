import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Download,
  Code2,
  FolderKanban,
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
   HERO SECTION
========================================================= */

export default function HeroSection() {
  const highlights = [
    {
      value: "5+",
      label: "Projects",
      icon: FolderKanban,
    },
    {
      value: "10+",
      label: "Technologies",
      icon: Code2,
    },
    {
      value: "DSA",
      label: "Problem Solving",
      icon: Target,
    },
  ];

  return (
    <section
      id="home"
      className="
        relative isolate
        flex min-h-[calc(100vh-72px)]
        w-full items-center
        overflow-hidden
        px-5 py-16
        sm:px-8 sm:py-20
        lg:px-10 lg:py-24
        xl:px-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Cyan glow */}
        <div
          className="
            absolute
            -left-32 -top-32
            h-[420px] w-[420px]
            rounded-full
            bg-cyan-500/[0.055]
            blur-[130px]
          "
        />

        {/* Green glow */}
        <div
          className="
            absolute
            -bottom-40 -right-32
            h-[460px] w-[460px]
            rounded-full
            bg-emerald-500/[0.045]
            blur-[140px]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            left-[52%] top-[38%]
            h-[320px] w-[320px]
            rounded-full
            bg-blue-600/[0.035]
            blur-[130px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1240px]
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[1fr_0.9fr]
            lg:gap-16
            xl:gap-24
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
            }}
            className="max-w-[650px]"
          >

            {/* =================================================
                AVAILABILITY BADGE
            ================================================= */}

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
                delay: 0.08,
                duration: 0.4,
              }}
              className="
                mb-6
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
              <span className="relative flex h-1.5 w-1.5">

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
                leading-[0.98]
                tracking-[-0.04em]
                text-white
              "
            >

              <span
                className="
                  block
                  text-4xl
                  sm:text-5xl
                  lg:text-[58px]
                  xl:text-[66px]
                "
              >
                Hi, I'm
              </span>

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-400
                  to-purple-500
                  bg-clip-text
                  text-4xl
                  text-transparent
                  sm:text-5xl
                  lg:text-[58px]
                  xl:text-[66px]
                "
              >
                Ankit Vishwakarma
              </span>

              <span
                className="
                  mt-5
                  block
                  text-2xl
                  font-semibold
                  tracking-[-0.02em]
                  text-gray-200
                  sm:text-3xl
                  lg:text-[35px]
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
                mt-7
                max-w-[590px]
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
                max-w-[570px]
                text-sm
                leading-6
                text-gray-500
              "
            >
              Currently strengthening my skills through real-world
              projects, backend systems, databases, DSA, and software
              engineering.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              "
            >

              {/* Explore Projects */}

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
                  shadow-[0_12px_30px_-14px_rgba(6,182,212,0.8)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_16px_36px_-14px_rgba(6,182,212,0.9)]
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
                  border-white/[0.12]
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
                mt-7
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
                href="mailto:ankit789.en@gmail.com"
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
              RIGHT — DEVELOPER SNAPSHOT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
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
              lg:justify-self-end
            "
          >

            {/* Card Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -inset-5
                rounded-[30px]
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
                border-white/[0.09]
                bg-[#080d14]/95
                shadow-[0_30px_80px_-45px_rgba(0,0,0,0.95)]
              "
            >

              {/* =================================================
                  CARD HEADER
              ================================================= */}

              <div
                className="
                  border-b
                  border-white/[0.06]
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

                  {/* Identity */}

                  <div
                    className="
                      flex
                      items-center
                      gap-3.5
                    "
                  >

                    {/* Avatar */}

                    <div className="relative shrink-0">

                      <div
                        className="
                          flex
                          h-12
                          w-12
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

                      <p
                        className="
                          text-lg
                          font-bold
                          text-white
                          sm:text-xl
                        "
                      >
                        Developer Snapshot
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          text-cyan-400
                          sm:text-sm
                        "
                      >
                        Full Stack • Backend • Problem Solving
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

                  {/* Status */}

                  <div
                    className="
                      hidden
                      rounded-lg
                      border
                      border-emerald-400/15
                      bg-emerald-400/[0.04]
                      px-2.5
                      py-1.5
                      sm:block
                    "
                  >
                    <p className="text-[8px] text-gray-600">
                      Status
                    </p>

                    <p
                      className="
                        text-[10px]
                        font-semibold
                        text-emerald-400
                      "
                    >
                      Available
                    </p>
                  </div>

                </div>

                {/* Card description */}

                <p
                  className="
                    mt-5
                    max-w-[510px]
                    text-xs
                    leading-5
                    text-gray-400
                    sm:text-sm
                  "
                >
                  I turn ideas into practical products — from
                  responsive interfaces and REST APIs to databases,
                  authentication, and deployment.
                </p>

              </div>

              {/* =================================================
                  HIGHLIGHTS
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-3
                  gap-2
                  p-5
                  sm:p-6
                "
              >

                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        rounded-xl
                        border
                        border-white/[0.06]
                        bg-white/[0.02]
                        p-3
                        text-center
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-cyan-400/20
                        hover:bg-white/[0.04]
                      "
                    >

                      <Icon
                        size={14}
                        className="
                          mx-auto
                          mb-1.5
                          text-cyan-400
                        "
                      />

                      <p
                        className="
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        {item.value}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          text-gray-600
                        "
                      >
                        {item.label}
                      </p>

                    </div>
                  );
                })}

              </div>

              {/* =================================================
                  CORE TECHNOLOGIES
              ================================================= */}

              <div
                className="
                  px-5
                  pb-5
                  sm:px-6
                  sm:pb-6
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
                    Core Technologies
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
                    View stack

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
                    <Sparkles size={15} />
                  </div>

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
                      Active
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
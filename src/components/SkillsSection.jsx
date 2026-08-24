import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    color: "text-green-400",
    bg: "bg-green-500/10",
    skills: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: FaTools,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Vercel",
      "Linux",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        min-h-[calc(100vh-70px)]
        flex
        items-center
        px-4
        sm:px-6
        lg:px-8
        py-10
        lg:py-12
      "
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            mb-8
            text-center
            flex
            flex-col
            items-center
          "
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-9 bg-cyan-500/80" />

            <p
              className="
                text-cyan-400
                font-mono
                text-xs
                tracking-[0.18em]
                uppercase
              "
            >
              Tech Stack
            </p>

            <div className="h-px w-9 bg-cyan-500/80" />
          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-display
              font-bold
              leading-tight
              text-white
            "
          >
            Tools of the{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
              "
            >
              Trade
            </span>
            .
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="group relative"
              >
                {/* Glow */}
                <div
                  className={`
                    absolute
                    -inset-px
                    rounded-2xl
                    ${category.bg}
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-50
                    pointer-events-none
                  `}
                />

                {/* Card */}
                <div
                  className="
                    relative
                    h-full
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    backdrop-blur-xl
                    p-5
                    shadow-[0_15px_35px_-20px_rgba(0,0,0,0.8)]
                    transition-all
                    duration-300
                    hover:border-white/[0.12]
                    hover:bg-white/[0.04]
                  "
                >
                  {/* Icon */}
                  <div
                    className={`
                      w-10
                      h-10
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      mb-4
                      ${category.bg}
                      ${category.color}
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    `}
                  >
                    <Icon size={21} />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-white
                      mb-3
                    "
                  >
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="
                          flex
                          items-center
                          gap-2.5
                          text-gray-400
                          group-hover:text-gray-300
                          transition-colors
                        "
                      >
                        <div
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            bg-cyan-500/50
                            shrink-0
                          "
                        />

                        <span className="font-medium text-xs sm:text-sm">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
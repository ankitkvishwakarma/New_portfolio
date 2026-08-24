import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBookOpen,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";

const education = [
  {
    year: "MCA",
    title: "Master of Computer Applications",
    institution: "Marwadi College, Ranchi University",
    score: "Academic",
    icon: FaGraduationCap,
    accent: "cyan",
  },
  {
    year: "Computer Applications",
    title: "Post-Graduation in Computer Applications",
    institution: "Computer Science & Application",
    score: "Academic",
    icon: FaBookOpen,
    accent: "blue",
  },
];

const experience = [
  {
    year: "2026 — Present",
    title: "IT Instructor",
    institution: "Extramarks Education Pvt. Ltd.",
    description:
      "Working on technology education, IT operations, software implementation, and technical coordination across assigned schools.",
    icon: FaBriefcase,
    accent: "cyan",
  },
];

function TimelineCard({ item, experience = false, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <div
        className="
          group
          relative
          rounded-xl
          border
          border-white/[0.06]
          bg-white/[0.025]
          backdrop-blur-xl
          p-4
          sm:p-5
          transition-all
          duration-300
          hover:border-white/[0.12]
          hover:bg-white/[0.04]
        "
      >
        <div
          className={`
            absolute
            inset-y-0
            left-0
            w-[2px]
            rounded-full
            ${
              item.accent === "cyan"
                ? "bg-cyan-400/60"
                : "bg-blue-400/60"
            }
          `}
        />

        <div className="flex items-start gap-4">

          <div
            className={`
              shrink-0
              w-10
              h-10
              rounded-lg
              flex
              items-center
              justify-center
              ${
                item.accent === "cyan"
                  ? "bg-cyan-500/10 text-cyan-400"
                  : "bg-blue-500/10 text-blue-400"
              }
            `}
          >
            <Icon size={17} />
          </div>

          <div className="min-w-0 flex-1">

            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] uppercase tracking-[0.14em] text-cyan-400">
                {item.year}
              </span>

              {!experience && (
                <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[9px] text-gray-500">
                  {item.score}
                </span>
              )}
            </div>

            <h3 className="text-base sm:text-lg font-display font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-gray-500">
              {item.institution}
            </p>

            {experience && item.description && (
              <p className="mt-2.5 text-xs sm:text-sm leading-6 text-gray-400">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Timeline({ items, experience = false }) {
  return (
    <div className="relative">

      <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent" />

      <div className="relative space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="relative pl-3"
          >
            <TimelineCard
              item={item}
              experience={experience}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="
        relative
        w-full
        px-4
        sm:px-6
        lg:px-8
        py-10
        lg:py-12
      "
    >
      <div className="w-full max-w-6xl mx-auto">

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
          }}
          className="mb-8"
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Education{" "}
            <span className="text-gray-600">&</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

          {/* Academic */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                <FaGraduationCap size={15} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Academic
                </p>

                <p className="text-[10px] text-gray-500">
                  Education & learning
                </p>
              </div>
            </div>

            <Timeline items={education} />
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
              delay: 0.1,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                <FaBriefcase size={14} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Experience
                </p>

                <p className="text-[10px] text-gray-500">
                  Professional journey
                </p>
              </div>
            </div>

            <Timeline
              items={experience}
              experience
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
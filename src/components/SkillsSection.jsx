import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiVercel,
} from "react-icons/si";

/* =========================================================
   TECHNOLOGY DATA
========================================================= */

const groups = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces & experiences",
    color: "#22d3ee",
    icon: FaReact,

    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "#22d3ee",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#f8fafc",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#38bdf8",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#facc15",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#22d3ee",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#a78bfa",
      },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    description: "APIs & server logic",
    color: "#60a5fa",
    icon: FaNodeJs,

    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#84cc16",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#e5e7eb",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        color: "#e879f9",
      },
      {
        name: "REST APIs",
        icon: FaCode,
        color: "#2dd4bf",
      },
    ],
  },

  {
    id: "database",
    title: "Database",
    description: "Data & persistence",
    color: "#a78bfa",
    icon: SiMongodb,

    technologies: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#84cc16",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#60a5fa",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#a78bfa",
      },
      {
        name: "Redis",
        icon: SiRedis,
        color: "#ef4444",
      },
    ],
  },

  {
    id: "devops",
    title: "Tools & DevOps",
    description: "Development & deployment",
    color: "#facc15",
    icon: FaDocker,

    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#f97316",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#f8fafc",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#38bdf8",
      },
      {
        name: "Linux",
        icon: FaLinux,
        color: "#facc15",
      },
      {
        name: "VS Code",
        icon: FaCode,
        color: "#38bdf8",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#f8fafc",
      },
    ],
  },
];

/* =========================================================
   CATEGORY POSITIONS

   Root
      ↓
   Categories
      ↓
   Technologies
========================================================= */

const categoryPositions = {
  frontend: {
    x: 14,
    y: 39,
  },

  backend: {
    x: 38,
    y: 39,
  },

  database: {
    x: 62,
    y: 39,
  },

  devops: {
    x: 86,
    y: 39,
  },
};

/* =========================================================
   TECHNOLOGY POSITIONS
========================================================= */

const technologyPositions = {
  /* ---------------- FRONTEND ---------------- */

  React: {
    x: 6,
    y: 64,
  },

  "Next.js": {
    x: 14,
    y: 78,
  },

  TypeScript: {
    x: 22,
    y: 64,
  },

  JavaScript: {
    x: 6,
    y: 90,
  },

  "Tailwind CSS": {
    x: 14,
    y: 96,
  },

  "Framer Motion": {
    x: 22,
    y: 90,
  },

  /* ---------------- BACKEND ---------------- */

  "Node.js": {
    x: 30,
    y: 64,
  },

  Express: {
    x: 38,
    y: 78,
  },

  GraphQL: {
    x: 46,
    y: 64,
  },

  "REST APIs": {
    x: 38,
    y: 96,
  },

  /* ---------------- DATABASE ---------------- */

  MongoDB: {
    x: 54,
    y: 64,
  },

  PostgreSQL: {
    x: 62,
    y: 78,
  },

  Prisma: {
    x: 70,
    y: 64,
  },

  Redis: {
    x: 62,
    y: 96,
  },

  /* ---------------- DEVOPS ---------------- */

  Git: {
    x: 78,
    y: 64,
  },

  GitHub: {
    x: 86,
    y: 78,
  },

  Docker: {
    x: 94,
    y: 64,
  },

  Linux: {
    x: 82,
    y: 96,
  },

  "VS Code": {
    x: 90,
    y: 96,
  },

  Vercel: {
    x: 97,
    y: 88,
  },
};

/* =========================================================
   GET EDGE POINT

   Keeps line outside the node.
========================================================= */

function getEdgePoint(
  from,
  to,
  distance
) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  const length = Math.sqrt(
    dx * dx + dy * dy
  );

  if (!length) {
    return {
      x: from.x,
      y: from.y,
    };
  }

  return {
    x:
      from.x +
      (dx / length) * distance,

    y:
      from.y +
      (dy / length) * distance,
  };
}

/* =========================================================
   TREE BEAM

   IMPORTANT:
   Only thin line.

   No moving circle here.
   This permanently removes the
   unwanted corner dot.
========================================================= */

function TreeBeam({
  from,
  to,
  color,
  delay = 0,
  startPadding = 0,
  endPadding = 0,
}) {
  const start = getEdgePoint(
    from,
    to,
    startPadding
  );

  const end = getEdgePoint(
    to,
    from,
    endPadding
  );

  const midY =
    (start.y + end.y) / 2;

  const path = `
    M ${start.x} ${start.y}
    C ${start.x} ${midY},
      ${end.x} ${midY},
      ${end.x} ${end.y}
  `;

  return (
    <motion.path
      d={path}
      fill="none"
      stroke={color}
      strokeWidth="0.30"
      strokeOpacity="0.28"
      strokeLinecap="round"
      initial={{
        pathLength: 0,
      }}
      animate={{
        pathLength: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

/* =========================================================
   FULL STACK ROOT
========================================================= */

function FullStackNode() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.88,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
      className="
        absolute
        left-1/2
        top-[8%]
        z-30
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      {/* outer ring */}

      <div
        className="
          absolute
          -inset-3
          rounded-full
          border
          border-emerald-400/10
        "
      />

      {/* center */}

      <div
        className="
          relative
          flex
          h-[148px]
          w-[148px]
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-emerald-400/30
          bg-transparent
          sm:h-[158px]
          sm:w-[158px]
        "
      >
        {/* inner ring */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[7px]
            rounded-full
            border
            border-emerald-400/10
          "
        />

        {/* code icon */}

        <span
          className="
            text-3xl
            font-bold
            text-emerald-400
          "
        >
          &lt;/&gt;
        </span>

        {/* title */}

        <span
          className="
            mt-1
            text-lg
            font-bold
            text-white
          "
        >
          Full Stack
        </span>

        <span
          className="
            text-xs
            font-medium
            text-emerald-400
          "
        >
          Developer
        </span>

        {/* status */}

        <div
          className="
            mt-2
            flex
            items-center
            gap-1.5
          "
        >
          <motion.span
            animate={{
              opacity: [
                0.25,
                0.85,
                0.25,
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-emerald-400
            "
          />

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.2em]
              text-gray-500
            "
          >
            building
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CATEGORY NODE
========================================================= */

function CategoryNode({
  group,
  index,
  scrollYProgress,
}) {
  const Icon = group.icon;

  const position =
    categoryPositions[group.id];

  /* subtle scroll movement */

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      index % 2 === 0 ? 0 : 2,
      index % 2 === 0 ? -4 : -2,
      index % 2 === 0 ? 2 : -3,
    ]
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay:
          0.55 + index * 0.08,
        ease: "easeOut",
      }}
      className="
        absolute
        z-20
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <motion.div
        style={{
          y,
        }}
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 20,
        }}
        className="
          relative
          flex
          w-[145px]
          flex-col
          items-center
          rounded-2xl
          border
          bg-transparent
          px-3
          py-3
        "
        style={{
          borderColor:
            `${group.color}28`,
        }}
      >
        {/* icon */}

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            bg-transparent
          "
          style={{
            borderColor:
              `${group.color}38`,
          }}
        >
          <Icon
            size={18}
            style={{
              color: group.color,
            }}
          />
        </div>

        {/* title */}

        <span
          className="
            mt-2
            text-sm
            font-semibold
            text-white
          "
        >
          {group.title}
        </span>

        {/* description */}

        <span
          className="
            mt-1
            whitespace-nowrap
            text-[8px]
            text-gray-500
          "
        >
          {group.description}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   TECHNOLOGY NODE
========================================================= */

function TechnologyNode({
  item,
  index,
  scrollYProgress,
}) {
  const Icon = item.icon;

  const position =
    technologyPositions[item.name];

  /*
    Every bubble has slightly different
    scroll movement.

    This prevents the animation from
    looking mechanical.
  */

  const direction =
    index % 2 === 0 ? 1 : -1;

  const amount =
    index % 3 === 0 ? 6 : 4;

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      0,
      direction * amount,
      direction * -amount,
      direction * 3,
      direction * -2,
    ]
  );

  /*
    Subtle technology-specific background.
  */

  const isNeutral =
    item.name === "Next.js" ||
    item.name === "GitHub" ||
    item.name === "Vercel";

  const bubbleBackground =
    isNeutral
      ? "rgba(255,255,255,0.035)"
      : `${item.color}0d`;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.72,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.38,
        delay:
          0.9 + index * 0.045,
        ease: "easeOut",
      }}
      className="
        absolute
        z-20
        -translate-x-1/2
        -translate-y-1/2
      "
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <motion.div
        style={{
          y,
        }}
        whileHover={{
          scale: 1.08,
          y: -3,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="
          relative
          flex
          h-[62px]
          w-[62px]
          flex-col
          items-center
          justify-center
          rounded-full
          border
        "
        style={{
          borderColor:
            `${item.color}38`,
          backgroundColor:
            bubbleBackground,
        }}
      >
        {/* inner ring */}

        <div
          className="
            pointer-events-none
            absolute
            inset-[4px]
            rounded-full
            border
          "
          style={{
            borderColor:
              `${item.color}10`,
          }}
        />

        {/* icon */}

        <Icon
          size={20}
          style={{
            color: item.color,
          }}
        />

        {/* label */}

        <span
          className="
            absolute
            bottom-[7px]
            left-1/2
            w-[53px]
            -translate-x-1/2
            text-center
            text-[7px]
            font-medium
            leading-tight
            text-gray-400
          "
        >
          {item.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   DESKTOP TREE
========================================================= */

function DesktopTree() {
  const treeRef = useRef(null);

  /*
    Track only this tree section.
  */

  const {
    scrollYProgress,
  } = useScroll({
    target: treeRef,
    offset: [
      "start end",
      "end start",
    ],
  });

  /*
    Root position.
  */

  const root = {
    x: 50,
    y: 8,
  };

  return (
    <div
      ref={treeRef}
      className="
        relative
        mx-auto
        mt-20
        hidden
        h-[690px]
        w-full
        max-w-[1250px]
        lg:block
      "
    >
      {/* =================================================
          CONNECTIONS
      ================================================= */}

      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          h-full
          w-full
          overflow-visible
        "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* ---------------------------------------------
            FULL STACK → CATEGORY
        --------------------------------------------- */}

        {groups.map(
          (group, index) => {
            const category =
              categoryPositions[
                group.id
              ];

            return (
              <TreeBeam
                key={`root-${group.id}`}
                from={root}
                to={category}
                color={group.color}
                delay={
                  0.12 +
                  index * 0.08
                }
                startPadding={7}
                endPadding={7}
              />
            );
          }
        )}

        {/* ---------------------------------------------
            CATEGORY → TECHNOLOGIES
        --------------------------------------------- */}

        {groups.map((group) => {
          const category =
            categoryPositions[
              group.id
            ];

          return group.technologies.map(
            (item, index) => {
              const technology =
                technologyPositions[
                  item.name
                ];

              return (
                <TreeBeam
                  key={`tech-${item.name}`}
                  from={category}
                  to={technology}
                  color={item.color}
                  delay={
                    0.7 +
                    index * 0.045
                  }
                  startPadding={7}
                  endPadding={3.5}
                />
              );
            }
          );
        })}
      </svg>

      {/* =================================================
          FULL STACK
      ================================================= */}

      <FullStackNode />

      {/* =================================================
          CATEGORY NODES
      ================================================= */}

      {groups.map(
        (group, index) => (
          <CategoryNode
            key={group.id}
            group={group}
            index={index}
            scrollYProgress={
              scrollYProgress
            }
          />
        )
      )}

      {/* =================================================
          TECHNOLOGY NODES
      ================================================= */}

      {groups.map((group) =>
        group.technologies.map(
          (item, index) => (
            <TechnologyNode
              key={item.name}
              item={item}
              index={index}
              scrollYProgress={
                scrollYProgress
              }
            />
          )
        )
      )}
    </div>
  );
}

/* =========================================================
   MOBILE TREE
========================================================= */

function MobileTree() {
  return (
    <div
      className="
        mt-12
        lg:hidden
      "
    >
      {/* =================================================
          MOBILE ROOT
      ================================================= */}

      <div
        className="
          relative
          h-[175px]
        "
      >
        <FullStackNode />
      </div>

      {/* =================================================
          MOBILE GROUPS
      ================================================= */}

      <div
        className="
          mt-8
          space-y-7
        "
      >
        {groups.map(
          (group, groupIndex) => {
            const GroupIcon =
              group.icon;

            return (
              <motion.div
                key={group.id}
                initial={{
                  opacity: 0,
                  y: 14,
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
                  duration: 0.45,
                  delay:
                    groupIndex * 0.08,
                }}
                className="
                  rounded-2xl
                  border
                  bg-transparent
                  p-4
                "
                style={{
                  borderColor:
                    `${group.color}22`,
                }}
              >
                {/* category header */}

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
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                    "
                    style={{
                      borderColor:
                        `${group.color}35`,
                      backgroundColor:
                        `${group.color}0b`,
                    }}
                  >
                    <GroupIcon
                      size={19}
                      style={{
                        color:
                          group.color,
                      }}
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-white
                      "
                    >
                      {group.title}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        text-[9px]
                        text-gray-500
                      "
                    >
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* technologies */}

                <div
                  className="
                    mt-4
                    grid
                    grid-cols-3
                    gap-3
                    sm:grid-cols-4
                  "
                >
                  {group.technologies.map(
                    (item, index) => {
                      const TechIcon =
                        item.icon;

                      const isNeutral =
                        item.name ===
                          "Next.js" ||
                        item.name ===
                          "GitHub" ||
                        item.name ===
                          "Vercel";

                      const background =
                        isNeutral
                          ? "rgba(255,255,255,0.035)"
                          : `${item.color}0d`;

                      return (
                        <motion.div
                          key={item.name}
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay:
                              index * 0.04,
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -3,
                          }}
                          className="
                            flex
                            min-h-[72px]
                            flex-col
                            items-center
                            justify-center
                            rounded-xl
                            border
                          "
                          style={{
                            borderColor:
                              `${item.color}28`,
                            backgroundColor:
                              background,
                          }}
                        >
                          <TechIcon
                            size={19}
                            style={{
                              color:
                                item.color,
                            }}
                          />

                          <span
                            className="
                              mt-1.5
                              text-center
                              text-[7px]
                              font-medium
                              text-gray-400
                            "
                          >
                            {item.name}
                          </span>
                        </motion.div>
                      );
                    }
                  )}
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SKILLS SECTION
========================================================= */

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        px-4
        pb-16
        pt-20
        sm:px-6
        sm:pt-24
        lg:px-8
        lg:pt-28
      "
    >
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* small label */}

          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
            "
          >
            <div
              className="
                h-px
                w-12
                bg-emerald-400/20
              "
            />

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-emerald-400
              "
            >
              My Stack
            </span>

            <div
              className="
                h-px
                w-12
                bg-emerald-400/20
              "
            />
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            My Full-Stack{" "}
            <span
              className="
                bg-gradient-to-r
                from-emerald-400
                via-cyan-400
                to-sky-400
                bg-clip-text
                text-transparent
              "
            >
              Arsenal
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-relaxed
              text-gray-500
              sm:text-base
            "
          >
            Technologies I use to build
            scalable, modern and
            production-ready applications.
          </p>
        </motion.div>

        {/* =================================================
            DESKTOP TREE
        ================================================= */}

        <DesktopTree />

        {/* =================================================
            MOBILE
        ================================================= */}

        <MobileTree />

        {/* =================================================
            BOTTOM DIVIDER
        ================================================= */}

        <div
          className="
            mx-auto
            mt-2
            flex
            max-w-[460px]
            items-center
            gap-4
          "
        >
          <div
            className="
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-emerald-500/15
            "
          />

          <div
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              border
              border-emerald-500/15
              text-xs
              text-emerald-400
            "
          >
            ✦
          </div>

          <div
            className="
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-emerald-500/15
            "
          />
        </div>
      </div>
    </section>
  );
}
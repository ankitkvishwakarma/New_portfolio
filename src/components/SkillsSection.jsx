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
  /*
   * Mobile design:
   * Full Stack → Frontend → Backend → Database → Tools & DevOps
   *
   * Each category behaves like a small solar system:
   * - category stays in the center
   * - technologies orbit around it
   * - orbit continuously rotates
   * - technology bubbles counter-rotate so their labels stay upright
   */

  const mobileOrbitData = {
    frontend: {
      size: "260px",
      duration: 18,
      radiusX: "112px",
      radiusY: "92px",
    },
    backend: {
      size: "235px",
      duration: 16,
      radiusX: "102px",
      radiusY: "82px",
    },
    database: {
      size: "235px",
      duration: 17,
      radiusX: "102px",
      radiusY: "82px",
    },
    devops: {
      size: "260px",
      duration: 19,
      radiusX: "112px",
      radiusY: "92px",
    },
  };

  return (
    <div className="mt-2 lg:hidden">
      <div className="mx-auto w-full max-w-[520px]">
        {/* =====================================================
            FULL STACK ROOT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mx-auto mb-2 flex h-[150px] w-[150px] items-center justify-center"
        >
          <div className="absolute inset-[-12px] rounded-full border border-emerald-400/10" />
          <div className="absolute inset-[-5px] rounded-full border border-emerald-400/20" />

          <div className="relative flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full border border-emerald-400/45 bg-[#07100f] shadow-[0_0_45px_rgba(16,185,129,0.10)]">
            <span className="text-3xl font-bold text-emerald-400">
              &lt;/&gt;
            </span>

            <span className="mt-1 text-lg font-bold text-white">
              Full Stack
            </span>

            <span className="text-xs font-medium text-emerald-400">
              Developer
            </span>

            <div className="mt-2 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-gray-500">
                building
              </span>
            </div>
          </div>
        </motion.div>

        {/* vertical spine */}
        <div className="mx-auto h-8 w-px bg-gradient-to-b from-emerald-400/45 to-white/5" />

        {/* =====================================================
            MOBILE SOLAR SYSTEMS
        ====================================================== */}
        <div className="space-y-2">
          {groups.map((group, groupIndex) => {
            const GroupIcon = group.icon;
            const orbit = mobileOrbitData[group.id];

            const count = group.technologies.length;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.06,
                  ease: "easeOut",
                }}
                className="relative"
              >
                {/* category → next category spine */}
                {groupIndex < groups.length - 1 && (
                  <div
                    className="absolute left-1/2 top-[calc(100%-6px)] z-0 h-8 w-px -translate-x-1/2"
                    style={{
                      background: `linear-gradient(to bottom, ${group.color}55, transparent)`,
                    }}
                  />
                )}

                <div
                  className="relative mx-auto flex items-center justify-center overflow-hidden rounded-[28px] border bg-[#05090d]/80"
                  style={{
                    height: "300px",
                    borderColor: `${group.color}24`,
                    boxShadow: `inset 0 0 45px ${group.color}05`,
                  }}
                >
                  {/* ambient glow */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                    style={{ backgroundColor: `${group.color}0b` }}
                  />

                  {/* orbit rings */}
                  <div
                    className="absolute left-1/2 top-1/2 rounded-full border border-dashed"
                    style={{
                      width: orbit.size,
                      height: "145px",
                      transform: "translate(-50%, -50%) rotate(-8deg)",
                      borderColor: `${group.color}1c`,
                    }}
                  />

                  <div
                    className="absolute left-1/2 top-1/2 rounded-full border"
                    style={{
                      width: `calc(${orbit.size} - 30px)`,
                      height: "108px",
                      transform: "translate(-50%, -50%) rotate(10deg)",
                      borderColor: `${group.color}0e`,
                    }}
                  />

                  {/* center category */}
                  <motion.div
                    whileTap={{ scale: 0.97 }}
                    className="relative z-20 flex h-[118px] w-[118px] flex-col items-center justify-center rounded-full border bg-[#071018]/95 text-center"
                    style={{
                      borderColor: `${group.color}55`,
                      boxShadow: `0 0 35px ${group.color}12`,
                    }}
                  >
                    <div
                      className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border"
                      style={{
                        borderColor: `${group.color}40`,
                        backgroundColor: `${group.color}0c`,
                      }}
                    >
                      <GroupIcon
                        size={20}
                        style={{ color: group.color }}
                      />
                    </div>

                    <span className="text-[15px] font-bold text-white">
                      {group.title}
                    </span>

                    <span className="mt-1 max-w-[90px] text-[8px] leading-tight text-gray-500">
                      {group.description}
                    </span>
                  </motion.div>

                  {/* rotating technology orbit */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 z-10 h-0 w-0"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: orbit.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {group.technologies.map((item, index) => {
                      const TechIcon = item.icon;

                      /*
                       * Place nodes evenly around an ellipse.
                       * Using inline transforms keeps the layout
                       * independent from viewport width.
                       */
                      const angle =
                        (index / count) * Math.PI * 2 - Math.PI / 2;

                      const x =
                        Math.cos(angle) *
                        parseFloat(orbit.radiusX);

                      const y =
                        Math.sin(angle) *
                        parseFloat(orbit.radiusY);

                      return (
                        <motion.div
                          key={item.name}
                          className="absolute left-0 top-0"
                          style={{
                            transform: `translate(${x}px, ${y}px)`,
                          }}
                        >
                          {/* counter rotation keeps the bubble upright */}
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{
                              duration: orbit.duration,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border bg-[#050a0f]/95"
                            style={{
                              borderColor: `${item.color}48`,
                              boxShadow: `0 0 20px ${item.color}0c`,
                            }}
                          >
                            <div
                              className="absolute inset-[4px] rounded-full border"
                              style={{
                                borderColor: `${item.color}10`,
                              }}
                            />

                            <TechIcon
                              size={19}
                              style={{ color: item.color }}
                            />

                            <span className="mt-1 max-w-[50px] truncate text-center text-[7px] font-medium text-gray-400">
                              {item.name}
                            </span>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* moving orbital dot */}
                  <motion.div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[145px] w-[260px] -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: orbit.duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <span
                      className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                      style={{
                        backgroundColor: group.color,
                        boxShadow: `0 0 10px ${group.color}`,
                      }}
                    />
                  </motion.div>
                </div>

                {/* section label */}
                <div className="mx-auto flex w-fit items-center gap-2 py-2">
                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: group.color }}
                  />

                  <span
                    className="font-mono text-[7px] uppercase tracking-[0.28em]"
                    style={{ color: `${group.color}99` }}
                  >
                    {String(groupIndex + 1).padStart(2, "0")} /{" "}
                    {group.title}
                  </span>

                  <span
                    className="h-1 w-1 rounded-full"
                    style={{ backgroundColor: `${group.color}55` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
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
        pt-6
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


      </div>
    </section>
  );
}
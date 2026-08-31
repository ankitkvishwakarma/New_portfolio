import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    description: "Building responsive and beautiful user experiences.",
    color: "#34d399",
    side: "left",
    icon: FaReact,

    technologies: [
      { name: "React", icon: FaReact, color: "#22d3ee" },
      { name: "Next.js", icon: SiNextdotjs, color: "#f8fafc" },
      { name: "TypeScript", icon: SiTypescript, color: "#38bdf8" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#22d3ee" },
      { name: "Framer Motion", icon: SiFramer, color: "#a78bfa" },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    description: "Creating robust APIs and powerful server-side logic.",
    color: "#38bdf8",
    side: "left",
    icon: FaNodeJs,

    technologies: [
      { name: "Node.js", icon: FaNodeJs, color: "#84cc16" },
      { name: "Express", icon: SiExpress, color: "#e5e7eb" },
      { name: "REST APIs", icon: FaCode, color: "#2dd4bf" },
      { name: "GraphQL", icon: SiGraphql, color: "#e879f9" },
      { name: "WebSockets", icon: FaCode, color: "#60a5fa" },
    ],
  },

  {
    id: "database",
    title: "Database",
    description: "Storing, managing and retrieving data efficiently.",
    color: "#a78bfa",
    side: "left",
    icon: SiMongodb,

    technologies: [
      { name: "MongoDB", icon: SiMongodb, color: "#84cc16" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#60a5fa" },
      { name: "Prisma", icon: SiPrisma, color: "#a78bfa" },
      { name: "Redis", icon: SiRedis, color: "#ef4444" },
    ],
  },

  {
    id: "devops",
    title: "Tools & DevOps",
    description: "Streamlining development and deployment workflows.",
    color: "#facc15",
    side: "right",
    icon: FaDocker,

    technologies: [
      { name: "Git", icon: FaGitAlt, color: "#f97316" },
      { name: "GitHub", icon: FaGithub, color: "#f8fafc" },
      { name: "Docker", icon: FaDocker, color: "#38bdf8" },
      { name: "Linux", icon: FaLinux, color: "#facc15" },
      { name: "Vercel", icon: SiVercel, color: "#f8fafc" },
      { name: "VS Code", icon: FaCode, color: "#38bdf8" },
    ],
  },
];

const leftGroups = groups.filter((g) => g.side === "left");
const rightGroups = groups.filter((g) => g.side === "right");

/* =========================================================
   PILL
========================================================= */

function Pill({ tech, showIcon }) {
  const Icon = tech.icon;

  return (
    <span
      className="
        inline-flex items-center gap-1.5
        rounded-lg border border-white/5
        bg-white/[0.03] px-2.5 py-1.5
        text-[11px] font-medium text-gray-300
      "
    >
      {showIcon && (
        <Icon
          size={12}
          style={{
            color: tech.color,
          }}
        />
      )}

      {tech.name}
    </span>
  );
}

/* =========================================================
   CARD
========================================================= */

const Card = React.forwardRef(function Card({ group }, ref) {
  const Icon = group.icon;
  const showIcon = group.id === "devops";

  return (
    <div
      ref={ref}
      className="
        relative
        w-[300px]
        rounded-2xl
        border
        bg-[#070c0f]/70
        p-5
        backdrop-blur-sm
      "
      style={{
        borderColor: `${group.color}30`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
          "
          style={{
            borderColor: `${group.color}40`,
            backgroundColor: `${group.color}14`,
          }}
        >
          <Icon
            size={20}
            style={{
              color: group.color,
            }}
          />
        </div>

        <div>
          <h3
            className="
              text-base
              font-semibold
            "
            style={{
              color: group.color,
            }}
          >
            {group.title}
          </h3>

          <p
            className="
              mt-1
              text-[12px]
              leading-snug
              text-gray-500
            "
          >
            {group.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.technologies.map((tech) => (
          <Pill
            key={tech.name}
            tech={tech}
            showIcon={showIcon}
          />
        ))}
      </div>

      {/* connector anchor dot */}

      <span
        className="
          absolute
          top-1/2
          h-2.5
          w-2.5
          -translate-y-1/2
          rounded-full
        "
        style={{
          backgroundColor: group.color,
          boxShadow: `0 0 10px ${group.color}`,
          [group.side === "left"
            ? "right"
            : "left"]: "-5px",
        }}
      />
    </div>
  );
});

/* =========================================================
   HUB
========================================================= */

const Hub = React.forwardRef(function Hub(_props, ref) {
  return (
    <div
      ref={ref}
      className="
        relative
        flex
        h-[132px]
        w-[132px]
        items-center
        justify-center
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-[-18px]
          rounded-full
          border
          border-dashed
          border-emerald-400/15
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[-6px]
          rounded-full
          bg-emerald-400/5
          blur-2xl
        "
      />

      <div
        className="
          relative
          flex
          h-full
          w-full
          items-center
          justify-center
          rounded-full
          border
          border-emerald-400/40
          bg-[#050a0a]
          shadow-[0_0_45px_rgba(16,185,129,0.12)]
        "
      >
        <span
          className="
            text-3xl
            font-bold
            text-emerald-400
          "
        >
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
});

/* =========================================================
   CONNECTOR
========================================================= */

function Connector({ path, color, delay }) {
  return (
    <motion.path
      d={path}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      initial={{
        pathLength: 0,
        opacity: 0,
      }}
      animate={{
        pathLength: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

/* =========================================================
   DESKTOP TREE
========================================================= */

function DesktopTree() {
  const containerRef = useRef(null);
  const hubRef = useRef(null);
  const cardRefs = useRef({});

  const [paths, setPaths] = useState([]);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const measure = useCallback(() => {
    const container = containerRef.current;
    const hubEl = hubRef.current;

    if (!container || !hubEl) {
      return;
    }

    const containerRect =
      container.getBoundingClientRect();

    const hubRect =
      hubEl.getBoundingClientRect();

    const hubCenter = {
      x:
        hubRect.left -
        containerRect.left +
        hubRect.width / 2,

      y:
        hubRect.top -
        containerRect.top +
        hubRect.height / 2,
    };

    const hubRadius =
      hubRect.width / 2;

    const nextPaths = groups
      .map((group, index) => {
        const cardEl =
          cardRefs.current[group.id];

        if (!cardEl) {
          return null;
        }

        const cardRect =
          cardEl.getBoundingClientRect();

        const cardAnchor = {
          x:
            group.side === "left"
              ? cardRect.right -
                containerRect.left
              : cardRect.left -
                containerRect.left,

          y:
            cardRect.top -
            containerRect.top +
            cardRect.height / 2,
        };

        const angle = Math.atan2(
          cardAnchor.y - hubCenter.y,
          cardAnchor.x - hubCenter.x
        );

        const hubAnchor = {
          x:
            hubCenter.x +
            Math.cos(angle) *
              hubRadius,

          y:
            hubCenter.y +
            Math.sin(angle) *
              hubRadius,
        };

        const start =
          group.side === "left"
            ? cardAnchor
            : hubAnchor;

        const end =
          group.side === "left"
            ? hubAnchor
            : cardAnchor;

        const midX =
          (start.x + end.x) / 2;

        const d = `
          M ${start.x} ${start.y}
          C ${midX} ${start.y},
            ${midX} ${end.y},
            ${end.x} ${end.y}
        `;

        return {
          id: group.id,
          d,
          color: group.color,
          delay:
            0.15 + index * 0.08,
        };
      })
      .filter(Boolean);

    setSize({
      width: containerRect.width,
      height: containerRect.height,
    });

    setPaths(nextPaths);
  }, []);

  useLayoutEffect(() => {
    measure();

    const container =
      containerRef.current;

    if (
      !container ||
      typeof ResizeObserver ===
        "undefined"
    ) {
      return;
    }

    const observer =
      new ResizeObserver(() =>
        measure()
      );

    observer.observe(container);

    return () =>
      observer.disconnect();
  }, [measure]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        mx-auto
        mt-4
        hidden
        w-full
        max-w-[1100px]
        items-center
        justify-between
        lg:flex
      "
      style={{
        minHeight: "520px",
      }}
    >
      {/* connectors */}

      <svg
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          overflow-visible
        "
        viewBox={`0 0 ${size.width} ${size.height}`}
      >
        {paths.map((p) => (
          <Connector
            key={p.id}
            path={p.d}
            color={p.color}
            delay={p.delay}
          />
        ))}
      </svg>

      {/* left column */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          gap-8
        "
      >
        {leftGroups.map((group) => (
          <Card
            key={group.id}
            group={group}
            ref={(el) => {
              cardRefs.current[group.id] =
                el;
            }}
          />
        ))}
      </div>

      {/* hub */}

      <div className="relative z-10">
        <Hub ref={hubRef} />
      </div>

      {/* right column */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          gap-8
        "
      >
        {rightGroups.map((group) => (
          <Card
            key={group.id}
            group={group}
            ref={(el) => {
              cardRefs.current[group.id] =
                el;
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE TREE
   UNCHANGED
========================================================= */

function MobileTree() {
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

        {/* FULL STACK ROOT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.88,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            mb-2
            flex
            h-[150px]
            w-[150px]
            items-center
            justify-center
          "
        >
          <div
            className="
              absolute
              inset-[-12px]
              rounded-full
              border
              border-emerald-400/10
            "
          />

          <div
            className="
              absolute
              inset-[-5px]
              rounded-full
              border
              border-emerald-400/20
            "
          />

          <div
            className="
              relative
              flex
              h-[132px]
              w-[132px]
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-emerald-400/45
              bg-[#07100f]
              shadow-[0_0_45px_rgba(16,185,129,0.10)]
            "
          >
            <span
              className="
                text-3xl
                font-bold
                text-emerald-400
              "
            >
              &lt;/&gt;
            </span>

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

            <div className="mt-2 flex items-center gap-1.5">
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-emerald-400
                "
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  uppercase
                  tracking-[0.22em]
                  text-gray-500
                "
              >
                building
              </span>
            </div>
          </div>
        </motion.div>

        {/* vertical spine */}

        <div
          className="
            mx-auto
            h-8
            w-px
            bg-gradient-to-b
            from-emerald-400/45
            to-white/5
          "
        />

        {/* MOBILE SOLAR SYSTEMS */}

        <div className="space-y-2">
          {groups.map(
            (group, groupIndex) => {
              const GroupIcon =
                group.icon;

              const orbit =
                mobileOrbitData[
                  group.id
                ];

              const count =
                group.technologies
                  .length;

              return (
                <motion.div
                  key={group.id}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      groupIndex *
                      0.06,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  {/* category → next category spine */}

                  {groupIndex <
                    groups.length -
                      1 && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[calc(100%-6px)]
                        z-0
                        h-8
                        w-px
                        -translate-x-1/2
                      "
                      style={{
                        background:
                          `linear-gradient(
                            to bottom,
                            ${group.color}55,
                            transparent
                          )`,
                      }}
                    />
                  )}

                  {/* orbit container */}

                  <div
                    className="
                      relative
                      mx-auto
                      flex
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[28px]
                      border
                      bg-[#05090d]/80
                    "
                    style={{
                      height: "300px",
                      borderColor:
                        `${group.color}24`,
                      boxShadow:
                        `inset 0 0 45px ${group.color}05`,
                    }}
                  >
                    {/* ambient glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-40
                        w-40
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        blur-3xl
                      "
                      style={{
                        backgroundColor:
                          `${group.color}0b`,
                      }}
                    />

                    {/* orbit ring */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        rounded-full
                        border
                        border-dashed
                      "
                      style={{
                        width:
                          orbit.size,
                        height:
                          "145px",
                        transform:
                          "translate(-50%, -50%) rotate(-8deg)",
                        borderColor:
                          `${group.color}1c`,
                      }}
                    />

                    {/* inner orbit */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        rounded-full
                        border
                      "
                      style={{
                        width:
                          `calc(${orbit.size} - 30px)`,
                        height:
                          "108px",
                        transform:
                          "translate(-50%, -50%) rotate(10deg)",
                        borderColor:
                          `${group.color}0e`,
                      }}
                    />

                    {/* center category */}

                    <motion.div
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        relative
                        z-20
                        flex
                        h-[118px]
                        w-[118px]
                        flex-col
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-[#071018]/95
                        text-center
                      "
                      style={{
                        borderColor:
                          `${group.color}55`,
                        boxShadow:
                          `0 0 35px ${group.color}12`,
                      }}
                    >
                      <div
                        className="
                          mb-2
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                        "
                        style={{
                          borderColor:
                            `${group.color}40`,
                          backgroundColor:
                            `${group.color}0c`,
                        }}
                      >
                        <GroupIcon
                          size={20}
                          style={{
                            color:
                              group.color,
                          }}
                        />
                      </div>

                      <span
                        className="
                          text-[15px]
                          font-bold
                          text-white
                        "
                      >
                        {group.title}
                      </span>

                      <span
                        className="
                          mt-1
                          max-w-[90px]
                          text-[8px]
                          leading-tight
                          text-gray-500
                        "
                      >
                        {
                          group.description
                        }
                      </span>
                    </motion.div>

                    {/* rotating technology orbit */}

                    <motion.div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        z-10
                        h-0
                        w-0
                      "
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration:
                          orbit.duration,
                        repeat:
                          Infinity,
                        ease: "linear",
                      }}
                    >
                      {group.technologies.map(
                        (
                          item,
                          index
                        ) => {
                          const TechIcon =
                            item.icon;

                          const angle =
                            (index /
                              count) *
                              Math.PI *
                              2 -
                            Math.PI /
                              2;

                          const x =
                            Math.cos(
                              angle
                            ) *
                            parseFloat(
                              orbit.radiusX
                            );

                          const y =
                            Math.sin(
                              angle
                            ) *
                            parseFloat(
                              orbit.radiusY
                            );

                          return (
                            <motion.div
                              key={
                                item.name
                              }
                              className="
                                absolute
                                left-0
                                top-0
                              "
                              style={{
                                transform:
                                  `translate(${x}px, ${y}px)`,
                              }}
                            >
                              <motion.div
                                animate={{
                                  rotate:
                                    -360,
                                }}
                                transition={{
                                  duration:
                                    orbit.duration,
                                  repeat:
                                    Infinity,
                                  ease:
                                    "linear",
                                }}
                                className="
                                  flex
                                  h-[62px]
                                  w-[62px]
                                  -translate-x-1/2
                                  -translate-y-1/2
                                  flex-col
                                  items-center
                                  justify-center
                                  rounded-full
                                  border
                                  bg-[#050a0f]/95
                                "
                                style={{
                                  borderColor:
                                    `${item.color}48`,
                                  boxShadow:
                                    `0 0 20px ${item.color}0c`,
                                }}
                              >
                                <div
                                  className="
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

                                <TechIcon
                                  size={19}
                                  style={{
                                    color:
                                      item.color,
                                  }}
                                />

                                <span
                                  className="
                                    mt-1
                                    max-w-[50px]
                                    truncate
                                    text-center
                                    text-[7px]
                                    font-medium
                                    text-gray-400
                                  "
                                >
                                  {
                                    item.name
                                  }
                                </span>
                              </motion.div>
                            </motion.div>
                          );
                        }
                      )}
                    </motion.div>

                    {/* moving orbital dot */}

                    <motion.div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        z-10
                        h-[145px]
                        w-[260px]
                        -translate-x-1/2
                        -translate-y-1/2
                      "
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration:
                          orbit.duration,
                        repeat:
                          Infinity,
                        ease: "linear",
                      }}
                    >
                      <span
                        className="
                          absolute
                          left-1/2
                          top-0
                          h-1.5
                          w-1.5
                          -translate-x-1/2
                          rounded-full
                        "
                        style={{
                          backgroundColor:
                            group.color,
                          boxShadow:
                            `0 0 10px ${group.color}`,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* section label */}

                  <div
                    className="
                      mx-auto
                      flex
                      w-fit
                      items-center
                      gap-2
                      py-2
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                      "
                      style={{
                        backgroundColor:
                          group.color,
                      }}
                    />

                    <span
                      className="
                        font-mono
                        text-[7px]
                        uppercase
                        tracking-[0.28em]
                      "
                      style={{
                        color:
                          `${group.color}99`,
                      }}
                    >
                      {String(
                        groupIndex + 1
                      ).padStart(
                        2,
                        "0"
                      )}{" "}
                      / {group.title}
                    </span>

                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                      "
                      style={{
                        backgroundColor:
                          `${group.color}55`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            }
          )}
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
        pt-2
        sm:px-6
        sm:pt-8
        lg:px-8
        lg:pt-10
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}

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
                w-10
                bg-emerald-400/20
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-emerald-400
              "
            >
              Tech Stack
            </span>

            <div
              className="
                h-px
                w-10
                bg-emerald-400/20
              "
            />
          </div>

          <h2
            className="
              text-3xl
              font-bold
              tracking-[-0.03em]
              text-white
              sm:text-4xl
              lg:text-[42px]
            "
          >
            What I{" "}
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
              Build With.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-gray-500
              sm:text-[15px]
            "
          >
            The technologies I use to turn ideas into
            scalable, modern and production-ready
            applications.
          </p>
        </motion.div>

        {/* DESKTOP — SAME UI */}

        <DesktopTree />

        {/* MOBILE — SAME UI */}

        <MobileTree />
      </div>
    </section>
  );
}
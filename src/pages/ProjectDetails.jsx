import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";

import {
  getProjectBySlug,
  projects,
} from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = getProjectBySlug(slug);

  /* =========================================================
     PROJECT NOT FOUND
  ========================================================= */

  if (!project) {
    return (
      <main
        className="
          min-h-screen
          bg-[#030712]
          text-white
          grid
          place-items-center
          px-6
        "
      >
        <div className="text-center">
          <p
            className="
              mb-3
              text-xs
              uppercase
              tracking-widest
              text-cyan-400
            "
          >
            404
          </p>

          <h1
            className="
              font-display
              text-4xl
              font-bold
            "
          >
            Project not found
          </h1>

          <Link
            to="/projects"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              text-cyan-400
              transition-colors
              hover:text-cyan-300
            "
          >
            <FaArrowLeft size={12} />

            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  /* =========================================================
     PREVIOUS / NEXT PROJECT
  ========================================================= */

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const previous =
    projects[
      (currentIndex - 1 + projects.length) %
        projects.length
    ];

  const next =
    projects[
      (currentIndex + 1) % projects.length
    ];

  const Icon = project.icon;

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main
      className="
        min-h-screen
        bg-[#030712]
        px-4
        py-16
        text-white
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-20
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            BACK TO PROJECTS
        ====================================================== */}

        <Link
          to="/projects"
          className="
            mb-6
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-400
            transition-colors
            hover:text-cyan-400
            sm:mb-7
          "
        >
          <FaArrowLeft size={12} />

          All projects
        </Link>

        {/* =====================================================
            MAIN ANIMATION
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        >

          {/* =====================================================
              PROJECT HERO
          ====================================================== */}

          <section
            className="
              relative
              min-h-[500px]
              overflow-hidden
              rounded-3xl
              bg-[#080b12]
              ring-1
              ring-white/[0.08]
              sm:min-h-[520px]
              lg:min-h-[540px]
            "
          >

            {/* =================================================
                BACKGROUND VIDEO
            ================================================= */}

            {project.video ? (
              <video
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />
            ) : (
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${project.color}
                `}
              />
            )}

            {/* =================================================
                DARK OVERLAY
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-black/60
              "
            />

            {/* =================================================
                BOTTOM GRADIENT
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#030712]
                via-[#030712]/45
                to-transparent
              "
            />

            {/* =================================================
                SIDE GRADIENT
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#030712]/95
                via-[#030712]/55
                to-transparent
              "
            />

            {/* =================================================
                HERO CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[500px]
                items-end
                p-6
                sm:min-h-[520px]
                sm:p-8
                md:min-h-[540px]
                md:p-12
              "
            >
              <div className="max-w-3xl">

                {/* =================================================
                    CATEGORY
                ================================================= */}

                <div
                  className="
                    mb-4
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
                      items-center
                      justify-center
                      rounded-lg
                      backdrop-blur-md
                    "
                    style={{
                      background:
                        `${project.accent}25`,
                      color:
                        project.accent,
                    }}
                  >
                    <Icon size={16} />
                  </div>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-cyan-400
                      sm:text-xs
                    "
                  >
                    {project.category}
                  </p>
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h1
                  className="
                    font-display
                    text-4xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-5xl
                    md:text-6xl
                  "
                >
                  {project.title}
                </h1>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    text-gray-300
                    sm:mt-5
                    sm:text-base
                  "
                >
                  {project.description}
                </p>

                {/* =================================================
                    TECHNOLOGIES
                ================================================= */}

                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-1.5
                    sm:mt-6
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-black/30
                        px-2.5
                        py-1
                        text-[10px]
                        text-cyan-100
                        backdrop-blur-md
                        ring-1
                        ring-white/10
                        sm:text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* =================================================
                    ACTION BUTTONS
                ================================================= */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                    sm:mt-7
                  "
                >
                  {/* LIVE DEMO */}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-white
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-black
                        shadow-[0_8px_25px_-10px_rgba(255,255,255,0.5)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-cyan-50
                      "
                    >
                      Live Demo

                      <FaExternalLinkAlt
                        size={11}
                      />
                    </a>
                  )}

                  {/* GITHUB */}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-black/40
                        px-5
                        py-2.5
                        text-sm
                        text-gray-200
                        backdrop-blur-md
                        ring-1
                        ring-white/15
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:text-white
                        hover:ring-cyan-400/40
                      "
                    >
                      <FaGithub size={14} />

                      GitHub

                      <FaExternalLinkAlt
                        size={9}
                        className="opacity-60"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* =================================================
                VIDEO INDICATOR
            ================================================= */}

            {project.video && (
              <div
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-black/35
                  px-3
                  py-1.5
                  text-[10px]
                  text-white/70
                  backdrop-blur-md
                  ring-1
                  ring-white/10
                  sm:right-5
                  sm:top-5
                "
              >
                <FaPlay
                  size={8}
                  className="text-cyan-400"
                />

                Live Preview
              </div>
            )}
          </section>

          {/* =====================================================
              PROJECT INFORMATION
          ====================================================== */}

          <section
            className="
              mt-6
              grid
              gap-5
              md:mt-7
              md:grid-cols-2
            "
          >

            {/* =================================================
                PROJECT HIGHLIGHTS
            ================================================= */}

            <div
              className="
                rounded-2xl
                bg-white/[0.025]
                p-6
                ring-1
                ring-white/[0.07]
                transition-all
                duration-300
                hover:bg-white/[0.035]
                hover:ring-white/[0.10]
                md:p-7
              "
            >
              <p
                className="
                  mb-5
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-cyan-400
                "
              >
                Project Highlights
              </p>

              <ul className="space-y-3">
                {project.highlights.map(
                  (item) => (
                    <li
                      key={item}
                      className="
                        flex
                        gap-3
                        text-sm
                        leading-6
                        text-gray-300
                      "
                    >
                      <span
                        className="
                          mt-1
                          shrink-0
                          text-cyan-400
                        "
                      >
                        ✦
                      </span>

                      <span>
                        {item}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* =================================================
                ENGINEERING FOCUS
            ================================================= */}

            <div
              className="
                rounded-2xl
                bg-white/[0.025]
                p-6
                ring-1
                ring-white/[0.07]
                transition-all
                duration-300
                hover:bg-white/[0.035]
                hover:ring-white/[0.10]
                md:p-7
              "
            >
              <p
                className="
                  mb-5
                  text-[10px]
                  uppercase
                  tracking-[0.22em]
                  text-cyan-400
                "
              >
                Engineering Focus
              </p>

              <p
                className="
                  text-sm
                  leading-7
                  text-gray-400
                "
              >
                This project is presented as a
                complete product: architecture,
                reusable components, API integration,
                responsive UX and practical workflows
                are treated as part of the build.
              </p>

              {/* Small engineering tags */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                "
              >
                <span
                  className="
                    rounded-full
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    text-gray-400
                  "
                >
                  Architecture
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    text-gray-400
                  "
                >
                  API Integration
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    text-gray-400
                  "
                >
                  Responsive UX
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    px-3
                    py-1.5
                    text-[10px]
                    text-gray-400
                  "
                >
                  Production Workflow
                </span>
              </div>
            </div>
          </section>

          {/* =====================================================
              PREVIOUS / NEXT
          ====================================================== */}

          <div
            className="
              mt-7
              flex
              items-center
              justify-between
              gap-4
              border-t
              border-white/[0.07]
              pt-5
              sm:mt-8
              sm:pt-6
            "
          >
            {/* =================================================
                PREVIOUS
            ================================================= */}

            <Link
              to={`/projects/${previous.slug}`}
              className="
                group
                flex
                min-w-0
                items-center
                gap-2
                text-sm
                text-gray-400
                transition-colors
                hover:text-white
              "
            >
              <FaArrowLeft
                size={10}
                className="
                  shrink-0
                  transition-transform
                  duration-200
                  group-hover:-translate-x-1
                "
              />

              <span className="hidden truncate sm:inline">
                {previous.title}
              </span>

              <span className="sm:hidden">
                Previous
              </span>
            </Link>

            {/* =================================================
                NEXT
            ================================================= */}

            <Link
              to={`/projects/${next.slug}`}
              className="
                group
                flex
                min-w-0
                items-center
                gap-2
                text-right
                text-sm
                text-gray-400
                transition-colors
                hover:text-cyan-400
              "
            >
              <span className="hidden truncate sm:inline">
                {next.title}
              </span>

              <span className="sm:hidden">
                Next
              </span>

              <FaArrowRight
                size={10}
                className="
                  shrink-0
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

        </motion.div>
      </div>
    </main>
  );
}
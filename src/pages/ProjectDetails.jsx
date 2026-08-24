import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaPlay,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#030712] text-white grid place-items-center px-6">
        <div className="text-center">
          <p className="text-cyan-400 text-xs uppercase tracking-widest mb-3">
            404
          </p>

          <h1 className="text-4xl font-display font-bold">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <FaArrowLeft size={12} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = projects.findIndex(
    (item) => item.slug === slug
  );

  const previous =
    projects[
      (currentIndex - 1 + projects.length) % projects.length
    ];

  const next =
    projects[(currentIndex + 1) % projects.length];

  const Icon = project.icon;

  return (
    <main className="min-h-screen bg-[#030712] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <Link
          to="/projects"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-400
            hover:text-cyan-400
            transition-colors
            mb-7
          "
        >
          <FaArrowLeft size={12} />
          All projects
        </Link>

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
          {/* HERO */}
          <section
            className="
              relative
              min-h-[500px]
              overflow-hidden
              rounded-3xl
              bg-[#080b12]
              ring-1
              ring-white/[0.08]
            "
          >
            {/* Background */}
            {project.video ? (
              <video
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
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
                alt={project.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
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

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Bottom readability */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#030712]/75
                via-[#030712]/20
                to-transparent
              "
            />

            {/* Left readability */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#030712]/70
                via-[#030712]/25
                to-transparent
              "
            />

            {/* Content */}
            <div
              className="
                relative
                z-10
                min-h-[500px]
                flex
                items-end
                p-6
                sm:p-8
                md:p-10
              "
            >
              <div className="max-w-3xl">

                {/* Category */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="
                      w-9
                      h-9
                      rounded-lg
                      flex
                      items-center
                      justify-center
                      backdrop-blur-md
                    "
                    style={{
                      background: `${project.accent}25`,
                      color: project.accent,
                    }}
                  >
                    <Icon size={16} />
                  </div>

                  <p
                    className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[0.22em]
                      text-cyan-400
                    "
                  >
                    {project.category}
                  </p>
                </div>

                {/* Title */}
                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    font-display
                    font-bold
                    tracking-tight
                    text-white
                    leading-[1.05]
                  "
                >
                  {project.title}
                </h1>

                {/* Description */}
                <p
                  className="
                    text-gray-200
                    text-sm
                    sm:text-base
                    leading-7
                    mt-4
                    max-w-2xl
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-1.5
                    mt-5
                  "
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5
                        py-1
                        rounded-full
                        text-[10px]
                        sm:text-xs
                        bg-black/35
                        backdrop-blur-md
                        text-cyan-100
                        ring-1
                        ring-white/10
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div
                  className="
                    flex
                    flex-wrap
                    gap-3
                    mt-6
                  "
                >
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
                      text-black
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      hover:bg-cyan-100
                      hover:scale-[1.02]
                      transition-all
                    "
                  >
                    Live Demo
                    <FaExternalLinkAlt size={11} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-black/35
                      backdrop-blur-md
                      ring-1
                      ring-white/15
                      px-5
                      py-2.5
                      text-sm
                      text-gray-200
                      hover:text-white
                      hover:ring-cyan-400/40
                      hover:bg-black/45
                      transition-all
                    "
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Video indicator */}
            {project.video && (
              <div
                className="
                  absolute
                  top-5
                  right-5
                  z-20
                  flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-black/30
                  backdrop-blur-md
                  ring-1
                  ring-white/10
                  text-[10px]
                  text-white/80
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

          {/* INFORMATION */}
          <section
            className="
              grid
              md:grid-cols-2
              gap-5
              mt-7
            "
          >
            {/* Highlights */}
            <div
              className="
                rounded-2xl
                bg-white/[0.025]
                ring-1
                ring-white/[0.07]
                p-6
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-cyan-400
                  mb-4
                "
              >
                Project Highlights
              </p>

              <ul className="space-y-3">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="
                      flex
                      gap-3
                      text-gray-300
                      text-sm
                      leading-6
                    "
                  >
                    <span className="text-cyan-400 mt-1">
                      ✦
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering */}
            <div
              className="
                rounded-2xl
                bg-white/[0.025]
                ring-1
                ring-white/[0.07]
                p-6
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-cyan-400
                  mb-4
                "
              >
                Engineering Focus
              </p>

              <p
                className="
                  text-gray-400
                  text-sm
                  leading-7
                "
              >
                This project is presented as a complete product:
                architecture, reusable components, API integration,
                responsive UX and practical workflows are treated
                as part of the build.
              </p>
            </div>
          </section>

          {/* Previous / Next */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              mt-7
              pt-6
              border-t
              border-white/[0.07]
            "
          >
            <Link
              to={`/projects/${previous.slug}`}
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                text-gray-400
                hover:text-white
                transition-colors
              "
            >
              <FaArrowLeft
                size={10}
                className="
                  group-hover:-translate-x-1
                  transition-transform
                "
              />

              <span className="hidden sm:inline">
                {previous.title}
              </span>

              <span className="sm:hidden">
                Previous
              </span>
            </Link>

            <Link
              to={`/projects/${next.slug}`}
              className="
                group
                flex
                items-center
                gap-2
                text-sm
                text-gray-400
                hover:text-cyan-400
                transition-colors
              "
            >
              <span className="hidden sm:inline">
                {next.title}
              </span>

              <span className="sm:hidden">
                Next
              </span>

              <FaArrowRight
                size={10}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
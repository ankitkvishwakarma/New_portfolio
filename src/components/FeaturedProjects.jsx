import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function MiniPreview({ project }) {
  const Icon = project.icon;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#080b12]">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                background: `${project.accent}25`,
                color: project.accent,
              }}
            >
              <Icon size={22} />
            </div>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        opacity: {
          duration: 0.4,
          delay: index * 0.07,
          ease: "easeOut",
        },
        x: {
          duration: 0.6,
          delay: index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-white/[0.025]
        ring-1
        ring-white/[0.08]
        hover:ring-cyan-400/20
        hover:shadow-[0_16px_40px_-16px_rgba(6,182,212,0.3)]
        transition-shadow
        duration-300
        will-change-transform
      "
    >
      <Link
        to={`/projects/${project.slug}`}
        className="block"
      >
        <div className="relative h-36 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-7 z-10 flex items-center gap-1.5 px-3 bg-black/45">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>

          <div className="absolute top-7 left-0 right-0 bottom-0">
            <MiniPreview project={project} />
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
              style={{
                background: `${project.accent}20`,
                color: project.accent,
              }}
            >
              <Icon size={12} />
            </div>

            <h3 className="text-base font-semibold text-white truncate">
              {project.title}
            </h3>
          </div>

          <p className="text-xs text-gray-400 leading-relaxed mb-3 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="
                  px-2
                  py-0.5
                  rounded-full
                  text-[10px]
                  font-medium
                  bg-white/[0.04]
                  text-cyan-200
                "
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06]">
            <span className="
              flex
              items-center
              gap-1.5
              text-xs
              text-gray-400
              group-hover:text-white
              transition-colors
              duration-200
            ">
              View project

              <FaArrowRight
                size={10}
                className="
                  group-hover:translate-x-1
                  transition-transform
                  duration-200
                "
              />
            </span>

            <FaExternalLinkAlt
              size={10}
              className="
                text-gray-500
                group-hover:text-cyan-400
                transition-colors
                duration-200
              "
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="
        relative
        w-full
        py-12
        px-4
        sm:px-6
        lg:px-8
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-cyan-400
              mb-1.5
            ">
              Selected Work
            </p>

            <h2 className="
              text-2xl
              md:text-3xl
              font-display
              font-bold
              text-white
            ">
              Featured Projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="
              group
              flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              text-cyan-400
              hover:text-cyan-300
              transition-colors
            "
          >
            View all projects

            <FaArrowRight
              size={11}
              className="
                group-hover:translate-x-1
                transition-transform
              "
            />
          </Link>
        </div>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
        ">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
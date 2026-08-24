import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-[#030712] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-7xl mx-auto">

        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-400
            hover:text-cyan-400
            transition-colors
            duration-200
            mb-8
          "
        >
          <FaArrowLeft size={12} />
          Back to portfolio
        </Link>

        <div className="max-w-3xl mb-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-400 mb-2">
            Portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            All Projects
          </h1>

          <p className="text-gray-400 mt-4 text-sm md:text-base leading-7">
            A complete collection of my full-stack applications, dashboards
            and practical engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.slug}
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
                    delay: index * 0.06,
                    ease: "easeOut",
                  },
                  x: {
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="
                  group
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
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-[#080b12]">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
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

                        <div
                          className="
                            absolute
                            top-6
                            left-6
                            w-11
                            h-11
                            rounded-xl
                            flex
                            items-center
                            justify-center
                          "
                          style={{
                            background: `${project.accent}25`,
                            color: project.accent,
                          }}
                        >
                          <Icon size={20} />
                        </div>
                      </div>
                    )}

                    {/* Image Overlay */}
                    <div className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/70
                      via-black/10
                      to-transparent
                      pointer-events-none
                    " />

                    {/* Category */}
                    <div className="absolute bottom-4 left-5">
                      <p className="
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-white/70
                      ">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="
                          w-6
                          h-6
                          rounded-md
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                        style={{
                          background: `${project.accent}20`,
                          color: project.accent,
                        }}
                      >
                        <Icon size={12} />
                      </div>

                      <h2 className="
                        text-lg
                        font-display
                        font-semibold
                        text-white
                        truncate
                      ">
                        {project.title}
                      </h2>
                    </div>

                    <p className="
                      text-sm
                      text-gray-400
                      leading-6
                      line-clamp-2
                    ">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-2
                            py-1
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

                    {/* Footer */}
                    <div className="
                      mt-5
                      pt-3
                      border-t
                      border-white/[0.06]
                      flex
                      items-center
                      justify-between
                    ">
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
                        Explore project

                        <FaArrowRight
                          size={10}
                          className="
                            group-hover:translate-x-1
                            transition-transform
                            duration-200
                          "
                        />
                      </span>

                      <span
                        className="
                          text-xs
                          font-medium
                          transition-colors
                          duration-200
                        "
                        style={{
                          color: project.accent,
                        }}
                      >
                        View
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
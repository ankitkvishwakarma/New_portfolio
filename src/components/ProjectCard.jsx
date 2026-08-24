import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectPreview({ project }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#080b12]">
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
            object-center
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
        />
      )}

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
    </div>
  );
}

export default function ProjectCard({
  project,
  index = 0,
}) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 70,
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
        opacity: {
          duration: 0.45,
          delay: index * 0.08,
          ease: "easeOut",
        },
        x: {
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        glass-card
        border
        border-white/10
        hover:border-white/20
        hover:shadow-[0_16px_40px_-12px_rgba(6,182,212,0.25)]
        transition-shadow
        duration-300
        will-change-transform
      "
    >
      {/* Preview */}
      <div className="relative h-40 overflow-hidden border-b border-white/10">
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            h-7
            flex
            items-center
            gap-1.5
            px-3
            bg-black/55
            backdrop-blur-sm
            border-b
            border-white/5
            z-20
          "
        >
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>

        <div className="absolute inset-0 pt-7">
          <ProjectPreview project={project} />
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
            "
            style={{
              background: `${project.accent}20`,
              color: project.accent,
            }}
          >
            <Icon size={12} />
          </div>

          <h3 className="text-lg font-display font-semibold text-white">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="
                px-2.5
                py-1
                rounded-full
                text-xs
                font-medium
                bg-white/5
                border
                border-white/10
                text-cyan-200
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-3 border-t border-white/5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                flex
                items-center
                gap-1.5
                text-sm
                text-gray-400
                hover:text-white
                transition-colors
              "
            >
              <FaGithub size={14} />
              Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                flex
                items-center
                gap-1.5
                text-sm
                text-gray-400
                hover:text-cyan-400
                transition-colors
              "
            >
              <FaExternalLinkAlt size={12} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
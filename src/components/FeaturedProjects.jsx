import { motion } from "framer-motion";
import { Calendar, Users, Home } from "lucide-react";

const projects = [
  {
    title: "EventHub",
    description:
      "A comprehensive event management platform for colleges and schools. Students can discover and register for events while department clubs can create, host, and manage their events seamlessly.",
    icon: Calendar,
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "React.js",
      "TypeScript",
    ],
  },
  {
    title: "DevTinder",
    description:
      "A Tinder-inspired platform for developers to connect with like-minded people. Features a premium subscription system with special benefits for paying users.",
    icon: Users,
    tech: ["Node.js", "Express", "MongoDB", "Next.js", "TypeScript"],
  },
  {
    title: "HomeHunt",
    description:
      "A property listing platform helping users find their dream homes. Browse listings, filter by preferences, and connect directly with agents.",
    icon: Home,
    tech: ["Node.js", "Express", "MongoDB", "React.js", "Redux Toolkit"],
  },
];

export default function FeaturedProjects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`
        min-h-screen
        py-20
        px-4
        sm:px-6
        lg:px-8
        transition-all
        duration-500
        ${darkMode ? "text-white" : "text-black"}
      `}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-cyan-400 uppercase tracking-[4px] text-sm font-medium">
            Featured Projects
          </h2>

          <button className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all">
            View All
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  backdrop-blur-xl
                  p-6
                  transition-all
                  duration-500
                  ${
                    darkMode
                      ? "border border-cyan-500/10 bg-white/[0.03] hover:border-cyan-400/30"
                      : "border border-gray-300 bg-white shadow-xl hover:shadow-2xl"
                  }
                `}
              >
                {/* Hover Glow */}
                {darkMode && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 bg-cyan-500/[0.03]" />
                  </div>
                )}

                <div className="relative flex flex-col sm:flex-row gap-5">
                  {/* Icon */}
                  <div
                    className={`
                      h-14
                      w-14
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      shrink-0
                      ${
                        darkMode
                          ? "bg-cyan-500/10"
                          : "bg-cyan-100"
                      }
                    `}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`text-2xl font-semibold mb-3 ${
                        darkMode
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`leading-relaxed mb-5 ${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-700"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className={`
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-medium
                            border
                            ${
                              darkMode
                                ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/10"
                                : "bg-cyan-50 text-cyan-700 border-cyan-200"
                            }
                          `}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "Vercel",
  ],
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-cyan-400 uppercase tracking-[4px] text-sm mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([title, items], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
              "
            >
              <h3 className="text-xl font-semibold text-white mb-5">
                {title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-3
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/10
                    text-cyan-300
                    text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
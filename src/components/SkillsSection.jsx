import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: FaReact,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    color: "text-green-400",
    bg: "bg-green-500/10",
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Database",
    icon: FaDatabase,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Redis"]
  },
  {
    title: "Tools & DevOps",
    icon: FaTools,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Vercel", "Linux"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-cyan-500"></div>
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Tech Stack</p>
          <div className="h-[1px] w-12 bg-cyan-500"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Tools of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Trade</span>.
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              
              <div className="h-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-white/10 transition-colors shadow-lg">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${category.bg} ${category.color}`}>
                  <Icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
                      <span className="font-medium text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
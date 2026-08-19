import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt, FaUsers, FaHome } from "react-icons/fa";

const projects = [
  {
    title: "EventHub",
    description: "A comprehensive event management platform for colleges and schools. Students can discover and register for events while department clubs can create, host, and manage their events seamlessly.",
    icon: FaCalendarAlt,
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "React.js", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "DevTinder",
    description: "A Tinder-inspired platform for developers to connect with like-minded people. Features a premium subscription system with special benefits for paying users.",
    icon: FaUsers,
    tech: ["Node.js", "Express", "MongoDB", "Next.js", "TypeScript"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "HomeHunt",
    description: "A property listing platform helping users find their dream homes. Browse listings, filter by preferences, and connect directly with agents.",
    icon: FaHome,
    tech: ["Node.js", "Express", "MongoDB", "React.js", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-emerald-400 to-cyan-500"
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-cyan-500"></div>
              <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Portfolio</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>.
            </h2>
          </motion.div>
          
          <motion.a
            href="https://github.com"
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            View GitHub Profile
            <span className="group-hover:translate-x-1 transition-transform"><FaArrowRight size={14} /></span>
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative rounded-3xl overflow-hidden glass-card hover:border-white/20 transition-all duration-500"
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} opacity-5 blur-[100px] group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
                  
                  {/* Left: Content */}
                  <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.color} bg-opacity-10 backdrop-blur-sm border border-white/10 text-white shadow-lg`}>
                        <Icon size={20} />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="glass p-6 rounded-2xl mb-8 border border-white/5 shadow-inner">
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-cyan-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={20} />
                        <span className="font-medium">Code</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors">
                        <FaExternalLinkAlt size={16} />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Right: Visual / Image Placeholder */}
                  <div className="lg:col-span-5 relative hidden lg:block overflow-hidden bg-black/40 border-l border-white/5">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform-gpu">
                      <Icon size={120} className="text-white" />
                    </div>
                    {/* Simulated Interface Grid */}
                    <div className="absolute inset-y-8 inset-x-8 border border-white/10 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-md shadow-2xl flex flex-col transform translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500">
                      <div className="h-8 border-b border-white/10 flex items-center px-3 gap-1.5 bg-white/5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="flex-1 p-4 flex flex-col gap-3 opacity-50">
                        <div className="h-4 w-1/3 bg-white/10 rounded"></div>
                        <div className="h-24 w-full bg-white/5 rounded-lg border border-white/5"></div>
                        <div className="flex gap-2">
                           <div className="h-16 w-1/2 bg-white/5 rounded-lg border border-white/5"></div>
                           <div className="h-16 w-1/2 bg-white/5 rounded-lg border border-white/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors group flex items-center gap-3">
            View Archive
            <span className="group-hover:translate-x-1 transition-transform"><FaArrowRight size={14} /></span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Ensure FaArrowRight is imported if used in header
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaArrowRight, FaTerminal } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1] mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              Ankit Vishwakarma
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl mb-10">
            Building digital experiences that are fast, scalable, and beautifully designed. Full-stack engineer specializing in modern web technologies.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white text-black font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow"
            >
              View My Work
              <FaArrowRight size={14} />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl glass text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Download Resume
            </motion.a>
          </div>
          
          {/* Tech Stack Mini */}
          <div className="mt-16 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Tech Stack</p>
            <div className="flex gap-4">
              {/* Fake icons for aesthetic using CSS shapes/text */}
              <div className="font-bold text-xl text-white">Re</div>
              <div className="font-bold text-xl text-white">Nx</div>
              <div className="font-bold text-xl text-white">Ts</div>
              <div className="font-bold text-xl text-white">Nd</div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Terminal Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto perspective-[1000px]"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotateX: [5, 10, 5],
              rotateY: [-5, -10, -5]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative rounded-2xl overflow-hidden glass-card border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform-gpu"
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="ml-2 flex items-center gap-2 text-xs font-mono text-gray-500">
                <FaTerminal /> ankit@developer: ~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-relaxed bg-[#0a0a0a]/80 backdrop-blur-md">
              <div className="flex gap-2 text-gray-400">
                <span className="text-cyan-400">❯</span>
                <span className="text-white">npm start</span>
              </div>
              <div className="mt-2 text-gray-500">
                Starting development server...
              </div>
              <div className="mt-4 text-green-400">
                ✓ Compiled successfully!
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-blue-400">Environment</span>
                  <span className="text-gray-300">Production</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-blue-400">Status</span>
                  <span className="text-cyan-400 animate-pulse">Online</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-blue-400">Uptime</span>
                  <span className="text-gray-300">99.99%</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2 text-gray-400">
                <span className="text-cyan-400">❯</span>
                <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">_</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
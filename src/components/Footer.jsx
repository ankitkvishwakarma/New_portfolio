import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-gradient-to-b from-transparent to-black/50 w-full mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          
          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                A
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Ankit.
              </span>
            </a>
            <p className="text-sm text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} Ankit Vishwakarma. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
              <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
              <FaLinkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300">
              <FaTwitter size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-cyan-400/50 transition-all">
              <FaArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest">Top</span>
          </button>
          
        </div>
      </div>
    </footer>
  );
}
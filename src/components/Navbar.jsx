import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
              scrolled
                ? "bg-[#030712]/70 backdrop-blur-xl border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            {/* Logo */}
            <a href="#home" className="relative group flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] transition-all">
                A
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Ankit.
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white relative group py-2"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full text-sm font-semibold bg-white text-black hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-[#030712]/90 flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-8 right-8 text-gray-400 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-gray-300 hover:text-white hover:text-gradient-cyan transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex gap-6"
              >
                <a href="https://github.com" className="p-4 rounded-full bg-white/5 border border-white/10 text-white">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com" className="p-4 rounded-full bg-white/5 border border-white/10 text-white">
                  <FaLinkedin size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
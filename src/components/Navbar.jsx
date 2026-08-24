import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu with Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-300
          ${scrolled ? "py-4" : "py-6"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex
              items-center
              justify-between
              rounded-2xl
              px-5
              sm:px-6
              py-3
              transition-all
              duration-500
              ${
                scrolled
                  ? "bg-[#030712]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                  : "bg-transparent border border-transparent"
              }
            `}
          >
            {/* =================================================
                BRAND
            ================================================= */}
            <a
              href="#home"
              className="
                group
                flex
                items-center
                gap-2.5
                shrink-0
              "
              aria-label="Ankit Vishwakarma - Home"
            >
              {/* Animated Logo */}
              <video
                src="/animation.webm"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="
                  h-11
                  w-11
                  sm:h-12
                  sm:w-12
                  object-contain
                  rounded-lg
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:drop-shadow-[0_0_14px_rgba(6,182,212,0.55)]
                "
              />

              {/* Cursive Gradient Name */}
              <span
                className="
                  text-[23px]
                  sm:text-[25px]
                  font-bold
                  leading-none
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                  transition-all
                  duration-300
                  group-hover:from-cyan-300
                  group-hover:via-blue-400
                  group-hover:to-purple-400
                "
                style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', 'Lucida Handwriting', cursive",
                }}
              >
                Ankit
              </span>
            </a>

            {/* =================================================
                DESKTOP NAV LINKS
            ================================================= */}
            <div className="hidden md:flex items-center gap-7 lg:gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    relative
                    py-2
                    text-sm
                    font-medium
                    text-gray-300
                    hover:text-white
                    transition-colors
                    duration-300
                    group
                  "
                >
                  {link.label}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-blue-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </div>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}
            <div className="hidden md:flex items-center gap-4">
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  text-gray-400
                  hover:text-white
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  text-gray-400
                  hover:text-white
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={19} />
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-black
                  bg-white
                  shadow-[0_0_15px_rgba(255,255,255,0.18)]
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]
                  transition-all
                  duration-300
                "
              >
                <span className="relative z-10">
                  Hire Me
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-200/70
                    to-transparent
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-full
                  "
                />
              </a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="
                md:hidden
                p-2
                text-gray-300
                hover:text-white
                transition-colors
              "
            >
              <FaBars size={23} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(18px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              z-[60]
              bg-[#030712]/95
              flex
              flex-col
              items-center
              justify-center
            "
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="
                absolute
                top-7
                right-7
                p-2
                text-gray-400
                hover:text-white
                transition-colors
              "
            >
              <FaTimes size={28} />
            </button>

            {/* =================================================
                MOBILE BRAND
            ================================================= */}
            <motion.a
              href="#home"
              onClick={closeMobileMenu}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                absolute
                top-7
                left-7
                flex
                items-center
                gap-2
              "
            >
              <video
                src="/animation.webm"
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
                className="
                  h-9
                  w-9
                  object-contain
                  rounded-lg
                "
              />

              <span
                className="
                  text-[21px]
                  font-bold
                  leading-none
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
                style={{
                  fontFamily:
                    "'Brush Script MT', 'Segoe Script', 'Lucida Handwriting', cursive",
                }}
              >
                Ankit
              </span>
            </motion.a>

            {/* =================================================
                MOBILE LINKS
            ================================================= */}
            <div className="flex flex-col items-center gap-7">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.35,
                  }}
                  onClick={closeMobileMenu}
                  className="
                    text-2xl
                    sm:text-3xl
                    font-display
                    font-bold
                    text-gray-300
                    hover:text-cyan-400
                    transition-colors
                    duration-300
                  "
                >
                  {link.label}
                </motion.a>
              ))}

              {/* =================================================
                  MOBILE SOCIALS
              ================================================= */}
              <motion.div
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="mt-5 flex gap-5"
              >
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaGithub size={21} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-white/5
                    border
                    border-white/10
                    text-white
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedin size={21} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
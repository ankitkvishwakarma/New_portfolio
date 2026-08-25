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

// Premium easing curve — slower start, crisp settle
const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: showNavbar ? 0 : -120,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: EASE,
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ${scrolled ? "py-4" : "py-6"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{
              boxShadow: scrolled
                ? "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)"
                : "0 0px 0px rgba(0,0,0,0), 0 0 0 1px rgba(255,255,255,0)",
            }}
            transition={{ duration: 0.6, ease: EASE }}
            className={`
              relative
              flex
              items-center
              justify-between
              rounded-2xl
              px-5
              sm:px-6
              py-3
              overflow-hidden
              transition-colors
              duration-500
              ${
                scrolled
                  ? "bg-[#030712]/70 backdrop-blur-2xl border border-white/10"
                  : "bg-transparent border border-transparent"
              }
            `}
          >
            {/* subtle premium sheen across the bar */}
            <div
              aria-hidden="true"
              className={`
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500/[0.04]
                via-transparent
                to-purple-500/[0.04]
                transition-opacity
                duration-500
                ${scrolled ? "opacity-100" : "opacity-0"}
              `}
            />

            <a
              href="#home"
              className="group relative z-10 flex items-center gap-2.5 shrink-0"
              aria-label="Ankit Vishwakarma - Home"
            >
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
                  duration-500
                  ease-out
                  group-hover:scale-110
                  group-hover:drop-shadow-[0_0_18px_rgba(6,182,212,0.6)]
                "
              />

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
                  duration-500
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

            <div className="relative z-10 hidden md:flex items-center gap-7 lg:gap-8">
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
                  <span className="relative inline-block transition-transform duration-300 ease-out group-hover:-translate-y-[1px]">
                    {link.label}
                  </span>

                  <span
                    className="
                      absolute
                      -bottom-0.5
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-400
                      to-purple-500
                      shadow-[0_0_8px_rgba(6,182,212,0.6)]
                      transition-all
                      duration-400
                      ease-out
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </div>

            <div className="relative z-10 hidden md:flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  text-gray-400
                  hover:text-white
                  hover:-translate-y-0.5
                  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]
                  transition-all
                  duration-300
                  ease-out
                "
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  text-gray-400
                  hover:text-white
                  hover:-translate-y-0.5
                  hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]
                  transition-all
                  duration-300
                  ease-out
                "
              >
                <FaLinkedin size={19} />
              </a>

              {/* Premium CTA button */}
              <a
                href="#contact"
                className="
                  group/cta
                  relative
                  isolate
                  overflow-hidden
                  rounded-full
                  p-[1.5px]
                  transition-transform
                  duration-300
                  ease-out
                  hover:-translate-y-0.5
                  active:translate-y-0
                  active:scale-[0.97]
                "
              >
                {/* rotating gradient border */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-[-40%]
                    animate-[spin_4s_linear_infinite]
                    bg-[conic-gradient(from_0deg,_#22d3ee,_#a855f7,_#22d3ee)]
                    opacity-70
                    group-hover/cta:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                {/* button body */}
                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-black
                    shadow-[0_0_20px_rgba(255,255,255,0.15)]
                    transition-all
                    duration-300
                    group-hover/cta:shadow-[0_0_32px_rgba(6,182,212,0.55)]
                  "
                >
                  <span className="relative z-10">Hire Me</span>

                  <span
                    aria-hidden="true"
                    className="
                      relative
                      z-10
                      inline-block
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/cta:translate-x-0.5
                      group-hover/cta:-translate-y-0.5
                    "
                  >
                    ↗
                  </span>

                  {/* shine sweep */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-200/80
                      to-transparent
                      transition-transform
                      duration-700
                      ease-out
                      group-hover/cta:translate-x-full
                    "
                  />
                </span>
              </a>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="
                relative
                z-10
                md:hidden
                p-2
                text-gray-300
                hover:text-white
                transition-colors
                duration-300
              "
            >
              <FaBars size={23} />
            </button>
          </motion.div>
        </div>
      </motion.nav>

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
            transition={{ duration: 0.4, ease: EASE }}
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
                hover:rotate-90
                transition-all
                duration-300
                ease-out
              "
            >
              <FaTimes size={28} />
            </button>

            <motion.a
              href="#home"
              onClick={closeMobileMenu}
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                ease: EASE,
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

            <div className="flex flex-col items-center gap-7">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{
                    y: 24,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.45,
                    ease: EASE,
                  }}
                  onClick={closeMobileMenu}
                  className="
                    text-2xl
                    sm:text-3xl
                    font-display
                    font-bold
                    text-gray-300
                    hover:text-cyan-400
                    hover:tracking-wide
                    transition-all
                    duration-300
                    ease-out
                  "
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Premium CTA — mobile */}
              <motion.a
                href="#contact"
                onClick={closeMobileMenu}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: links.length * 0.06,
                  duration: 0.45,
                  ease: EASE,
                }}
                className="
                  group/ctam
                  relative
                  mt-2
                  overflow-hidden
                  rounded-full
                  p-[1.5px]
                  active:scale-[0.96]
                  transition-transform
                  duration-300
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-[-40%]
                    animate-[spin_4s_linear_infinite]
                    bg-[conic-gradient(from_0deg,_#22d3ee,_#a855f7,_#22d3ee)]
                  "
                />
                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-white
                    px-6
                    py-2.5
                    text-base
                    font-semibold
                    text-black
                    shadow-[0_0_20px_rgba(255,255,255,0.2)]
                  "
                >
                  Hire Me <span aria-hidden="true">↗</span>
                </span>
              </motion.a>

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
                  ease: EASE,
                }}
                className="mt-5 flex gap-5"
              >
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
                    ease-out
                  "
                >
                  <FaGithub size={21} />
                </a>

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
                    ease-out
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

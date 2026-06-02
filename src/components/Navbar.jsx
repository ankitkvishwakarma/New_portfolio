import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const links = [
  { icon: FaHome, label: "Home" },
  { icon: FaUser, label: "About" },
  { icon: FaCode, label: "Skills" },
  { icon: FaBriefcase, label: "Projects" },
  { icon: FaEnvelope, label: "Contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 80,
            scale: 0.9,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className={`
              flex
              items-center
              gap-2
              px-3
              py-2
              rounded-3xl
              backdrop-blur-2xl
              transition-all
              duration-500
              ${
                darkMode
                  ? "bg-white/[0.05] border border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
                  : "bg-white border border-gray-300 shadow-xl"
              }
            `}
          >
            {links.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  whileHover={{
                    scale: 1.12,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    relative
                    group
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${
                      darkMode
                        ? "bg-white/5 border border-white/10 text-white hover:border-cyan-400/30"
                        : "bg-gray-100 border border-gray-300 text-gray-700 hover:border-cyan-400"
                    }
                  `}
                >
                  <Icon
                    size={16}
                    className="transition-all duration-300 group-hover:text-cyan-400"
                  />

                  {/* Tooltip */}
                  <span
                    className="
                      absolute
                      -top-10
                      opacity-0
                      group-hover:opacity-100
                      group-hover:-translate-y-1
                      transition-all
                      duration-300
                      text-[10px]
                      whitespace-nowrap
                      px-2.5
                      py-1
                      rounded-full
                      bg-black/90
                      text-white
                      border
                      border-cyan-500/20
                      pointer-events-none
                    "
                  >
                    {item.label}
                  </span>

                  {/* Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-cyan-500/20
                      opacity-0
                      group-hover:opacity-100
                      blur-lg
                      transition-all
                      duration-300
                      -z-10
                    "
                  />
                </motion.a>
              );
            })}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{
                scale: 1.1,
                rotate: 15,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setDarkMode(!darkMode)}
              className={`
                w-11
                h-11
                rounded-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
                ${
                  darkMode
                    ? "bg-white/5 border border-white/10 text-yellow-400"
                    : "bg-gray-100 border border-gray-300 text-gray-700"
                }
              `}
            >
              {darkMode ? (
                <FaSun size={17} />
              ) : (
                <FaMoon size={17} />
              )}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
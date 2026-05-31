import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  { icon: FaHome, label: "Home" },
  { icon: FaUser, label: "About" },
  { icon: FaCode, label: "Skills" },
  { icon: FaBriefcase, label: "Projects" },
  { icon: FaEnvelope, label: "Contact" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 400);
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
          className="
            fixed
            bottom-4
            left-1/2
            -translate-x-1/2
            z-50
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
              px-3
              py-2
              rounded-3xl
              backdrop-blur-2xl
              bg-white/[0.04]
              border
              border-white/10
              shadow-[0_0_30px_rgba(0,255,255,0.08)]
            "
          >
            {links.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={`#${item.label.toLowerCase()}`}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    relative
                    group
                    w-10
                    h-10
                    md:w-11
                    md:h-11
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                  "
                >
                  <Icon
                    size={16}
                    className="
                      transition-all
                      duration-300
                      group-hover:text-cyan-400
                    "
                  />

                  {/* Tooltip */}
                  <span
                    className="
                      absolute
                      -top-9
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
                      bg-black/80
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
import { motion } from "framer-motion";
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
  return (
    <div
      className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      z-50
      "
    >
      <div
        className="
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-3xl
        backdrop-blur-2xl
        bg-white/[0.04]
        border
        border-white/10
        shadow-[0_0_40px_rgba(0,255,255,0.08)]
        "
      >
        {links.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={index}
              href={`#${item.label.toLowerCase()}`}
              whileHover={{
                scale: 1.35,
                y: -10,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              relative
              group
              w-14
              h-14
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              transition-all
              duration-300
              "
            >
              <Icon size={20} />

              {/* Tooltip */}
              <span
                className="
                absolute
                -top-10
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-300
                text-xs
                whitespace-nowrap
                px-3
                py-1
                rounded-full
                bg-black/80
                border
                border-cyan-500/20
                "
              >
                {item.label}
              </span>

              {/* Glow */}
              <div
                className="
                absolute
                inset-0
                rounded-2xl
                bg-cyan-500/10
                opacity-0
                group-hover:opacity-100
                blur-xl
                transition-all
                duration-300
                "
              />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
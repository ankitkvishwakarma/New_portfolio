import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer({ darkMode }) {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/yourusername",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/yourusername",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/yourusername",
    },
  ];

  return (
    <footer
      className={`
        relative
        py-12
        px-4
        sm:px-6
        lg:px-8
        transition-all
        duration-500
        ${
          darkMode
            ? "border-t border-white/10"
            : "border-t border-gray-300"
        }
      `}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Ankit
              <span className="text-cyan-400">.dev</span>
            </h2>

            <p
              className={`mt-2 ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Full Stack Developer • React • Next.js • Node.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`
                    w-11
                    h-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    ${
                      darkMode
                        ? "bg-white/[0.03] border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/30"
                        : "bg-white border border-gray-300 text-black hover:text-cyan-400 hover:border-cyan-400"
                    }
                  `}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px my-8 ${
            darkMode
              ? "bg-white/10"
              : "bg-gray-300"
          }`}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p
            className={`text-center md:text-left ${
              darkMode
                ? "text-gray-500"
                : "text-gray-600"
            }`}
          >
            © {new Date().getFullYear()} Ankit Vishwakarma.
            All rights reserved.
          </p>

          <div
            className={`flex gap-6 ${
              darkMode
                ? "text-gray-500"
                : "text-gray-600"
            }`}
          >
            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
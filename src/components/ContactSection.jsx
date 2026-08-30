import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Zap,
  ArrowUpRight,
  Send,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

/* =========================================================
   CONTACT LINKS
========================================================= */

const contactLinks = [
  {
    title: "Email",
    value: "ankit789.en@gmail.com",
    description: "Drop me an email anytime",
    href: "mailto:ankit789.en@gmail.com",
    icon: Mail,
    color: "cyan",
  },
  {
    title: "WhatsApp",
    value: "Chat directly on WhatsApp",
    description: "Quick and easy",
    href: "https://wa.me/917654418072",
    icon: FaWhatsapp,
    color: "green",
  },
  {
    title: "GitHub",
    value: "github.com/ankit789",
    description: "Check out my repositories",
    href: "https://github.com/ankitkvishwakarma",
    icon: FaGithub,
    color: "purple",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/ankitkumar",
    description: "Let's connect professionally",
    href: "hwww.linkedin.com/in/ankit-kumar-vishwakarma-4a86561b1",
    icon: FaLinkedin,
    color: "blue",
  },
];

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({ item, index }) {
  const Icon = item.icon;

  const colors = {
    cyan: {
      icon: "text-cyan-400",
      iconBg: "bg-cyan-400/10",
      border: "hover:border-cyan-400/30",
      glow: "group-hover:bg-cyan-400/[0.04]",
      value: "group-hover:text-cyan-400",
    },
    green: {
      icon: "text-green-400",
      iconBg: "bg-green-400/10",
      border: "hover:border-green-400/30",
      glow: "group-hover:bg-green-400/[0.04]",
      value: "group-hover:text-green-400",
    },
    purple: {
      icon: "text-purple-400",
      iconBg: "bg-purple-400/10",
      border: "hover:border-purple-400/30",
      glow: "group-hover:bg-purple-400/[0.04]",
      value: "group-hover:text-purple-400",
    },
    blue: {
      icon: "text-blue-400",
      iconBg: "bg-blue-400/10",
      border: "hover:border-blue-400/30",
      glow: "group-hover:bg-blue-400/[0.04]",
      value: "group-hover:text-blue-400",
    },
  };

  const theme = colors[item.color];

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: index * 0.06,
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -2 }}
      className={`
        group relative flex items-center gap-3 sm:gap-4
        overflow-hidden rounded-xl sm:rounded-2xl
        border border-white/[0.07] bg-white/[0.025]
        p-3 sm:p-4
        transition-all duration-300
        ${theme.border}
      `}
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${theme.glow}`}
      />

      {/* Icon */}
      <div
        className={`
          relative z-10 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0
          items-center justify-center rounded-xl
          ${theme.iconBg} ${theme.icon}
          transition-transform duration-300 group-hover:scale-105
        `}
      >
        <Icon size={18} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-w-0 flex-1">
        <h3 className="text-sm sm:text-base font-semibold text-white">
          {item.title}
        </h3>
        <p
          className={`mt-0.5 truncate text-xs sm:text-sm font-medium text-gray-400 transition-colors duration-300 ${theme.value}`}
        >
          {item.value}
        </p>
        <p className="mt-0.5 text-[10px] sm:text-[11px] text-gray-600">
          {item.description}
        </p>
      </div>

      {/* Arrow */}
      <ArrowUpRight
        size={18}
        className="
          relative z-10 shrink-0 text-gray-600
          transition-all duration-300
          group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white
        "
      />
    </motion.a>
  );
}

/* =========================================================
   DEVELOPER VISUAL
========================================================= */

function DeveloperVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="
        relative mt-6 h-[150px] sm:h-[180px] lg:h-[200px]
        overflow-hidden rounded-2xl sm:rounded-3xl
        border border-white/[0.06]
        bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-purple-500/[0.04]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2
          rounded-full bg-cyan-400/[0.06] blur-[60px]
        "
      />

      {/* Code panel */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute left-3 sm:left-5 top-4 sm:top-6 w-28 sm:w-32
          rounded-lg sm:rounded-xl border border-cyan-400/20
          bg-[#071014]/90 p-3 shadow-2xl hidden xs:block
        "
      >
        <div className="mb-2 flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
        </div>
        <div className="space-y-1.5 font-mono text-[7px] sm:text-[8px]">
          <div className="text-purple-400">
            const <span className="text-cyan-400">developer</span>
          </div>
          <div className="text-gray-600">{"{"}</div>
          <div className="pl-3 text-green-400">
            stack:
            <span className="text-gray-500">{' ["React", "Node"]'}</span>
          </div>
          <div className="pl-3 text-blue-400">
            passion:
            <span className="text-gray-500">{' "building"'}</span>
          </div>
          <div className="text-gray-600">{"}"}</div>
        </div>
      </motion.div>

      {/* Center code icon */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute left-1/2 top-1/2 flex h-20 w-20 sm:h-24 sm:w-24 -translate-x-1/2 -translate-y-1/2
          items-center justify-center rounded-full
          border border-green-400/30 bg-[#07100b]
          shadow-[0_0_50px_rgba(34,197,94,0.12)]
        "
      >
        <div className="text-center">
          <div className="font-mono text-xl sm:text-2xl font-bold text-green-400">
            &lt;/&gt;
          </div>
          <div className="mt-1 flex items-center justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="text-[6px] sm:text-[7px] uppercase tracking-[0.2em] text-gray-600">
              building
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating lines */}
      <div
        className="
          absolute right-3 sm:right-5 top-4 sm:top-6 h-20 w-24
          rounded-lg sm:rounded-xl border border-purple-400/10
          bg-purple-400/[0.02] p-3 hidden xs:block
        "
      >
        <div className="space-y-1.5">
          <div className="h-1 w-14 rounded-full bg-purple-400/30" />
          <div className="h-1 w-16 rounded-full bg-cyan-400/20" />
          <div className="h-1 w-10 rounded-full bg-green-400/20" />
          <div className="h-1 w-14 rounded-full bg-blue-400/20" />
        </div>
      </div>

      {/* Bottom dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {[1, 2, 3, 4, 5, 6].map((dot) => (
          <motion.span
            key={dot}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.8, delay: dot * 0.12, repeat: Infinity }}
            className="h-1 w-1 rounded-full bg-cyan-400"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        pt-12
        pb-6
        sm:px-6
        sm:pt-16
        sm:pb-10
        lg:px-8
        lg:py-20
      "
    >
      {/* Background ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[15%] h-[260px] w-[260px] rounded-full bg-cyan-500/[0.025] blur-[110px]" />
        <div className="absolute bottom-[5%] right-[5%] h-[300px] w-[300px] rounded-full bg-purple-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-7 sm:mb-9 max-w-3xl text-center"
        >
          <div className="mb-3 sm:mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-9 sm:w-10 bg-cyan-400/50" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-400">
              Contact
            </span>
            <span className="h-px w-9 sm:w-10 bg-cyan-400/50" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              great
            </span>{" "}
            together.
          </h2>

          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm leading-6 sm:leading-7 text-gray-500">
            Have a project in mind or want to collaborate? I'd love to hear
            about it and bring your ideas to life.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-2 font-mono text-xs">
                <span className="text-green-400">$</span>
                <span className="text-gray-500">./start-a-conversation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-white">
                Have a project
                <br />
                <span className="text-gray-500">worth building?</span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 sm:leading-7 text-gray-500">
                I'm open to full-stack projects, freelance work,
                collaborations and new opportunities. Let's turn your idea
                into something useful, scalable and beautifully built.
              </p>
            </motion.div>

            {/* STATUS ROW */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.45 }}
              className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3"
            >
              <div className="rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-green-400/10 text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
                </div>
                <p className="text-xs font-semibold text-white">
                  Available for work
                </p>
                <p className="mt-0.5 text-[10px] text-gray-600">
                  Open to opportunities
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                  <MapPin size={14} />
                </div>
                <p className="text-xs font-semibold text-white">
                  Based in India
                </p>
                <p className="mt-0.5 text-[10px] text-gray-600">
                  Remote friendly
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-purple-400/10 text-purple-400">
                  <Zap size={14} />
                </div>
                <p className="text-xs font-semibold text-white">
                  Quick response
                </p>
                <p className="mt-0.5 text-[10px] text-gray-600">
                  Usually within 24h
                </p>
              </div>
            </motion.div>

            {/* Developer illustration */}
            <DeveloperVisual />
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-3 sm:mb-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                Choose a channel
              </p>
              <h3 className="mt-1.5 text-lg sm:text-xl font-semibold text-white">
                Let's connect
              </h3>
            </div>

            {/* Contact cards */}
            <div className="space-y-2.5">
              {contactLinks.map((item, index) => (
                <ContactCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            mt-6 sm:mt-8 flex flex-col gap-5
            rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-white/[0.025]
            p-5 sm:p-6 lg:p-7
            md:flex-row md:items-center md:justify-between
          "
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.05] text-cyan-400">
              <Send size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Ready to start a conversation?
              </h3>
              <p className="mt-0.5 text-xs sm:text-sm text-gray-500">
                Let's discuss your project or just say hello!
              </p>
            </div>
          </div>

          <a
            href="mailto:ankit789.en@gmail.com"
            className="
              group inline-flex items-center justify-center gap-2.5
              rounded-xl bg-gradient-to-r from-cyan-400 to-green-400
              px-5 py-3 text-sm font-bold text-black
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,211,238,0.15)]
            "
          >
            Start a Conversation
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* BOTTOM DECORATION */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/20" />
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/20 text-cyan-400">
            <Sparkles size={12} />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/20" />
        </div>
      </div>
    </section>
  );
}

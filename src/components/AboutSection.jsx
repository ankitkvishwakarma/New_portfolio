import { motion } from "framer-motion";

export default function AboutSection() {
  const capabilities = [
    {
      number: "01",
      title: "Full Stack",
      description: "UI to backend applications.",
    },
    {
      number: "02",
      title: "Backend",
      description: "APIs, auth & databases.",
    },
    {
      number: "03",
      title: "Problem Solver",
      description: "Simple solutions to complex problems.",
    },
    {
      number: "04",
      title: "Always Learning",
      description: "TypeScript, system design & AI.",
    },
  ];

  const terminalLines = [
    {
      command: "whoami",
      output: "Full Stack Developer",
      highlight: true,
    },
    {
      command: "focus",
      output: "Backend Architecture",
    },
    {
      command: "stack",
      output: "React · Node · Express · MongoDB",
    },
    {
      command: "learning",
      output: "TypeScript · System Design · AI",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        px-4
        py-16
        pb-6
        sm:px-6
        sm:py-20
        lg:px-8
        lg:pt-28
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[5%]
            top-[10%]
            h-56
            w-56
            rounded-full
            bg-cyan-500/[0.035]
            blur-3xl
          "
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[5%]
            bottom-[10%]
            h-64
            w-64
            rounded-full
            bg-blue-500/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
            [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-9"
        >
          {/* Label */}
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-cyan-400" />

            <span
              className="
                font-mono
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-cyan-400
              "
            >
              About / Developer
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-3xl
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-[52px]
            "
          >
            I build products,{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-cyan-300
                to-white
                bg-clip-text
                text-transparent
              "
            >
              not just pages.
            </span>
          </h2>

          <p
            className="
              mt-3
              max-w-xl
              text-sm
              leading-6
              text-gray-500
              sm:text-[15px]
            "
          >
            Full Stack Developer focused on building practical, reliable,
            and user-focused digital products.
          </p>
        </motion.div>

        {/* ================= MAIN ================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[0.92fr_1.08fr]
            lg:items-start
            lg:gap-10
          "
        >
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            {/* Short About */}
            <div className="space-y-4 text-[14px] leading-6 text-gray-400">
              <p>
                I enjoy building applications where{" "}
                <span className="font-medium text-white">
                  design, functionality, and engineering
                </span>{" "}
                come together — from React interfaces to APIs, authentication,
                databases, and backend systems.
              </p>

              <p>
                I focus on writing{" "}
                <span className="font-medium text-cyan-300">
                  clean, maintainable code
                </span>{" "}
                and solving problems through practical solutions. Currently,
                I’m going deeper into TypeScript, system design, databases,
                backend architecture, and AI.
              </p>
            </div>

            {/* ================= PHILOSOPHY ================= */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2
                rounded-xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-400
                    shadow-[0_0_8px_rgba(34,211,238,0.8)]
                  "
                />

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-gray-600
                  "
                >
                  Philosophy
                </span>
              </div>

              <div className="font-mono text-[11px]">
                <span className="text-cyan-400">Build</span>
                <span className="mx-1.5 text-gray-700">→</span>
                <span className="text-blue-400">Break</span>
                <span className="mx-1.5 text-gray-700">→</span>
                <span className="text-purple-400">Understand</span>
                <span className="mx-1.5 text-gray-700">→</span>
                <span className="text-white">Improve</span>
              </div>
            </motion.div>

            {/* ================= CAPABILITIES ================= */}
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -3 }}
                  className="
                    group
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.018]
                    px-3.5
                    py-3
                    transition-all
                    duration-300
                    hover:border-cyan-400/20
                    hover:bg-white/[0.03]
                  "
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span
                      className="
                        font-mono
                        text-[9px]
                        text-gray-600
                      "
                    >
                      {item.number}
                    </span>

                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-gray-700
                        transition-all
                        duration-300
                        group-hover:bg-cyan-400
                        group-hover:shadow-[0_0_7px_rgba(34,211,238,0.8)]
                      "
                    />
                  </div>

                  <h3 className="text-xs font-semibold text-white sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-gray-600 sm:text-[11px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ================= TERMINAL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                rounded-3xl
                bg-cyan-500/[0.045]
                blur-3xl
              "
            />

            {/* Terminal */}
            <div
              className="
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/[0.08]
                bg-[#0b0d10]
                shadow-[0_25px_70px_-35px_rgba(0,0,0,0.95)]
              "
            >
              {/* Header */}
              <div
                className="
                  flex
                  h-10
                  items-center
                  justify-between
                  border-b
                  border-white/[0.06]
                  bg-[#111318]
                  px-3.5
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    font-mono
                    text-[9px]
                    text-gray-700
                  "
                >
                  ankit.dev
                </span>

                <span className="font-mono text-[8px] text-gray-700">
                  terminal
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-5 sm:p-6">
                {/* Identity */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-cyan-400/20
                      bg-cyan-400/[0.05]
                      font-mono
                      text-sm
                      font-bold
                      text-cyan-300
                    "
                  >
                    AK
                  </div>

                  <div>
                    <p className="font-mono text-xs font-semibold text-white">
                      ankit.dev
                    </p>

                    <div className="mt-1 flex items-center gap-1.5">
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-emerald-400
                          shadow-[0_0_7px_rgba(52,211,153,0.8)]
                        "
                      />

                      <span className="font-mono text-[9px] text-gray-600">
                        available_for_opportunities
                      </span>
                    </div>
                  </div>
                </div>

                {/* Commands */}
                <div className="space-y-4 font-mono text-[10px] sm:text-[11px]">
                  {terminalLines.map((line, index) => (
                    <motion.div
                      key={line.command}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + index * 0.08,
                      }}
                    >
                      <div className="flex gap-2">
                        <span className="text-cyan-400">$</span>

                        <span className="text-gray-300">
                          {line.command}
                        </span>
                      </div>

                      <div className="mt-1 pl-4 text-gray-600">
                        <span className="mr-2 text-gray-800">→</span>

                        <span
                          className={
                            line.highlight
                              ? "text-cyan-300"
                              : "text-gray-500"
                          }
                        >
                          {line.output}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/[0.06]
                    pt-4
                  "
                >
                  <div>
                    <p
                      className="
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-[0.18em]
                        text-gray-700
                      "
                    >
                      Status
                    </p>

                    <p className="mt-1 font-mono text-[10px] text-gray-400">
                      Building & learning
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-emerald-400/10
                      bg-emerald-400/[0.035]
                      px-2.5
                      py-1
                    "
                  >
                    <motion.span
                      animate={{
                        opacity: [1, 0.3, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    />

                    <span className="font-mono text-[8px] text-emerald-300">
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Cursor */}
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="font-mono text-[11px] text-cyan-400">
                    ›
                  </span>

                  <motion.span
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="h-3 w-[5px] bg-cyan-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
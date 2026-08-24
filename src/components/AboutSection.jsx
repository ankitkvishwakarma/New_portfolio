import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        min-h-[calc(100vh-70px)]
        flex
        items-center
        overflow-hidden
        px-4
        sm:px-6
        lg:px-8
        py-10
        lg:py-12
      "
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mb-8"
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-cyan-500" />

            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-400">
              About Me
            </p>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Engineering the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              future
            </span>{" "}
            of web.
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="
              flex
              flex-col
              gap-4
              text-base
              leading-7
              text-gray-300
            "
          >
            <p>
              I am a{" "}
              <strong className="font-semibold text-white">
                Full Stack Engineer
              </strong>{" "}
              with a deep passion for building robust, scalable, and
              beautifully designed digital experiences. My journey started
              with a curiosity about how the web works, which quickly evolved
              into a professional pursuit of engineering excellence.
            </p>

            <p>
              I specialize in creating modern web applications using{" "}
              <strong className="font-semibold text-white">
                React, Next.js, Node.js, and TypeScript
              </strong>
              . I believe that great software is a combination of clean
              architecture, performant code, and an intuitive user experience.
            </p>

            <p>
              Currently, I'm deeply interested in the intersection of{" "}
              <strong className="font-semibold text-cyan-400">
                AI and Web Development
              </strong>
              , exploring how to integrate intelligent features into everyday
              applications to solve real-world problems effectively.
            </p>

            {/* Stats */}
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                {
                  value: "3+",
                  label: "Years Experience",
                },
                {
                  value: "10+",
                  label: "Projects Built",
                },
                {
                  value: "99%",
                  label: "Client Satisfaction",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="
                    group
                    rounded-xl
                    border
                    border-white/[0.06]
                    bg-white/[0.025]
                    px-3
                    py-3
                    text-center
                    transition-all
                    duration-300
                    hover:border-cyan-500/20
                    hover:bg-white/[0.04]
                  "
                >
                  <p
                    className="
                      mb-0.5
                      font-display
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-white
                      group-hover:text-cyan-300
                      transition-colors
                    "
                  >
                    {stat.value}
                  </p>

                  <p className="text-[10px] sm:text-xs font-medium text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="group relative w-full"
          >
            {/* Glow */}
            <div
              className="
                absolute
                -inset-1
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                opacity-15
                blur-2xl
                transition
                duration-700
                group-hover:opacity-25
              "
            />

            {/* Code Window */}
            <div
              className="
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/[0.08]
                bg-[#1e1e1e]
                shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)]
              "
            >
              {/* Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/5
                  bg-[#2d2d2d]
                  px-4
                  py-2
                "
              >
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>

                <div className="font-mono text-[10px] text-[#cccccc]">
                  developer.ts
                </div>

                <div className="w-10" />
              </div>

              {/* Tab */}
              <div className="flex bg-[#252526] font-mono text-[10px]">
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border-t
                    border-cyan-400
                    bg-[#1e1e1e]
                    px-4
                    py-1.5
                    text-cyan-400
                  "
                >
                  <span className="text-[#519aba]">
                    TS
                  </span>

                  developer.ts
                </div>
              </div>

              {/* Code */}
              <div
                className="
                  overflow-x-auto
                  p-4
                  font-mono
                  text-[11px]
                  sm:text-xs
                  leading-[1.65]
                "
              >
                <div className="flex">

                  {/* Line Numbers */}
                  <div
                    className="
                      flex
                      select-none
                      flex-col
                      pr-4
                      text-right
                      text-[#666]
                    "
                  >
                    {Array.from(
                      { length: 14 },
                      (_, index) => (
                        <span key={index}>
                          {index + 1}
                        </span>
                      )
                    )}
                  </div>

                  {/* Code */}
                  <div className="text-[#d4d4d4] whitespace-nowrap">

                    <div>
                      <span className="text-[#c586c0]">
                        const
                      </span>{" "}
                      <span className="text-[#4fc1ff]">
                        developer
                      </span>{" "}
                      =
                      {" {"}
                    </div>

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        name
                      </span>
                      :{" "}
                      <span className="text-[#ce9178]">
                        'Ankit Vishwakarma'
                      </span>,
                    </div>

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        role
                      </span>
                      :{" "}
                      <span className="text-[#ce9178]">
                        'Full Stack Developer'
                      </span>,
                    </div>

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        location
                      </span>
                      :{" "}
                      <span className="text-[#ce9178]">
                        'Jamshedpur, India'
                      </span>,
                    </div>

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        skills
                      </span>
                      : [
                    </div>

                    <div className="pl-8">
                      <span className="text-[#ce9178]">
                        'React'
                      </span>
                      ,{" "}
                      <span className="text-[#ce9178]">
                        'Next.js'
                      </span>
                      ,{" "}
                      <span className="text-[#ce9178]">
                        'TypeScript'
                      </span>
                      ,
                    </div>

                    <div className="pl-8">
                      <span className="text-[#ce9178]">
                        'Node.js'
                      </span>
                      ,{" "}
                      <span className="text-[#ce9178]">
                        'MongoDB'
                      </span>
                      ,{" "}
                      <span className="text-[#ce9178]">
                        'PostgreSQL'
                      </span>
                    </div>

                    <div className="pl-4">
                      ],
                    </div>

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        learning
                      </span>
                      : [
                      <span className="text-[#ce9178]">
                        'AI'
                      </span>
                      ,{" "}
                      <span className="text-[#ce9178]">
                        'System Design'
                      </span>
                      ],
                    </div>

                    <div className="pl-4">
                      <span className="text-[#dcdcaa]">
                        buildAwesomeThings
                      </span>
                      () {"{"}
                    </div>

                    <div className="pl-8">
                      <span className="text-[#c586c0]">
                        return
                      </span>{" "}
                      <span className="text-[#569cd6]">
                        true
                      </span>
                      ;
                    </div>

                    <div className="pl-4">
                      {"}"}
                    </div>

                    <div>
                      {"}"};
                    </div>

                    <div className="text-[#858585]">
                      // Developer profile
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
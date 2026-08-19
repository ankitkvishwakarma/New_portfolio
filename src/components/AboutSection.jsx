import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaCoffee,
  FaProjectDiagram,
} from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-cyan-500" />

            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              About Me
            </p>
          </div>

          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Engineering the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              future
            </span>{" "}
            of web.
          </h2>
        </motion.div>


        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">


          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col gap-6 text-lg leading-relaxed text-gray-300"
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


            {/* ==================================================
                STATS
            ================================================== */}

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">

              <div>
                <p className="mb-1 font-display text-3xl font-bold text-white">
                  3+
                </p>

                <p className="text-sm font-medium text-gray-500">
                  Years Experience
                </p>
              </div>


              <div>
                <p className="mb-1 font-display text-3xl font-bold text-white">
                  10+
                </p>

                <p className="text-sm font-medium text-gray-500">
                  Projects Built
                </p>
              </div>


              <div>
                <p className="mb-1 font-display text-3xl font-bold text-white">
                  99%
                </p>

                <p className="text-sm font-medium text-gray-500">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </motion.div>


          {/* ==================================================
              RIGHT CODE CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="group relative w-full"
          >

            {/* Glow */}

            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-2xl transition duration-700 group-hover:opacity-40" />


            {/* Code Window */}

            <div className="relative overflow-hidden rounded-xl border border-[#333] bg-[#1e1e1e] shadow-2xl">


              {/* ==================================================
                  EDITOR HEADER
              ================================================== */}

              <div className="flex items-center justify-between border-b border-[#1e1e1e] bg-[#2d2d2d] px-4 py-2">

                <div className="flex gap-2">

                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />

                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />

                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />

                </div>


                <div className="font-mono text-xs text-[#cccccc]">
                  developer.ts
                </div>


                <div className="w-12" />

              </div>


              {/* ==================================================
                  EDITOR TAB
              ================================================== */}

              <div className="flex bg-[#252526] font-mono text-xs">

                <div className="flex items-center gap-2 border-t border-cyan-400 bg-[#1e1e1e] px-4 py-2 text-cyan-400">

                  <span className="text-[#519aba]">
                    TS
                  </span>

                  developer.ts

                </div>

              </div>


              {/* ==================================================
                  CODE AREA
              ================================================== */}

              <div className="overflow-x-auto p-4 font-mono text-sm leading-relaxed sm:p-6 sm:text-base">

                <div className="flex">


                  {/* ==================================================
                      LINE NUMBERS
                  ================================================== */}

                  <div className="flex select-none flex-col pr-4 text-right text-[#858585]">

                    {Array.from(
                      {
                        length: 14,
                      },
                      (_, index) => (
                        <span key={index}>
                          {index + 1}
                        </span>
                      )
                    )}

                  </div>


                  {/* ==================================================
                      CODE
                  ================================================== */}

                  <div className="text-[#d4d4d4]">


                    {/* Line 1 */}

                    <div>
                      <span className="text-[#c586c0]">
                        const
                      </span>{" "}

                      <span className="text-[#4fc1ff]">
                        developer
                      </span>{" "}

                      <span className="text-[#d4d4d4]">
                        =
                      </span>{" "}

                      <span className="text-[#d4d4d4]">
                        {"{"}
                      </span>
                    </div>


                    {/* Line 2 */}

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        name
                      </span>

                      <span className="text-[#d4d4d4]">
                        :
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'Ankit Vishwakarma'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>
                    </div>


                    {/* Line 3 */}

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        role
                      </span>

                      <span className="text-[#d4d4d4]">
                        :
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'Full Stack Developer'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>
                    </div>


                    {/* Line 4 */}

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        location
                      </span>

                      <span className="text-[#d4d4d4]">
                        :
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'Jamshedpur, India'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>
                    </div>


                    {/* Line 5 */}

                    <div className="pl-4">
                      <span className="text-[#9cdcfe]">
                        skills
                      </span>

                      <span className="text-[#d4d4d4]">
                        :
                      </span>{" "}

                      <span className="text-[#d4d4d4]">
                        [
                      </span>
                    </div>


                    {/* Line 6 */}

                    <div className="pl-8">

                      <span className="text-[#ce9178]">
                        'React'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'Next.js'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'TypeScript'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>

                    </div>


                    {/* Line 7 */}

                    <div className="pl-8">

                      <span className="text-[#ce9178]">
                        'Node.js'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'MongoDB'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'PostgreSQL'
                      </span>

                    </div>


                    {/* Line 8 */}

                    <div className="pl-4">

                      <span className="text-[#d4d4d4]">
                        ],
                      </span>

                    </div>


                    {/* Line 9 */}

                    <div className="pl-4">

                      <span className="text-[#9cdcfe]">
                        learning
                      </span>

                      <span className="text-[#d4d4d4]">
                        :
                      </span>{" "}

                      <span className="text-[#d4d4d4]">
                        [
                      </span>

                      <span className="text-[#ce9178]">
                        'AI'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ,
                      </span>{" "}

                      <span className="text-[#ce9178]">
                        'System Design'
                      </span>

                      <span className="text-[#d4d4d4]">
                        ],
                      </span>

                    </div>


                    {/* Line 10 */}

                    <div className="pl-4">

                      <span className="text-[#dcdcaa]">
                        buildAwesomeThings
                      </span>

                      <span className="text-[#d4d4d4]">
                        ()
                      </span>{" "}

                      <span className="text-[#d4d4d4]">
                        {"{"}
                      </span>

                    </div>


                    {/* Line 11 */}

                    <div className="pl-8">

                      <span className="text-[#c586c0]">
                        return
                      </span>{" "}

                      <span className="text-[#569cd6]">
                        true
                      </span>

                      <span className="text-[#d4d4d4]">
                        ;
                      </span>

                    </div>


                    {/* Line 12 */}

                    <div className="pl-4">

                      <span className="text-[#d4d4d4]">
                        {"}"}
                      </span>

                    </div>


                    {/* Line 13 */}

                    <div>

                      <span className="text-[#d4d4d4]">
                        {"}"}
                      </span>

                      <span className="text-[#d4d4d4]">
                        ;
                      </span>

                    </div>


                    {/* Line 14 */}

                    <div className="text-[#858585]">
                      {/* Developer profile */}
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
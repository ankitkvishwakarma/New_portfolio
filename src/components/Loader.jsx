import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [stage, setStage] = useState("intro");
  const [progress, setProgress] = useState(0);

  /* =========================================================
     FLOATING CODE
  ========================================================= */

  const codeSnippets = [
    {
      text: `const developer = {
  name: "Ankit Vishwakarma",
  role: "Full Stack Developer"
};`,
      position: "left-[4%] top-[18%]",
    },
    {
      text: `function build() {
  return "digital experiences";
}`,
      position: "right-[5%] top-[23%]",
    },
    {
      text: "{ API }",
      position: "left-[8%] top-[68%]",
    },
    {
      text: "< / >",
      position: "right-[9%] top-[70%]",
    },
  ];

  /* =========================================================
     PROGRESS
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        return Math.min(
          prev + Math.floor(Math.random() * 8) + 4,
          100
        );
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     STAGE TIMING
  ========================================================= */

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setStage("name");
    }, 1400);

    const exitTimer = setTimeout(() => {
      setStage("exit");
    }, 3300);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 4000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">

      {/* =====================================================
          MAIN LOADER
      ====================================================== */}

      {stage !== "exit" && (
        <motion.div
          key="loader"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(16px)",
          }}

          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}

          className="
            fixed
            inset-0
            z-[99999]
            overflow-hidden
            bg-[#02040b]
            text-white
          "
        >

          {/* =================================================
              BASE BACKGROUND
          ================================================= */}

          <div className="absolute inset-0 bg-[#02040b]" />

          {/* =================================================
              CYAN GLOW
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.16, 0.08],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              left-1/2
              top-1/2
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-cyan-500/10
              blur-[130px]
              sm:h-[600px]
              sm:w-[600px]
            "
          />

          {/* =================================================
              PURPLE GLOW
          ================================================= */}

          <motion.div
            animate={{
              x: [-80, 80, -80],
              opacity: [0.04, 0.12, 0.04],
            }}

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              right-[-12%]
              top-[5%]
              h-[400px]
              w-[400px]
              rounded-full
              bg-purple-600/10
              blur-[140px]
            "
          />

          {/* =================================================
              PINK GLOW
          ================================================= */}

          <motion.div
            animate={{
              x: [70, -70, 70],
              opacity: [0.03, 0.1, 0.03],
            }}

            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="
              absolute
              bottom-[-15%]
              left-[-10%]
              h-[400px]
              w-[400px]
              rounded-full
              bg-pink-500/10
              blur-[140px]
            "
          />

          {/* =================================================
              GRID
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.035]
            "

            style={{
              backgroundImage:
                `
                linear-gradient(
                  rgba(34,211,238,0.5) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(34,211,238,0.5) 1px,
                  transparent 1px
                )
                `,

              backgroundSize: "48px 48px",
            }}
          />

          {/* =================================================
              PARTICLES
          ================================================= */}

          <div className="absolute inset-0">

            {Array.from({ length: 45 }).map(
              (_, index) => (
                <motion.span
                  key={index}

                  animate={{
                    opacity: [
                      0.08,
                      0.65,
                      0.08,
                    ],

                    scale: [
                      0.7,
                      1.3,
                      0.7,
                    ],
                  }}

                  transition={{
                    duration:
                      2.5 + (index % 4),

                    delay:
                      (index % 7) * 0.25,

                    repeat: Infinity,

                    ease: "easeInOut",
                  }}

                  className="
                    absolute
                    h-[2px]
                    w-[2px]
                    rounded-full
                    bg-cyan-300
                  "

                  style={{
                    left:
                      `${(index * 37) % 100}%`,

                    top:
                      `${(index * 61) % 100}%`,
                  }}
                />
              )
            )}

          </div>

          {/* =================================================
              FLOATING CODE
          ================================================= */}

          {codeSnippets.map(
            (item, index) => (
              <motion.pre
                key={index}

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: [
                    0.05,
                    0.18,
                    0.05,
                  ],

                  y: [
                    0,
                    -8,
                    0,
                  ],
                }}

                transition={{
                  duration:
                    5 + index,

                  repeat: Infinity,

                  ease: "easeInOut",
                }}

                className={`
                  pointer-events-none
                  absolute
                  ${item.position}
                  hidden
                  whitespace-pre-wrap
                  font-mono
                  text-[8px]
                  leading-5
                  text-cyan-400
                  sm:block
                  sm:text-[9px]
                  md:text-[10px]
                `}
              >
                {item.text}
              </motion.pre>
            )
          )}

          {/* =================================================
              CORNER HUD
          ================================================= */}

          <div
            className="
              absolute
              left-6
              top-6
              h-8
              w-8
              border-l
              border-t
              border-cyan-400/30
              sm:left-10
              sm:top-10
            "
          />

          <div
            className="
              absolute
              right-6
              top-6
              h-8
              w-8
              border-r
              border-t
              border-purple-400/30
              sm:right-10
              sm:top-10
            "
          />

          <div
            className="
              absolute
              bottom-6
              left-6
              h-8
              w-8
              border-b
              border-l
              border-cyan-400/30
              sm:bottom-10
              sm:left-10
            "
          />

          <div
            className="
              absolute
              bottom-6
              right-6
              h-8
              w-8
              border-b
              border-r
              border-purple-400/30
              sm:bottom-10
              sm:right-10
            "
          />

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              min-h-screen
              items-center
              justify-center
              px-5
            "
          >

            <div
              className="
                relative
                flex
                w-full
                max-w-[850px]
                flex-col
                items-center
                justify-center
                text-center
              "
            >

              <AnimatePresence mode="wait">

                {/* =================================================
                    INTRO
                ================================================= */}

                {stage === "intro" && (
                  <motion.div
                    key="intro"

                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      y: 20,
                    }}

                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      scale: 1.05,
                      y: -20,
                      filter: "blur(8px)",
                    }}

                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}

                    className="
                      relative
                      flex
                      flex-col
                      items-center
                    "
                  >

                    {/* =================================================
                        OUTER RING
                    ================================================== */}

                    <motion.div
                      animate={{
                        rotate: 360,
                      }}

                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                      }}

                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[260px]
                        w-[260px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border
                        border-cyan-400/15
                        sm:h-[360px]
                        sm:w-[360px]
                        md:h-[440px]
                        md:w-[440px]
                      "
                    >

                      <span
                        className="
                          absolute
                          left-[12%]
                          top-[14%]
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-cyan-400
                          shadow-[0_0_15px_rgba(34,211,238,0.9)]
                        "
                      />

                      <span
                        className="
                          absolute
                          bottom-[14%]
                          right-[12%]
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-purple-400
                          shadow-[0_0_15px_rgba(192,132,252,0.9)]
                        "
                      />

                    </motion.div>

                    {/* =================================================
                        INNER RING
                    ================================================== */}

                    <motion.div
                      animate={{
                        rotate: -360,
                      }}

                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}

                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[210px]
                        w-[210px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        border
                        border-dashed
                        border-purple-400/10
                        sm:h-[300px]
                        sm:w-[300px]
                        md:h-[370px]
                        md:w-[370px]
                      "
                    />

                    {/* =================================================
                        CENTER GLOW
                    ================================================== */}

                    <motion.div
                      animate={{
                        scale: [
                          0.85,
                          1.08,
                          0.85,
                        ],

                        opacity: [
                          0.06,
                          0.16,
                          0.06,
                        ],
                      }}

                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}

                      className="
                        absolute
                        h-[220px]
                        w-[220px]
                        rounded-full
                        bg-cyan-500/10
                        blur-[75px]
                        sm:h-[300px]
                        sm:w-[300px]
                      "
                    />

                    {/* =================================================
                        HELLO
                    ================================================== */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.15,
                        duration: 0.5,
                      }}

                      className="
                        relative
                        z-10
                        text-[9px]
                        font-medium
                        tracking-[0.55em]
                        text-white/40
                        sm:text-xs
                        sm:tracking-[0.7em]
                      "
                    >
                      WELCOME TO MY
                    </motion.p>

                    {/* =================================================
                        PORTFOLIO
                    ================================================== */}

                    <motion.h1
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}

                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}

                      transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}

                      className="
                        relative
                        z-10
                        mt-4
                        bg-gradient-to-r
                        from-cyan-300
                        via-blue-400
                        to-purple-400
                        bg-clip-text
                        text-6xl
                        font-bold
                        tracking-[-0.06em]
                        text-transparent
                        sm:text-8xl
                        md:text-9xl
                      "
                    >
                      Portfolio
                    </motion.h1>

                    {/* =================================================
                        LINE
                    ================================================== */}

                    <motion.div
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}

                      animate={{
                        width: "180px",
                        opacity: 1,
                      }}

                      transition={{
                        delay: 0.75,
                        duration: 0.7,
                      }}

                      className="
                        relative
                        z-10
                        mt-6
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-400
                        to-transparent
                        shadow-[0_0_12px_rgba(34,211,238,0.6)]
                        sm:w-[220px]
                      "
                    />

                    {/* =================================================
                        ROLE
                    ================================================== */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.95,
                      }}

                      className="
                        relative
                        z-10
                        mt-5
                        text-[8px]
                        tracking-[0.45em]
                        text-white/45
                        sm:text-[10px]
                      "
                    >
                      FULL STACK DEVELOPER
                    </motion.p>

                  </motion.div>
                )}

                {/* =====================================================
                    NAME SCREEN
                ====================================================== */}

                {stage === "name" && (
                  <motion.div
                    key="name"

                    initial={{
                      opacity: 0,
                      y: 25,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      scale: 1.05,
                      filter: "blur(10px)",
                    }}

                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}

                    className="
                      relative
                      flex
                      flex-col
                      items-center
                    "
                  >

                    {/* =================================================
                        CODE ICON
                    ================================================== */}

                    <motion.div
                      animate={{
                        rotate: [0, 180, 360],
                      }}

                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}

                      className="
                        mb-6
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-400/25
                        bg-cyan-400/[0.04]
                        font-mono
                        text-sm
                        text-cyan-300
                        shadow-[0_0_30px_rgba(34,211,238,0.12)]
                      "
                    >
                      &lt;/&gt;
                    </motion.div>

                    {/* =================================================
                        HELLO
                    ================================================== */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.15,
                      }}

                      className="
                        text-[9px]
                        tracking-[0.6em]
                        text-white/35
                        sm:text-xs
                      "
                    >
                      HELLO, I&apos;M
                    </motion.p>

                    {/* =================================================
                        NAME
                    ================================================== */}

                    <motion.h2
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.3,
                        duration: 0.7,
                      }}

                      className="
                        mt-4
                        text-5xl
                        font-bold
                        tracking-[-0.05em]
                        text-white
                        sm:text-7xl
                        md:text-8xl
                      "
                    >
                      Ankit
                    </motion.h2>

                    <motion.h2
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        delay: 0.42,
                        duration: 0.7,
                      }}

                      className="
                        bg-gradient-to-r
                        from-cyan-300
                        via-blue-400
                        to-purple-400
                        bg-clip-text
                        text-5xl
                        font-bold
                        tracking-[-0.05em]
                        text-transparent
                        sm:text-7xl
                        md:text-8xl
                      "
                    >
                      Vishwakarma
                    </motion.h2>

                    {/* =================================================
                        ROLE
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}

                      animate={{
                        opacity: 1,
                      }}

                      transition={{
                        delay: 0.8,
                      }}

                      className="
                        mt-5
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span className="text-cyan-400">
                        &lt;
                      </span>

                      <span
                        className="
                          text-[9px]
                          tracking-[0.35em]
                          text-white/55
                          sm:text-xs
                          sm:tracking-[0.5em]
                        "
                      >
                        FULL STACK DEVELOPER
                      </span>

                      <span className="text-purple-400">
                        /&gt;
                      </span>
                    </motion.div>

                    {/* =================================================
                        LOADING
                    ================================================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}

                      animate={{
                        opacity: 1,
                      }}

                      transition={{
                        delay: 1,
                      }}

                      className="mt-8"
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >

                        <div
                          className="
                            h-[2px]
                            w-[160px]
                            overflow-hidden
                            rounded-full
                            bg-white/10
                            sm:w-[230px]
                          "
                        >
                          <motion.div
                            animate={{
                              width: `${progress}%`,
                            }}

                            transition={{
                              duration: 0.15,
                            }}

                            className="
                              h-full
                              rounded-full
                              bg-gradient-to-r
                              from-cyan-400
                              via-blue-500
                              to-purple-400
                              shadow-[0_0_10px_rgba(34,211,238,0.7)]
                            "
                          />
                        </div>

                        <span
                          className="
                            min-w-[30px]
                            text-right
                            font-mono
                            text-[9px]
                            text-cyan-400
                          "
                        >
                          {progress}%
                        </span>

                      </div>

                    </motion.div>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </div>

          {/* =====================================================
              BOTTOM LABEL
          ====================================================== */}

          <div
            className="
              absolute
              bottom-7
              left-1/2
              z-20
              -translate-x-1/2
              whitespace-nowrap
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  h-px
                  w-7
                  bg-gradient-to-r
                  from-transparent
                  to-cyan-400/40
                  sm:w-12
                "
              />

              <span
                className="
                  font-mono
                  text-[7px]
                  tracking-[0.4em]
                  text-white/20
                  sm:text-[8px]
                "
              >
                PERSONAL PORTFOLIO
              </span>

              <span
                className="
                  h-px
                  w-7
                  bg-gradient-to-l
                  from-transparent
                  to-purple-400/40
                  sm:w-12
                "
              />

            </div>
          </div>

          {/* =====================================================
              SCAN LINE
          ====================================================== */}

          <motion.div
            animate={{
              y: ["-100vh", "100vh"],
            }}

            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}

            className="
              pointer-events-none
              absolute
              left-0
              top-0
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-cyan-400/15
              to-transparent
            "
          />

          {/* =====================================================
              VIGNETTE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.72)_100%)]
            "
          />

        </motion.div>
      )}

      {/* =========================================================
          EXIT
      ========================================================== */}

      {stage === "exit" && (
        <motion.div
          key="exit"

          initial={{
            opacity: 0,
            scale: 1,
          }}

          animate={{
            opacity: 1,
            scale: 1.04,
          }}

          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}

          className="
            fixed
            inset-0
            z-[99999]
            bg-[#02040b]
          "
        />
      )}

    </AnimatePresence>
  );
}
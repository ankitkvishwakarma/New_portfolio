import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [stage, setStage] = useState("welcome");
  const [progress, setProgress] = useState(0);

  const codeSnippets = [
    {
      text: `const developer = {
  name: "Ankit Vishwakarma",
  passion: "Code",
  build: "Digital Experiences"
};`,
      position: "left-[5%] top-[20%]",
    },
    {
      text: `function create() {
  return "something amazing";
}`,
      position: "right-[5%] top-[25%]",
    },
    {
      text: "{ }",
      position: "left-[9%] top-[55%]",
    },
    {
      text: "( )",
      position: "right-[10%] top-[55%]",
    },
  ];

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return Math.min(prev + Math.floor(Math.random() * 7) + 3, 100);
      });
    }, 120);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setStage("name");
    }, 3000);

    const exitTimer = setTimeout(() => {
      setStage("exit");
    }, 6200);

    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, 7300);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {stage !== "exit" && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(18px)",
          }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#02040b] text-white"
        >
          {/* =====================================================
              BACKGROUND
          ====================================================== */}

          <div className="absolute inset-0 bg-[#02040b]" />

          {/* Main blue glow */}
          <motion.div
            animate={{
              opacity: [0.08, 0.18, 0.08],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px] sm:h-[650px] sm:w-[650px]"
          />

          {/* Purple glow */}
          <motion.div
            animate={{
              x: [-80, 80, -80],
              opacity: [0.05, 0.14, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[140px]"
          />

          {/* Pink glow */}
          <motion.div
            animate={{
              x: [70, -70, 70],
              opacity: [0.04, 0.12, 0.04],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-15%] left-[-10%] h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[140px]"
          />

          {/* =====================================================
              GRID
          ====================================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,212,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.4) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          {/* =====================================================
              STARS / PARTICLES
          ====================================================== */}

          <div className="absolute inset-0">
            {Array.from({ length: 55 }).map((_, index) => (
              <motion.span
                key={index}
                animate={{
                  opacity: [0.1, 0.8, 0.1],
                  scale: [0.7, 1.4, 0.7],
                }}
                transition={{
                  duration: 2 + (index % 4),
                  delay: (index % 8) * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[2px] w-[2px] rounded-full bg-cyan-300"
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 61) % 100}%`,
                }}
              />
            ))}
          </div>

          {/* =====================================================
              FLOATING CODE
          ====================================================== */}

          {codeSnippets.map((item, index) => (
            <motion.pre
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.08, 0.22, 0.08],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`pointer-events-none absolute ${item.position} hidden whitespace-pre-wrap font-mono text-[8px] leading-5 text-cyan-400 sm:block sm:text-[9px] md:text-[10px]`}
            >
              {item.text}
            </motion.pre>
          ))}

          {/* =====================================================
              TOP CORNER HUD
          ====================================================== */}

          <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-cyan-400/40 sm:left-10 sm:top-10" />

          <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-purple-400/40 sm:right-10 sm:top-10" />

          <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-cyan-400/40 sm:bottom-10 sm:left-10" />

          <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-purple-400/40 sm:bottom-10 sm:right-10" />

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
            <div className="relative flex w-full max-w-[900px] flex-col items-center justify-center text-center">

              <AnimatePresence mode="wait">
                {stage === "welcome" && (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, scale: 0.88, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 1.08,
                      y: -30,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: 1.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex flex-col items-center"
                  >
                    {/* =================================================
                        OUTER HUD CIRCLE
                    ================================================== */}

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 sm:h-[390px] sm:w-[390px] md:h-[470px] md:w-[470px]"
                    >
                      {/* Cyan dot */}
                      <span className="absolute left-[12%] top-[15%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.9)]" />

                      {/* Purple dot */}
                      <span className="absolute bottom-[18%] right-[12%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.9)]" />
                    </motion.div>

                    {/* =================================================
                        INNER HUD CIRCLE
                    ================================================== */}

                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-1/2 top-1/2 h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/10 border-dashed sm:h-[330px] sm:w-[330px] md:h-[400px] md:w-[400px]"
                    />

                    {/* Center glow */}
                    <motion.div
                      animate={{
                        scale: [0.85, 1.1, 0.85],
                        opacity: [0.08, 0.2, 0.08],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-[80px] sm:h-[300px] sm:w-[300px]"
                    />

                    {/* =================================================
                        WELCOME
                    ================================================== */}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.8 }}
                      className="relative z-10"
                    >
                      <h1
                        className="bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-[68px] leading-none text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.25)] sm:text-[100px] md:text-[125px]"
                        style={{
                          fontFamily:
                            "'Brush Script MT', 'Segoe Script', cursive",
                          fontStyle: "italic",
                        }}
                      >
                        Welcome
                      </h1>
                    </motion.div>

                    {/* =================================================
                        SUBTITLE
                    ================================================== */}

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.7 }}
                      className="relative z-10 mt-7 text-[9px] font-medium tracking-[0.5em] text-white/80 sm:text-xs sm:tracking-[0.7em]"
                    >
                      LET&apos;S BUILD SOMETHING AMAZING
                    </motion.p>

                    {/* Gradient line */}
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "190px", opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.9 }}
                      className="relative z-10 mt-7 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-[0_0_15px_rgba(34,211,238,0.6)] sm:w-[230px]"
                    />

                    {/* =================================================
                        DEVELOPER ICON
                    ================================================== */}

                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.45, duration: 0.6 }}
                      className="relative z-10 mt-8 text-3xl font-light text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                    >
                      &lt;/&gt;
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                      className="relative z-10 mt-3 text-[8px] tracking-[0.45em] text-white/45 sm:text-[10px]"
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
                    initial={{ opacity: 0, scale: 0.85, y: 35 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      scale: 1.1,
                      filter: "blur(12px)",
                    }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Symbol */}
                    <motion.div
                      animate={{
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                    >
                      &lt;/&gt;
                    </motion.div>

                    {/* Hello */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-[9px] tracking-[0.6em] text-white/40 sm:text-xs"
                    >
                      HELLO, I&apos;M
                    </motion.p>

                    {/* Name */}
                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.8 }}
                      className="mt-5 text-5xl font-bold tracking-[-0.04em] text-white sm:text-7xl md:text-8xl"
                    >
                      Ankit
                    </motion.h2>

                    <motion.h2
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-5xl font-bold tracking-[-0.04em] text-transparent sm:text-7xl md:text-8xl"
                    >
                      Vishwakarma
                    </motion.h2>

                    {/* Developer title */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="mt-6 flex items-center gap-3"
                    >
                      <span className="text-cyan-400">&lt;</span>

                      <span className="text-[9px] tracking-[0.35em] text-white/60 sm:text-xs sm:tracking-[0.5em]">
                        FULL STACK DEVELOPER
                      </span>

                      <span className="text-purple-400">/&gt;</span>
                    </motion.div>

                    {/* Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "240px" }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="mt-7 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />

                    {/* Loading */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      className="mt-9"
                    >
                      <p className="text-[8px] tracking-[0.5em] text-white/30 sm:text-[9px]">
                        LOADING VIBES
                      </p>

                      <div className="mt-4 flex items-center gap-4">
                        <div className="h-[2px] w-[150px] overflow-hidden bg-white/10 sm:w-[230px]">
                          <motion.div
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.2 }}
                            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                          />
                        </div>

                        <span className="text-[9px] text-cyan-400">
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
              BOTTOM STATUS
          ====================================================== */}

          <div className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-gradient-to-r from-transparent to-cyan-400/50 sm:w-12" />

              <span className="font-mono text-[7px] tracking-[0.4em] text-white/25 sm:text-[8px]">
                PERSONAL PORTFOLIO
              </span>

              <span className="h-px w-7 bg-gradient-to-l from-transparent to-purple-400/50 sm:w-12" />
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
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          />

          {/* =====================================================
              VIGNETTE
          ====================================================== */}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.72)_100%)]" />
        </motion.div>
      )}

      {/* =========================================================
          EXIT SCREEN
      ========================================================== */}

      {stage === "exit" && (
        <motion.div
          key="exit"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[99999] bg-[#02040b]"
        />
      )}
    </AnimatePresence>
  );
}
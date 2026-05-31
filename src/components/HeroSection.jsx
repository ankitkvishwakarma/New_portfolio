import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
  id="home"
  className="
  relative
  min-h-screen
  lg:h-screen
  overflow-hidden
  text-white
  flex
  items-center
  justify-center
  px-4
  sm:px-6
  lg:px-8
  py-10
"
>
            {/* Glow Effects */}
            

            {/* Container */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
        relative
        z-10
        w-[95%]
        max-w-[1280px]
        mx-auto
      "
            >
                <div
                    className="
          w-full
          backdrop-blur-xl
          bg-white/[0.03]
          border
          border-cyan-500/20
          rounded-[24px]
          lg:rounded-[40px]
          px-5
          py-8
          sm:p-8
          lg:p-12
          shadow-[0_0_80px_rgba(0,255,255,0.08)]
        "
                >
                    <div
                        className="
            grid
            grid-cols-1
            lg:grid-cols-[380px_1fr]
            gap-10
            lg:gap-16
            items-center
          "
                    >
                        {/* LEFT */}
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="relative group">
                                <div className="absolute -inset-3 bg-cyan-500/20 blur-3xl rounded-[32px] opacity-50 group-hover:opacity-80 transition-all duration-500" />

                                <img
                                    src="/profile.png"
                                    alt="Profile"
                                    className="
                  relative
                  w-full
                  max-w-[280px]
                  h-[340px]
                  sm:max-w-[320px]
                  sm:h-[380px]
                  lg:max-w-[350px]
                  lg:h-[420px]
                  object-cover
                  rounded-[30px]
                  border
                  border-cyan-500/20
                  shadow-[0_0_50px_rgba(0,255,255,0.15)]
                "
                                />

                                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/20 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Available
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-4 mt-8">
                                {[FaGithub, FaLinkedin, FaTwitter, FaEnvelope].map(
                                    (Icon, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -4,
                                            }}
                                            className="
                      w-14
                      h-14
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      backdrop-blur-md
                    "
                                        >
                                            <Icon size={20} />
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div
                            className="
              w-full
              max-w-[650px]
              mx-auto
              lg:mx-0
              text-center
              lg:text-left
            "
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="
  text-4xl
  sm:text-5xl
  md:text-6xl
  xl:text-7xl
  font-black
  tracking-tight
  "
                            >
                                Ankit
                                <span className="text-cyan-400"> Vishwakarma</span>
                            </motion.h1>

                            {/* Tags */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                                <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                                    Full Stack Developer
                                </span>

                                <span className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-400">
                                    Available For Freelance
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-base md:text-lg mt-8 leading-8 max-w-xl mx-auto lg:mx-0">
                                I build pixel-perfect scalable web applications using modern
                                technologies. Specializing in React.js, Next.js, Node.js and
                                TypeScript.
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                                        10+
                                    </h3>
                                    <p className="text-gray-500">Projects</p>
                                </div>

                                <div className="text-center lg:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                                        3+
                                    </h3>
                                    <p className="text-gray-500">Production ready projcts</p>
                                </div>

                                <div className="text-center lg:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                                        10+
                                    </h3>
                                    <p className="text-gray-500">Technologies</p>
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-10">
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    className="
                  w-full
                  sm:w-auto
                  px-8
                  py-4
                  rounded-2xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  shadow-[0_0_40px_rgba(0,255,255,0.4)]
                "
                                >
                                    Download Resume
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    className="
                  w-full
                  sm:w-auto
                  px-8
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  backdrop-blur-md
                "
                                >
                                    Let's Talk
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
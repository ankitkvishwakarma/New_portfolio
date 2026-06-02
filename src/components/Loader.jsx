import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#020b12] flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px]" />

      <div className="relative text-center">
        {/* Logo */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          Ankit
          <span className="text-cyan-400">.dev</span>
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-[220px] h-[5px] bg-white/10 rounded-full overflow-hidden mx-auto mt-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="h-full bg-cyan-400"
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
          }}
          className="mt-5 text-gray-400 tracking-[4px] text-sm"
        >
          LOADING PORTFOLIO...
        </motion.p>
      </div>
    </div>
  );
}
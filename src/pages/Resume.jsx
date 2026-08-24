import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#030712] text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-5"
        >
          <Link
            to="/"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              text-gray-400
              hover:text-cyan-400
              transition-colors
              duration-300
            "
          >
            <ArrowLeft
              size={14}
              className="
                group-hover:-translate-x-1
                transition-transform
                duration-300
              "
            />
            Back to Portfolio
          </Link>

          <a
            href="/resume/Ankit-Full-Stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-lg
              bg-gradient-to-r
              from-blue-500
              to-purple-500
              text-white
              text-sm
              font-semibold
              shadow-[0_8px_25px_-10px_rgba(59,130,246,0.7)]
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            Open PDF

            <ExternalLink
              size={14}
              className="
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
                transition-transform
                duration-300
              "
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 flex items-center gap-3"
        >
          <div
            className="
              hidden sm:flex
              w-10
              h-10
              rounded-lg
              items-center
              justify-center
              bg-white/[0.04]
              border
              border-white/10
              text-cyan-400
              shrink-0
            "
          >
            <FileText size={18} />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-cyan-400">
              Resume
            </p>

            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Ankit{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                "
              >
                Vishwakarma
              </span>
            </h1>

            <p className="text-xs text-gray-500 mt-0.5">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div
            className="
              absolute
              -inset-2
              bg-gradient-to-r
              from-blue-500/10
              via-purple-500/10
              to-cyan-500/10
              blur-2xl
              rounded-[28px]
              pointer-events-none
            "
          />

          <div
            className="
              relative
              w-full
              h-[calc(100vh-165px)]
              min-h-[600px]
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white
              shadow-[0_20px_60px_-25px_rgba(0,0,0,0.8)]
            "
          >
            <iframe
              src="/resume/Ankit-Full-Stack.pdf#toolbar=0&navpanes=0&view=FitH"
              title="Ankit Vishwakarma Resume"
              className="w-full h-full border-0"
            />
          </div>
        </motion.div>

      </div>
    </main>
  );
}
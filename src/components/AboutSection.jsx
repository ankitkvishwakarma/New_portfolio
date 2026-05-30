import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="
      relative
      py-16
      lg:py-24
      px-4
      sm:px-6
      lg:px-8
      bg-black
      text-white
      overflow-hidden
    "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[180px]" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          text-cyan-400
          uppercase
          tracking-[5px]
          text-sm
          mb-10
        "
        >
          About Me
        </motion.p>

        {/* Content Grid */}
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-[1.15fr_0.85fr]
          gap-10
          lg:gap-16
          items-center
        "
        >
          {/* LEFT */}
          <motion.div
            className="max-w-[560px]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2
              className="
              text-3xl
              md:text-4xl
              lg:text-[42px]
              font-bold
              leading-[1.1]
              mb-6
            "
            >
              Building Modern
              <span className="text-cyan-400">
                {" "}
                Digital Experiences
              </span>
            </h2>

            <p
              className="
              text-base
              lg:text-lg
              text-gray-300
              leading-8
              max-w-[560px]
            "
            >
              I'm a{" "}
              <span className="font-bold text-white">
                Full Stack Engineer
              </span>{" "}
              with hands-on experience building production-grade applications.
              I specialize in creating scalable, performant web applications
              using modern JavaScript technologies.
            </p>

            <p
              className="
              mt-6
              text-base
              lg:text-lg
              text-gray-400
              leading-8
              max-w-[560px]
            "
            >
              My journey in tech started with curiosity about how things work
              on the web. Today, I focus on building{" "}
              <span className="text-white font-semibold">
                full-stack applications
              </span>{" "}
              using React, Node.js, TypeScript, and modern cloud tools.
            </p>

            <p
              className="
              mt-6
              text-base
              lg:text-lg
              text-gray-400
              leading-8
              max-w-[560px]
            "
            >
              Beyond coding, I'm exploring the intersection of{" "}
              <span className="text-white font-semibold">
                AI and Web Development
              </span>
              , constantly learning new technologies and building products that
              solve real-world problems.
            </p>

            <button
              className="
              mt-10
              inline-flex
              items-center
              gap-3
              text-cyan-400
              font-medium
              hover:gap-5
              transition-all
              duration-300
            "
            >
              Read More About Me
              <FaArrowRight />
            </button>
          </motion.div>

          {/* RIGHT CODE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            relative
            w-full
            max-w-[430px]
            mx-auto
            group
          "
          >
            {/* Glow Border */}
            <div
              className="
              absolute
              -inset-1
              rounded-3xl
              bg-gradient-to-r
              from-cyan-500/20
              via-blue-500/20
              to-purple-500/20
              blur-2xl
              opacity-60
              group-hover:opacity-100
              transition-all
              duration-700
            "
            />

            {/* Card */}
            <div
              className="
              relative
              rounded-3xl
              border
              border-white/10
              bg-black/70
              backdrop-blur-2xl
              overflow-hidden
            "
            >
              {/* Mac Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />

                <span className="ml-3 text-gray-400 text-sm">
                  developer.js
                </span>
              </div>

              {/* Code */}
              <pre
                className="
                text-[13px]
                md:text-[14px]
                leading-7
                p-5
                overflow-x-auto
                max-h-[380px]
                text-gray-300
              "
              >
{`const developer = {
  name: "Ankit Vishwakarma",

  role: "Full Stack Developer",

  location: "Jamshedpur, India",

  available: true,

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL"
  ],

  currentlyLearning: [
    "AI",
    "System Design",
    "Cloud"
  ],

  passion: "Building amazing things"
};`}
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
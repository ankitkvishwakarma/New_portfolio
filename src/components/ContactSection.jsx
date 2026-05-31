import { motion } from "framer-motion";
import { MessageSquare, Mail, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#020b12] py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Let's Work Together
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed px-2">
            I'm currently open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl md:rounded-3xl border border-cyan-500/10 bg-[#07141d]/70 backdrop-blur-xl p-6 md:p-8"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 md:mb-8">
              <MessageSquare className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4 md:mb-6">
              Got a project in mind?
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              I'm currently available for freelance work and interesting
              opportunities. Let's discuss how I can help bring your ideas to
              life.
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-[1.02] transition-all text-sm md:text-base"
            >
              Chat on WhatsApp
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* Email Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl md:rounded-3xl border border-cyan-500/10 bg-[#07141d]/70 backdrop-blur-xl p-6 md:p-8"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 md:mb-8">
              <Mail className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Prefer email?
            </h3>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Drop me an email and I will get back to you as soon as possible.
            </p>

            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 rounded-full border border-cyan-500/10 bg-[#041018] text-white font-semibold hover:border-cyan-400/30 transition-all text-sm md:text-base break-all"
            >
              yourmail@gmail.com
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 md:mt-16 text-center">
          <span className="text-gray-500 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">
            Connect With Me
          </span>
        </div>
      </div>
    </section>
  );
}
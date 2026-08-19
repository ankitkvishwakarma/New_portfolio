import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setFormState("loading");
    
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormState("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-cyan-500"></div>
            <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Contact</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">great together</span>.
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a
            href="mailto:ankit.vishwakarma@example.com"
            className="group inline-flex items-center gap-4 w-fit"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1 uppercase tracking-wider">Email Me</p>
              <p className="text-lg text-white font-semibold group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                hello@ankit.dev
                <ArrowUpRight size={16} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </p>
            </div>
          </a>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-500'}`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-xs ml-1 mt-1">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-500'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs ml-1 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject (Optional)</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full bg-[#0a0a0a] border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-500'}`}
                placeholder="Tell me about your project..."
              />
              {errors.message && <p className="text-red-400 text-xs ml-1 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={formState === 'loading' || formState === 'success'}
              className="mt-2 w-full py-4 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {formState === 'idle' || formState === 'error' ? (
                <>Send Message <ArrowUpRight size={18} /></>
              ) : formState === 'loading' ? (
                <><Loader2 size={18} className="animate-spin" /> Sending...</>
              ) : (
                <><CheckCircle size={18} className="text-green-600" /> Message Sent!</>
              )}
            </button>
            
            {formState === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm justify-center mt-2">
                <AlertCircle size={16} /> Failed to send message. Try again later.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
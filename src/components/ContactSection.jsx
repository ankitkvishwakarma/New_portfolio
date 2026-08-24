import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

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

    setTimeout(() => {
      setFormState("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setFormState("idle");
      }, 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        px-4
        sm:px-6
        lg:px-8
        py-10
        lg:py-12
      "
    >
      <div className="w-full max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-9 bg-cyan-500" />

              <p className="text-cyan-400 font-mono text-xs tracking-[0.18em] uppercase">
                Contact
              </p>
            </div>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-display
                font-bold
                text-white
                leading-[1.08]
                mb-5
              "
            >
              Let's build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                great together
              </span>
              .
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-7 mb-7 max-w-lg">
              I'm currently open to new opportunities. Whether you have a
              question, a project idea, or just want to say hi, I'll try my
              best to get back to you.
            </p>

            <a
              href="mailto:hello@ankit.dev"
              className="group inline-flex items-center gap-3 w-fit"
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/[0.04]
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  transition-all
                  duration-300
                  group-hover:bg-cyan-500/10
                  group-hover:text-cyan-300
                "
              >
                <Mail size={19} />
              </div>

              <div>
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-[0.15em] mb-0.5">
                  Email Me
                </p>

                <p
                  className="
                    text-sm
                    sm:text-base
                    text-white
                    font-semibold
                    group-hover:text-cyan-400
                    transition-colors
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  ankit789.en@gmail.com

                  <ArrowUpRight
                    size={14}
                    className="
                      opacity-0
                      -translate-y-1
                      translate-x-1
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      group-hover:translate-x-0
                      transition-all
                    "
                  />
                </p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.08,
            }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-white/[0.025]
              border
              border-white/[0.06]
              p-5
              sm:p-6
            "
          >
            <div
              className="
                absolute
                -top-24
                -right-24
                w-56
                h-56
                bg-cyan-500/10
                blur-[90px]
                rounded-full
                pointer-events-none
              "
            />

            <form
              onSubmit={handleSubmit}
              className="
                relative
                z-10
                flex
                flex-col
                gap-4
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-gray-400 ml-1"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`
                      w-full
                      bg-[#0a0a0a]
                      border
                      rounded-lg
                      px-3.5
                      py-3
                      text-sm
                      text-white
                      placeholder-gray-600
                      focus:outline-none
                      focus:ring-1
                      transition-all
                      ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
                          : "border-white/[0.08] focus:border-cyan-500 focus:ring-cyan-500/30"
                      }
                    `}
                    placeholder="John Doe"
                  />

                  {errors.name && (
                    <p className="text-red-400 text-[10px] ml-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-gray-400 ml-1"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`
                      w-full
                      bg-[#0a0a0a]
                      border
                      rounded-lg
                      px-3.5
                      py-3
                      text-sm
                      text-white
                      placeholder-gray-600
                      focus:outline-none
                      focus:ring-1
                      transition-all
                      ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
                          : "border-white/[0.08] focus:border-cyan-500 focus:ring-cyan-500/30"
                      }
                    `}
                    placeholder="john@example.com"
                  />

                  {errors.email && (
                    <p className="text-red-400 text-[10px] ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-gray-400 ml-1"
                >
                  Subject
                  <span className="text-gray-600 ml-1">
                    (Optional)
                  </span>
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="
                    w-full
                    bg-[#0a0a0a]
                    border
                    border-white/[0.08]
                    rounded-lg
                    px-3.5
                    py-3
                    text-sm
                    text-white
                    placeholder-gray-600
                    focus:outline-none
                    focus:border-cyan-500
                    focus:ring-1
                    focus:ring-cyan-500/30
                    transition-all
                  "
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-gray-400 ml-1"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`
                    w-full
                    bg-[#0a0a0a]
                    border
                    rounded-lg
                    px-3.5
                    py-3
                    text-sm
                    text-white
                    placeholder-gray-600
                    focus:outline-none
                    focus:ring-1
                    resize-none
                    transition-all
                    ${
                      errors.message
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/30"
                        : "border-white/[0.08] focus:border-cyan-500 focus:ring-cyan-500/30"
                    }
                  `}
                  placeholder="Tell me about your project..."
                />

                {errors.message && (
                  <p className="text-red-400 text-[10px] ml-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={
                  formState === "loading" ||
                  formState === "success"
                }
                className="
                  group
                  relative
                  mt-1
                  w-full
                  overflow-hidden
                  py-3
                  rounded-lg
                  bg-white
                  text-black
                  text-sm
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-gray-200
                  transition-colors
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  {formState === "idle" ||
                  formState === "error" ? (
                    <>
                      Send Message
                      <ArrowUpRight size={16} />
                    </>
                  ) : formState === "loading" ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <CheckCircle
                        size={16}
                        className="text-green-600"
                      />
                      Message Sent!
                    </>
                  )}
                </span>

                {(formState === "idle" ||
                  formState === "error") && (
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-100
                      to-transparent
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:translate-x-full
                    "
                  />
                )}
              </button>

              {formState === "error" && (
                <div className="flex items-center justify-center gap-2 text-red-400 text-xs">
                  <AlertCircle size={14} />
                  Failed to send message. Try again later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full mt-8 overflow-hidden">

      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
           <a
  href="#home"
  className="group flex items-center gap-3"
>
  {/* Animated Logo */}
  <div
    className="
      relative
      w-11
      h-11
      rounded-xl
      overflow-hidden
      flex
      items-center
      justify-center
      transition-transform
      duration-300
      group-hover:scale-105
    "
  >
    <video
      src="/animation.webm"
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      className="
        w-full
        h-full
        object-contain
        scale-125
        transition-transform
        duration-300
        group-hover:scale-135
      "
    />
  </div>

  {/* Ankit */}
  <span
    className="
      text-2xl
      font-bold
      italic
      tracking-tight
      bg-gradient-to-r
      from-cyan-400
      via-blue-400
      to-purple-500
      bg-clip-text
      text-transparent
    "
    style={{
      fontFamily: "'Brush Script MT', 'Segoe Script', cursive",
    }}
  >
    Ankit
  </span>
</a>
            <span className="hidden sm:block h-4 w-px bg-white/10" />

            <p className="text-[11px] text-gray-500">
              Building digital experiences.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-9
                h-9
                rounded-lg
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <FaGithub size={16} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-9
                h-9
                rounded-lg
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-cyan-400
                hover:bg-cyan-500/[0.05]
                transition-all
                duration-300
              "
            >
              <FaLinkedin size={16} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="
                w-9
                h-9
                rounded-lg
                flex
                items-center
                justify-center
                text-gray-500
                hover:text-white
                hover:bg-white/[0.05]
                transition-all
                duration-300
              "
            >
              <FaTwitter size={16} />
            </a>

          </div>

          {/* Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="
              group
              flex
              items-center
              gap-2
              text-gray-500
              hover:text-cyan-400
              transition-colors
              duration-300
            "
          >
            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
              "
            >
              Back to top
            </span>

            <span
              className="
                w-8
                h-8
                rounded-lg
                flex
                items-center
                justify-center
                bg-white/[0.03]
                group-hover:bg-cyan-500/10
                transition-colors
                duration-300
              "
            >
              <FaArrowUp
                size={13}
                className="
                  group-hover:-translate-y-0.5
                  transition-transform
                  duration-300
                "
              />
            </span>
          </button>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-6
            pt-4
            border-t
            border-white/[0.04]
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-2
          "
        >
          <p className="text-[10px] text-gray-600">
            © {new Date().getFullYear()} Ankit Vishwakarma
          </p>

          <p
  className="text-[12px] text-gray-500 tracking-wide"
  style={{
    fontFamily: "'Brush Script MT', 'Segoe Script', 'Lucida Handwriting', cursive",
  }}
>
  Designed & built with Ankit
</p>
        </div>

      </div>
    </footer>
  );
}
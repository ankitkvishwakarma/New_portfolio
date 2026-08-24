import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useSpring(cursorX, {
    damping: 28,
    stiffness: 420,
    mass: 0.35,
  });

  const ringY = useSpring(cursorY, {
    damping: 28,
    stiffness: 420,
    mass: 0.35,
  });

  const dotXSmooth = useSpring(dotX, {
    damping: 40,
    stiffness: 900,
    mass: 0.15,
  });

  const dotYSmooth = useSpring(dotY, {
    damping: 40,
    stiffness: 900,
    mass: 0.15,
  });

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(pointer: coarse)"
    ).matches;

    if (isTouchDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 14);
      cursorY.set(e.clientY - 14);

      dotX.set(e.clientX - 2);
      dotY.set(e.clientY - 2);
    };

    const handleEnter = () => {
      setIsVisible(true);
    };

    const handleLeave = () => {
      setIsVisible(false);
    };

    const handlePointerOver = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(Boolean(target));
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handlePointerOver);

    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handlePointerOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-7
          h-7
          rounded-full
          border
          border-cyan-400/70
          pointer-events-none
          z-[9999]
          hidden
          md:block
        "
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isHovering ? 1.45 : 1,
          borderColor: isHovering
            ? "rgba(34,211,238,0.9)"
            : "rgba(34,211,238,0.7)",
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      />

      {/* Inner Dot */}
      <motion.div
        className="
          fixed
          top-0
          left-0
          w-1.5
          h-1.5
          rounded-full
          bg-cyan-400
          pointer-events-none
          z-[10000]
          hidden
          md:block
        "
        style={{
          x: dotXSmooth,
          y: dotYSmooth,
          opacity: isVisible ? 1 : 0,
        }}
      />

      <style>
        {`
          @media (pointer: fine) {
            html,
            body {
              cursor: none;
            }

            a,
            button,
            input,
            textarea,
            select,
            [role="button"] {
              cursor: none !important;
            }
          }
        `}
      </style>
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Visibility toggle (show after scrolling 280px)
      if (scrollTop > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress percentage (0 - 100)
      if (docHeight > 0) {
        const currentProgress = Math.min(
          100,
          Math.max(0, (scrollTop / docHeight) * 100)
        );
        setProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG circular progress calculation
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.9 }}
                transition={{ duration: 0.15 }}
                className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-charcoal text-[11px] font-medium text-white/90 shadow-lg border border-white/10 whitespace-nowrap pointer-events-none"
              >
                Back to top ({Math.round(progress)}%)
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Scroll to top of page"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#121417]/90 text-white backdrop-blur-md border border-white/20 shadow-xl hover:border-gold/60 hover:shadow-gold/20 transition-colors duration-200 group cursor-pointer"
          >
            {/* SVG circular progress ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
              viewBox="0 0 48 48"
            >
              {/* Background Track */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-white/10"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Active Progress */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-gold transition-[stroke-dashoffset] duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Up Arrow Icon with hover animation */}
            <svg
              className="w-5 h-5 text-white/90 group-hover:text-gold transition-all duration-200 transform group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

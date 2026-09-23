"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroImageBackdropProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  overlayGradient?: string;
}

export default function HeroImageBackdrop({
  src,
  alt,
  priority = true,
  className = "object-cover object-center sm:object-[center_35%]",
  overlayGradient = "from-[#1B2932]/95 via-[#23333E]/80 via-45% md:via-40% to-transparent",
}: HeroImageBackdropProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Animated Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full"
      >
        <div className="w-full h-full animate-ken-burns">
          <Image
            src={src}
            alt={alt}
            fill
            className={`${className} opacity-85`}
            priority={priority}
            quality={90}
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Dynamic Gradient Overlay for Text Readability */}
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayGradient}`} />

      {/* Atmospheric Top & Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B2932]/60 via-transparent to-black/30" />

      {/* Subtle Ambient Light Glow Layer */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-pulse-glow" />
    </div>
  );
}

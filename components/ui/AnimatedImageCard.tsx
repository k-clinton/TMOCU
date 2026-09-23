"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface BadgeConfig {
  text: string;
  dotColor?: string; // e.g. "bg-emerald-400", "bg-gold", "bg-sky-400"
  pulse?: boolean;
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  icon?: React.ReactNode;
}

interface AnimatedImageCardProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  badge?: BadgeConfig;
  secondaryBadge?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  enableTilt?: boolean;
}

export default function AnimatedImageCard({
  src,
  alt,
  aspectRatio = "aspect-[4/3] sm:aspect-[16/11]",
  badge,
  secondaryBadge,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  enableTilt = true,
}: AnimatedImageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle interactive 3D Tilt on Hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const getBadgePosition = (pos: BadgeConfig["position"] = "bottom-left") => {
    switch (pos) {
      case "bottom-right":
        return "bottom-5 right-5 sm:bottom-6 sm:right-6";
      case "top-left":
        return "top-5 left-5 sm:top-6 sm:left-6";
      case "top-right":
        return "top-5 right-5 sm:top-6 sm:right-6";
      case "bottom-left":
      default:
        return "bottom-5 left-5 sm:bottom-6 sm:left-6";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Outer Glow Halo on Hover */}
      <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-gold/20 via-white/10 to-charcoal/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />

      {/* Main Image Container */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className={`group relative rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl border border-black/5 bg-[#1B2932] transition-all duration-500 ${aspectRatio}`}
      >
        {/* Next.js Image with Hover Zoom & Transition */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          sizes={sizes}
          priority={priority}
          quality={90}
        />

        {/* Subtle Atmospheric Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

        {/* Ambient Light Gleam / Sheen Sweep on Hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-0 -inset-full w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-sheen" />
        </div>

        {/* Floating Primary Glassmorphism Status Badge */}
        {badge && (
          <div
            className={`absolute z-10 ${getBadgePosition(
              badge.position
            )} animate-float`}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/65 hover:bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/25 shadow-lg transition-all duration-300">
              {badge.icon ? (
                badge.icon
              ) : (
                <span
                  className={`w-2 h-2 rounded-full ${
                    badge.dotColor || "bg-gold"
                  } ${badge.pulse !== false ? "animate-pulse" : ""}`}
                />
              )}
              <span className="tracking-wide text-white/95">{badge.text}</span>
            </div>
          </div>
        )}

        {/* Optional Secondary Top-Right Floating Pill */}
        {secondaryBadge && (
          <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-charcoal text-[11px] font-bold uppercase tracking-wider shadow-md border border-black/5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {secondaryBadge}
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

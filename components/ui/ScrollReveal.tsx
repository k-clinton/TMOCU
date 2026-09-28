"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "fade";

interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  viewportMargin?: string;
  className?: string;
  as?: React.ElementType;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.65,
  distance = 28,
  once = true,
  viewportMargin = "-35px",
  className = "",
  ...props
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (animation) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case "scale-up":
        return {
          hidden: { opacity: 0, scale: 0.94, y: distance * 0.5 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case "fade":
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  viewportMargin?: string;
}

export function ScrollRevealStagger({
  children,
  staggerDelay = 0.08,
  className = "",
  once = true,
  viewportMargin = "-35px",
}: ScrollRevealStaggerProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.04,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealItemProps {
  children: React.ReactNode;
  animation?: AnimationType;
  distance?: number;
  duration?: number;
  className?: string;
}

export function ScrollRevealItem({
  children,
  animation = "fade-up",
  distance = 24,
  duration = 0.6,
  className = "",
}: ScrollRevealItemProps) {
  const itemVariants = {
    hidden:
      animation === "scale-up"
        ? { opacity: 0, scale: 0.95, y: 16 }
        : animation === "fade-left"
        ? { opacity: 0, x: -distance }
        : animation === "fade-right"
        ? { opacity: 0, x: distance }
        : { opacity: 0, y: distance },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

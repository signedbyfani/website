"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // Slightly slower stagger for a lazy feel
      delayChildren: 0.3, // Increased delay for lazy animation effect
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40, // Increased initial y-value for a more pronounced slide-in effect
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween", // Tween for a smoother lazy feel
      ease: "easeOut",
      duration: 0.8, // Slower animation for laziness
    },
  },
};

function Container({ children, className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </motion.div>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return <motion.div variants={item}>{children}</motion.div>;
}

export { Container, Item };
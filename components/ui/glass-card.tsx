"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

// Glassmorphism Card Component
export const GlassCard = ({
  children,
  className = "",
  hover = true,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  [key: string]: any;
}) => {
  const { isDark } = useTheme();

  const baseClasses = isDark
    ? "bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/20"
    : "bg-white/[0.25] border border-white/[0.18] backdrop-blur-xl shadow-2xl shadow-black/[0.08]";

  const hoverClasses = hover
    ? isDark
      ? "hover:bg-white/[0.12] hover:border-white/[0.18] hover:shadow-3xl hover:shadow-purple-500/10"
      : "hover:bg-white/[0.35] hover:border-white/[0.25] hover:shadow-3xl hover:shadow-purple-500/15"
    : "";

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -2, scale: 1.01 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

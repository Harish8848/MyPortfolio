"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { useTheme } from "@/hooks/use-theme";

export const Footer = () => {
  const { isDark } = useTheme();

  const themeClasses = {
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    textAccent: isDark ? "text-purple-300" : "text-purple-600",
  };

  return (
    <footer className="py-12 relative">
      <GlassCard className="mx-4 rounded-2xl" hover={false}>
        <div className="container mx-auto px-6 py-8 text-center">
          <p className={`${themeClasses.textSecondary} mb-6`}>
            © 2024 Harish Bhatt. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -2 }}
                href={social.href}
                className="block"
              >
                <GlassCard className="p-3 rounded-full" hover={false}>
                  <social.icon
                    className={`w-6 h-6 ${themeClasses.textSecondary} hover:${themeClasses.textAccent} transition-colors`}
                  />
                </GlassCard>
              </motion.a>
            ))}
          </div>
        </div>
      </GlassCard>
    </footer>
  );
};

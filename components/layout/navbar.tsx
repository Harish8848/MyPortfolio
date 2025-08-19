"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X, Sun, Moon } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { useTheme } from "@/hooks/use-theme";
import { NavbarProps } from "@/types";

export const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  toggleTheme,
  scrollToSection,
  heroRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: NavbarProps) => {
  const { isDark } = useTheme();

  const themeClasses = {
    text: isDark ? "text-white" : "text-gray-900",
    textAccent: isDark ? "text-purple-300" : "text-purple-600",
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      <GlassCard className="mx-4 mt-4 rounded-2xl" hover={false}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${themeClasses.text}`}
          >
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              HB
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { name: "Home", ref: heroRef },
              { name: "About", ref: aboutRef },
              { name: "Skills", ref: skillsRef },
              { name: "Projects", ref: projectsRef },
              { name: "Contact", ref: contactRef },
            ].map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.ref)}
                className={`${themeClasses.text} hover:${themeClasses.textAccent} transition-colors font-medium`}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Theme Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="relative"
            >
              <GlassCard className="p-3 rounded-full" hover={false}>
                <motion.div
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-purple-600" />
                  )}
                </motion.div>
              </GlassCard>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
            >
              <GlassCard className="p-2 rounded-full" hover={false}>
                {isDark ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-purple-600" />
                )}
              </GlassCard>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <GlassCard className="p-2 rounded-full" hover={false}>
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${themeClasses.text}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${themeClasses.text}`} />
                )}
              </GlassCard>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <GlassCard className="mx-4 mt-2 rounded-xl" hover={false}>
              <div className="px-6 py-4 flex flex-col space-y-4">
                {[
                  { name: "Home", ref: heroRef },
                  { name: "About", ref: aboutRef },
                  { name: "Skills", ref: skillsRef },
                  { name: "Projects", ref: projectsRef },
                  { name: "Contact", ref: contactRef },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)}
                    className={`${themeClasses.text} hover:${themeClasses.textAccent} transition-colors text-left font-medium`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        )}
      </GlassCard>
    </motion.nav>
  );
};

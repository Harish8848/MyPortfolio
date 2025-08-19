"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { values } from "@/lib/data";
import { useTheme } from "@/hooks/use-theme";

// Glassmorphism Card Component
const GlassCard = ({
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

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const { isDark } = useTheme();

  const themeClasses = {
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    textAccent: isDark ? "text-purple-300" : "text-purple-600",
  };

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${themeClasses.text}`}
          >
            About <span className={themeClasses.textAccent}>Me</span>
          </h2>
          <p
            className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}
          >
            A passionate developer creating digital experiences that matter.{" "}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main About Content */}
          <GlassCard className="p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3
                  className={`text-2xl font-semibold mb-4 ${themeClasses.text}`}
                >
                  Frontend Developer & Problem Solver
                </h3>
                <p
                  className={`${themeClasses.textSecondary} leading-relaxed mb-6`}
                >
                  A frontend developer who loves creating simple and
                  user-friendly solutions. I work with modern web technologies
                  to build scalable applications that give users a great
                  experience.
                </p>
                <p
                  className={`${themeClasses.textSecondary} leading-relaxed mb-6`}
                >
                  I combine technical skills with creativity to make sure every
                  project goes beyond expectations. I believe in continuous
                  learning and keeping up with industry trends.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Coffee className={`w-4 h-4 ${themeClasses.textAccent}`} />
                  <span className={themeClasses.textSecondary}>
                    Fueled by coffee and driven by curiosity
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-3 pt-4 ">
                  <div className="flex justify-between">
                    <span className={themeClasses.text}>Location</span>
                    <span className={themeClasses.textAccent}>Nepal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={themeClasses.text}>Availability</span>
                    <span className="text-green-500">Open to Work</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={themeClasses.text}>Focus</span>
                    <span className={themeClasses.textAccent}>
                      Frontend Development
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl font-semibold text-center mb-8 ${themeClasses.text}`}
            >
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="p-6 rounded-2xl text-center h-full">
                    {React.createElement(value.icon, {
                      className: `w-8 h-8 ${themeClasses.textAccent} mx-auto mb-4`,
                    })}
                    <h4 className={`font-semibold mb-2 ${themeClasses.text}`}>
                      {value.title}
                    </h4>
                    <p
                      className={`text-sm ${themeClasses.textSecondary} leading-relaxed`}
                    >
                      {value.description}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;

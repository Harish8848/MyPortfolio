"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { skillCategories } from "@/lib/data";
import { SkillsSectionProps } from "@/types";
import { useTheme } from "@/hooks/use-theme";

const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ skills }, ref) => {
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
              Technical{" "}
              <span className={themeClasses.textAccent}>Expertise</span>
            </h2>
            <p
              className={`${themeClasses.textSecondary} text-lg max-w-2xl mx-auto`}
            >
              A comprehensive overview of my technical skills and proficiency
              levels across different domains
            </p>
          </motion.div>

          <div className="space-y-16 max-w-7xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-4 ${themeClasses.text}`}
                  >
                    {category.name}
                  </h3>
                  <div
                    className={`w-24 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}
                  />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <GlassCard className="p-6 rounded-2xl group">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </span>
                            <h4
                              className={`text-lg font-semibold ${themeClasses.text}`}
                            >
                              {skill.name}
                            </h4>
                          </div>
                          <span
                            className={`text-sm font-medium ${themeClasses.textAccent}`}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative">
                          <div
                            className={`w-full h-3 rounded-full ${
                              isDark ? "bg-gray-700" : "bg-gray-200"
                            }`}
                          >
                            <motion.div
                              className={`h-3 rounded-full bg-gradient-to-r ${category.color} shadow-lg`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.2,
                                delay: skillIndex * 0.1 + 0.5,
                                ease: "easeOut",
                              }}
                              viewport={{ once: true }}
                            />
                          </div>

                          <div className="flex justify-between mt-2 text-xs">
                            <span className={themeClasses.textSecondary}>
                              Beginner
                            </span>
                            <span className={themeClasses.textSecondary}>
                              Expert
                            </span>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;

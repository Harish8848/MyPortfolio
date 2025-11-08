import React, { forwardRef, useEffect } from "react";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { GlassCard } from "@/components/ui/glass-card";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { Project } from "@/types";

const ProjectsSection = forwardRef<HTMLElement, { projects: Project[] }>(
  ({ projects }, ref) => {
    const { isDark } = useTheme();
    const isInView = useInView(ref as any, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
      if (isInView) {
        controls.start("visible");
      }
    }, [isInView, controls]);

    const themeClasses = {
      text: isDark ? "text-white" : "text-gray-900",
      textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.1,
          ease: easeInOut,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 50, rotateX: -15 },
      visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          duration: 0.8,
          ease: easeInOut,
        },
      },
    };

    return (
      <motion.section
        ref={ref}
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="container mx-auto px-4 mt-8">
          <motion.div variants={itemVariants}>
            <motion.h2
              className={`text-4xl md:text-5xl font-bold ${themeClasses.text} text-center mb-16`}
              variants={itemVariants}
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GlassCard className="overflow-hidden rounded-2xl group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3
                        className={`${themeClasses.text} text-xl font-semibold mb-2`}
                      >
                        {project.title}
                      </h3>
                      <p className={`${themeClasses.textSecondary} mb-4`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech: string) => (
                          <GlassCard
                            key={tech}
                            className="px-3 py-1 rounded-full"
                            hover={false}
                          >
                            <Badge
                              variant="secondary"
                              className={`${
                                isDark
                                  ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300"
                                  : "bg-gradient-to-r from-purple-100/50 to-blue-100/50 text-purple-700"
                              } border-0 text-xs`}
                            >
                              {tech}
                            </Badge>
                          </GlassCard>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GlassCard
                              className="rounded-full overflow-hidden"
                              hover={false}
                            >
                              <Button
                                size="sm"
                                variant="outline"
                                className={`border-2 ${
                                  isDark
                                    ? "border-purple-400 text-purple-300 hover:bg-purple-500"
                                    : "border-purple-500 text-purple-600 hover:bg-purple-500"
                                } hover:text-white bg-transparent`}
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </Button>
                            </GlassCard>
                          </a>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GlassCard
                              className="rounded-full overflow-hidden"
                              hover={false}
                            >
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </Button>
                            </GlassCard>
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  }
);

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;

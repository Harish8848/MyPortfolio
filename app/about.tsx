"use client"

import React, { forwardRef, useEffect } from "react"
import { motion, useInView, useAnimation, easeInOut } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import { GlassCard, useTheme } from "@/components/theme-provider"

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const { isDark } = useTheme()
  const isInView = useInView(ref as any, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const themeClasses = {
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      className="py-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto px-4">
        <motion.div className="max-w-6xl mx-auto" variants={itemVariants}>
          <motion.h2
            className={`text-4xl md:text-5xl font-bold ${themeClasses.text} text-center mb-16`}
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <GlassCard className="p-8 rounded-3xl">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <Code className="w-24 h-24 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <GlassCard className="p-6 rounded-2xl">
                <motion.p className={`${themeClasses.textSecondary} text-lg leading-relaxed`} variants={itemVariants}>
                 Frontend Developer from DCM-1, Kanchanpur,Nepal with a love for creating beautiful
                  and functional web experiences. I specialize in modern web technologies and have a keen eye for design
                  and user experience.
                </motion.p>
              </GlassCard>

              <GlassCard className="p-6 rounded-2xl">
                <motion.p className={`${themeClasses.textSecondary} text-lg leading-relaxed`} variants={itemVariants}>
                  With expertise in React, Next.js, and modern CSS frameworks, I bring ideas to life through clean code
                  and innovative solutions. I&apos;m always eager to learn new technologies and take on challenging projects.
                </motion.p>
              </GlassCard>

              <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
                {["Problem Solver", "Creative Thinker", "Team Player"].map((badge, index) => (
                  <motion.div
                    key={badge}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="px-4 py-2 rounded-full" hover={false}>
                      <Badge
                        variant="secondary"
                        className={`${isDark ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300" : "bg-gradient-to-r from-purple-100/50 to-blue-100/50 text-purple-700"} border-0`}
                      >
                        {badge}
                      </Badge>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
})

AboutSection.displayName = "AboutSection"

export default AboutSection

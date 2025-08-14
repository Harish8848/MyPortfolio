import React, { forwardRef, useEffect } from "react"
import { motion, useInView, useAnimation, easeInOut } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Palette, Code, Smartphone, Globe } from "lucide-react"
import { GlassCard, useTheme } from "@/components/theme-provider"

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const SkillsSection = forwardRef<HTMLElement, { skills: Skill[] }>(({ skills }, ref) => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: easeInOut,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easeInOut,
      },
    },
  }

  return (
    <motion.section ref={ref} className="py-20" variants={containerVariants} initial="hidden" animate={controls}>
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants}>
          <motion.h2
            className={`text-4xl md:text-5xl font-bold ${themeClasses.text} text-center mb-16`}
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GlassCard className="p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`${isDark ? "text-purple-400" : "text-purple-600"}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className={`${themeClasses.text} font-semibold text-lg`}>{skill.name}</h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className={themeClasses.textSecondary}>Proficiency</span>
                      <span className={isDark ? "text-purple-300" : "text-purple-600"}>{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <GlassCard className="h-3 rounded-full overflow-hidden" hover={false}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: easeInOut }}
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                        </motion.div>
                      </GlassCard>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
})

export default SkillsSection

"use client"

import type React from "react"
import { createContext, useContext } from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, useAnimation, easeInOut } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  Download,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"
import AboutSection from "./about"
import SkillsSection from "./skills"
import ProjectsSection from "./projects"
import ContactSection from "./contact"

const skills = [
    { name: "React", level: 90, icon: <Code className="w-6 h-6" /> },
    { name: "Next.js", level: 85, icon: <Globe className="w-6 h-6" /> },
    { name: "TypeScript", level: 80, icon: <Code className="w-6 h-6" /> },
    { name: "Tailwind CSS", level: 95, icon: <Palette className="w-6 h-6" /> },
    { name: "JavaScript", level: 90, icon: <Code className="w-6 h-6" /> },
    { name: "Responsive Design", level: 95, icon: <Smartphone className="w-6 h-6" /> },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe integration",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "API Integration", "Chart.js", "CSS3"],
      github: "#",
      live: "#",
    },
  ]

// Theme Context
const ThemeContext = createContext<{
  isDark: boolean
  toggleTheme: () => void
}>({
  isDark: false,
  toggleTheme: () => {},
})

const useTheme = () => useContext(ThemeContext)

// Typewriter Effect Component
const TypewriterText = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  onComplete,
}: {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(0)
      }, delay)
      return () => clearTimeout(delayTimeout)
    }
  }, [delay])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true)
      onComplete?.()
    }
  }, [currentIndex, text, speed, isComplete, onComplete])

  return (
    <span className={className}>
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

// Glassmorphism Card Component
const GlassCard = ({
  children,
  className = "",
  hover = true,
  ...props
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
  [key: string]: any
}) => {
  const { isDark } = useTheme()

  const baseClasses = isDark
    ? "bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/20"
    : "bg-white/[0.25] border border-white/[0.18] backdrop-blur-xl shadow-2xl shadow-black/[0.08]"

  const hoverClasses = hover
    ? isDark
      ? "hover:bg-white/[0.12] hover:border-white/[0.18] hover:shadow-3xl hover:shadow-purple-500/10"
      : "hover:bg-white/[0.35] hover:border-white/[0.25] hover:shadow-3xl hover:shadow-purple-500/15"
    : ""

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -2, scale: 1.01 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Floating Glass Orbs Component
const FloatingOrbs = () => {
  const { isDark } = useTheme()

  return (
    <>
      {/* Large floating orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`absolute top-20 left-10 w-32 h-32 rounded-full ${
          isDark
            ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20"
            : "bg-gradient-to-br from-purple-300/30 to-blue-300/30"
        } backdrop-blur-xl border ${isDark ? "border-white/10" : "border-white/20"} shadow-2xl`}
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`absolute top-1/3 right-20 w-24 h-24 rounded-full ${
          isDark
            ? "bg-gradient-to-br from-pink-500/20 to-purple-500/20"
            : "bg-gradient-to-br from-pink-300/30 to-purple-300/30"
        } backdrop-blur-xl border ${isDark ? "border-white/10" : "border-white/20"} shadow-2xl`}
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full ${
          isDark
            ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
            : "bg-gradient-to-br from-blue-300/30 to-cyan-300/30"
        } backdrop-blur-xl border ${isDark ? "border-white/10" : "border-white/20"} shadow-2xl`}
      />

      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -30, 0],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={`absolute bottom-20 right-10 w-28 h-28 rounded-full ${
          isDark
            ? "bg-gradient-to-br from-green-500/20 to-teal-500/20"
            : "bg-gradient-to-br from-green-300/30 to-teal-300/30"
        } backdrop-blur-xl border ${isDark ? "border-white/10" : "border-white/20"} shadow-2xl`}
      />
    </>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false) // Default to light theme
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showLocation, setShowLocation] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Background color animation based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    isDark
      ? ["#0f0f23", "#1a1a3e", "#2d1b69", "#1a1a3e", "#0f0f23", "#050507"]
      : ["#f0f4ff", "#e6f0ff", "#dde7ff", "#e6f0ff", "#f0f4ff", "#f8faff"],
  )

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  // Theme classes
  const themeClasses = {
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    textAccent: isDark ? "text-purple-300" : "text-purple-600",
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
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <motion.div
        className="min-h-screen transition-colors duration-500 relative overflow-hidden"
        style={{ backgroundColor }}
      >
        {/* Floating Glass Orbs Background */}
        <FloatingOrbs />

        {/* Navigation */}
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 w-full z-50">
          <GlassCard className="mx-4 mt-4 rounded-2xl" hover={false}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <motion.div whileHover={{ scale: 1.05 }} className={`text-2xl font-bold ${themeClasses.text}`}>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">HB</span>
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
                    <motion.div animate={{ rotate: isDark ? 180 : 0 }} transition={{ duration: 0.5 }}>
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
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={toggleTheme}>
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
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden">
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

        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10" />
          </motion.div>

          <div className="container mx-auto px-4 text-center z-10 relative">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <GlassCard className="w-40 h-40 mx-auto rounded-full p-2" hover={false}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <span className="text-5xl font-bold text-white relative z-10">HB</span>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-5xl md:text-7xl font-bold ${themeClasses.text} mb-4 min-h-[1.2em]`}
              >
                <TypewriterText text="Dev.Harish" speed={150} delay={800} onComplete={() => setShowSubtitle(true)} />
              </motion.h1>

              {showSubtitle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard className="inline-block px-6 py-3 rounded-full mb-4" hover={false}>
                    <p className={`text-xl md:text-2xl ${themeClasses.textAccent} font-medium`}>
                      <TypewriterText
                        text="Developer"
                        speed={100}
                        delay={200}
                        onComplete={() => setShowLocation(true)}
                      />
                    </p>
                  </GlassCard>
                </motion.div>
              )}

              {showLocation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <GlassCard className="inline-block px-4 py-2 rounded-full" hover={false}>
                    <p className={`text-lg ${themeClasses.textSecondary} flex items-center gap-2`}>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      >
                        <MapPin className="w-5 h-5" />
                      </motion.span>
                      <TypewriterText
                        text="Mahendranagar, Nepal"
                        speed={80}
                        delay={300}
                        onComplete={() => setShowButtons(true)}
                      />
                    </p>
                  </GlassCard>
                </motion.div>
              )}

              {showButtons && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <GlassCard className="rounded-full overflow-hidden" hover={false}>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white font-medium px-8"
                        onClick={() => scrollToSection(projectsRef)}
                      >
                        View My Work
                      </Button>
                    </GlassCard>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <GlassCard className="rounded-full overflow-hidden" hover={false}>
                      <Button
                        size="lg"
                        variant="outline"
                        className={`border-2 ${isDark ? "border-purple-400 text-purple-300 hover:bg-purple-500" : "border-purple-500 text-purple-600 hover:bg-purple-500"} hover:text-white bg-transparent font-medium px-8`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </Button>
                    </GlassCard>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection ref={aboutRef} />

        {/* Skills Section */}
        <SkillsSection ref={skillsRef} skills={skills} />

        {/* Projects Section */}
        <ProjectsSection ref={projectsRef} projects={projects} />

        {/* Contact Section */}
        <ContactSection ref={contactRef} />

        {/* Footer */}
        <footer className="py-12 relative">
          <GlassCard className="mx-4 rounded-2xl" hover={false}>
            <div className="container mx-auto px-6 py-8 text-center">
              <p className={`${themeClasses.textSecondary} mb-6`}>© 2024 Harish Bhatt. All rights reserved.</p>
              <div className="flex justify-center space-x-6">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <motion.a key={index} whileHover={{ scale: 1.2, y: -2 }} href={social.href} className="block">
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
      </motion.div>
    </ThemeContext.Provider>
  )
}
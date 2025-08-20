"use client";

import type React from "react";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";

import { Code, Download } from "lucide-react";
import Image from "next/image";
import AboutSection from "./about";
import SkillsSection from "./skills";
import ProjectsSection from "./projects";
import ContactSection from "./contact";
import { projects } from "@/lib/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { GlassCard } from "@/components/ui/glass-card";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // Default to light theme
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const aboutRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const skillsRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const projectsRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
  const contactRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Background color animation based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    isDark
      ? ["#0f0f23", "#1a1a3e", "#2d1b69", "#1a1a3e", "#0f0f23", "#050507"]
      : ["#f0f4ff", "#e6f0ff", "#dde7ff", "#e6f0ff", "#f0f4ff", "#f8faff"]
  );

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Theme classes
  const themeClasses = {
    text: isDark ? "text-white" : "text-gray-900",
    textSecondary: isDark ? "text-gray-300" : "text-gray-600",
    textAccent: isDark ? "text-purple-300" : "text-purple-600",
  };

  return (
    <ThemeProvider value={{ isDark, toggleTheme }}>
      <motion.div
        className="min-h-screen transition-colors duration-500 relative overflow-hidden"
        style={{ backgroundColor }}
      >
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleTheme={toggleTheme}
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10" />
          </motion.div>

          <div className="container mx-auto px-4 text-center z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="mb-8 flex justify-center"
              >
                <GlassCard className="rounded-full p-2 " hover={false}>
                  <Image
                    src="/pp.jpeg"
                    alt="Harish Bhatt - Frontend Developer"
                    width={150}
                    height={150}
                    className="rounded-full object-cover w-40 h-40"
                  />
                </GlassCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6"
              >
                <motion.h1
                  className={`text-5xl md:text-7xl font-bold mb-4 ${themeClasses.text} leading-tight`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Harish Bhatt
                  </motion.span>
                </motion.h1>
                <div className="text-2xl font-bold">
                  <motion.p
                    className={`text-2xl md:text-3xl font-light ${themeClasses.textSecondary} mb-2`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    I am a{" "}
                    <span className="text-blue-600">
                      <Typewriter
                        words={["Programmer", "Developer", "Designer"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                      />
                    </span>
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mb-8"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Badge
                    variant="secondary"
                    className={`text-base px-6 py-2 mb-6 font-medium ${
                      isDark
                        ? "bg-slate-500/20 text-slate-300 border-slate-400/30"
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    UI Designing Specialist
                  </Badge>
                </motion.div>

                <motion.p
                  className={`text-xl md:text-2xl ${themeClasses.textSecondary} max-w-4xl mx-auto leading-relaxed font-light`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  Frontend developer eager to create modern web applications
                  using React and Next.js. Focused on learning and building
                  user-friendly, fast, and secure digital solutions.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GlassCard
                    className="rounded-full overflow-hidden"
                    hover={false}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 text-white font-medium px-8"
                      onClick={() => scrollToSection(contactRef)}
                    >
                      Get in touch
                    </Button>
                  </GlassCard>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GlassCard
                    className="rounded-full overflow-hidden"
                    hover={false}
                  >
                    <a href="/Resume.pdf" download>
                      <Button
                        size="lg"
                        variant="outline"
                        className={`border-2 ${
                          isDark
                            ? "border-purple-400 text-purple-300 hover:bg-purple-500"
                            : "border-purple-500 text-purple-600 hover:bg-purple-500"
                        } hover:text-white bg-transparent font-medium px-8`}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </Button>
                    </a>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <AboutSection ref={aboutRef} />
        <SkillsSection ref={skillsRef} />
        <ProjectsSection ref={projectsRef} projects={projects} />
        <ContactSection ref={contactRef} />
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}

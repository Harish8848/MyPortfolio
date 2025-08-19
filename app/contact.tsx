import React, { forwardRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { GlassCard } from "@/components/ui/glass-card";
import { contactInfo, socialLinks } from "@/lib/data";

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={itemVariants}
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-8`}
            variants={itemVariants}
          >
            Let&apos;s Work Together
          </motion.h2>

          <GlassCard className="p-8 rounded-3xl mb-12">
            <motion.p
              className={`text-xl ${themeClasses.textSecondary}`}
              variants={itemVariants}
            >
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how we can bring your ideas to life!
            </motion.p>
          </GlassCard>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((contact) => (
              <motion.div
                key={contact.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center"
              >
                <GlassCard className="p-6 rounded-2xl">
                  <motion.a
                    href={contact.href}
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.a>
                  <h3 className={`${themeClasses.text} font-semibold mb-2`}>
                    {contact.title}
                  </h3>
                  <p className={themeClasses.textSecondary}>{contact.info}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>
    </motion.section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;

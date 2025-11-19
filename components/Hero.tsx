import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import TechOrbit from './TechOrbit';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center pt-16 -mt-16">
      <motion.div
        className="max-w-4xl mx-auto px-4 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="block text-[#e2e8f0]">Robel Shemeles Alemayhu</span>
          <span className="block bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text mt-2">
            AI & Full-Stack Developer
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          From robust web applications to intelligent automation, I build efficient, scalable, and AI-driven solutions that solve real-world problems.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xs sm:max-w-none"
        >
          <a href="#contact" className="inline-block bg-[#22007c] text-[#e2e8f0] font-semibold px-6 py-3 rounded-lg hover:bg-[#0d00a4] hover:text-white transition-all">
            Get In Touch
          </a>
          <a
            href="https://github.com/Robel231"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#04052e] text-[#e2e8f0] font-semibold px-6 py-3 rounded-lg hover:bg-[#22007c] transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
           <a
            href="https://www.linkedin.com/in/robel-shemeles-b80a31377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#04052e] text-[#e2e8f0] font-semibold px-6 py-3 rounded-lg hover:bg-[#22007c] transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
          className="w-full"
        >
          <TechOrbit />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
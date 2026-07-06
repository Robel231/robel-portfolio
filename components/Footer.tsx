import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-white/5">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-mono text-sm font-bold">
            <span className="text-slate-900 dark:text-white">robel</span>
            <span className="bg-gradient-to-r from-emerald-500 to-lime-400 text-transparent bg-clip-text">.sh</span>
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-500 text-center">
            &copy; {new Date().getFullYear()} Robel Shemeles Alemayhu · Built with React, TypeScript, Tailwind &amp; Framer Motion
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="p-2.5 rounded-full border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

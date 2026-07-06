import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} mb-14`}>
      <motion.span
        className="font-mono text-sm tracking-widest uppercase bg-gradient-to-r from-emerald-500 to-lime-400 dark:from-emerald-400 dark:to-lime-300 text-transparent bg-clip-text mb-3"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        {title}
      </motion.h2>
      <motion.span
        aria-hidden="true"
        className="mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
      />
      {subtitle && (
        <motion.p
          className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;

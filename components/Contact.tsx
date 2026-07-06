import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';

const EMAIL = 'robelshemeles4@gmail.com';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works
    }
  };

  return (
    <section id="contact" className="py-24 md:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative max-w-3xl mx-auto text-center rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm px-6 py-14 md:px-14 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Corner glows */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-lime-500/15 blur-3xl pointer-events-none" aria-hidden="true" />

          <motion.span
            variants={itemVariants}
            className="inline-block font-mono text-sm tracking-widest uppercase bg-gradient-to-r from-emerald-500 to-lime-400 dark:from-emerald-400 dark:to-lime-300 text-transparent bg-clip-text mb-4"
          >
            05 · Contact
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-5"
          >
            Let's build something{' '}
            <span className="animate-gradient-x bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400 text-transparent bg-clip-text">intelligent</span>.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-9">
            I'm open to new opportunities and collaborations — AI systems, automation pipelines,
            full-stack products, or making your brand visible in AI-powered search.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href={`mailto:${EMAIL}`}
              className="btn-shine relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
            >
              <MailIcon className="w-5 h-5" />
              Say Hello
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 px-6 py-3.5 font-mono text-sm text-slate-700 dark:text-slate-300 hover:border-emerald-400 dark:hover:border-emerald-400/50 transition-all backdrop-blur-sm"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </>
              )}
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <a href="tel:+251703476023" className="inline-flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">
              <PhoneIcon className="w-4 h-4" /> +251 703 476 023
            </a>
            <span className="inline-flex items-center gap-2">📍 Addis Ababa, Ethiopia</span>
            <a
              href="https://drive.google.com/file/d/1vQgJ5ahm0qzgrM1bv6W08zLnJZtS3mvz/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
            >
              <DocumentTextIcon className="w-4 h-4" /> View Résumé
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <a
              href="https://github.com/Robel231"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/robel-shimeles-154b5a3b8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

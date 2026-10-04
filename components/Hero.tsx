import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate, Variants } from 'framer-motion';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import Terminal from './Terminal';

const roles = ['AI Engineer', 'Full-Stack Developer', 'Python · Go · Flutter', 'n8n & AI Automation', 'SEO / GEO Specialist'];

/** Types, holds, deletes, and cycles through the given words. */
const useTypewriter = (words: string[]) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let delay = deleting ? 40 : 75;
    if (!deleting && text === word) delay = 2000;
    else if (deleting && text === '') delay = 300;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);

  return text;
};

const CountUp: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-lime-400 dark:from-emerald-400 dark:to-lime-300 text-transparent bg-clip-text">
      {display}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: 'K+', label: 'Monthly Users Served' },
  { value: 500, suffix: '+', label: 'GitHub Commits' },
  { value: 5, suffix: '+', label: 'Production Backends' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero: React.FC = () => {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left: intro */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/60 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-1.5 text-sm text-slate-600 dark:text-slate-300">
                📍 Addis Ababa, Ethiopia
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Robel Shemeles
              <span className="animate-gradient-x block mt-3 bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400 dark:from-emerald-400 dark:via-teal-300 dark:to-lime-300 text-transparent bg-clip-text pb-1">
                Alemayhu
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-5 h-8 font-mono text-lg md:text-xl text-slate-700 dark:text-slate-300">
              <span className="text-emerald-600 dark:text-emerald-400">&gt; </span>
              {typed}
              <span className="animate-blink text-emerald-500 dark:text-emerald-300">▊</span>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
              I build and run production systems end to end — FastAPI and Go backends, Next.js web
              apps, offline-first Flutter apps, and AI assistants on n8n and Gemini across booking,
              pharmacy, HR, and ERP. All live, all in daily use.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4">
              <a
                href="#projects"
                className="btn-shine relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
              >
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 px-7 py-3.5 font-semibold text-slate-800 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all backdrop-blur-sm"
              >
                Get In Touch
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Robel231"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all backdrop-blur-sm"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/robel-shimeles-154b5a3b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-300 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all backdrop-blur-sm"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: live terminal */}
          <Terminal />
        </div>

        {/* Impact stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="spotlight-card rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm px-4 py-6 text-center"
            >
              <CountUp value={stat.value} suffix={stat.suffix} />
              <p className="mt-1.5 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue: the start of the flow line that threads the page */}
        <motion.a
          href="#about"
          aria-label="Scroll to About"
          className="mt-14 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase">scroll</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
          </motion.svg>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

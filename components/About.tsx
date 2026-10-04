import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCapIcon } from './icons/GraduationCapIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { LanguagesIcon } from './icons/LanguagesIcon';
import SectionHeading from './SectionHeading';
import GitHubStats from './GitHubStats';

const floatingChips = [
  { label: 'FastAPI', className: '-top-2 -left-4', delay: '0s' },
  { label: 'Flutter', className: 'top-1/4 -right-10', delay: '1.2s' },
  { label: 'Gemini', className: 'bottom-6 -left-10', delay: '2.1s' },
  { label: 'n8n', className: '-bottom-3 right-2', delay: '0.6s' },
];

const infoCards = [
  {
    icon: GraduationCapIcon,
    title: 'Education',
    lines: ['B.Sc. Information Technology', 'Mettu University · 2019 — 2023', 'CGPA 3.14'],
  },
  {
    icon: SparklesIcon,
    title: 'Certification',
    lines: ['English Access Microscholarship Program', 'U.S. Embassy, Addis Ababa'],
  },
  {
    icon: LanguagesIcon,
    title: 'Languages',
    lines: ['Amharic — Native', 'English — Professional Fluency'],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const About: React.FC = () => {
  const profileImage = 'https://avatars.githubusercontent.com/u/141173346?v=4';

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 · About"
          title="Engineer at the intersection of AI and software"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">
          {/* Portrait with rotating gradient ring + floating chips */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Conic gradient ring */}
                <div className="absolute -inset-1.5 rounded-full animate-spin-slow bg-[conic-gradient(from_0deg,#10b981,#a3e635,#2dd4bf,#10b981)] opacity-90" />
                <div className="absolute -inset-1.5 rounded-full animate-spin-slow bg-[conic-gradient(from_0deg,#10b981,#a3e635,#2dd4bf,#10b981)] blur-xl opacity-40" />
                <div className="absolute inset-0 rounded-full bg-slate-50 dark:bg-void" />
                <img
                  src={profileImage}
                  alt="Robel Shemeles Alemayhu"
                  className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
                />
              </div>
              {floatingChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`animate-float absolute ${chip.className} rounded-full border border-slate-200 dark:border-white/15 bg-white/90 dark:bg-ink/90 backdrop-blur px-3.5 py-1.5 font-mono text-xs font-medium text-slate-700 dark:text-emerald-300 shadow-lg`}
                  style={{ animationDelay: chip.delay }}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-5">
              I'm an <strong className="text-slate-900 dark:text-white font-semibold">AI Engineer and Full-Stack Developer</strong> with
              3+ years shipping production systems at the intersection of intelligent automation and scalable software.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
              I build and run systems end to end: <strong className="text-slate-800 dark:text-slate-200 font-medium">FastAPI and Go backends</strong>,
              React and Next.js web apps, <strong className="text-slate-800 dark:text-slate-200 font-medium">Flutter mobile apps</strong>, AI assistants
              on n8n and Gemini, the Docker servers they run on, and <strong className="text-slate-800 dark:text-slate-200 font-medium">SEO / GEO</strong> for AI-era search.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              My work is in daily use across a group of companies — DrogaBooking, a room and staff booking platform with
              600+ tests and an offline-first Android app; DrogaPulse, a social media SaaS; and AI assistants for pharmacy,
              HR, ERP, and suppliers that only ever run permission-scoped queries. I also maintain habesha-names, an
              open-source Python library on PyPI.
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.12 }}
            >
              {infoCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  className="spotlight-card rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm p-5"
                >
                  <card.icon className="w-6 h-6 text-emerald-500 dark:text-emerald-300 mb-3" />
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  {card.lines.map((line, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? 'text-slate-700 dark:text-slate-300 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                      {line}
                    </p>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <GitHubStats />
      </div>
    </section>
  );
};

export default About;

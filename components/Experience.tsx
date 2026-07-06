import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import type { ExperienceItem } from '../types';
import SectionHeading from './SectionHeading';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const experienceData: ExperienceItem[] = [
  {
    role: 'AI Specialist & Full-Stack Developer',
    company: 'Droga Consultancy',
    period: 'Nov 2025 — Present',
    tags: ['n8n', 'LangChain', 'FastAPI', 'Gemini', 'SEO/GEO'],
    description: [
      'Engineered production n8n + LangChain agentic systems: a 26-node pharmacy chatbot with 5 Gemini agents, an Odoo ERP AI assistant with 8 live PostgreSQL tools, a JWT/RBAC PMS chatbot, and Amharic voice registration via Gemini 2.5 Flash.',
      'Architected 5+ FastAPI backends as secure, API-key-authenticated middleware between frontends and n8n webhook workflows — request validation, payload transformation, and routing for enterprise clients.',
      'Delivered SEO & GEO optimisation for drogaconsulting.com: on-page and technical SEO plus Generative Engine Optimisation to surface the brand in AI-powered search (ChatGPT, Perplexity, Gemini).',
      'Shipped DCS Wellness (FastAPI + React + RN Expo, 4 languages, Gemini AI), DrogaPulse SaaS (OAuth2 across 5 platforms), and the Droga Pharmacy chatbot — all live in production.',
    ],
  },
  {
    role: 'System Administrator',
    company: 'Abronet PLC',
    period: '2024 — Dec 2025',
    tags: ['Linux', 'Scripting', 'Security'],
    description: [
      'Maintained 99.9% uptime across enterprise platforms.',
      'Deployed and managed secure financial web platforms with robust security protocols.',
      'Automated routine maintenance with scripting, cutting operational overhead and human error.',
    ],
  },
  {
    role: 'Software Test Engineer',
    company: 'Transsion Manufacturing',
    period: '2023 — 2024',
    tags: ['QA', 'SDLC'],
    description: [
      'Found 100+ pre-release bugs across mobile and internal systems.',
      'Improved product quality by 15% through cross-functional SDLC collaboration.',
    ],
  },
];

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.65', 'end 0.65'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 · Experience"
          title="Where I've shipped"
          subtitle="Three years from finding bugs to deploying the systems that prevent them."
        />

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Track + scroll-linked progress line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px bg-slate-300 dark:bg-white/10" aria-hidden="true" />
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px origin-top bg-gradient-to-b from-emerald-500 via-teal-400 to-lime-400"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.company} className="relative mb-14 last:mb-0">
                {/* Node */}
                <motion.div
                  className="animate-pulse-node absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 z-10 flex items-center justify-center w-9 h-9 rounded-full border border-emerald-400/50 dark:border-emerald-400/40 bg-white dark:bg-ink shadow-lg shadow-emerald-500/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                >
                  <BriefcaseIcon className="w-4 h-4 text-emerald-500 dark:text-emerald-300" />
                </motion.div>

                <motion.div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? '' : 'md:ml-auto'}`}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65, ease: 'easeOut' }}
                >
                  <div className="spotlight-card rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm p-6 hover:border-emerald-300 dark:hover:border-white/20 transition-colors">
                    <span className="inline-block font-mono text-xs text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-400/20 bg-emerald-50 dark:bg-emerald-400/5 rounded-full px-3 py-1 mb-3">
                      {item.period}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                    <p className="font-medium bg-gradient-to-r from-emerald-500 to-lime-400 dark:from-emerald-400 dark:to-lime-300 text-transparent bg-clip-text mb-4">
                      {item.company}
                    </p>
                    <ul className="space-y-2.5 mb-5">
                      {item.description.map((desc, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0">▹</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

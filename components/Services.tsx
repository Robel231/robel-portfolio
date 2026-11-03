import React from 'react';
import { motion } from 'framer-motion';
import type { PageContent } from '../types';
import { servicePages, uiText } from '../content/pages';
import SectionHeading from './SectionHeading';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';
import { CodeIcon } from './icons/CodeIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { LanguagesIcon } from './icons/LanguagesIcon';
import { trackSpotlight } from '../utils/spotlight';

const icons: Record<PageContent['icon'], { icon: React.FC<{ className?: string }>; gradient: string }> = {
  invoice: { icon: DocumentTextIcon, gradient: 'from-amber-500 to-emerald-500' },
  ai: { icon: BrainCircuitIcon, gradient: 'from-emerald-500 to-teal-500' },
  apps: { icon: CodeIcon, gradient: 'from-cyan-500 to-blue-500' },
  seo: { icon: SparklesIcon, gradient: 'from-amber-500 to-orange-500' },
  profile: { icon: LanguagesIcon, gradient: 'from-lime-500 to-emerald-500' },
};

/** A card linking to one landing page: on the home page and under "more services". */
export const ServiceCard: React.FC<{ page: PageContent; index?: number }> = ({ page, index = 0 }) => {
  const { icon: Icon, gradient } = icons[page.icon];
  return (
    <motion.a
      href={page.path}
      onMouseMove={trackSpotlight}
      className="spotlight-card group flex flex-col h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm p-6 hover:border-emerald-300 dark:hover:border-emerald-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-2">{page.name}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-5">{page.summary}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-300">
        {uiText[page.lang].learnMore}
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </motion.a>
  );
};

const Services: React.FC = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="05 · Services"
        title="What I can build for you"
        subtitle="For businesses in Ethiopia and teams hiring remotely: four things I do end to end, from the first conversation to a system in production."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {servicePages.map((page, i) => (
          <ServiceCard key={page.path} page={page} index={i} />
        ))}
      </div>

      <p className="mt-10 text-center">
        <a
          href="/am"
          lang="am"
          hrefLang="am"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all backdrop-blur-sm"
        >
          አገልግሎቶቼን በአማርኛ ያንብቡ →
        </a>
      </p>
    </div>
  </section>
);

export default Services;

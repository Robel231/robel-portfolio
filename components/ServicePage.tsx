import React from 'react';
import { motion } from 'framer-motion';
import type { Lang, PageContent } from '../types';
import { contact, servicePages, uiText } from '../content/pages';
import SectionHeading from './SectionHeading';
import { ServiceCard } from './Services';
import { TelegramIcon } from './icons/TelegramIcon';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { trackSpotlight } from '../utils/spotlight';

const card = 'spotlight-card rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
});

/** Telegram first: it's where most people in Ethiopia would rather talk. */
const ContactButtons: React.FC<{ lang: Lang; center?: boolean }> = ({ lang, center }) => {
  const t = uiText[lang];
  const secondary =
    'inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 px-6 py-3.5 font-semibold text-slate-800 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:-translate-y-0.5 transition-all backdrop-blur-sm';
  return (
    <div className={`flex flex-wrap items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <a
        href={contact.telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shine relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all"
      >
        <TelegramIcon className="w-5 h-5" />
        {t.telegram}
      </a>
      <a href={`mailto:${contact.email}`} className={secondary}>
        <MailIcon className="w-4 h-4" />
        {t.email}
      </a>
      <a href={`tel:${contact.phone}`} className={`${secondary} font-mono text-sm`}>
        <PhoneIcon className="w-4 h-4" />
        {contact.phoneDisplay}
      </a>
    </div>
  );
};

const ServicePage: React.FC<{ page: PageContent }> = ({ page }) => {
  const t = uiText[page.lang];
  const related = page.kind === 'service' ? servicePages.filter((p) => p.path !== page.path) : [];

  return (
    <>
      {/* Intro: animated in CSS, so the headline paints before any JavaScript arrives */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="animate-fade-up mb-8">
              <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
                <li>
                  <a href="/" className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors">{t.home}</a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-slate-700 dark:text-slate-300">{page.name}</li>
              </ol>
            </nav>
            <span
              className="animate-fade-up inline-block font-mono text-sm tracking-widest uppercase bg-gradient-to-r from-emerald-500 to-lime-400 dark:from-emerald-400 dark:to-lime-300 text-transparent bg-clip-text mb-4"
              style={{ animationDelay: '0.08s' }}
            >
              {page.eyebrow}
            </span>
            <h1
              className="animate-fade-up font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 dark:text-white"
              style={{ animationDelay: '0.16s' }}
            >
              {page.h1}
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              style={{ animationDelay: '0.24s' }}
            >
              {page.lead}
            </p>
            <ul className="animate-fade-up mt-8 flex flex-wrap gap-2" style={{ animationDelay: '0.32s' }}>
              {page.highlights.map((h) => (
                <li key={h} className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {h}
                </li>
              ))}
            </ul>
            <div className="animate-fade-up mt-10" style={{ animationDelay: '0.4s' }}>
              <ContactButtons lang={page.lang} />
            </div>
          </div>
        </div>
      </section>

      {/* What I build */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={page.offer.eyebrow} title={page.offer.heading} align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.offer.items.map((item, i) => (
              <motion.div key={item.title} {...reveal((i % 2) * 0.1)} onMouseMove={trackSpotlight} className={`${card} flex flex-col p-6 md:p-7`}>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{item.body}</p>
                {item.link && (
                  <a href={item.link} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors">
                    {t.learnMore} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={page.proof.eyebrow} title={page.proof.heading} align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.proof.items.map((item, i) => (
              <motion.div key={item.title} {...reveal((i % 3) * 0.1)} onMouseMove={trackSpotlight} className={`${card} flex flex-col p-6`}>
                {item.metric && (
                  <span className="self-start rounded-full border border-emerald-200 dark:border-emerald-400/20 bg-emerald-50 dark:bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-300 mb-4">
                    {item.metric}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{item.body}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" /> {item.link.replace(/^https:\/\//, '').replace(/\/$/, '')}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process beside the local context */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          <div>
            <SectionHeading eyebrow={page.steps.eyebrow} title={page.steps.heading} align="left" />
            <ol className="space-y-6">
              {page.steps.items.map((step, i) => (
                <motion.li key={step.title} {...reveal(i * 0.08)} className="flex gap-4">
                  <span className="flex shrink-0 items-center justify-center w-9 h-9 rounded-full border border-emerald-400/50 bg-white dark:bg-ink font-mono text-sm font-bold text-emerald-600 dark:text-emerald-300 shadow-lg shadow-emerald-500/20">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow={page.context.eyebrow} title={page.context.heading} align="left" />
            <motion.ul {...reveal()} onMouseMove={trackSpotlight} className={`${card} space-y-4 p-6 md:p-7`}>
              {page.context.items.map((point) => (
                <li key={point} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* FAQ: written out in full, so search engines and AI assistants can quote the answers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={page.faq.eyebrow} title={page.faq.heading} align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.faq.items.map((item, i) => (
              <motion.div key={item.q} {...reveal((i % 2) * 0.1)} onMouseMove={trackSpotlight} className={`${card} p-6`}>
                <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow={t.related.eyebrow} title={t.related.heading} align="left" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ServiceCard key={p.path} page={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...reveal()}
            className="relative max-w-3xl mx-auto text-center rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm px-6 py-14 md:px-14 overflow-hidden"
          >
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-lime-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
            <span className="inline-block font-mono text-sm tracking-widest uppercase bg-gradient-to-r from-emerald-500 to-lime-400 dark:from-emerald-400 dark:to-lime-300 text-transparent bg-clip-text mb-4">
              {t.cta.eyebrow}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-5">
              {page.cta?.heading ?? t.cta.heading}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-9">{page.cta?.body ?? t.cta.body}</p>
            <ContactButtons lang={page.lang} center />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;

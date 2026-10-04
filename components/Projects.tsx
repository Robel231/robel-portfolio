import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import type { Project, ProjectCategory } from '../types';
import SectionHeading from './SectionHeading';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { GitHubIcon } from './icons/GitHubIcon';

const featuredProjects: Project[] = [
  {
    title: 'DrogaBooking — Rooms & Staff Booking',
    description:
      "Booking platform for the companies in one group: staff book meeting rooms and colleagues' time, each company gets itemised bills with CSV export, and assistants can book on someone's behalf. PostgreSQL rules make double booking impossible, and the Flutter Android app keeps working offline.",
    technologies: ['FastAPI', 'PostgreSQL', 'Next.js', 'Flutter', 'GitHub Actions'],
    category: 'Full-Stack',
    featured: true,
    metric: '82 endpoints · 600+ tests',
    gradient: 'from-emerald-500/80 via-teal-500/70 to-cyan-500/80',
  },
  {
    title: 'DrogaPulse — Social Media SaaS',
    description:
      'Teams plan, approve and publish posts to Facebook, Instagram, LinkedIn and X from one content calendar, with an Ethiopian calendar view. Gemini writes captions and analytics reports, Celery and Redis run the publishing queue, and an Android app ships from the same code via Capacitor.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'Celery', 'Redis', 'Gemini', 'Capacitor'],
    category: 'Full-Stack',
    featured: true,
    metric: 'Live · 4 networks · ~400 tests',
    liveLink: 'https://drogapulse.drogatech.com',
    gradient: 'from-teal-500/80 via-emerald-500/70 to-lime-500/80',
  },
];

const projectData: Project[] = [
  {
    title: 'habesha-names',
    description:
      "Open-source Python library for Ethiopian and Eritrean names in KYC, remittance and HR systems: Ge'ez to Latin transliteration and back, spelling variants, patronymic-aware parsing and sound-alike matching. Zero dependencies, fully typed, ~50K matches per second.",
    technologies: ['Python', 'PyPI', 'Typed', 'GitHub Actions'],
    category: 'Open Source',
    metric: '1,700+ test name pairs',
    liveLink: 'https://pypi.org/project/habesha-names/',
    repoLink: 'https://github.com/Robel231/habesha-names',
    gradient: 'from-lime-600/70 to-emerald-600/70',
  },
  {
    title: 'Executive Dashboard API in Go',
    description:
      'Go backend for a group-level executive dashboard: multi-level approvals, tasks, risks, KPIs, company comparison and a full audit trail. Chi router, pgx with hand-written SQL, goose migrations and JWT auth, behind a Next.js 15 frontend. In development.',
    technologies: ['Go', 'chi', 'pgx', 'PostgreSQL', 'Next.js 15'],
    category: 'Full-Stack',
    metric: '68 routes · 351 e2e checks',
    gradient: 'from-cyan-600/70 to-sky-600/70',
  },
  {
    title: 'Wuten Finance App',
    description:
      'Flutter app that reads SMS from Ethiopian banks and telebirr (CBE, Awash, Dashen, Abyssinia and more) to log spending automatically. Budgets, savings goals, equb, debts and an AI assistant that answers from your own records, in Amharic and English.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'AI Assistant'],
    category: 'Mobile',
    metric: '~430 tests',
    gradient: 'from-emerald-600/70 to-lime-600/70',
  },
  {
    title: 'Market Intelligence Dashboard',
    description:
      'Competitor import analytics for management, built on regulator import-permit data: a Python ETL into PostgreSQL, a FastAPI and React dashboard, and an AI chatbot that answers who imports what, and at what price.',
    technologies: ['Python ETL', 'PostgreSQL', 'FastAPI', 'React', 'AI Chatbot'],
    category: 'Full-Stack',
    metric: 'Who imports what',
    gradient: 'from-teal-600/70 to-cyan-600/70',
  },
  {
    title: 'DCS Wellness — Health Platform',
    description:
      'Health platform built from zero: streaming AI diagnostics, Ethiopian food recognition from photos, 4-language support and real-time analytics.',
    technologies: ['FastAPI', 'React', 'RN Expo', 'Gemini AI', 'Docker'],
    category: 'Full-Stack',
    metric: '4 languages · AI diagnostics',
    liveLink: 'https://yene-jegna.drogapharma.rw',
    gradient: 'from-emerald-600/70 to-cyan-600/70',
  },
  {
    title: 'AI Pharmacy Assistant',
    description:
      '26-node n8n agentic workflow with 5 specialist Gemini agents and shared memory — answers stock questions, reads prescription photos, guides patients to the right medicine and alerts the sales team about stock-outs.',
    technologies: ['n8n', 'Gemini', 'AI Agents', 'Vision'],
    category: 'AI & Agents',
    metric: '26 nodes · 5 agents',
    imageUrl: '/ai-pharmacy-assistance.png',
  },
  {
    title: 'HR Performance Assistant (RBAC)',
    description:
      'AI assistant for a performance-management system where employees, managers and HR each see only what their role allows. FastAPI middleware proves identity from a signed JWT, and the agent runs only permission-scoped, read-only queries, never its own SQL.',
    technologies: ['n8n', 'FastAPI', 'JWT', 'RBAC', 'Gemini'],
    category: 'AI & Agents',
    metric: 'Role-scoped data',
    gradient: 'from-cyan-600/70 to-blue-600/70',
  },
  {
    title: 'Odoo ERP AI Assistant',
    description:
      'Natural-language interface to Odoo ERP with runtime schema inspection and 8 live PostgreSQL tools — ask the ERP anything, get real answers from real data.',
    technologies: ['n8n', 'LangChain', 'PostgreSQL', 'Odoo'],
    category: 'AI & Agents',
    metric: '8 live SQL tools',
    gradient: 'from-teal-600/70 to-emerald-600/70',
  },
  {
    title: 'Amharic Voice Registration',
    description:
      'Multimodal Amharic voice pipeline on Gemini 2.5 Flash — spoken registration in, structured records out. Voice AI for a language most models overlook.',
    technologies: ['Gemini 2.5 Flash', 'n8n', 'Multimodal'],
    category: 'AI & Agents',
    metric: 'Amharic voice → data',
    gradient: 'from-lime-600/70 to-emerald-600/70',
  },
  {
    title: 'AI Doctor Assistant',
    description:
      'AI workflow assisting doctors with patient data analysis, combining Google Gemini with SQL integration for grounded medical insights.',
    technologies: ['n8n', 'Google Gemini', 'SQL', 'AI Agents'],
    category: 'AI & Agents',
    imageUrl: '/ai-doctor-assistant.png',
  },
  {
    title: 'FastAPI Secure Middleware Suite',
    description:
      '5+ production FastAPI backends bridging client frontends and n8n AI webhooks — API-key auth, request validation, rate-aware routing, and payload transformation.',
    technologies: ['Python', 'FastAPI', 'n8n Webhooks', 'API Key Auth'],
    category: 'Full-Stack',
    metric: '5+ deployed',
    gradient: 'from-emerald-600/70 to-teal-600/70',
  },
  {
    title: 'SEO & GEO — drogaconsulting.com',
    description:
      'Full audit and implementation: meta optimisation, schema.org structured data, sitemap/robots, Core Web Vitals — plus Generative Engine Optimisation to rank in AI-powered search.',
    technologies: ['Technical SEO', 'Schema.org', 'Core Web Vitals', 'GEO'],
    category: 'SEO',
    metric: 'Ranks in AI search',
    liveLink: 'https://drogaconsulting.com',
    gradient: 'from-amber-600/70 to-orange-600/70',
  },
  {
    title: 'Betting Tip by Robel',
    description:
      'High-traffic tips platform serving 20K+ monthly visitors with automated content pipelines via n8n webhooks on serverless infrastructure.',
    technologies: ['Next.js', 'n8n Webhooks', 'Vercel', 'Serverless'],
    category: 'Full-Stack',
    metric: '20K+ users/mo',
    liveLink: 'https://betting-tip-by-robel.vercel.app/',
    gradient: 'from-teal-600/70 to-cyan-600/70',
  },
  {
    title: 'AI Cover Letter Generator',
    description:
      'AI-generated cover letters tailored to specific job descriptions, built for Ethiopian job seekers.',
    technologies: ['React', 'FastAPI', 'OpenAI', 'Supabase'],
    category: 'Full-Stack',
    liveLink: 'https://ai-cover-letter-ethiopia.vercel.app/',
    repoLink: 'https://github.com/Robel231/ai-cover-letter-ethiopia',
    gradient: 'from-sky-600/70 to-cyan-600/70',
  },
  {
    title: 'CRM → Jira Automation',
    description:
      'Automation workflow syncing CRM data to Jira tickets with real-time Slack notifications, keeping issue tracking and teams in sync.',
    technologies: ['n8n', 'Jira API', 'Slack', 'Webhooks'],
    category: 'Automation',
    imageUrl: '/jira-crm-workflow.png',
  },
  {
    title: 'Resume Scanner API',
    description:
      'Backend service delivering automated, ATS-aware feedback on resumes to optimise them for recruiters and screening systems.',
    technologies: ['FastAPI', 'OpenAI', 'JWT', 'Render'],
    category: 'Full-Stack',
    repoLink: 'https://github.com/Robel231/ai-resume-scanner',
    gradient: 'from-rose-600/70 to-pink-600/70',
  },
];

const filters: ('All' | ProjectCategory)[] = ['All', 'AI & Agents', 'Full-Stack', 'Mobile', 'Open Source', 'Automation', 'SEO'];

/** Cover: real screenshot when available, otherwise a designed gradient tile. */
const ProjectCover: React.FC<{ project: Project }> = ({ project }) => {
  if (project.imageUrl) {
    return (
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    );
  }
  return (
    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.gradient ?? 'from-emerald-600/70 to-teal-600/70'}`}>
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '22px 22px' }}
      />
      <span className="absolute bottom-4 left-5 font-display text-4xl font-bold text-white/25 select-none tracking-tight">
        {project.title.split(' ').slice(0, 2).map((w) => w[0]).join('')}
      </span>
      {project.metric && (
        <span className="absolute top-4 right-4 rounded-full bg-black/30 backdrop-blur px-3 py-1 font-mono text-xs text-white">
          {project.metric}
        </span>
      )}
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group h-full flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 hover:-translate-y-1.5 transition-all duration-300">
    <ProjectCover project={project} />
    <div className="flex flex-col flex-grow p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <span className="shrink-0 rounded-full bg-emerald-50 dark:bg-white/5 border border-emerald-200/70 dark:border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-300">
          {project.category}
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
            {tech}
          </span>
        ))}
      </div>
      {(project.liveLink || project.repoLink) && (
        <div className="flex items-center gap-4 mt-auto">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
            >
              <ExternalLinkIcon className="w-4 h-4" /> Live
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" /> Code
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

// In-house tools (no liveLink) render as a plain card instead of a dead link.
const FeaturedCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.a
    href={project.liveLink}
    target={project.liveLink ? '_blank' : undefined}
    rel={project.liveLink ? 'noopener noreferrer' : undefined}
    className="group relative block rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-emerald-300 dark:hover:border-emerald-400/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-300"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.65, delay: index * 0.15, ease: 'easeOut' }}
  >
    <div className={`relative h-56 bg-gradient-to-br ${project.gradient}`}>
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      <span className="absolute top-5 left-5 rounded-full bg-black/25 backdrop-blur px-3.5 py-1.5 font-mono text-xs font-medium text-white">
        ★ Featured · {project.metric}
      </span>
      {project.liveLink && (
        <span className="absolute bottom-5 right-5 flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
          Visit live site <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      )}
      <h3 className="absolute bottom-5 left-5 right-24 font-display text-2xl md:text-3xl font-bold text-white drop-shadow">
        {project.title}
      </h3>
    </div>
    <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-sm p-6">
      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 font-mono text-xs text-slate-600 dark:text-slate-400">
            {tech}
          </span>
        ))}
      </div>
      {!project.liveLink && (
        <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-500">// in-house · runs behind a company login</p>
      )}
    </div>
  </motion.a>
);

const gridItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.92, transition: { duration: 0.25 } },
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All');

  const visibleProjects = useMemo(
    () => (activeFilter === 'All' ? projectData : projectData.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 · Projects"
          title="Built, shipped, and running"
          subtitle="A selection of production systems — from booking platforms and SaaS to multi-agent AI pipelines and open-source libraries."
        />

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            const count = filter === 'All' ? projectData.length : projectData.filter((p) => p.category === filter).length;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 shadow-lg shadow-emerald-600/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {filter} <span className={`font-mono text-xs ${isActive ? 'text-white/70' : 'text-slate-400 dark:text-slate-500'}`}>{count}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid with layout animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={gridItemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

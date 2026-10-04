import React, { useCallback } from 'react';
import { motion, Variants } from 'framer-motion';
import type { SkillCategory } from '../types';
import SectionHeading from './SectionHeading';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { ServerCogIcon } from './icons/ServerCogIcon';
import { CodeIcon } from './icons/CodeIcon';

const skillData: (SkillCategory & { icon: React.FC<{ className?: string }>; gradient: string })[] = [
  {
    title: 'AI / LLMs',
    tagline: 'LLMs in production, not in notebooks',
    icon: BrainCircuitIcon,
    gradient: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Gemini' }, { name: 'OpenAI' }, { name: 'Claude' }, { name: 'LangChain' },
      { name: 'RAG' }, { name: 'AI Agents' }, { name: 'Multimodal' },
    ],
  },
  {
    title: 'Automation & Agents',
    tagline: 'Multi-agent workflows that run themselves',
    icon: SparklesIcon,
    gradient: 'from-lime-500 to-emerald-500',
    skills: [
      { name: 'n8n' }, { name: 'Telegram Bots' }, { name: 'Webhooks' },
      { name: 'Celery' }, { name: 'Redis' },
    ],
  },
  {
    title: 'Backend',
    tagline: 'Secure APIs bridging frontends to AI',
    icon: ServerCogIcon,
    gradient: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'Python' }, { name: 'FastAPI' }, { name: 'Go' }, { name: 'Django' }, { name: 'Node.js' },
      { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'SQLAlchemy' }, { name: 'JWT / RBAC' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    tagline: 'Web and Android apps people actually enjoy',
    icon: CodeIcon,
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React 18/19' }, { name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Tailwind CSS' },
      { name: 'Flutter' }, { name: 'React Native (Expo)' }, { name: 'Capacitor' },
    ],
  },
  {
    title: 'SEO / GEO',
    tagline: 'Ranking in Google and in AI answers',
    icon: SparklesIcon,
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'On-page SEO' }, { name: 'Technical SEO' }, { name: 'Schema Markup' },
      { name: 'Core Web Vitals' }, { name: 'GEO (AI Search)' },
    ],
  },
  {
    title: 'DevOps & Testing',
    tagline: '99.9% uptime is a habit',
    icon: ServerCogIcon,
    gradient: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'Docker' }, { name: 'Linux' }, { name: 'nginx' }, { name: 'Traefik' }, { name: 'Cloudflare' },
      { name: 'GitHub Actions' }, { name: 'pytest' }, { name: 'Vitest' }, { name: 'QA' },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Skills: React.FC = () => {
  // Feed cursor position to the CSS spotlight (--mx / --my)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 · Skills"
          title="The toolbox"
          subtitle="Six disciplines, one goal: intelligent systems that hold up in production."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillData.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              onMouseMove={handleMouseMove}
              className="spotlight-card group rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm p-6 hover:border-emerald-300 dark:hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-1.5">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              <p className="font-mono text-xs text-slate-500 dark:text-slate-500 mb-5">// {category.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5 px-3 py-1 text-sm text-slate-700 dark:text-slate-300 hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

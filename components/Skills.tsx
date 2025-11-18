import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import type { SkillCategory } from '../types';
import { CodeIcon } from './icons/CodeIcon';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';
import { ServerCogIcon } from './icons/ServerCogIcon';

const skillData: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'Django' },
      { name: 'Node.js' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'AI & Automation',
    skills: [
      { name: 'N8N' },
      { name: 'OpenAI API' },
      { name: 'Model Fine-Tuning' },
      { name: 'Vertex AI' },
      { name: 'Vertex AI Fine Tuning' },
      { name: 'Telegram Bots' },
      { name: 'Workflow Automation' },
    ],
  },
  {
    title: 'Databases & DevOps',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'Supabase' },
      { name: 'Firebase' },
      { name: 'Google Cloud' },
      { name: 'Git & GitHub' },
      { name: 'Docker' },
      { name: 'Vercel' },
      { name: 'Render' },
      { name: 'Linux' },
    ],
  },
];

const SectionIcon = ({ title }: { title: string }) => {
    switch(title) {
        case 'Frontend Development':
        case 'Backend Development':
            return <CodeIcon className="w-8 h-8 text-[#bb9457]" />;
        case 'AI & Automation':
            return <BrainCircuitIcon className="w-8 h-8 text-[#bb9457]" />;
        case 'Databases & DevOps':
            return <ServerCogIcon className="w-8 h-8 text-[#bb9457]" />;
        default:
            return null;
    }
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <motion.h2
        className="text-3xl font-bold text-[#ffe6a7] text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Technical Skills
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skillData.map((category) => (
          <motion.div key={category.title} className="bg-[#6f1d1b]/50 p-6 rounded-lg border border-[#99582a]" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-4">
              <SectionIcon title={category.title} />
              <h3 className="text-xl font-semibold text-[#ffe6a7]">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill.name} className="bg-[#99582a] text-[#ffe6a7] text-sm font-medium px-3 py-1 rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
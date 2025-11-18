import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { GitHubIcon } from './icons/GitHubIcon';

const projectData: Project[] = [
  {
    title: 'Betting Tip by Robel',
    description: 'A high-traffic web app serving over 20,000 visitors with automated betting tips, demonstrating massive scalability and popularity.',
    technologies: ['Next.js', 'N8N Webhooks', 'Vercel', 'Serverless'],
    liveLink: 'https://betting-tip-by-robel.vercel.app/',
    imageUrl: 'https://xclsvmedia.com/wp-content/uploads/2025/04/AIsportsbettingTools.png',
  },
  {
    title: 'AI-Powered Cover Letter Generator',
    description: 'A specialized tool for Ethiopian job seekers to generate customized cover letters tailored to specific job descriptions using AI.',
    technologies: ['React', 'FastAPI', 'OpenAI API', 'Supabase', 'PostgreSQL'],
    liveLink: 'https://ai-cover-letter-ethiopia.vercel.app/',
    repoLink: 'https://github.com/Robel231/ai-cover-letter-ethiopia',
    imageUrl: 'https://edure.in/wp-content/uploads/2025/02/ai-tools.webp',
  },
  {
    title: 'Resume Scanner API',
    description: 'A backend service providing automated, insightful feedback on resumes to optimize them for ATS and recruiters.',
    technologies: ['FastAPI', 'OpenAI API', 'JWT', 'Render'],
    repoLink: 'https://github.com/Robel231/ai-resume-scanner',
    imageUrl: 'https://picsum.photos/seed/resume/600/400',
  },
  {
    title: 'Amro-AI Chat',
    description: 'A real-time, AI-powered chatbot featuring a modern, intuitive UI for a seamless conversational experience.',
    technologies: ['React', 'Flask', 'OpenAI API'],
    repoLink: 'https://github.com/Robel231/amro-ai-chat',
    imageUrl: 'https://picsum.photos/seed/chatbot/600/400',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#6f1d1b] rounded-lg overflow-hidden border border-[#99582a] group transition-all duration-300 hover:shadow-2xl hover:shadow-[#bb9457]/10 hover:border-[#bb9457]">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#ffe6a7] mb-2">{project.title}</h3>
        <p className="text-[#bb9457] mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-[#99582a] text-[#ffe6a7] text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-auto">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#ffe6a7] hover:text-[#bb9457] transition-colors">
              <ExternalLinkIcon /> Live Demo
            </a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#ffe6a7] hover:text-[#bb9457] transition-colors">
              <GitHubIcon /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
      
      const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          }
        },
      };

  return (
    <section id="projects" className="py-20 md:py-32">
      <motion.h2
        className="text-3xl font-bold text-[#ffe6a7] text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Key Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectData.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
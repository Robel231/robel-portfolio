import React from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { GitHubIcon } from './icons/GitHubIcon';

const projectData: Project[] = [
  {
    title: 'Betting Tip by Robel',
    description: 'A high-traffic web app serving over 20,000 visitors with automated betting tips, demonstrating massive scalability and popularity.',
    technologies: ['Next.js', 'N8N Webhooks', 'Vercel', 'Serverless'],
    liveLink: '#',
    imageUrl: 'https://picsum.photos/seed/betting/600/400',
  },
  {
    title: 'AI-Powered Cover Letter Generator',
    description: 'A specialized tool for Ethiopian job seekers to generate customized cover letters tailored to specific job descriptions using AI.',
    technologies: ['React', 'FastAPI', 'OpenAI API', 'Supabase', 'PostgreSQL'],
    liveLink: '#',
    repoLink: '#',
    imageUrl: 'https://picsum.photos/seed/coverletter/600/400',
  },
  {
    title: 'Resume Scanner API',
    description: 'A backend service providing automated, insightful feedback on resumes to optimize them for ATS and recruiters.',
    technologies: ['FastAPI', 'OpenAI API', 'JWT', 'Render'],
    repoLink: '#',
    imageUrl: 'https://picsum.photos/seed/resume/600/400',
  },
  {
    title: 'Amro-AI Chat',
    description: 'A real-time, AI-powered chatbot featuring a modern, intuitive UI for a seamless conversational experience.',
    technologies: ['React', 'Flask', 'OpenAI API'],
    repoLink: '#',
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
  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="text-3xl font-bold text-[#ffe6a7] text-center mb-12">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
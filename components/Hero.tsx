import React from 'react';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          <span className="block text-[#ffe6a7]">Robel Shemeles Alemayhu</span>
          <span className="block bg-gradient-to-r from-[#bb9457] to-[#99582a] text-transparent bg-clip-text mt-2">
            AI & Full-Stack Developer
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[#bb9457] max-w-2xl mx-auto">
          From robust web applications to intelligent automation, I build efficient, scalable, and AI-driven solutions that solve real-world problems.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="inline-block bg-[#99582a] text-[#ffe6a7] font-semibold px-6 py-3 rounded-lg hover:bg-[#bb9457] hover:text-[#432818] transition-all">
            Get In Touch
          </a>
          <a
            href="https://github.com/Robel231"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#6f1d1b] text-[#ffe6a7] font-semibold px-6 py-3 rounded-lg hover:bg-[#99582a] transition-colors"
          >
            <GitHubIcon />
            GitHub
          </a>
           <a
            href="https://www.linkedin.com/in/robel-shemeles-b80a31377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#6f1d1b] text-[#ffe6a7] font-semibold px-6 py-3 rounded-lg hover:bg-[#99582a] transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
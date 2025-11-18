import React from 'react';
import type { ExperienceItem } from '../types';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

const experienceData: ExperienceItem[] = [
  {
    role: 'AI Intern',
    company: 'Droga Consultancy',
    period: 'Nov 2025 - Present',
    description: [
      'Architected and implemented complex workflow automations using N8N, reducing manual intervention by over 30%.',
      'Developed and deployed intelligent Telegram bots to enhance user engagement and automate support.',
      'Assisted in fine-tuning pre-trained AI models on custom datasets to improve accuracy for specialized NLP tasks.',
    ],
  },
  {
    role: 'System Administrator',
    company: 'Abronet PLC',
    period: '2024 - Dec 2025',
    description: [
      'Maintained and monitored company-wide systems, achieving 99.9% uptime and ensuring optimal performance.',
      'Deployed and managed secure financial web platforms, implementing robust security protocols.',
      'Automated routine system maintenance tasks using scripting, reducing manual effort and human error.',
    ],
  },
  {
    role: 'Software Test Engineer',
    company: 'Transsion Manufacturing PLC',
    period: '2023 - 2024',
    description: [
      'Conducted rigorous manual testing for mobile and internal systems, identifying and documenting over 100 critical bugs.',
      'Collaborated with development teams to analyze bug reports and verify fixes, contributing to a 15% increase in system quality.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <h2 className="text-3xl font-bold text-[#ffe6a7] text-center mb-12">Professional Experience</h2>
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#99582a]" aria-hidden="true"></div>
        {experienceData.map((item, index) => (
          <div key={index} className="relative mb-12">
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-2 w-8 h-8 bg-[#6f1d1b] border-2 border-[#bb9457] rounded-full flex items-center justify-center">
                <BriefcaseIcon className="w-4 h-4 text-[#bb9457]" />
            </div>
            <motion.div
              className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`bg-[#6f1d1b] p-6 rounded-lg border border-[#99582a] shadow-lg ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-xl font-semibold text-[#bb9457]">{item.role}</h3>
                <p className="text-[#bb9457] font-medium mb-1">{item.company}</p>
                <p className="text-sm text-[#bb9457]/80 mb-3">{item.period}</p>
                <ul className="text-sm text-left text-[#bb9457] space-y-2 list-disc list-inside">
                  {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
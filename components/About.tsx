import React from 'react';
// FIX: Import Variants type from framer-motion to fix type errors.
import { motion, Variants } from 'framer-motion';
import { GraduationCapIcon } from './icons/GraduationCapIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { LanguagesIcon } from './icons/LanguagesIcon';
import GitHubStats from './GitHubStats';

const About: React.FC = () => {
  const profileImage = 'https://avatars.githubusercontent.com/u/141173346?v=4';

  const subsectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 md:py-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <motion.div
          className="lg:col-span-2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 dark:from-[#22007c] dark:to-[#0d00a4] p-1.5 shadow-lg shadow-blue-900/20">
            <img
              src={profileImage}
              alt="Robel Shemeles Alemayhu"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-[#e2e8f0] mb-6">About Me</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            I am a dynamic and results-oriented Full-Stack Developer transitioning into the field of Artificial Intelligence. My journey has evolved from establishing robust systems in software testing and system administration to developing full-cycle web applications.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Currently, I am focused on leveraging AI and automation, with hands-on experience in fine-tuning models, developing intelligent bots, and engineering sophisticated workflow automations with N8N. I excel at building high-traffic, scalable applications tailored for the Ethiopian market, combining a strong foundation in modern frameworks like React and FastAPI with a passion for creating efficient, AI-driven solutions.
          </p>
          <div className="space-y-8">
            <motion.div
              variants={subsectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-[#e2e8f0] mb-4">
                <GraduationCapIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                Education
              </h3>
              <div className="bg-white dark:bg-[#04052e]/50 p-6 rounded-lg border border-slate-200 dark:border-[#140152] shadow-sm">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">B.Sc. in Information Technology</h4>
                <p className="text-slate-600 dark:text-slate-400">Mettu University - Graduated 2023</p>
                <p className="text-sm text-slate-500">CGPA: 3.14</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Engineering, Database Management Systems, Web Development.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={subsectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-[#e2e8f0] mb-4">
                <SparklesIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                Achievements & Certifications
              </h3>
              <div className="bg-white dark:bg-[#04052e]/50 p-6 rounded-lg border border-slate-200 dark:border-[#140152] shadow-sm">
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Certificate from U.S. Embassy for successful completion of the Access Course.</li>
                  <li>Frequently selected to deliver technical presentations on security best practices and live software demonstrations to internal teams.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={subsectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-[#e2e8f0] mb-4">
                <LanguagesIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                Languages
              </h3>
              <div className="bg-white dark:bg-[#04052e]/50 p-6 rounded-lg border border-slate-200 dark:border-[#140152] shadow-sm">
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Amharic: Native</li>
                  <li>English: Professional Fluency</li>
                </ul>
              </div>
            </motion.div>

            {/* GitHub Stats */}
            <GitHubStats />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
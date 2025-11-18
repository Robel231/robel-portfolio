import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};


const Contact: React.FC = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 md:py-32 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#ffe6a7] mb-4">Get In Touch</motion.h2>
      <motion.p variants={itemVariants} className="text-[#bb9457] mb-8 max-w-xl mx-auto">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
      </motion.p>
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        <a href="mailto:robelshemeles4@gmail.com" className="flex items-center gap-2 text-[#ffe6a7] hover:text-[#bb9457] transition-colors text-lg">
          <MailIcon />
          robelshemeles4@gmail.com
        </a>
        <a href="tel:+251703476023" className="flex items-center gap-2 text-[#ffe6a7] hover:text-[#bb9457] transition-colors text-lg">
          <PhoneIcon />
          +251703476023
        </a>
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/Robel231" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors">
              <GitHubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/robel-shemeles-b80a31377" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors">
              <LinkedInIcon className="w-8 h-8" />
          </a>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
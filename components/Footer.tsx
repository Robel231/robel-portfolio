import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-[#140152]">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500 dark:text-slate-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
      >
        <p>&copy; {new Date().getFullYear()} Robel Shemeles Alemayhu. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
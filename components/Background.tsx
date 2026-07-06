import React from 'react';
import { motion } from 'framer-motion';

/** Fixed ambient layer: animated line grid + drifting aurora blobs. Purely decorative. */
const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-70 dark:opacity-50" />

      <motion.div
        className="absolute -top-48 -left-48 w-[42rem] h-[42rem] rounded-full blur-[130px] bg-emerald-400/20 dark:bg-emerald-600/25"
        animate={{ x: [0, 90, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-56 w-[38rem] h-[38rem] rounded-full blur-[130px] bg-teal-400/15 dark:bg-teal-500/15"
        animate={{ x: [0, -80, 0], y: [0, 70, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-64 left-1/4 w-[46rem] h-[46rem] rounded-full blur-[150px] bg-lime-400/10 dark:bg-lime-500/10"
        animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default Background;

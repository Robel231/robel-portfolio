import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon } from './icons/GitHubIcon';

const GitHubStats: React.FC = () => {
    const username = 'Robel231';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mt-16"
        >
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm p-6 md:p-8">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                    <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
                        <GitHubIcon className="w-6 h-6 text-emerald-500 dark:text-emerald-300" />
                        GitHub Activity
                    </h3>
                    <a
                        href={`https://github.com/${username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                    >
                        @{username} →
                    </a>
                </div>
                <div className="overflow-x-auto">
                    <img
                        src={`https://ghchart.rshah.org/059669/${username}`}
                        alt="GitHub Contribution Graph"
                        className="w-full min-w-[640px] dark:hidden"
                        loading="lazy"
                    />
                    <img
                        src={`https://ghchart.rshah.org/34d399/${username}`}
                        alt="GitHub Contribution Graph"
                        className="w-full min-w-[640px] hidden dark:block"
                        loading="lazy"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default GitHubStats;

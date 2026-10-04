import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface TermLine {
  type: 'cmd' | 'out';
  text: string;
  color?: string;
}

const script: TermLine[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'AI Engineer · Full-Stack Developer — Addis Ababa, ET', color: 'text-slate-500 dark:text-slate-400' },
  { type: 'cmd', text: 'ls ~/production' },
  { type: 'out', text: 'drogabooking/  drogapulse/  pharmacy-agent/  hr-assistant/  dcs-wellness/', color: 'text-teal-600 dark:text-teal-300' },
  { type: 'cmd', text: 'status --live' },
  { type: 'out', text: '● DrogaBooking · 82 endpoints · 600+ tests           [LIVE]', color: 'text-emerald-600 dark:text-emerald-400' },
  { type: 'out', text: '● DrogaPulse · FB · IG · LinkedIn · X                [LIVE]', color: 'text-emerald-600 dark:text-emerald-400' },
  { type: 'out', text: '● AI assistants · pharmacy · HR · ERP · supplier     [LIVE]', color: 'text-emerald-600 dark:text-emerald-400' },
  { type: 'cmd', text: 'pip install habesha-names' },
  { type: 'out', text: 'Successfully installed habesha-names-0.2.0', color: 'text-slate-500 dark:text-slate-400' },
  { type: 'cmd', text: 'uptime --production' },
  { type: 'out', text: '99.9% uptime · 20K+ users/month · 0 sleepless clients', color: 'text-slate-500 dark:text-slate-400' },
];

const TYPE_SPEED_MS = 34;
const OUT_DELAY_MS = 260;

/** Terminal window that "types" a session once it scrolls into view. */
const Terminal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (!inView || lineIdx >= script.length) return;

    const line = script[lineIdx];
    if (line.type === 'cmd') {
      if (charIdx < line.text.length) {
        const t = setTimeout(() => setCharIdx(charIdx + 1), TYPE_SPEED_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setLineIdx(lineIdx + 1);
        setCharIdx(0);
      }, 350);
      return () => clearTimeout(t);
    }
    // Output lines appear whole after a short beat
    const t = setTimeout(() => {
      setLineIdx(lineIdx + 1);
      setCharIdx(0);
    }, OUT_DELAY_MS);
    return () => clearTimeout(t);
  }, [inView, lineIdx, charIdx]);

  const done = lineIdx >= script.length;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full max-w-xl mx-auto"
      style={{ perspective: 1000 }}
    >
      {/* Glow behind the window */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-600/25 via-teal-600/20 to-lime-500/20 blur-2xl" aria-hidden="true" />

      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#03130e]/90 backdrop-blur-xl shadow-2xl shadow-slate-900/10 dark:shadow-black/40">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-xs text-slate-500 dark:text-slate-400">robel@droga: ~/production</span>
        </div>

        {/* Session */}
        <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[360px]">
          {script.slice(0, lineIdx + 1).map((line, i) => {
            const isCurrent = i === lineIdx;
            if (line.type === 'cmd') {
              const text = isCurrent ? line.text.slice(0, charIdx) : line.text;
              return (
                <div key={i} className="text-slate-800 dark:text-slate-200">
                  <span className="text-emerald-600 dark:text-emerald-400">$ </span>
                  {text}
                  {isCurrent && !done && <span className="animate-blink text-emerald-500 dark:text-emerald-300">▊</span>}
                </div>
              );
            }
            if (isCurrent) return null; // output pops in once complete
            return (
              <div key={i} className={`whitespace-pre-wrap ${line.color ?? 'text-slate-500 dark:text-slate-400'}`}>
                {line.text}
              </div>
            );
          })}
          {done && (
            <div className="text-slate-800 dark:text-slate-200">
              <span className="text-emerald-600 dark:text-emerald-400">$ </span>
              <span className="animate-blink text-emerald-500 dark:text-emerald-300">▊</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;

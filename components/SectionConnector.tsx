import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Decorative flow line stitching one section into the next:
 * a track that fills as you scroll, a data packet travelling down it,
 * and a pulsing node where the next section begins.
 */
const SectionConnector: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'end 0.55'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative z-0 flex justify-center h-32 md:h-44 -my-10 md:-my-14 pointer-events-none"
    >
      <div className="relative w-px h-full overflow-hidden">
        {/* Track */}
        <div className="absolute inset-0 bg-slate-300/70 dark:bg-white/10" />
        {/* Scroll-drawn fill */}
        <motion.div
          className="absolute inset-0 origin-top bg-gradient-to-b from-emerald-500 via-teal-400 to-lime-400"
          style={{ scaleY }}
        />
        {/* Travelling data packet */}
        <span className="animate-packet absolute left-1/2 -translate-x-1/2 w-[3px] h-10 rounded-full bg-gradient-to-b from-transparent via-emerald-400 to-teal-300 shadow-[0_0_12px_2px_rgba(16,185,129,0.55)]" />
      </div>
      {/* Node at the handoff point */}
      <span className="animate-pulse-node absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 border border-emerald-500/70 dark:border-emerald-400/70 bg-white dark:bg-void" />
    </div>
  );
};

export default SectionConnector;

import type React from 'react';

/** Feeds the cursor position to the CSS spotlight on `.spotlight-card` (--mx / --my). */
export const trackSpotlight = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

import React from 'react';

interface Tech {
  name: string;
  logo: string;
  invertInDark?: boolean;
}

const rowOne: Tech[] = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'LangChain', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C/white' },
  { name: 'n8n', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/n8n-color.png' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', invertInDark: true },
];

const rowTwo: Tech[] = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invertInDark: true },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invertInDark: true },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
];

const Pill: React.FC<{ tech: Tech }> = ({ tech }) => (
  <div className="flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] backdrop-blur-sm px-5 py-2.5 mx-2 whitespace-nowrap hover:border-emerald-400/60 dark:hover:border-emerald-400/40 transition-colors">
    <img
      src={tech.logo}
      alt=""
      loading="lazy"
      className={`w-5 h-5 ${tech.invertInDark ? 'dark:invert' : ''}`}
    />
    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
  </div>
);

const MarqueeRow: React.FC<{ items: Tech[]; reverse?: boolean }> = ({ items, reverse }) => (
  <div className="marquee-row marquee-mask overflow-hidden">
    <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {[...items, ...items].map((tech, i) => (
        <Pill key={`${tech.name}-${i}`} tech={tech} />
      ))}
    </div>
  </div>
);

/** Two counter-scrolling rows of the stack I work with daily. */
const TechMarquee: React.FC = () => (
  <section className="py-10" aria-label="Technologies">
    <div className="space-y-4">
      <MarqueeRow items={rowOne} />
      <MarqueeRow items={rowTwo} reverse />
    </div>
  </section>
);

export default TechMarquee;

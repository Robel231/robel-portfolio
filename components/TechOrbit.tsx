import React from 'react';

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', darkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', darkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original-wordmark.svg' },
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'Git & GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', darkLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'N8N', logo: 'https://n8n.io/favicon.svg' },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Vertex AI', logo: 'https://www.gstatic.com/images/branding/product/2x/vertex_ai_64dp.png' },
];

const TechOrbit: React.FC = () => {
  const radiusPercent = 45;
  const numIcons = technologies.length;

  return (
    <div className="tech-orbit-container">
      <div className="orbit-center-glow"></div>
      <div className="orbit-center-text">Robel</div>
      <div className="tech-orbit-spinner">
        {technologies.map(({ name, logo, darkLogo }, index) => {
          const angleRad = (index / numIcons) * 2 * Math.PI - Math.PI / 2; // Start from top
          const left = 50 + radiusPercent * Math.cos(angleRad);
          const top = 50 + radiusPercent * Math.sin(angleRad);

          return (
            <div
              key={name}
              className="orbit-icon"
              style={{
                top: `${top}%`,
                left: `${left}%`,
              }}
            >
              <div className="orbit-icon-content">
                {darkLogo ? (
                  <>
                    <img src={logo} alt={name} className="w-8 h-8 md:w-9 md:h-9 dark:hidden" />
                    <img src={darkLogo} alt={name} className="w-8 h-8 md:w-9 md:h-9 hidden dark:block dark:invert" />
                  </>
                ) : (
                  <img src={logo} alt={name} className="w-8 h-8 md:w-9 md:h-9" />
                )}
                <span className="orbit-icon-name">{name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechOrbit;
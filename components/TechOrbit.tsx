import React from 'react';
import {
  ReactIcon, NextjsIcon, JavaScriptIcon, PythonIcon, FastApiIcon, NodejsIcon,
  TailwindCssIcon, DockerIcon, PostgresqlIcon, VercelIcon, OpenAiIcon,
  GitIcon, SupabaseIcon, FirebaseIcon, N8nIcon, LinuxIcon, GoogleCloudIcon, VertexAiIcon
} from './icons/TechIcons';

const technologies = [
  { Icon: ReactIcon, name: 'React' },
  { Icon: NextjsIcon, name: 'Next.js' },
  { Icon: JavaScriptIcon, name: 'JavaScript' },
  { Icon: PythonIcon, name: 'Python' },
  { Icon: FastApiIcon, name: 'FastAPI' },
  { Icon: NodejsIcon, name: 'Node.js' },
  { Icon: TailwindCssIcon, name: 'Tailwind CSS' },
  { Icon: DockerIcon, name: 'Docker' },
  { Icon: PostgresqlIcon, name: 'PostgreSQL' },
  { Icon: VercelIcon, name: 'Vercel' },
  { Icon: OpenAiIcon, name: 'OpenAI' },
  { Icon: GitIcon, name: 'Git & GitHub' },
  { Icon: SupabaseIcon, name: 'Supabase' },
  { Icon: FirebaseIcon, name: 'Firebase' },
  { Icon: N8nIcon, name: 'N8N' },
  { Icon: LinuxIcon, name: 'Linux' },
  { Icon: GoogleCloudIcon, name: 'Google Cloud' },
  { Icon: VertexAiIcon, name: 'Vertex AI' },
];

const TechOrbit: React.FC = () => {
  const radiusPercent = 45;
  const numIcons = technologies.length;

  return (
    <div className="tech-orbit-container">
       <div className="orbit-center-glow"></div>
       <div className="orbit-center-text">Robel</div>
      <div className="tech-orbit-spinner">
        {technologies.map(({ Icon, name }, index) => {
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
                <Icon className="w-8 h-8 md:w-9 md:h-9" />
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
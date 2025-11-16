import React from 'react';
import { GraduationCapIcon } from './icons/GraduationCapIcon';
import { SparklesIcon } from './icons/SparklesIcon';
import { LanguagesIcon } from './icons/LanguagesIcon';

const About: React.FC = () => {
  const profileImage = 'https://media.licdn.com/dms/image/v2/D4D03AQETH4rc0gTRaA/profile-displayphoto-scale_200_200/B4DZqCxOaJJMAY-/0/1763130534998?e=1764806400&v=beta&t=lzsOJnZT2LYoj23omdBh9LTh-gB_65yc8YTUnJfl0OQ';

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2 flex justify-center">
           <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#bb9457] to-[#99582a] p-1.5 shadow-lg">
            <img
              src={profileImage}
              alt="Robel Shemeles Alemayhu"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-[#ffe6a7] mb-6">About Me</h2>
          <p className="text-[#bb9457] mb-4">
            I am a dynamic and results-oriented Full-Stack Developer transitioning into the field of Artificial Intelligence. My journey has evolved from establishing robust systems in software testing and system administration to developing full-cycle web applications.
          </p>
          <p className="text-[#bb9457] mb-8">
            Currently, I am focused on leveraging AI and automation, with hands-on experience in fine-tuning models, developing intelligent bots, and engineering sophisticated workflow automations with N8N. I excel at building high-traffic, scalable applications tailored for the Ethiopian market, combining a strong foundation in modern frameworks like React and FastAPI with a passion for creating efficient, AI-driven solutions.
          </p>
          <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-3 text-2xl font-bold text-[#ffe6a7] mb-4">
                  <GraduationCapIcon className="w-7 h-7 text-[#bb9457]" />
                  Education
                </h3>
                <div className="bg-[#6f1d1b]/50 p-6 rounded-lg border border-[#99582a]">
                  <h4 className="font-semibold text-[#bb9457]">B.Sc. in Information Technology</h4>
                  <p className="text-[#bb9457]">Mettu University - Graduated 2023</p>
                  <p className="text-sm text-[#bb9457]/80">CGPA: 3.14</p>
                  <p className="mt-2 text-sm text-[#bb9457]">
                    <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Software Engineering, Database Management Systems, Web Development.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-3 text-2xl font-bold text-[#ffe6a7] mb-4">
                  <SparklesIcon className="w-7 h-7 text-[#bb9457]" />
                  Achievements & Certifications
                </h3>
                 <div className="bg-[#6f1d1b]/50 p-6 rounded-lg border border-[#99582a]">
                  <ul className="list-disc list-inside text-[#bb9457] space-y-2">
                    <li>Certificate from U.S. Embassy for successful completion of the Access Course.</li>
                    <li>Frequently selected to deliver technical presentations on security best practices and live software demonstrations to internal teams.</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="flex items-center gap-3 text-2xl font-bold text-[#ffe6a7] mb-4">
                  <LanguagesIcon className="w-7 h-7 text-[#bb9457]" />
                  Languages
                </h3>
                <div className="bg-[#6f1d1b]/50 p-6 rounded-lg border border-[#99582a]">
                  <ul className="list-disc list-inside text-[#bb9457] space-y-2">
                    <li>Amharic: Native</li>
                    <li>English: Professional Fluency</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
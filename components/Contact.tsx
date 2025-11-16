import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { GitHubIcon } from './icons/GitHubIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 text-center">
      <h2 className="text-3xl font-bold text-[#ffe6a7] mb-4">Get In Touch</h2>
      <p className="text-[#bb9457] mb-8 max-w-xl mx-auto">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        <a href="mailto:robelshemeles4@gmail.com" className="flex items-center gap-2 text-[#ffe6a7] hover:text-[#bb9457] transition-colors text-lg">
          <MailIcon />
          robelshemeles4@gmail.com
        </a>
        <a href="tel:+251703476023" className="flex items-center gap-2 text-[#ffe6a7] hover:text-[#bb9457] transition-colors text-lg">
          <PhoneIcon />
          +251703476023
        </a>
      </div>
      <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/Robel231" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors">
              <GitHubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/robel-shemeles-b80a31377" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#bb9457] hover:text-[#ffe6a7] transition-colors">
              <LinkedInIcon className="w-8 h-8" />
          </a>
      </div>
    </section>
  );
};

export default Contact;
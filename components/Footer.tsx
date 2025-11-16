import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#6f1d1b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-[#bb9457]/80">
        <p>&copy; {new Date().getFullYear()} Robel Shemeles Alemayhu. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
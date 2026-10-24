import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import ScrollProgress from './components/ScrollProgress';
import SectionConnector from './components/SectionConnector';
import Header from './components/Header';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="relative overflow-x-clip bg-slate-50 dark:bg-void text-slate-900 dark:text-slate-200 font-sans antialiased transition-colors duration-300 min-h-screen">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-emerald-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
          >
            Skip to content
          </a>
          <Background />
          <ScrollProgress />
          <Header />
          <main id="main" className="relative z-10">
            <Hero />
            <TechMarquee />
            <SectionConnector />
            <About />
            <SectionConnector />
            <Skills />
            <SectionConnector />
            <Experience />
            <SectionConnector />
            <Projects />
            <SectionConnector />
            <Contact />
          </main>
          <Footer />
        </div>
        <Analytics />
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;

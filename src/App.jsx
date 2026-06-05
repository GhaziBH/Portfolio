import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackgroundFX from './components/BackgroundFX.jsx';

import { useLang } from './context/LanguageContext.jsx';
import { profile } from './data/portfolio.js';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { lang } = useLang();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{profile.name} — {profile.title[lang]}</title>
        <meta name="description" content={profile.title[lang]} />
      </Helmet>

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen overflow-x-hidden">
          <BackgroundFX />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

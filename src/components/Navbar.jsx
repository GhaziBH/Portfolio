import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { profile } from '../data/portfolio.js';

const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/70 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-600 font-display text-lg font-bold text-ink-950 shadow-glow">
            G
          </span>
          <span className="font-display text-sm font-semibold text-ink-100">
            Ben Halima<span className="text-brand-400">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active === s ? 'text-white' : 'text-ink-300 hover:text-white'
                }`}
              >
                {t(`nav.${s}`)}
                {active === s && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10 border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-ink-200 hover:text-white hover:border-brand-400/50 transition-all"
            aria-label="Switch language"
          >
            <Globe size={14} /> {lang.toUpperCase()}
          </button>
          <button
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 hover:text-white hover:border-brand-400/50 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a href={profile.cv} download className="hidden md:inline-flex btn-primary !px-4 !py-2 !text-xs">
            <Download size={14} /> {t('nav.cv')}
          </a>
          <button
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {sections.map((s) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-200 hover:bg-white/5 hover:text-white"
                  >
                    {t(`nav.${s}`)}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={profile.cv} download className="btn-primary w-full justify-center">
                  <Download size={14} /> {t('nav.cv')}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

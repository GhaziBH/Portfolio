import { Heart, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-12 border-t border-white/5 bg-ink-950/60 backdrop-blur">
      <div className="container-x flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-600 font-display text-lg font-bold text-ink-950 shadow-glow">
            G
          </span>
          <div className="text-sm text-ink-300">
            © {year} {profile.name}. {t('footer.rights')}
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-ink-400">
          {t('footer.built')} <Heart size={12} className="text-brand-400" /> {t('footer.by')}
        </div>
        <div className="flex items-center gap-2">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 hover:text-white hover:border-brand-400/50 transition-all">
            <Linkedin size={14} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 hover:text-white hover:border-brand-400/50 transition-all">
            <Github size={14} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 hover:text-white hover:border-brand-400/50 transition-all">
            <Mail size={14} />
          </a>
          <a href="#home" aria-label="Back to top"
            className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-emerald-600 text-ink-950 shadow-glow hover:scale-110 transition-transform">
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

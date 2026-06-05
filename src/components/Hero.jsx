import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { useLang } from '../context/LanguageContext.jsx';
import { profile } from '../data/portfolio.js';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: 'easeOut' } }),
};

export default function Hero() {
  const { t, lang } = useLang();
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container-x">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              {t('hero.available')}
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="mt-6 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl"
            >
              <span className="text-ink-300 text-2xl sm:text-3xl font-medium block mb-2">
                {t('hero.greeting')}
              </span>
              <span>{profile.name.split(' ')[0]} </span>
              <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="mt-4 font-display text-lg font-medium text-brand-300 sm:text-xl"
            >
              {profile.title[lang]}
            </motion.p>

            <motion.p
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg"
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary">
                {t('hero.ctaProjects')} <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} /> {t('hero.ctaContact')}
              </a>
              <a href={profile.cv} download className="btn-ghost">
                <Download size={16} /> CV
              </a>
            </motion.div>

            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="show"
              className="mt-8 flex items-center gap-4"
            >
              <a href={profile.linkedin} target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 transition-all hover:border-brand-400/60 hover:text-white hover:scale-110"
                aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 transition-all hover:border-brand-400/60 hover:text-white hover:scale-110"
                aria-label="GitHub"><Github size={16} /></a>
              <a href={`mailto:${profile.email}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-200 transition-all hover:border-brand-400/60 hover:text-white hover:scale-110"
                aria-label="Email"><Mail size={16} /></a>
              <span className="flex items-center gap-1.5 text-sm text-ink-400">
                <MapPin size={14} /> {profile.location}
              </span>
            </motion.div>

            <motion.div
              custom={6} variants={fadeUp} initial="hidden" animate="show"
              className="mt-10 grid max-w-md grid-cols-3 gap-4"
            >
              <Stat value={`${profile.yearsOfExperience}+`} label={t('hero.stats.years')} />
              <Stat value={`${profile.projectsDelivered}+`} label={t('hero.stats.projects')} />
              <Stat value={`${profile.clients}+`} label={t('hero.stats.clients')} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl shadow-card">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 via-emerald-500/5 to-transparent"
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-emerald-600 font-display text-5xl font-bold text-ink-950 shadow-glow">
                    GB
                  </div>
                  <p className="font-display text-xl font-semibold text-white">{profile.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-brand-300">Full Stack Engineer</p>
                </div>
              </motion.div>
              <FloatingChip className="-top-3 left-6" delay={0}>.NET Core</FloatingChip>
              <FloatingChip className="-top-2 right-4" delay={0.4}>Angular 19</FloatingChip>
              <FloatingChip className="bottom-4 -left-3" delay={0.8}>Azure</FloatingChip>
              <FloatingChip className="-bottom-3 right-8" delay={1.2}>Microservices</FloatingChip>
              <FloatingChip className="top-1/2 -right-4" delay={1.6}>
                <Sparkles size={10} className="text-brand-300" /> CQRS
              </FloatingChip>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
      <div className="font-display text-2xl font-bold gradient-text">{value}</div>
      <div className="mt-1 text-xs text-ink-400">{label}</div>
    </div>
  );
}

function FloatingChip({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + delay, duration: 0.5 }}
      className={`absolute ${className}`}
    >
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3 + delay, ease: 'easeInOut' }}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-900/80 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur shadow-card"
      >
        {children}
      </motion.span>
    </motion.div>
  );
}

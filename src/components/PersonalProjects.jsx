import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { personalProjects } from '../data/portfolio.js';

export default function PersonalProjects() {
  const { t, lang } = useLang();
  return (
    <section id="personal-projects" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('personalProjects.kicker')} title={t('personalProjects.title')} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="card group relative overflow-hidden p-6"
            >
              <div className={`pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                    <p className="mt-1 text-xs font-medium text-brand-300">{p.tagline[lang]}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-brand-400/60 hover:text-white hover:scale-110"
                        aria-label={`${p.name} GitHub`}>
                        <Github size={16} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-all hover:border-emerald-400/60 hover:text-white hover:scale-110"
                        aria-label={`${p.name} Live`}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{p.description[lang]}</p>
                <div className="mt-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300">{t('personalProjects.tech')}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span key={tech} className="pill hover:border-brand-400/50 hover:text-white transition-colors">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

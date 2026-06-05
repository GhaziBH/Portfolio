import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  const { t, lang } = useLang();
  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('projects.kicker')} title={t('projects.title')} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              whileHover={{ y: -6 }}
              className="card group relative overflow-hidden p-6 sm:p-7"
            >
              <div className={`pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">{p.name}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-ink-400">
                      <span className="inline-flex items-center gap-1"><MapPin size={12} /> {p.region}</span>
                      <span className="inline-flex items-center gap-1"><Calendar size={12} /> {p.period}</span>
                    </div>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-ink-300 transition-all group-hover:border-brand-400/60 group-hover:text-white group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-200">{p.description[lang]}</p>
                <div className="mt-5">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-300">{t('projects.tech')}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tech.map((tech) => (
                      <span key={tech} className="pill">{tech}</span>
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

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { experiences } from '../data/portfolio.js';

export default function Experience() {
  const { t, lang } = useLang();
  return (
    <section id="experience" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('experience.kicker')} title={t('experience.title')} />
        <div className="relative mt-14">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-brand-400/60 via-white/10 to-transparent md:left-1/2" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
                className="relative grid gap-4 md:grid-cols-2"
              >
                <span className="absolute left-3 md:left-1/2 top-1 -translate-x-1/2 grid h-6 w-6 place-items-center rounded-full border border-brand-500/40 bg-ink-950 shadow-glow">
                  <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
                </span>

                <div className="pl-10 md:pl-0 md:pr-12 md:text-right">
                  <div className="font-display text-sm uppercase tracking-[0.2em] text-brand-300">
                    {exp.period.start} — {exp.period.end[lang]}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">{exp.company}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-200">{exp.role[lang]}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink-400 md:flex-row-reverse">
                    <MapPin size={12} /> {exp.location}
                  </p>
                </div>

                <div className="pl-10 md:pl-12">
                  <div className="card p-5 sm:p-6">
                    <ul className="space-y-2">
                      {exp.bullets[lang].map((b, k) => (
                        <li key={k} className="flex gap-2 text-sm text-ink-200 leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { languages } from '../data/portfolio.js';

export default function About() {
  const { t, lang } = useLang();
  return (
    <section id="about" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('about.kicker')} title={t('about.title')} />
        <div className="mt-14 grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
            className="card p-6 sm:p-8"
          >
            <p className="text-base leading-relaxed text-ink-200 sm:text-lg">{t('about.body')}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t('about.highlights').map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.1 * i, duration: 0.4 }}
                  className="flex items-start gap-2 text-sm text-ink-200"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-400" size={16} />
                  {h}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6 sm:p-8"
          >
            <h3 className="font-display text-lg font-semibold text-white">{t('about.languages')}</h3>
            <div className="mt-5 space-y-5">
              {languages.map((l, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-ink-100">{l.name[lang]}</span>
                    <span className="text-xs text-brand-300">{l.level[lang]}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${l.value}%` }}
                      viewport={{ once: true }} transition={{ duration: 1, delay: 0.1 * i, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-emerald-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

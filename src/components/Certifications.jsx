import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { certifications, awards } from '../data/portfolio.js';

export default function Certifications() {
  const { t, lang } = useLang();
  return (
    <section id="certifications" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('certifications.kicker')} title={t('certifications.title')} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-emerald-500/10 text-brand-300 ring-1 ring-brand-500/30">
                <Award size={20} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{t('certifications.certs')}</h3>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {certifications.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-ink-200 hover:border-brand-400/50 hover:text-white transition-all"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-emerald-500/10 text-brand-300 ring-1 ring-brand-500/30">
                <Trophy size={20} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{t('certifications.awards')}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {awards[lang].map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex gap-2 text-sm leading-relaxed text-ink-200"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                  {a}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { education } from '../data/portfolio.js';

export default function Education() {
  const { t, lang } = useLang();
  return (
    <section id="education" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('education.kicker')} title={t('education.title')} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card relative overflow-hidden p-6"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl" />
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-emerald-500/10 text-brand-300 ring-1 ring-brand-500/30">
                <GraduationCap size={22} />
              </span>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-300">{e.period}</div>
              <h3 className="mt-2 font-display text-base font-semibold text-white">{e.degree[lang]}</h3>
              <p className="mt-1 text-sm text-ink-300">{e.school[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

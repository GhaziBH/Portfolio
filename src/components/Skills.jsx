import { motion } from 'framer-motion';
import { Code2, Database, Globe, Cog, Workflow, Boxes, Monitor, FlaskConical, Network, ShieldCheck } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { skills } from '../data/portfolio.js';

const groups = [
  { key: 'backend', icon: Code2, items: skills.backend },
  { key: 'frontend', icon: Monitor, items: skills.frontend },
  { key: 'databases', icon: Database, items: skills.databases },
  { key: 'api', icon: Network, items: skills.api },
  { key: 'devops', icon: Cog, items: skills.devops },
  { key: 'architecture', icon: Boxes, items: skills.architecture },
  { key: 'testing', icon: FlaskConical, items: skills.testing },
  { key: 'methods', icon: Workflow, items: skills.methods },
  { key: 'other', icon: Globe, items: skills.other },
];

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('skills.kicker')} title={t('skills.title')} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="card group p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-emerald-500/10 text-brand-300 ring-1 ring-brand-500/30 transition-all group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{t(`skills.groups.${g.key}`)}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span key={item} className="pill hover:border-brand-400/50 hover:text-white transition-colors">{item}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

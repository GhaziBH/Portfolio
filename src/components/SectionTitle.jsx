import { motion } from 'framer-motion';

export default function SectionTitle({ kicker, title, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-display text-3xl font-bold text-ink-50 sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className={`mt-4 h-[3px] w-24 origin-left bg-gradient-to-r from-brand-400 to-transparent ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}

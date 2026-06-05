import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext.jsx';

export default function Loader() {
  const { t } = useLang();
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          className="relative h-24 w-24"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-brand-500/30"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-t-brand-400 border-transparent"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-3xl font-bold gradient-text">G</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm tracking-[0.3em] uppercase text-ink-400"
        >
          {t('loader')}
        </motion.div>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-400 to-emerald-300"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

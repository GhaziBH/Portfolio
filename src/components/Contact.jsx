import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { useLang } from '../context/LanguageContext.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    const subject = encodeURIComponent(form.subject || `Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('sent'), 600);
  };

  const channels = [
    { icon: Mail, label: t('contact.email'), value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: t('contact.phone'), value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: t('contact.location'), value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container-x">
        <SectionTitle kicker={t('contact.kicker')} title={t('contact.title')} />
        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-ink-300">{t('contact.body')}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {channels.map((c, i) => {
              const Icon = c.icon;
              const Tag = c.href ? 'a' : 'div';
              return (
                <Tag key={i} href={c.href} className="card flex items-center gap-4 p-5 group">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-emerald-500/10 text-brand-300 ring-1 ring-brand-500/30 transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-ink-400">{c.label}</div>
                    <div className="truncate font-medium text-white">{c.value}</div>
                  </div>
                </Tag>
              );
            })}
            <div className="flex gap-3 pt-2">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost flex-1 justify-center">
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t('contact.name')} name="name" value={form.name} onChange={onChange} required />
              <Field label={t('contact.subject')} name="subject" value={form.subject} onChange={onChange} />
            </div>
            <div className="mt-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-ink-400">{t('contact.message')}</label>
              <textarea
                name="message" rows={5} required value={form.message} onChange={onChange}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-all focus:border-brand-400/60 focus:bg-white/[0.06]"
                placeholder="..."
              />
            </div>
            <button type="submit" className="btn-primary mt-5 w-full justify-center">
              {status === 'sent' ? (
                <><CheckCircle2 size={16} /> {t('contact.sent')}</>
              ) : (
                <><Send size={16} /> {status === 'sending' ? t('contact.sending') : t('contact.send')}</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-400">{label}</span>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-all focus:border-brand-400/60 focus:bg-white/[0.06]"
      />
    </label>
  );
}

export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.18] dark:opacity-[0.25]" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
    </div>
  );
}

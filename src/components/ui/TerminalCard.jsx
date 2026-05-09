import { GlassCard } from './GlassCard.jsx';

const TERMINAL_LINES = [
  'melisa@portfolio:~$ whoami',
  'Embedded Software & Edge AI Developer',
  '',
  'focus = ["CAN", "STM32", "Machine Learning", "IoT"]',
];

export function TerminalCard() {
  return (
    <GlassCard className="relative overflow-hidden p-5 font-mono text-[13px] leading-relaxed text-neutral-300 sm:p-6 sm:text-sm">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-blue/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-accent-violet/15 blur-3xl" />
      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-[10px] uppercase tracking-wider text-neutral-500">portfolio — bash</span>
      </div>
      <pre className="whitespace-pre-wrap text-neutral-200">
        {TERMINAL_LINES.join('\n')}
        <span className="motion-safe-pulse ml-0.5 inline-block h-4 w-2 animate-pulse bg-accent-blue align-middle opacity-80" />
      </pre>
    </GlassCard>
  );
}

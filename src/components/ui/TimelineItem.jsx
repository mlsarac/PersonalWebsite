import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard.jsx';

const typeStyles = {
  education: 'border-accent-blue/30 bg-accent-blue/10 text-accent-blue',
  work: 'border-accent-violet/35 bg-accent-violet/10 text-accent-violet',
  project: 'border-white/20 bg-white/[0.06] text-neutral-200',
};

export function TimelineItem({ item, index }) {
  const badgeClass = typeStyles[item.type] ?? typeStyles.project;

  return (
    <motion.li
      className="relative pl-10 sm:pl-12"
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="absolute left-[7px] top-2 z-10 flex h-3 w-3 items-center justify-center sm:left-[9px]">
        <span className="absolute h-3 w-3 rounded-full bg-ink ring-2 ring-accent-blue/40" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-accent-blue" />
      </span>
      <GlassCard className="group relative p-5 sm:p-6" hoverGlow>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${badgeClass}`}>
            {item.type === 'education'
              ? 'Education'
              : item.type === 'work'
                ? 'Experience'
                : 'Project'}
          </span>
          <span className="font-mono text-xs text-neutral-500">{item.period}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
        {item.organization ? (
          <p className="mt-1 text-sm font-medium text-accent-blue/75">{item.organization}</p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.description}</p>
      </GlassCard>
    </motion.li>
  );
}

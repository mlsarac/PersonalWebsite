import { motion } from 'framer-motion';
import { Github, Info } from 'lucide-react';
import { GlassCard } from './GlassCard.jsx';
import { Button } from './Button.jsx';

export function ProjectCard({ title, description, tags, githubUrl, onDetails, details }) {
  return (
    <motion.div
      className="group relative h-full rounded-xl p-px transition-[filter,transform] duration-500 ease-out"
      style={{
        background:
          'linear-gradient(135deg, rgba(56,189,248,0.22) 0%, rgba(30,58,138,0.18) 45%, rgba(15,23,42,0.5) 100%)',
      }}
      initial={false}
      whileHover={{
        y: -6,
        transition: { type: 'spring', stiffness: 380, damping: 28 },
      }}
    >
      <div className="rounded-[11px] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-shadow duration-500 group-hover:shadow-[0_0_36px_-12px_rgba(56,189,248,0.18)]">
        <GlassCard
          as="div"
          className="flex h-full flex-col rounded-[10px] border-0 bg-[rgba(15,23,42,0.58)] p-6 shadow-none ring-0 backdrop-blur-xl"
          hoverGlow={false}
        >
          <h3 className="font-display text-lg font-semibold tracking-tight text-neutral-50">{title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-sky-500/15 bg-sky-950/30 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-sky-200/75"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={githubUrl} variant="primary" className="flex-1 sm:flex-none" aria-label={`${title} on GitHub`}>
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </Button>
            {details ? (
              <Button type="button" variant="ghost" className="flex-1 sm:flex-none" onClick={onDetails}>
                <Info className="h-4 w-4" aria-hidden />
                Details
              </Button>
            ) : null}
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

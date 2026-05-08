import { motion } from 'framer-motion';
import { Github, Info } from 'lucide-react';
import { GlassCard } from './GlassCard.jsx';
import { Button } from './Button.jsx';

export function ProjectCard({ title, description, tags, githubUrl, onDetails, details }) {
  return (
    <GlassCard
      as={motion.article}
      initial={false}
      className="flex h-full flex-col p-6"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
    >
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-white/10 bg-black/30 px-2 py-0.5 font-mono text-[11px] text-accent-blue/95"
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
  );
}

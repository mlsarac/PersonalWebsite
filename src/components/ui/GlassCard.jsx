import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', hoverGlow = true, as: Component = motion.div, ...props }) {
  const base =
    'relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-glass transition-shadow duration-300';

  const hover =
    hoverGlow !== false
      ? 'hover:border-accent-blue/25 hover:shadow-glow'
      : '';

  return (
    <Component className={`${base} ${hover} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

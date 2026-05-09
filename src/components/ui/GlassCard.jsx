import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', hoverGlow = true, as: Component = motion.div, ...props }) {
  const base =
    'relative rounded-xl border border-white/[0.06] bg-[rgba(15,23,42,0.35)] shadow-sm backdrop-blur-xl transition-[box-shadow,border-color] duration-300';

  const hover =
    hoverGlow !== false
      ? 'hover:border-sky-500/20 hover:shadow-[0_0_36px_-14px_rgba(56,189,248,0.15)]'
      : '';

  return (
    <Component className={`${base} ${hover} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

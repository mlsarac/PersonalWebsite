import { motion } from 'framer-motion';

export function Chip({ children }) {
  return (
    <motion.span
      className="cursor-default rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-xs font-medium text-neutral-300 shadow-inner transition-colors duration-300 hover:border-accent-violet/35 hover:bg-accent-violet/10 hover:text-neutral-100 hover:shadow-glow-violet"
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.span>
  );
}

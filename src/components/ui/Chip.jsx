import { motion } from 'framer-motion';

export function Chip({ children }) {
  return (
    <motion.span
      className="cursor-default rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-white"
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      {children}
    </motion.span>
  );
}

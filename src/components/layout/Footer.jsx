import { motion } from 'framer-motion';
import { useMotionPrefs } from '../../utils/motion.js';

export function Footer() {
  const { fadeUp, viewportOnce } = useMotionPrefs();

  return (
    <motion.footer
      className="border-t border-white/[0.07] py-12 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <p className="mx-auto max-w-md font-mono text-xs leading-relaxed text-neutral-500">
        © {new Date().getFullYear()} Melisa Araç. Built with React, Tailwind, and curiosity.
      </p>
      <p className="mt-2 font-mono text-[11px] text-neutral-600">Designed &amp; developed by Melisa Araç.</p>
    </motion.footer>
  );
}

import { useReducedMotion } from 'framer-motion';

export function useMotionPrefs() {
  const reduced = useReducedMotion();

  const duration = reduced ? 0.01 : 0.55;
  const durationSlow = reduced ? 0.01 : 0.7;
  const stagger = reduced ? 0 : 0.08;

  const fadeUp = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durationSlow, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: reduced ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: reduced ? 0 : 0.06 },
    },
  };

  const viewportOnce = { once: true, amount: 0.2 };

  return { fadeUp, fadeIn, staggerContainer, viewportOnce, reduced, duration };
}

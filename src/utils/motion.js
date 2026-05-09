import { useReducedMotion } from 'framer-motion';

export function useMotionPrefs() {
  const reduced = useReducedMotion();

  const duration = reduced ? 0.01 : 0.55;
  const durationSlow = reduced ? 0.01 : 0.72;
  const stagger = reduced ? 0 : 0.09;

  /** Scroll’da hafif yükselme + hafif fade (içerik kaybolmuyor) */
  const fadeUp = {
    hidden: { opacity: reduced ? 1 : 0.88, y: reduced ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durationSlow, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: reduced ? 1 : 0.9 },
    visible: {
      opacity: 1,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: reduced ? 0 : 0.08 },
    },
  };

  const viewportOnce = { once: true, amount: 0.12, margin: '0px 0px -40px 0px' };

  return { fadeUp, fadeIn, staggerContainer, viewportOnce, reduced, duration };
}

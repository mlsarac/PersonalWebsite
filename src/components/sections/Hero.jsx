import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { Button } from '../ui/Button.jsx';
import { TerminalCard } from '../ui/TerminalCard.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function Hero() {
  const { fadeUp, staggerContainer, reduced } = useMotionPrefs();

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pb-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent-violet/90">Portfolio</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Melisa Araç
            </h1>
            <p className="mt-3 font-display text-lg text-accent-blue sm:text-xl">Computer Engineering Student</p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
              I build intelligent systems close to the hardware, focusing on embedded software, Edge AI, automotive
              systems, and practical machine learning applications.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects">
                View Projects
                <ArrowDownRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ delay: reduced ? 0 : 0.12 }}>
            <TerminalCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

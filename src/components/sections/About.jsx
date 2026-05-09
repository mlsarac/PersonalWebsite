import { motion } from 'framer-motion';
import { aboutParagraph, technologies, technologiesIntro } from '../../data/about.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function About() {
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();

  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading eyebrow="/ about me" />
          </motion.div>
          <motion.p variants={fadeUp} className="text-base leading-relaxed text-neutral-400">
            {aboutParagraph}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-5 sm:p-6"
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-sky-400/90">Toolkit</p>
            <p className="mt-2 text-sm leading-snug text-neutral-300">{technologiesIntro}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {technologies.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-lg border border-sky-500/20 bg-sky-500/[0.08] px-3 py-1.5 text-sm font-medium text-neutral-100 shadow-sm transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-sky-400/35 hover:bg-sky-500/[0.12]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { aboutParagraph, technologies } from '../../data/about.js';
import { Chip } from '../ui/Chip.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function About() {
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();

  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading eyebrow="/ about" title="Profile" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-sm leading-relaxed text-neutral-400 sm:text-base"
          >
            {aboutParagraph}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-2.5">
            {technologies.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { beyondItems } from '../../data/beyond.js';
import { GlassCard } from '../ui/GlassCard.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function BeyondSoftware() {
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();

  return (
    <section id="beyond" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading eyebrow="/ interests" title="Beyond Software" />
        </motion.div>
        <motion.div
          className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {beyondItems.map((label) => (
            <motion.div key={label} variants={fadeUp}>
              <GlassCard
                as={motion.div}
                className="flex min-h-[72px] items-center justify-center px-3 py-4 text-center"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <span className="text-sm font-medium text-neutral-300">{label}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

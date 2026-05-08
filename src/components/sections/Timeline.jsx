import { motion } from 'framer-motion';
import { timelineItems } from '../../data/timeline.js';
import { TimelineItem } from '../ui/TimelineItem.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function Timeline() {
  const { fadeUp, viewportOnce } = useMotionPrefs();

  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading
            eyebrow="/ timeline"
            title="Experience & Education"
            description="A concise path through academics, industry internships, and research-oriented engineering work."
          />
        </motion.div>
        <div className="relative mt-4">
          <div className="absolute left-[11px] top-2 bottom-6 w-px bg-gradient-to-b from-accent-blue/50 via-white/15 to-transparent sm:left-[13px]" />
          <ul className="relative space-y-8">
            {timelineItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

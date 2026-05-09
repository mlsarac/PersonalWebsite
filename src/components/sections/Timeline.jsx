import { motion } from 'framer-motion';
import { timelineItems } from '../../data/timeline.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function Timeline() {
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();
  const last = timelineItems.length - 1;

  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading eyebrow="/ experience" title="Path" description="Education, industry, and research-aligned work." />
        </motion.div>
        <motion.ul
          className="mt-8 flex flex-col"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {timelineItems.map((item, index) => {
            const badge =
              item.type === 'education'
                ? 'bg-sky-950/50 text-sky-300 ring-sky-500/25'
                : item.type === 'work'
                  ? 'bg-blue-950/40 text-blue-200/90 ring-blue-500/20'
                  : 'bg-white/[0.05] text-neutral-300 ring-white/10';
            return (
              <motion.li key={item.id} variants={fadeUp} className="flex gap-5">
                <div className="flex w-9 shrink-0 flex-col items-center">
                  <span className="timeline-node relative mt-2 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-sky-400/40 bg-[#030712] shadow-[0_0_12px_rgba(56,189,248,0.45)] ring-2 ring-sky-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400/95" />
                  </span>
                  {index < last ? (
                    <div
                      className="timeline-line mt-2 min-h-[5rem] w-px flex-1 bg-gradient-to-b from-sky-500/50 via-blue-500/25 to-transparent shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className={`min-w-0 flex-1 border-b border-white/[0.05] pb-10 ${index === last ? 'border-b-0 pb-0' : ''}`}>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex rounded-md px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ring-1 ${badge}`}
                    >
                      {item.type === 'education'
                        ? 'Education'
                        : item.type === 'work'
                          ? 'Experience'
                          : 'Project'}
                    </span>
                    <span className="font-mono text-xs text-neutral-500">{item.period}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-50">{item.title}</h3>
                  {item.organization ? (
                    <p className="mt-0.5 text-sm font-medium text-sky-400/75">{item.organization}</p>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.description}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

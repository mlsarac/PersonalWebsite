import { motion } from 'framer-motion';
import { currentFocusLines } from '../../data/currentFocus.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function CurrentFocus() {
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();

  return (
    <section id="current-focus" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading
            eyebrow="/ current_focus"
            title="Active threads"
            description="Problems and domains occupying design and research cycles lately."
          />
        </motion.div>
        <motion.div
          className="mt-8 overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(15,23,42,0.45)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <div className="border-b border-white/[0.06] bg-black/20 px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
            ~/research/log
          </div>
          <div className="space-y-0 px-4 py-4 sm:px-5 sm:py-5">
            {currentFocusLines.map((line) => (
              <motion.div
                key={line}
                variants={fadeUp}
                className="flex gap-3 border-l-2 border-sky-500/25 py-2 pl-4 font-mono text-sm leading-relaxed text-neutral-300 first:pt-0 last:pb-0 hover:border-sky-400/40"
              >
                <span className="-ml-1 shrink-0 select-none text-sky-500/70" aria-hidden>
                  &gt;
                </span>
                <span>{line}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

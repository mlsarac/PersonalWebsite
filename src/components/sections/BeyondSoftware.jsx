import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Music4, Palette, PenLine } from 'lucide-react';
import { beyondItems } from '../../data/beyond.js';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

const beyondIcons = {
  violin: Music4,
  ceramics: Palette,
  writing: PenLine,
  hardware: Cpu,
  research: BrainCircuit,
};

export function BeyondSoftware() {
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();

  return (
    <section id="beyond" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading
            eyebrow="/ beyond_engineering"
            title="Outside the terminal"
            description="Discipline and curiosity beyond schematics and stack traces."
          />
        </motion.div>
        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {beyondItems.map((item) => {
            const Icon = beyondIcons[item.id];
            return (
            <motion.article
              key={item.id}
              variants={fadeUp}
              className="group rounded-xl border border-white/[0.07] bg-[rgba(15,23,42,0.35)] p-5 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-sky-500/20 hover:shadow-[0_12px_40px_-16px_rgba(15,23,42,0.9)]"
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/15 bg-sky-500/[0.06] text-sky-400/85 transition-[border-color,background-color,color] duration-300 group-hover:border-sky-400/25 group-hover:bg-sky-500/10 group-hover:text-sky-300"
                  aria-hidden
                >
                  {Icon ? <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.85} /> : null}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold tracking-tight text-neutral-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 transition-colors group-hover:text-neutral-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

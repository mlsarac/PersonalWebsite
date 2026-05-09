import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects.js';
import { ProjectCard } from '../ui/ProjectCard.jsx';
import { Modal } from '../ui/Modal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

const GITHUB_PROFILE = 'https://github.com/mlsarac';

export function Projects() {
  const [active, setActive] = useState(null);
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="/ software"
            title="Selected projects"
            description="Firmware-adjacent tooling, protocol stacks, edge inference, and low-level design exercises."
          />
          <a
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 shrink-0 font-mono text-sm text-sky-400/90 transition-colors hover:text-sky-300 hover:underline sm:mb-10"
          >
            View all on GitHub →
          </a>
        </motion.div>
        <motion.div
          className="grid gap-5 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((p) => (
            <motion.div key={p.id} variants={fadeUp}>
              <ProjectCard {...p} onDetails={p.details ? () => setActive(p) : undefined} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Modal open={Boolean(active)} onClose={() => setActive(null)} title={active?.title ?? ''}>
        {active?.details}
      </Modal>
    </section>
  );
}

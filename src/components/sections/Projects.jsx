import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects.js';
import { ProjectCard } from '../ui/ProjectCard.jsx';
import { Modal } from '../ui/Modal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

export function Projects() {
  const [active, setActive] = useState(null);
  const { fadeUp, viewportOnce, staggerContainer } = useMotionPrefs();

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading
            eyebrow="/ software"
            title="Selected Projects"
            description="Systems spanning embedded tooling, automotive networks, edge inference, and processor design."
          />
        </motion.div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {projects.map((p) => (
            <motion.div key={p.id} variants={fadeUp}>
              <ProjectCard
                {...p}
                onDetails={p.details ? () => setActive(p) : undefined}
              />
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

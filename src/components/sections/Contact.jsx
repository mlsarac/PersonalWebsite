import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { contactLinks } from '../../data/contact.js';
import { GlassCard } from '../ui/GlassCard.jsx';
import { Button } from '../ui/Button.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { useMotionPrefs } from '../../utils/motion.js';

const icons = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  cv: FileDown,
};

export function Contact() {
  const { fadeUp, viewportOnce } = useMotionPrefs();

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading
            eyebrow="/ contact"
            title="Let's build something precise"
            description="Reach out for internships, collaborations, or technical discussions."
          />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <GlassCard className="p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              {contactLinks.map((item) => {
                const Icon = icons[item.id];
                const isPlaceholder = item.href === '#';
                return (
                  <Button
                    key={item.id}
                    href={item.href}
                    variant={item.id === 'github' ? 'primary' : 'ghost'}
                    external={item.external}
                    className="min-h-[44px] w-full justify-center sm:w-auto"
                    aria-label={item.label}
                    onClick={
                      isPlaceholder
                        ? (e) => {
                            e.preventDefault();
                          }
                        : undefined
                    }
                  >
                    {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden /> : null}
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

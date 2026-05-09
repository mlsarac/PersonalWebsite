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
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <SectionHeading
            eyebrow="/ contact"
            title="Say hello"
            description="Reach out for collaborations, technical discussions, or embedded / edge opportunities."
          />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
          <GlassCard className="border-white/[0.06] bg-[rgba(15,23,42,0.4)] p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center sm:gap-x-3 sm:gap-y-3">
              {contactLinks.map((item) => {
                const Icon = icons[item.id];
                const isPlaceholder = item.href === '#';
                return (
                  <Button
                    key={item.id}
                    href={item.href}
                    variant="contact"
                    external={item.external}
                    className="min-h-[46px] flex-1 justify-center sm:min-w-[140px] sm:flex-none"
                    aria-label={item.label}
                    onClick={
                      isPlaceholder
                        ? (e) => {
                            e.preventDefault();
                          }
                        : undefined
                    }
                  >
                    {Icon ? <Icon className="h-4 w-4 shrink-0 opacity-90" aria-hidden /> : null}
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

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#current-focus', label: 'Focus' },
  { href: '#beyond', label: 'Beyond' },
  { href: '#contact', label: 'Contact' },
];

const easeOut = [0.22, 1, 0.36, 1];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  const close = () => setOpen(false);

  const linkMotion = (i) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.08 + i * 0.05, ease: easeOut },
        };

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-slate-950/35 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-2xl backdrop-saturate-150"
      initial={reduced ? undefined : { opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduced ? { duration: 0 } : { duration: 0.52, ease: easeOut }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <motion.a
          href="#"
          className="group shrink-0"
          title="Melisa Araç"
          aria-label="Melisa Araç — Ana sayfa"
          onClick={close}
          initial={reduced ? undefined : { opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={reduced ? undefined : { duration: 0.48, ease: easeOut }}
        >
          <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-violet-400 bg-clip-text font-display text-[0.95rem] font-semibold tracking-tight text-transparent transition-[filter,opacity] duration-300 group-hover:brightness-110 sm:text-base">
            melisa
          </span>
        </motion.a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="nav-link-premium text-[13px] font-medium text-neutral-400 transition-colors duration-300 hover:text-sky-100/95"
              {...linkMotion(i)}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-neutral-200 transition-colors hover:border-white/20 hover:bg-white/[0.06] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-white/[0.07] bg-slate-950/70 px-4 py-4 backdrop-blur-2xl md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="flex flex-col gap-0.5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: reduced ? 0 : 0.055,
                    delayChildren: reduced ? 0 : 0.04,
                  },
                },
              }}
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/[0.06] hover:text-sky-200"
                  variants={{
                    hidden: { opacity: reduced ? 1 : 0, x: reduced ? 0 : -12 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.32, ease: easeOut },
                    },
                  }}
                  onClick={close}
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

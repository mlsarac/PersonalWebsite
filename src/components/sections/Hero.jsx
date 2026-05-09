import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const HEADLINE = "hi, i'm melisa";
const easeOut = [0.22, 1, 0.36, 1];
/** Metin önce düz renk; bu karakterden sonra "melisa" mavi–mor gradient */
const PREFIX = "hi, i'm ";
const PREFIX_LEN = PREFIX.length;

function renderTypingName(visibleCount) {
  if (visibleCount === 0) return null;
  const full = HEADLINE;
  if (visibleCount <= PREFIX_LEN) {
    return <span className="tracking-tight text-neutral-100">{full.slice(0, visibleCount)}</span>;
  }
  return (
    <>
      <span className="text-neutral-100">{PREFIX}</span>
      <span className="bg-gradient-to-r from-sky-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
        {full.slice(PREFIX_LEN, visibleCount)}
      </span>
    </>
  );
}

export function Hero() {
  const [len, setLen] = useState(0);
  const reduced = useReducedMotion();

  const introContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : 0.1,
        delayChildren: reduced ? 0 : 0.05,
      },
    },
  };

  const introItem = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.62, ease: easeOut },
    },
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLen(HEADLINE.length);
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setLen(i);
      if (i >= HEADLINE.length) {
        window.clearInterval(id);
      }
    }, 72);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pb-28 sm:pt-40 lg:pt-48">
      <div className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full bg-sky-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-16 h-56 w-56 rounded-full bg-blue-950/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.28]" />

      <motion.div
        className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
        variants={introContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={introItem}
          className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-sky-500/70"
        >
          Embedded systems · Edge AI · Automotive software
        </motion.p>

        <div className="max-w-2xl">
          <motion.h1
            variants={introItem}
            className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
            aria-label={HEADLINE}
          >
            {renderTypingName(len)}
            <span
              className="ml-1.5 inline-block h-[1.05em] w-[3px] translate-y-1 rounded-sm bg-sky-400/90 align-middle sm:h-[1.08em] cursor-blink-block"
              aria-hidden
            />
          </motion.h1>

          <motion.p
            variants={introItem}
            className="mt-8 max-w-xl text-lg font-medium leading-snug text-neutral-300 sm:text-xl"
          >
            Building intelligent systems close to the hardware.
          </motion.p>

          <motion.p
            variants={introItem}
            className="mt-5 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-[0.95rem]"
          >
            Computer engineering student — embedded software, automotive networks, edge inference, and practical ML where
            constraints matter.
          </motion.p>

          <motion.p
            variants={introItem}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-500"
          >
            <a
              href="#projects"
              className="font-mono text-sky-400/90 underline decoration-white/15 underline-offset-[6px] transition-all duration-300 hover:text-sky-300 hover:decoration-sky-500/40"
            >
              Software
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href="#experience"
              className="font-mono text-sky-400/90 underline decoration-white/15 underline-offset-[6px] transition-all duration-300 hover:text-sky-300 hover:decoration-sky-500/40"
            >
              Experience
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href="#contact"
              className="font-mono text-sky-400/90 underline decoration-white/15 underline-offset-[6px] transition-all duration-300 hover:text-sky-300 hover:decoration-sky-500/40"
            >
              Contact
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

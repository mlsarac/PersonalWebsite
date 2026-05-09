import { motion } from 'framer-motion';

const variants = {
  primary:
    'border-sky-500/80 bg-sky-600/95 text-white shadow-sm shadow-sky-900/30 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-sky-400 hover:bg-sky-500 hover:shadow-md hover:shadow-sky-500/25 active:scale-[0.98]',
  ghost:
    'border-white/15 bg-white/[0.05] text-neutral-100 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white/25 hover:bg-white/[0.1] active:scale-[0.98]',
  /** Contact satırı: dengeli, varsayılan yumuşak; hover’da hafif glow */
  contact:
    'border-white/10 bg-white/[0.03] text-neutral-200 shadow-none transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-sky-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_28px_-8px_rgba(56,189,248,0.22)] hover:text-white active:translate-y-0 active:scale-[0.99]',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  type = 'button',
  external,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium ${variants[variant]} ${className}`;

  if (href) {
    const isHttp = /^https?:\/\//i.test(href);
    const openInNewTab = external ?? isHttp;

    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: variant === 'contact' ? 0 : -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 450, damping: 24 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

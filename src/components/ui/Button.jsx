import { motion } from 'framer-motion';

const variants = {
  primary:
    'border-accent-blue/35 bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/15 hover:border-accent-blue/50 hover:shadow-glow',
  ghost:
    'border-white/15 bg-white/[0.03] text-neutral-100 hover:border-white/25 hover:bg-white/[0.06]',
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href);
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-blue/90">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p> : null}
    </div>
  );
}

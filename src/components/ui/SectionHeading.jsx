export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow ? (
        <p className="mb-4 font-mono text-sm font-medium lowercase tracking-wide text-sky-400/90 transition-colors duration-500 hover:text-sky-300/85">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      ) : null}
      {description ? <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p> : null}
    </div>
  );
}

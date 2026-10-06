import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  id,
}: SectionHeadingProps) {
  const centered = align === 'center';
  const light = tone === 'light';

  return (
    <Reveal className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p
          className={`mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${
            light ? 'text-mint' : 'text-petrol'
          }`}
        >
          <span aria-hidden="true" className={`h-px w-8 ${light ? 'bg-mint/70' : 'bg-petrol/60'}`} />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-[1.85rem] leading-[1.2] font-light tracking-tight text-balance sm:text-4xl lg:text-[2.6rem] ${
          light ? 'text-cream' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <div
          className={`mt-6 text-base leading-relaxed sm:text-[1.05rem] ${light ? 'text-cream/85' : 'text-ink'}`}
        >
          {description}
        </div>
      )}
    </Reveal>
  );
}

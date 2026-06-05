import React from 'react';
import { SplitText } from './SplitText';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, className = '' }: SectionHeadingProps) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="font-sans font-bold text-[10px] tracking-[0.18em] uppercase text-royal">
        {eyebrow}
      </span>
      <SplitText
        as="h2"
        text={title}
        delay={0.1}
        className="font-display font-bold text-3xl md:text-5xl tracking-tight text-cream leading-tight"
      />
    </div>
  );
};

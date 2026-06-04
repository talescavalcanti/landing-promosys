import React from 'react';
import { cn } from '@/lib/utils';

export const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ backgroundColor: 'var(--glass-bg)', ...props.style }}
        className={cn(
          "backdrop-blur-[16px] border border-black/10 dark:border-white/5 rounded-2xl shadow-xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

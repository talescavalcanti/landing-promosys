import React from 'react';
import { cn } from '@/lib/utils';

export const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-[rgba(5,7,10,0.65)] backdrop-blur-[16px] border border-white/5 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.45)]",
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

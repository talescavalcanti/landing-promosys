"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

// Omitimos `children` do HTMLMotionProps porque ele inclui MotionValue,
// que não é um ReactNode válido para renderizar dentro de um <span>.
interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, children, ...props }, ref) => {
    // Aplicando a forma de "Pílula" (rounded-full) exigida pelas skills Premium.
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-[var(--dur-sm)] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-light focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed rounded-full group overflow-hidden";
    
    // Sombras premium de 2 camadas no primary, sem afetar as cores dos outros no hover.
    const variants = {
      primary: "bg-royal text-[#ffffff] shadow-[0_5.98px_23.2px_0_rgba(49,121,219,0.2),0_14.3px_53.7px_0_rgba(49,121,219,0.5)] border border-royal-light/30 hover:text-oxford",
      secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
      outline: "border border-royal/50 text-cream hover:bg-white/5",
      ghost: "text-white/70 hover:text-white hover:bg-white/5"
    };

    const buttonProps = {
      className: cn(baseStyles, variants[variant], className),
      whileTap: { scale: 0.98 },
      transition: { type: "spring" as const, stiffness: 400, damping: 25 },
      ...props
    };

    // Efeito de preenchimento lento de baixo pra cima
    const fillElement = variant === "primary" ? (
      <span className="absolute inset-0 w-full h-full bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[800ms] ease-out-quart z-0"></span>
    ) : null;

    if (href) {
      return (
        <motion.a href={href} {...(buttonProps as any)}>
          {fillElement}
          <span className="relative z-10 flex items-center">{children}</span>
        </motion.a>
      );
    }

    return (
      <motion.button ref={ref} {...buttonProps}>
        {fillElement}
        <span className="relative z-10 flex items-center">{children}</span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

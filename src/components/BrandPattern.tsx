import React from "react";

/**
 * Textura institucional Promosys (grafismo isométrico de "degraus").
 * Aplicada via CSS mask para permitir recolorir o pattern em qualquer tom.
 * Puramente decorativa — sempre aria-hidden.
 */
interface BrandPatternProps {
  className?: string;
  /** Cor das linhas do pattern (qualquer valor CSS). Default: royal. */
  color?: string;
  /** Tamanho do motivo em px. Default: 600. */
  size?: number;
}

export const BrandPattern = ({ className = "", color = "var(--royal)", size = 600 }: BrandPatternProps) => {
  const mask = {
    WebkitMaskImage: "url(/pattern.svg)",
    maskImage: "url(/pattern.svg)",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: `${size}px`,
    maskSize: `${size}px`,
    backgroundColor: color,
  } as React.CSSProperties;

  return <div aria-hidden="true" className={`pointer-events-none ${className}`} style={mask} />;
};

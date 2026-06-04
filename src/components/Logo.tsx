import React from "react";

/**
 * Símbolo oficial da marca: o triângulo-"play" de cantos arredondados
 * (extraído do grafismo isométrico do manual). Usa `currentColor`, então
 * controle a cor via `text-*` no className. Escala sem perda por ser SVG.
 */
export const Logo = ({ className = "", title }: { className?: string; title?: string }) => {
  return (
    <img
      src="/logo-promosys-branca-leve.png"
      alt={title || "Promosys Logo"}
      className={`${className} object-contain`}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
    />
  );
};

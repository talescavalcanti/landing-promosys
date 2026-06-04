"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  /** Tag semântica do wrapper (h1, h2, h3, p, span...). Default: span. */
  as?: React.ElementType;
  className?: string;
  /** "words" (default, máscara de linha por palavra), "chars" ou "phrase". */
  by?: "words" | "chars" | "phrase";
  delay?: number;
  /** Intervalo entre unidades (words/chars). */
  stagger?: number;
  duration?: number;
  once?: boolean;
  /** Palavras a destacar (recebem highlightClass). */
  highlightWords?: string[];
  highlightClass?: string;
}

// Easing de cauda longa (expo.out) — igual à referência.
const EASE = [0.16, 1, 0.3, 1] as const;

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

// Texto com palavras destacadas (modo phrase — herdam o transform do wrapper).
function withHighlights(
  text: string,
  highlightWords?: string[],
  highlightClass?: string
): React.ReactNode {
  if (!highlightWords?.length) return text;
  const parts = text.split(" ");
  return parts.map((w, i) => {
    const clean = w.replace(/[.,!?;:]/g, "");
    const isHighlight = highlightWords.includes(clean);
    return (
      <React.Fragment key={i}>
        {isHighlight ? <span className={highlightClass}>{w}</span> : w}
        {i < parts.length - 1 ? " " : ""}
      </React.Fragment>
    );
  });
}

/**
 * Animação de entrada de texto — máscara de linha por palavra (estilo editorial):
 * cada palavra sobe de trás de uma borda invisível (yPercent 110 -> 0), com stagger.
 * Parâmetros iguais à referência: duration 0.9, stagger 0.05, ease expo.out.
 * A máscara (.word / .word__inner) está em globals.css.
 *
 * Respeita prefers-reduced-motion via <MotionConfig reducedMotion="user">: sob
 * reduce o transform é descartado e fica só o fade de opacidade (reduzir, não remover).
 */
export const SplitText = ({
  text,
  as = "span",
  className = "",
  by = "words",
  delay = 0,
  stagger = 0.05,
  duration = 0.9,
  once = true,
  highlightWords,
  highlightClass = "",
}: SplitTextProps) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  // Modo frase: anima o elemento inteiro como uma unidade.
  if (by === "phrase") {
    const tag = typeof as === "string" ? as : "span";
    const MotionTag = (MOTION_TAGS[tag as keyof typeof MOTION_TAGS] ??
      motion.span) as React.ElementType;
    return (
      <MotionTag
        ref={ref}
        className={className}
        initial={{ y: "0.5em", opacity: 0 }}
        animate={inView ? { y: "0em", opacity: 1 } : { y: "0.5em", opacity: 0 }}
        transition={{ duration, delay, ease: EASE }}
      >
        {withHighlights(text, highlightWords, highlightClass)}
      </MotionTag>
    );
  }

  // Modos words/chars: máscara de linha (a unidade sobe de trás da borda).
  const units = by === "chars" ? Array.from(text) : text.split(" ");
  const children = units.map((unit, i) => {
    const clean = unit.replace(/[.,!?;:]/g, "");
    const isHighlight = by === "words" && !!highlightWords?.includes(clean);
    const mask = (
      <span className="word">
        <motion.span
          className={`word__inner ${isHighlight ? highlightClass : ""}`}
          initial={{ y: "110%", opacity: 0 }}
          animate={inView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
          transition={{ duration, delay: delay + i * stagger, ease: EASE }}
        >
          {unit}
        </motion.span>
      </span>
    );
    return by === "words" && i < units.length - 1 ? (
      <React.Fragment key={i}>
        {mask}{" "}
      </React.Fragment>
    ) : (
      <React.Fragment key={i}>{mask}</React.Fragment>
    );
  });

  return React.createElement(as, { ref, className }, children);
};

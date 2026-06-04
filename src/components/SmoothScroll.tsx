"use client";
import Lenis from '@studio-freight/lenis';
import { MotionConfig } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

export function SmoothScroll({ children }: { children: ReactNode }) {
  // Lê o override de desenvolvimento (/#motion) já no primeiro render do cliente.
  const [forceMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.location.hash === '#motion' || new URLSearchParams(window.location.search).has('motion');
  });

  useEffect(() => {
    if (forceMotion) document.documentElement.classList.add('force-motion');

    // Sob "reduzir movimento" real (e sem override), não sequestra o scroll.
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [forceMotion]);

  // reducedMotion="user": Framer respeita o SO — desliga transform/layout mas
  // MANTÉM fades de opacidade (reduzir, não remover). Com /#motion vira "never".
  return <MotionConfig reducedMotion={forceMotion ? 'never' : 'user'}>{children}</MotionConfig>;
}

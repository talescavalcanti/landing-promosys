"use client";
import Lenis from 'lenis';
import { MotionConfig } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';
import { prefersReducedMotion } from '@/lib/motion';

export function SmoothScroll({ children }: { children: ReactNode }) {
  // Lê o override de desenvolvimento (/#motion) já no primeiro render do cliente.
  const [forceMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.location.hash === '#motion' || new URLSearchParams(window.location.search).has('motion');
  });

  // Mobile (≤767px) = experiência estática: sem scroll suave nem animações Framer.
  const [isMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 767px)').matches;
  });

  useEffect(() => {
    if (forceMotion) document.documentElement.classList.add('force-motion');

    // Sem scroll suave no mobile ou sob "reduzir movimento".
    if (isMobile || prefersReducedMotion()) return;

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
  }, [forceMotion, isMobile]);

  // Mobile: reducedMotion="always" (Framer sem transform/layout). Desktop: respeita
  // o SO ("user") ou força tudo com /#motion ("never").
  return (
    <MotionConfig reducedMotion={isMobile ? 'always' : forceMotion ? 'never' : 'user'}>
      {children}
    </MotionConfig>
  );
}

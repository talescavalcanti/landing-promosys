"use client";

import React, { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export const Resultados = () => {
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, { once: true, margin: "-15% 0px" });

  useEffect(() => {
    if (!inView || !container.current) return;
    const nums = Array.from(container.current.querySelectorAll<HTMLElement>(".metric-number"));

    // Mobile = estático: número final, sem contagem.
    if (window.matchMedia("(max-width: 767px)").matches) {
      nums.forEach((num) => { num.innerText = num.dataset.target || "0"; });
      return;
    }

    const controls = nums.map((num) => {
      const target = parseFloat(num.dataset.target || "0");
      return animate(0, target, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate: (v) => { num.innerText = Math.round(v).toString(); },
      });
    });
    return () => controls.forEach((c) => c.stop());
  }, [inView]);

  return (
    <section className="w-full py-24 bg-background border-y border-white/5 relative z-10" ref={container} id="resultados">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
           <Reveal delay={0.1}>
             <div className="flex flex-col items-center text-center gap-4">
                <div className="font-display font-bold text-5xl md:text-7xl text-royal-light flex items-baseline">
                  <span className="text-3xl md:text-4xl mr-1 text-royal-light/80">Até</span>
                  <span className="metric-number" data-target="40">0</span>
                  <span className="text-3xl md:text-4xl ml-1 text-royal-light/80">%</span>
                </div>
                <p className="text-cream/70 text-lg uppercase tracking-wider font-medium">menos tempo de atendimento</p>
             </div>
           </Reveal>
           <Reveal delay={0.2}>
             <div className="flex flex-col items-center text-center gap-4">
                <div className="font-display font-bold text-5xl md:text-7xl text-royal-light flex items-baseline">
                  <span className="text-3xl md:text-4xl mr-1 text-royal-light/80">+</span>
                  <span className="metric-number" data-target="300">0</span>
                  <span className="text-3xl md:text-4xl ml-1 text-royal-light/80">%</span>
                </div>
                <p className="text-cream/70 text-lg uppercase tracking-wider font-medium">conversão com dado atualizado</p>
             </div>
           </Reveal>
           <Reveal delay={0.3}>
             <div className="flex flex-col items-center text-center gap-4">
                <div className="font-display font-bold text-5xl md:text-7xl text-royal-light flex items-baseline">
                  <span className="metric-number" data-target="100">0</span>
                  <span className="text-3xl md:text-4xl ml-1 text-royal-light/80">%</span>
                </div>
                <p className="text-cream/70 text-lg uppercase tracking-wider font-medium">do funil sob controle gerencial</p>
             </div>
           </Reveal>
        </div>
      </div>
    </section>
  );
};

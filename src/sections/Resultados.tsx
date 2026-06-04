"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Reveal } from "@/components/Reveal";
import { SplitText } from "@/components/SplitText";

const metrics = [
  { value: 40, prefix: "Até ", suffix: "%", label: "menos tempo de atendimento" },
  { value: 300, prefix: "+", suffix: "%", label: "conversão com dados atualizados" },
  { value: 100, prefix: "", suffix: "%", label: "do funil sob controle gerencial" }
];

export const Resultados = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const nums = gsap.utils.toArray('.metric-number') as HTMLElement[];

    nums.forEach(num => {
      const target = parseFloat(num.dataset.target || "0");
      gsap.fromTo(num, 
        { innerText: 0 },
        { 
          innerText: target, 
          duration: 2.5, 
          ease: "power1.out",
          scrollTrigger: {
            trigger: num,
            start: "top 85%",
          },
          snap: { innerText: 1 },
          onUpdate: function() {
            num.innerText = Math.round(Number(this.targets()[0].innerText)).toString();
          }
        }
      );
    });
  }, { scope: container });

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
                <SplitText as="p" text="menos tempo de atendimento" className="text-cream/70 text-lg uppercase tracking-wider font-medium" />
             </div>
           </Reveal>
           <Reveal delay={0.2}>
             <div className="flex flex-col items-center text-center gap-4">
                <div className="font-display font-bold text-5xl md:text-7xl text-royal-light flex items-baseline">
                  <span className="text-3xl md:text-4xl mr-1 text-royal-light/80">+</span>
                  <span className="metric-number" data-target="300">0</span>
                  <span className="text-3xl md:text-4xl ml-1 text-royal-light/80">%</span>
                </div>
                <SplitText as="p" text="conversão com dado atualizado" className="text-cream/70 text-lg uppercase tracking-wider font-medium" />
             </div>
           </Reveal>
           <Reveal delay={0.3}>
             <div className="flex flex-col items-center text-center gap-4">
                <div className="font-display font-bold text-5xl md:text-7xl text-royal-light flex items-baseline">
                  <span className="metric-number" data-target="100">0</span>
                  <span className="text-3xl md:text-4xl ml-1 text-royal-light/80">%</span>
                </div>
                <SplitText as="p" text="do funil sob controle gerencial" className="text-cream/70 text-lg uppercase tracking-wider font-medium" />
             </div>
           </Reveal>
        </div>
      </div>
    </section>
  );
};

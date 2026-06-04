"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SplitText } from "@/components/SplitText";

const features = [
  {
    title: "Campanha Pronta",
    desc: "Qualifique a base inteira antes da primeira ligação.",
    reverse: false,
    mock: (
      <div className="w-full h-full bg-background rounded-2xl border border-white/10 p-6 flex flex-col gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(var(--azul-tec)_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="h-4 w-1/3 bg-white/10 rounded-full mb-2"></div>
        <div className="flex gap-2">
           <div className="h-8 w-20 bg-royal/20 rounded-lg border border-royal/30"></div>
           <div className="h-8 w-24 bg-white/5 rounded-lg border border-white/10"></div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
           {[1,2,3].map(i => (
             <div key={i} className="h-12 w-full bg-white/5 rounded-xl border border-white/10 flex items-center px-4 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10"></div>
                  <div className="w-24 h-2 bg-white/20 rounded-full"></div>
                </div>
                <div className="w-16 h-4 bg-royal/20 rounded-full border border-royal/30"></div>
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    title: "Consultas IN100 & Master",
    desc: "Margem e histórico atualizados em tempo real, sem sair da tela.",
    reverse: true,
    mock: (
      <div className="w-full h-full bg-background rounded-2xl border border-white/10 p-6 flex flex-col gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(var(--azul-tec)_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="flex justify-between items-end mb-4">
           <div className="w-32 h-32 rounded-full border-[8px] border-royal/20 border-t-royal border-r-royal rotate-45"></div>
           <div className="flex flex-col gap-2 w-1/2">
             <div className="w-full h-8 bg-white/5 rounded-lg border border-white/10"></div>
             <div className="w-full h-8 bg-white/5 rounded-lg border border-white/10"></div>
           </div>
        </div>
      </div>
    )
  },
  {
    title: "Simulador Inteligente",
    desc: "A melhor taxa e prazo calculados na hora, dentro da política vigente.",
    reverse: false,
    mock: (
      <div className="w-full h-full bg-background rounded-2xl border border-white/10 p-6 flex flex-col gap-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(var(--azul-tec)_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="w-full h-24 bg-royal/10 border border-royal/30 rounded-xl flex items-center justify-center mb-2">
           <span className="text-royal font-display font-bold text-3xl">R$ 15.430,00</span>
        </div>
        <div className="flex gap-4 w-full">
           <div className="flex-1 h-12 bg-white/5 rounded-lg border border-white/10"></div>
           <div className="flex-1 h-12 bg-white/5 rounded-lg border border-white/10"></div>
        </div>
        <div className="w-full h-10 bg-royal/20 border border-royal/30 rounded-lg mt-2 flex items-center justify-center">
           <span className="w-1/3 h-2 bg-royal rounded-full"></span>
        </div>
      </div>
    )
  }
];

export const Recursos = () => {
  return (
    <section className="w-full py-24 md:py-32 relative z-10" id="recursos">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-24 md:gap-32">
        {features.map((feat, idx) => (
          <div key={idx} className={`flex flex-col gap-10 md:gap-16 items-center ${feat.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="w-full md:w-1/2">
              <SectionHeading
                eyebrow={`[ 0${idx + 1} ] — Módulo`}
                title={feat.title}
              />
              <SplitText
                as="p"
                text={feat.desc}
                delay={0.15}
                className="text-xl text-cream/70 mt-6 leading-relaxed"
              />
            </div>
            <div className="w-full md:w-1/2 h-[22rem] md:h-[28rem]">
              <Reveal delay={0.2} className="h-full">
                 {feat.mock}
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

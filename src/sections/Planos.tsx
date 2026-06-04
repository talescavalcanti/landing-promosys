"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { SplitText } from "@/components/SplitText";

export const Planos = () => {
  return (
    <section className="w-full py-24 relative z-10" id="planos">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <SplitText
            as="h2"
            text="Invista na sua operação"
            className="font-display font-bold text-4xl md:text-5xl text-cream tracking-tight mb-4"
          />
          <SplitText
            as="p"
            text="Um plano completo com tudo que sua promotora precisa para decolar."
            delay={0.15}
            className="text-sagrado text-lg"
          />
        </div>

        <Reveal delay={0.1}>
          {/* Pricing Card (Padrão) */}
          <div className="relative w-full max-w-[360px] mx-auto rounded-3xl p-8 pb-10 bg-royal shadow-[0_25px_60px_rgba(49,121,219,0.3)] flex flex-col gap-6 transform hover:-translate-y-2 transition-transform duration-500 overflow-hidden isolate">
             
             {/* Badge */}
             <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full w-fit border border-white/10">
               <span className="w-1.5 h-1.5 rounded-full bg-cream shadow-[0_0_8px_var(--cream)]"></span>
               <span className="text-[10px] font-bold text-cream tracking-[0.18em] uppercase">Recomendado</span>
             </div>

             <div className="flex flex-col gap-1">
               <SplitText as="h3" text="Promosys Pro" className="text-white font-semibold text-2xl" />
               <SplitText
                 as="p"
                 text="O ecossistema completo para operações que querem escalar."
                 delay={0.1}
                 className="text-white/70 text-sm leading-relaxed"
               />
             </div>

             <div className="flex items-baseline gap-2 font-variant-numeric tabular-nums">
               <span className="text-white/80 font-medium text-2xl">R$</span>
               <span className="text-white font-bold text-6xl tracking-tighter">179<span className="text-4xl">,90</span></span>
               <span className="text-white/60 font-medium text-sm">/mês</span>
             </div>

             <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2 w-[calc(100%+2rem)] -ml-4"></div>

             <ul className="flex flex-col gap-4">
               {[
                 "Módulo de consultas estruturadas",
                 "Geração de leads qualificados",
                 "Integração nativa com discadores",
                 "Sincronismo bancário contínuo",
                 "CRM e Gestão de Funil"
               ].map((feat, i) => (
                 <li key={i} className="flex items-start gap-3 text-white/90 text-sm font-medium">
                   <div className="mt-1 w-2 h-2 shrink-0 rounded-[2px] bg-white"></div>
                   {feat}
                 </li>
               ))}
             </ul>

             <Button className="mt-4 w-full !py-4 shadow-lg bg-white text-royal hover:bg-cream hover:text-oxford border-transparent">
               Começar agora
             </Button>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

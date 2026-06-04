"use client";

import React from "react";
import { Search, Clock, Target, TrendingDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/Reveal";
import { SplitText } from "@/components/SplitText";

const painPoints = [
  {
    icon: <Search className="w-6 h-6 text-royal-light" />,
    title: "Prospecção no escuro",
    desc: "Localizar contatos com perfil e margem certos é um obstáculo constante e desgastante."
  },
  {
    icon: <Clock className="w-6 h-6 text-royal-light" />,
    title: "Tempo desperdiçado",
    desc: "Horas perdidas montando e refazendo filtros manuais todos os dias."
  },
  {
    icon: <Target className="w-6 h-6 text-royal-light" />,
    title: "Conversão fria",
    desc: "Sem um dado qualificado na entrada, a abordagem não converte como deveria."
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-royal-light" />,
    title: "Zero previsibilidade",
    desc: "Campanhas sem critério geram um resultado flutuante e inconstante."
  }
];

export const Dores = () => {
  return (
    <section className="w-full py-24 md:py-32 relative z-10" id="dores">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
        
        <SectionHeading
          eyebrow="O Problema"
          title="A rotina do correspondente trava sua margem."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, idx) => (
            <Reveal key={idx} delay={0.1 * idx} className="h-full">
              <GlassCard className="group p-8 flex flex-col gap-6 h-full hover:-translate-y-2 hover:border-royal/40 hover:shadow-[0_8px_30px_rgba(49,121,219,0.15)] transition-all duration-500 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-royal/20 group-hover:scale-110 group-hover:border-royal/30 group-hover:shadow-[0_0_20px_rgba(49,121,219,0.2)]">
                  {React.cloneElement(point.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-royal-light transition-transform duration-500 group-hover:scale-110" })}
                </div>
                <div className="flex flex-col gap-2">
                  <SplitText
                    as="h3"
                    text={point.title}
                    className="text-xl font-display font-semibold text-cream"
                  />
                  <SplitText
                    as="p"
                    text={point.desc}
                    delay={0.1}
                    className="text-cream/70 text-sm leading-relaxed"
                  />
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

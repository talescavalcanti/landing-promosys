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
      <div className="w-full h-full bg-[#030407] rounded-[2rem] border border-white/5 p-8 flex flex-col gap-6 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] group">
        {/* Subtle top glow & Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(49,121,219,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        {/* Inner Content */}
        <div className="relative z-10 flex flex-col h-full mt-2">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
             <div>
                <div className="text-cream text-sm font-semibold mb-1">Campanha de Servidores</div>
                <div className="text-white/40 text-[10px] uppercase tracking-wider">4.205 registros processados</div>
             </div>
             <div className="flex gap-2">
                <span className="px-2 py-1 bg-royal/20 border border-royal/30 rounded text-[10px] text-royal-light font-medium">Auto-Filtro ON</span>
             </div>
          </div>
          
          {/* Labels */}
          <div className="flex gap-3 mb-4">
             <div className="flex-1 py-2 text-center bg-royal/10 rounded-lg border border-royal/20 shadow-[0_0_15px_rgba(49,121,219,0.15)] group-hover:bg-royal/20 transition-colors cursor-pointer">
                <span className="text-[10px] uppercase tracking-wider text-royal-light font-bold">1.840 Qualificados</span>
             </div>
             <div className="flex-1 py-2 text-center bg-white/[0.04] rounded-lg border border-white/[0.08] group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors cursor-pointer">
                <span className="text-[10px] uppercase tracking-wider text-white/50 group-hover:text-red-400 font-bold">2.365 Descartados</span>
             </div>
          </div>
          
          {/* List of Leads */}
          <div className="flex flex-col gap-3 mt-auto">
             {[
               { n: 'Carlos S.', tag: 'Margem Alta', val: 'R$ 1.200' },
               { n: 'Maria J.', tag: 'Portabilidade', val: 'R$ 850' },
               { n: 'Roberto A.', tag: 'Refinanciamento', val: 'R$ 2.400' }
             ].map((lead, i) => (
               <div key={i} className="w-full bg-white/[0.02] rounded-xl border border-white/[0.05] flex items-center px-4 py-3 justify-between group-hover:bg-white/[0.06] hover:!bg-royal/10 hover:!border-royal/30 transition-all duration-300 cursor-pointer hover:translate-x-1">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-royal/20 border border-royal/30 flex items-center justify-center text-royal-light text-xs font-bold">{lead.n.charAt(0)}</div>
                    <div className="flex flex-col">
                      <span className="text-xs text-cream font-medium">{lead.n}</span>
                      <span className="text-[9px] text-white/40 uppercase">{lead.tag}</span>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-[10px] text-green-400 font-mono font-bold">
                    {lead.val}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Consultas IN100 & Master",
    desc: "Margem e histórico atualizados em tempo real, sem sair da tela.",
    reverse: true,
    mock: (
      <div className="w-full h-full bg-[#030407] rounded-[2rem] border border-white/5 p-8 flex flex-col relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(49,121,219,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
           {/* Visualizer Principal */}
           <div className="relative w-40 h-40 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
             <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-white/[0.1] animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute inset-2 rounded-full border-[8px] border-white/[0.03]"></div>
             {/* Active Progress IN100 */}
             <div className="absolute inset-2 rounded-full border-[8px] border-transparent border-t-royal border-r-royal rotate-45 group-hover:rotate-[225deg] transition-transform duration-[1.5s] ease-out-quart shadow-[0_0_30px_rgba(49,121,219,0.3)]"></div>
             
             {/* Inner Text */}
             <div className="flex flex-col items-center justify-center bg-background/50 rounded-full w-[80%] h-[80%] backdrop-blur-sm border border-white/[0.05]">
                <span className="text-white/50 text-[9px] uppercase tracking-[0.2em] mb-1">Margem Livre</span>
                <span className="text-2xl font-display font-bold text-cream drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">R$ 840<span className="text-sm text-royal-light">,00</span></span>
             </div>
           </div>
           
           {/* Status Cards */}
           <div className="flex flex-col gap-3 w-full">
             <div className="w-full bg-white/[0.02] rounded-xl border border-white/[0.05] p-3 flex items-center justify-between group-hover:bg-white/[0.04] transition-colors cursor-pointer hover:!border-royal/30">
                <div className="flex flex-col">
                   <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-0.5">Consulta IN100</span>
                   <span className="text-xs text-cream">Sincronizado há 2 min</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[9px] text-green-400 uppercase font-bold tracking-wider">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Ativo
                </div>
             </div>
             
             <div className="w-full bg-royal/[0.05] rounded-xl border border-royal/[0.15] p-3 flex items-center justify-between group-hover:bg-royal/[0.1] transition-colors cursor-pointer hover:!border-royal-light/40">
                <div className="flex flex-col">
                   <span className="text-[10px] text-royal-light/70 uppercase tracking-widest font-semibold mb-0.5">Histórico Master</span>
                   <span className="text-xs text-cream">2 Contratos Ativos</span>
                </div>
                <div className="text-[10px] text-royal-light font-mono font-bold">Ver Detalhes &rarr;</div>
             </div>
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
      <div className="w-full h-full bg-[#030407] rounded-[2rem] border border-white/5 p-8 flex flex-col relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] group">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(49,121,219,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Result Display */}
          <div className="w-full bg-royal/[0.05] border border-royal/20 rounded-2xl flex flex-col items-center justify-center p-6 shadow-[inset_0_0_30px_rgba(49,121,219,0.1)] group-hover:bg-royal/[0.08] group-hover:border-royal/40 transition-colors duration-500 cursor-default">
             <span className="text-royal/60 text-[9px] uppercase tracking-[0.2em] font-medium mb-2">Liberação Estimada</span>
             <span className="text-royal-light font-display font-bold text-[2.5rem] leading-none drop-shadow-[0_0_15px_rgba(49,121,219,0.4)] tracking-tight">
               <span className="text-xl text-royal-light/70 mr-1">R$</span>15.430
             </span>
             <div className="flex items-center gap-2 mt-3 text-[10px] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
               <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
               Taxa 1,66% a.m.
             </div>
          </div>
          
          {/* Controls */}
          <div className="flex flex-col gap-3 mt-6">
             <div className="text-[10px] text-white/50 uppercase tracking-widest font-semibold ml-1">Prazos Sugeridos</div>
             <div className="flex gap-2 w-full">
                {['60x', '72x', '84x'].map((prazo, idx) => (
                  <div key={idx} className={`flex-1 py-2 text-center rounded-lg border text-xs font-bold cursor-pointer transition-all duration-300 hover:-translate-y-0.5
                    ${idx === 2 
                      ? 'bg-royal/20 border-royal/40 text-royal-light shadow-[0_4px_10px_rgba(49,121,219,0.2)]' 
                      : 'bg-white/[0.02] border-white/[0.08] text-white/50 hover:bg-white/[0.06] hover:text-white'}`}>
                    {prazo}
                  </div>
                ))}
             </div>
          </div>
          
          {/* Action Button */}
          <button className="w-full py-3.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl mt-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 shadow-[0_5px_20px_rgba(255,255,255,0.15)]">
             <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/20 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
             Gerar Proposta
          </button>
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

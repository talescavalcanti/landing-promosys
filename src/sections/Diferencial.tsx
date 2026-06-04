import React from "react";
import { Reveal } from "@/components/Reveal";
import { SplitText } from "@/components/SplitText";
import { GlassCard } from "@/components/GlassCard";

export const Diferencial = () => {
  return (
    <section className="w-full py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-16">
        <div className="text-center flex flex-col items-center gap-8 max-w-4xl">
          <Reveal>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal/10 border border-royal/30 rounded-full text-royal-light text-sm font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(49,121,219,0.15)]">
               <span className="w-2 h-2 rounded-full bg-royal-light"></span>
               Feito por quem opera
             </div>
          </Reveal>
          <SplitText
            as="h2"
            text="Nascido dentro de uma financeira."
            className="font-display font-bold text-4xl md:text-6xl tracking-tight text-cream leading-tight"
          />
          <Reveal delay={0.1}>
             <p className="text-xl md:text-2xl text-cream/70 leading-relaxed font-light">
               O Promosys foi criado pelos donos de uma operação real de crédito — <strong className="text-cream font-medium">cada função resolve uma dor que eles mesmos viveram.</strong>
             </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <Reveal delay={0.2} className="h-full">
            <GlassCard className="group p-8 flex flex-col gap-4 h-full transform hover:-translate-y-2 hover:border-royal/40 transition-all duration-500 cursor-default shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-royal/10 border border-royal/20 flex items-center justify-center mb-2 transition-all duration-500 group-hover:bg-royal/20 group-hover:scale-110 group-hover:border-royal/30 group-hover:shadow-[0_0_20px_rgba(49,121,219,0.2)]">
                <svg className="w-6 h-6 text-royal-light transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-cream">Foco em conversão</h3>
              <p className="text-sagrado/70 text-sm leading-relaxed">
                Nada de métricas de vaidade. Construímos ferramentas que impactam diretamente no seu VGV e na comissão do final do mês.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.3} className="h-full">
            <GlassCard className="group p-8 flex flex-col gap-4 h-full transform hover:-translate-y-2 hover:border-royal/40 transition-all duration-500 cursor-default shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-royal/10 border border-royal/20 flex items-center justify-center mb-2 transition-all duration-500 group-hover:bg-royal/20 group-hover:scale-110 group-hover:border-royal/30 group-hover:shadow-[0_0_20px_rgba(49,121,219,0.2)]">
                <svg className="w-6 h-6 text-royal-light transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-cream">Prevenção nativa</h3>
              <p className="text-sagrado/70 text-sm leading-relaxed">
                Sabemos como as fraudes ocorrem na ponta. Nossos bloqueios sistêmicos previnem dores de cabeça com os bancos.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.4} className="h-full">
            <GlassCard className="group p-8 flex flex-col gap-4 h-full transform hover:-translate-y-2 hover:border-royal/40 transition-all duration-500 cursor-default shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-royal/10 border border-royal/20 flex items-center justify-center mb-2 transition-all duration-500 group-hover:bg-royal/20 group-hover:scale-110 group-hover:border-royal/30 group-hover:shadow-[0_0_20px_rgba(49,121,219,0.2)]">
                <svg className="w-6 h-6 text-royal-light transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-cream">Sem fricção</h3>
              <p className="text-sagrado/70 text-sm leading-relaxed">
                A operação não pode parar para preencher formulários intermináveis. Automatizamos tudo o que é possível.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

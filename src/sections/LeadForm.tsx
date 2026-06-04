"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { SplitText } from "@/components/SplitText";
import { Button } from "@/components/Button";
import { GlassCard } from "@/components/GlassCard";

export const LeadForm = () => {
  return (
    <section className="w-full py-24 relative z-10" id="contato">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        
        <div className="text-center mb-12 flex flex-col items-center">
           <Reveal>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal/10 border border-royal/30 rounded-full text-royal-light text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(49,121,219,0.15)]">
               <span className="w-1.5 h-1.5 rounded-full bg-royal"></span>
               Fale Conosco
             </div>
           </Reveal>
           <SplitText
             as="h2"
             text="Melhor sistema de CRM do Brasil para crédito consignado"
             className="text-3xl md:text-5xl font-display font-bold text-cream tracking-tight max-w-2xl mx-auto leading-tight"
           />
        </div>

        <Reveal delay={0.2} className="w-full">
          <GlassCard className="w-full p-8 md:p-12 relative overflow-hidden isolate shadow-2xl">
            <span aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-transparent dark:bg-royal/20 blur-[80px]" />
            <span aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-transparent dark:bg-azul-tec/20 blur-[80px]" />
            
            <form className="w-full flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-cream ml-1">Nome completo</label>
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full p-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-cream placeholder:text-sagrado focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-all duration-300" 
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-cream ml-1">WhatsApp com DDD</label>
                <input 
                  type="tel" 
                  placeholder="(00) 00000-0000" 
                  className="w-full p-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-cream placeholder:text-sagrado focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-all duration-300" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-cream ml-1">E-mail corporativo</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="w-full p-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-cream placeholder:text-sagrado focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-all duration-300" 
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-sm font-semibold text-cream ml-1">Como você chegou até nós?</label>
                <div className="relative">
                  <select 
                    defaultValue=""
                    className="w-full p-4 rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-cream focus:outline-none focus:border-royal focus:ring-1 focus:ring-royal transition-all duration-300 appearance-none [&>option]:bg-background [&>option]:text-cream"
                  >
                    <option value="" disabled className="text-sagrado">Selecione uma opção...</option>
                    <option value="google">Pesquisa no Google</option>
                    <option value="instagram">Instagram / Redes Sociais</option>
                    <option value="indicacao">Indicação de um parceiro</option>
                    <option value="outros">Outros</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sagrado">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button variant="primary" className="w-full !py-5 text-lg uppercase tracking-wide shadow-[0_0_30px_rgba(49,121,219,0.2)]">
                  Enviar Agora
                </Button>
                <p className="text-center text-xs text-sagrado mt-5">
                  Seus dados estão 100% seguros com o Promosys.
                </p>
              </div>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
};

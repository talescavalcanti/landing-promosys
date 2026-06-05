import React from "react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

import { SplitText } from "@/components/SplitText";

export const Footer = () => {
  return (
    <footer className="w-full relative z-10 mt-20">
      
      {/* Final CTA Block */}
      <div className="max-w-5xl mx-auto px-4 mb-20 relative z-20" id="cta">
        <div className="w-full py-20 px-8 md:px-16 bg-royal rounded-3xl relative overflow-hidden isolate shadow-[0_25px_60px_rgba(49,121,219,0.3)] flex flex-col items-center text-center gap-10">
          
          <div className="flex flex-col gap-4 items-center">
            <SplitText
              as="h2"
              text="Seu ponto de partida começa aqui."
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#ffffff] tracking-tight"
            />
            <p className="text-[#ffffff]/80 text-lg md:text-xl max-w-2xl mt-2">
              Dê o próximo passo para transformar a sua operação de crédito. Junte-se a centenas de empresas que já escalam com a Promosys.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[#ffffff] font-medium text-sm md:text-base">
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ffffff] rounded-sm"></div> Implantação rápida</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ffffff] rounded-sm"></div> Suporte dedicado</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-[#ffffff] rounded-sm"></div> Escalabilidade garantida</span>
          </div>

          <Button href="#" className="!px-10 !py-5 !text-lg !font-bold shadow-xl !bg-oxford !text-white !border-oxford/50 hover:!text-oxford mt-2">
            Agendar demonstração
          </Button>
        </div>
      </div>

      {/* Corporate Links */}
      <div className="w-full bg-background border-t border-sagrado/10 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <span className="flex items-center">
              <Logo className="h-8 md:h-10 w-auto" title="Promosys" />
            </span>
            <SplitText
              as="p"
              text="Inteligência de mercado, tecnologia e dados para o ecossistema de crédito consignado no Brasil."
              className="text-sm text-sagrado/70 leading-relaxed max-w-xs"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SplitText as="h4" text="Institucional" className="text-cream font-semibold" />
            <a href="#" className="text-sm text-sagrado/70 hover:text-white transition-colors">Sobre a Promosys</a>
            <a href="#" className="text-sm text-sagrado/70 hover:text-white transition-colors">Carreiras</a>
            <a href="#" className="text-sm text-sagrado/70 hover:text-white transition-colors">Imprensa</a>
          </div>
          <div className="flex flex-col gap-4">
            <SplitText as="h4" text="Plataforma" className="text-cream font-semibold" />
            <a href="#hub" className="text-sm text-sagrado/70 hover:text-white transition-colors">Ecossistema</a>
            <a href="#resultados" className="text-sm text-sagrado/70 hover:text-white transition-colors">Resultados</a>
            <a href="#dores" className="text-sm text-sagrado/70 hover:text-white transition-colors">Desafios</a>
          </div>
          <div className="flex flex-col gap-4">
            <SplitText as="h4" text="Contato" className="text-cream font-semibold" />
            <a href="#" className="text-sm text-sagrado/70 hover:text-white transition-colors">contato@promosys.com.br</a>
            <a href="#" className="text-sm text-sagrado/70 hover:text-white transition-colors">Suporte</a>
            <a href="#" className="text-sm text-sagrado/70 hover:text-white transition-colors">Comercial</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sagrado/70">
          <p>© 2026 Promosys. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">LGPD</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

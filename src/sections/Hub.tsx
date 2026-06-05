"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X, Phone, Users, Shield, Calculator, MessageCircle, BarChart3, Target, LayoutGrid, Layers, Check, ArrowRight } from "lucide-react";
import { SplitText } from "@/components/SplitText";
import { Button } from "@/components/Button";
import { prefersReducedMotion } from "@/lib/motion";

const getIcon = (id: string, className = "w-6 h-6 text-sagrado") => {
  const props = { className };
  switch(id) {
    case 'campanha': return <Target {...props} />;
    case 'filtro': return <LayoutGrid {...props} />;
    case 'in100': return <Shield {...props} />;
    case 'master': return <Layers {...props} />;
    case 'ura': return <Phone {...props} />;
    case 'simulador': return <Calculator {...props} />;
    case 'canais': return <MessageCircle {...props} />;
    case 'crm': return <Users {...props} />;
    case 'convenios': return <LayoutGrid {...props} />;
    case 'discador': return <BarChart3 {...props} />;
    default: return <Target {...props} />;
  }
};

const MODULES = [
  { id:'campanha',  group:'left',  angle: 252, label:'Campanha Pronta', desc:'Qualificação automática de clientes por segmentações inteligentes em tempo real.', bullets:['Processa grandes volumes instantaneamente','Elimina registros sem potencial','Segmentação dinâmica'] },
  { id:'filtro',    group:'left',  angle: 216, label:'Filtro Avançado', desc:'Segmentação refinada combinando múltiplas variáveis para a oferta certa.', bullets:['Cruza margem, convênio e perfil','Listas prontas para discagem','Sem filtros manuais'] },
  { id:'in100',     group:'left',  angle: 180, label:'Consulta IN100', desc:'Atualização automática e em tempo real da margem disponível do cliente.', bullets:['Margem atualizada na hora','Segurança jurídica na proposta','Reduz recusas na esteira'] },
  { id:'master',    group:'left',  angle: 144, label:'Consulta Master', desc:'Visão 360°: margem mais todo o histórico de contratos vigentes.', bullets:['Oportunidades de portabilidade','Refinanciamento mapeado','Histórico completo'] },
  { id:'ura',       group:'left',  angle: 108, label:'URA Reversa', desc:'Transforma chamadas perdidas em novas oportunidades de contato.', bullets:['Recupera leads que ligaram','Retorno automático','Mais aproveitamento'] },
  { id:'simulador', group:'right', angle: -72, label:'Simulador Inteligente', desc:'Comparação de taxas, prazos e condições em tempo real.', bullets:['Cruza políticas bancárias','Melhor cenário na hora','Proposta mais assertiva'] },
  { id:'canais',    group:'right', angle: -36, label:'Multicanais', desc:'WhatsApp, e-mail e SMS centralizados em uma única tela de operação.', bullets:['Atendimento omnichannel','Histórico unificado','Menos troca de telas'] },
  { id:'crm',       group:'right', angle: 0,   label:'Gestão de Clientes', desc:'Painel completo para negociações, agendamentos e funil de vendas.', bullets:['Funil e metas visíveis','Histórico de interações','Controle gerencial'] },
  { id:'convenios', group:'right', angle: 36,  label:'Convênios Diversos', desc:'Configuração nativa para INSS, SIAPE, FGTS, prefeituras e mais.', bullets:['Múltiplos públicos','Governos e Forças Armadas','Pronto para escalar'] },
  { id:'discador',  group:'right', angle: 72,  label:'Discador Automático', desc:'Acelera o ritmo de discagem para maximizar o tempo de conversão.', bullets:['Mais ligações por hora','Foco no fechamento','Integração com a base'] },
];

type ModuleType = (typeof MODULES)[number];

/* Painel de detalhe premium — preenchimento radial jewel, sombra royal casada,
   hairline de topo, glow de canto, ícone em container "joia" e bullets refinados. */
function DetailCard({ m, onClose }: { m: ModuleType; onClose: () => void }) {
  return (
    <div className="relative isolate rounded-[1.75rem] p-6 md:p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      {/* Camada de fundo isolada para evitar o bug de cantos quadrados (bleeding) no Webkit */}
      <div className="absolute inset-0 -z-10 rounded-[1.75rem] bg-black/60 backdrop-blur-2xl overflow-hidden [mask-image:-webkit-radial-gradient(white,black)]">
        <span aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-44 w-44 rounded-full bg-royal/25 blur-[60px]" />
      </div>

      <button
        onClick={onClose}
        aria-label="Fechar detalhes do módulo"
        className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream/60 transition-all hover:border-white/25 hover:bg-white/15 hover:text-cream"
      >
        <X className="h-4 w-4" />
      </button>

      <span className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-royal-light/80">
        <span className="h-1.5 w-1.5 rounded-full bg-royal-light shadow-[0_0_8px_var(--royal-light)]" />
        Módulo
      </span>

      <div className="relative mt-4 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-royal/30 bg-royal/10">
        {getIcon(m.id, "w-6 h-6 text-royal-light")}
      </div>

      <h3 className="mb-2 font-display text-2xl font-bold tracking-tight text-cream">{m.label}</h3>
      <p className="mb-5 leading-relaxed text-sagrado/90">{m.desc}</p>

      <span aria-hidden className="mb-5 block h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <ul className="mb-7 flex flex-col gap-3">
        {m.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-sagrado">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-royal-light/30 bg-royal/15">
              <Check className="h-3 w-3 text-royal-light" />
            </span>
            {b}
          </li>
        ))}
      </ul>

      <Button href="#cta" className="!px-6 !py-3 !text-sm !font-semibold">
        Falar com um especialista
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
}

export const Hub = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 860);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (!wrapRef.current || !sectionRef.current) return;

    // Set initial 3D transform via GSAP so it doesn't conflict with CSS
    if (!isMobile) {
      gsap.set(wrapRef.current, { z: -50 });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (selectedModule || isMobile || prefersReducedMotion()) return;
      
      const rect = wrapRef.current!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center relative to half window size
      const x = (e.clientX - centerX) / (window.innerWidth / 2);
      const y = (e.clientY - centerY) / (window.innerHeight / 2);
      
      const rotY = Math.max(-1, Math.min(1, x)) * 15;
      const rotX = Math.max(-1, Math.min(1, -y)) * 15;
      
      gsap.to(wrapRef.current, { rotationX: rotX, rotationY: rotY, duration: 0.8, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      if (selectedModule || isMobile) return;
      gsap.to(wrapRef.current, { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'power2.out' });
    };

    sectionRef.current.addEventListener('mousemove', handleMouseMove);
    sectionRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      sectionRef.current?.removeEventListener('mousemove', handleMouseMove);
      sectionRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [selectedModule, isMobile]);

  const handleSelect = (mod: ModuleType) => {
    if (isMobile || prefersReducedMotion()) {
      setSelectedModule(mod.id);
      return;
    }
    const isLeft = mod.group === 'left';
    setSelectedModule(mod.id);

    gsap.to(wrapRef.current, {
      rotationX: 10,
      rotationY: isLeft ? -30 : 30,
      x: isLeft ? '10vw' : '-10vw',
      z: 60,
      duration: 1,
      ease: 'power3.out'
    });
  };

  const handleClose = () => {
    setSelectedModule(null);
    if (!isMobile) {
      gsap.to(wrapRef.current, { rotationX: 0, rotationY: 0, x: 0, z: 0, duration: 1, ease: 'power3.out' });
    }
  };

  // Tile de módulo (ícone + label nos trilhos).
  const Tile = ({ m }: { m: ModuleType }) => {
    const active = selectedModule === m.id;
    return (
      <div
        onClick={() => handleSelect(m)}
        className="flex flex-col items-center gap-2 cursor-pointer w-24 md:w-[8rem] [transform-style:preserve-3d] transition-transform duration-300 hover:scale-105 md:hover:[transform:translateZ(40px)] md:[transform:translateZ(20px)]"
      >
        <div className={`flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl border transition-all duration-300
          ${active
            ? "border-white/30 bg-[radial-gradient(100%_100%_at_50%_0%,var(--royal-light),var(--royal)_70%)] shadow-[0_10px_28px_rgba(49,121,219,0.55),inset_0_1px_0_rgba(255,255,255,0.3)]"
            : "border-white/10 bg-white/[0.06] shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:border-royal-light/40 hover:bg-royal/20 hover:shadow-[0_12px_30px_rgba(49,121,219,0.35)]"}
        `}>
          {getIcon(m.id, `w-6 h-6 transition-colors ${active ? "text-white" : "text-sagrado"}`)}
        </div>
        <span className={`font-display font-semibold text-xs text-center leading-tight transition-colors ${active ? "text-cream" : "text-sagrado"}`}>
          {m.label}
        </span>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 px-4 md:px-6 relative z-10" id="hub">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <SplitText
          as="h2"
          text="Comande sua operação a partir do Promosys, seu ponto de partida."
          highlightWords={["Promosys"]}
          highlightClass="text-royal"
          className="font-display font-bold text-3xl md:text-[2.8rem] leading-[1.15] tracking-tight text-cream mb-4"
        />
        <SplitText
          as="p"
          text="Explore o hub interativo abaixo e conheça os principais módulos da plataforma. Passe o mouse para inclinar o painel e clique em um módulo para ver os detalhes."
          delay={0.15}
          className="text-sagrado text-lg"
        />
      </div>

      <div className="[perspective:1000px] w-full max-w-[120rem] mx-auto flex justify-center relative min-h-[30rem]">

        {/* ZONA LEFT */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[min(33vw,30rem)] z-20 md:block hidden">
          {MODULES.filter(m => m.group === 'left').map(m => (
            <div
              key={m.id}
              className={`absolute top-1/2 left-0 right-0 -translate-y-1/2 transition-all duration-500 ease-out-quart ${selectedModule === m.id ? "opacity-100 translate-x-0 visible pointer-events-auto" : "opacity-0 -translate-x-6 invisible pointer-events-none"}`}
            >
              <DetailCard m={m} onClose={handleClose} />
            </div>
          ))}
        </div>

        {/* WRAP 3D */}
        <div ref={wrapRef} className="relative flex flex-col md:flex items-center justify-center gap-8 [transform-style:preserve-3d] will-change-transform z-10 w-full md:w-[50rem] md:h-[50rem] mx-auto">

          {/* NUCLEO */}
          <div className="relative [transform-style:preserve-3d] w-[13rem] md:w-[20rem] aspect-square flex items-center justify-center z-10 mx-auto">
             <div className="absolute -inset-[8%] -z-10 bg-[rgba(49,121,219,0.18)] rounded-full blur-[50px]"></div>

             <div className="w-full h-full bg-[rgba(49,121,219,0.12)] rounded-full flex items-center justify-center [transform:translateZ(30px)] [transform-style:preserve-3d]">
                <div className="w-[80%] h-[80%] bg-[rgba(49,121,219,0.32)] rounded-full flex items-center justify-center [transform:translateZ(30px)] [transform-style:preserve-3d]">
                   <div className="w-[78%] h-[78%] rounded-full flex flex-col items-center justify-center gap-1.5 [transform:translateZ(30px)] shadow-[inset_0_2px_12px_rgba(255,255,255,0.25)] bg-[radial-gradient(circle_at_35%_30%,var(--royal-light),var(--royal)_60%,var(--azul-tec))]">
                      <div className="w-28 h-28 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo-promosys-branca-leve.png" alt="Promosys" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] object-contain" />
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* MOBILE LIST */}
          <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-6 w-full max-w-sm mx-auto md:hidden">
            {MODULES.map(m => (
              <Tile key={m.id} m={m} />
            ))}
          </div>

          {/* DESKTOP ORBITA */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none [transform-style:preserve-3d]">
            {MODULES.map((m) => {
              const angle = m.angle;
              return (
                <div 
                  key={m.id}
                  className="absolute pointer-events-auto [transform-style:preserve-3d]"
                  style={{
                    transform: `rotate(${angle}deg) translateX(17rem) rotate(${-angle}deg)`
                  }}
                >
                  <Tile m={m} />
                </div>
              );
            })}
          </div>

        </div>

        {/* ZONA RIGHT */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[min(33vw,30rem)] z-20 md:block hidden">
          {MODULES.filter(m => m.group === 'right').map(m => (
            <div
              key={m.id}
              className={`absolute top-1/2 left-0 right-0 -translate-y-1/2 transition-all duration-500 ease-out-quart ${selectedModule === m.id ? "opacity-100 translate-x-0 visible pointer-events-auto" : "opacity-0 translate-x-6 invisible pointer-events-none"}`}
            >
              <DetailCard m={m} onClose={handleClose} />
            </div>
          ))}
        </div>

        {/* MOBILE CARDS */}
        {selectedModule && isMobile && (
          <div className="fixed inset-x-4 bottom-4 z-50 md:hidden pointer-events-auto max-h-[82vh] overflow-y-auto">
            {MODULES.filter(m => m.id === selectedModule).map(m => (
              <DetailCard key={m.id} m={m} onClose={handleClose} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

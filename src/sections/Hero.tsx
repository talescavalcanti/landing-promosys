"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { SplitText } from "@/components/SplitText";
import { Database, MapPin, Zap, ShieldCheck } from "lucide-react";

const stats = [
  { icon: <Database className="h-4 w-4" />, value: "+10M", label: "operações" },
  { icon: <MapPin className="h-4 w-4" />, value: "Brasil", label: "cobertura nacional" },
  { icon: <Zap className="h-4 w-4" />, value: "IN100", label: "em tempo real" },
  { icon: <ShieldCheck className="h-4 w-4" />, value: "LGPD", label: "em conformidade" },
];

const words = ["conversão.", "produtividade.", "previsibilidade."];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Mobile = estático: não roda a troca de palavras.
    if (window.matchMedia("(max-width: 767px)").matches) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] pt-24 pb-12 md:pt-36 md:pb-12 flex flex-col items-center justify-center px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        {/* Camada de Gradiente para dar efeito de "fade" nas bordas e focar no centro */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_var(--background)_80%)] z-10 pointer-events-none"></div>
        
        {/* SVG Pattern com animação de movimento da malha */}
        <svg className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-mesh text-[#3F73B8] opacity-50 dark:opacity-100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Peça 1: O loop principal isolado e alinhado a (0,0) */}
            <path id="loop" d="M0 0 V-21.5936 C0 -27.9392 6.874 -31.911 12.371 -28.7356 L31.072 -17.9414 L49.774 -7.142 C55.27 -3.9666 55.27 3.9666 49.774 7.1417 L31.072 17.9417 L12.371 28.7357 C6.874 31.9107 0 27.9447 0 21.5937 V0 Z" stroke="currentColor" strokeWidth="1.04798" strokeMiterlimit="10" fill="none" />
            
            {/* Peça 2: A linha de conexão isolada */}
            <path id="line" d="M-43.942 59.7087 C-42.491 59.7507 -40.997 59.4207 -39.588 58.6077 L-20.886 47.8137 L-2.185 37.0147 C3.311 33.8387 3.311 25.9057 -2.185 22.7307 L-20.886 11.9307 L-39.588 1.1369 C-40.997 0.3247 -42.491 -0.0159 -43.942 0.0313" stroke="currentColor" strokeWidth="1.04798" strokeMiterlimit="10" fill="none" />

            {/* Bloco Base que compõe o módulo contínuo */}
            <g id="unit">
              {/* Coluna Ímpar */}
              <use href="#loop" x="0" y="0" />
              <use href="#line" x="0" y="0" />
              {/* Coluna Par (Deslocamento exato para fechar a malha isométrica) */}
              <use href="#loop" x="51.862" y="29.854" />
              <use href="#line" x="51.862" y="29.854" />
            </g>

            {/* Padrão (Pattern) que repete o bloco base infinitamente */}
            <pattern id="seamless-mesh" width="103.724" height="59.708" patternUnits="userSpaceOnUse">
              {/* Renderizamos em uma grade 3x3 dentro do módulo para que os traços (strokes) não sejam cortados nas extremidades da caixa do pattern */}
              <use href="#unit" x="-103.724" y="-59.708" />
              <use href="#unit" x="0" y="-59.708" />
              <use href="#unit" x="103.724" y="-59.708" />
              <use href="#unit" x="-103.724" y="0" />
              <use href="#unit" x="0" y="0" />
              <use href="#unit" x="103.724" y="0" />
              <use href="#unit" x="-103.724" y="59.708" />
              <use href="#unit" x="0" y="59.708" />
              <use href="#unit" x="103.724" y="59.708" />
            </pattern>
          </defs>

          {/* Aplicação do Padrão preenchendo todo o SVG */}
          <rect width="100%" height="100%" fill="url(#seamless-mesh)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-[64rem] mx-auto text-center gap-4 md:gap-5">



        <SplitText
          as="h1"
          text="Dados que transformam decisões em crédito"
          highlightWords={["transformam"]}
          highlightClass="text-royal-light"
          delay={0.1}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tighter text-balance max-w-[22ch] mx-auto text-white leading-[1.05] drop-shadow-2xl"
        />

        <div className="text-lg md:text-xl lg:text-2xl text-cream/90 max-w-4xl font-medium leading-relaxed text-center">
          <span>O CRM que transforma prospecção fria em </span>
          <span className="text-white font-medium inline-block min-w-[140px] md:min-w-[160px] relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block absolute w-full left-0 text-center md:text-left"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
            <span className="invisible w-full text-center md:text-left">previsibilidade.</span>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center mt-5 anim-static"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-xs sm:max-w-none">
            <Button href="#cta" className="w-full sm:w-auto justify-center !px-8 !py-4 !text-base !font-semibold">
              Agendar Demonstração
            </Button>
            <Button href="#contato" variant="outline" className="w-full sm:w-auto justify-center !px-8 !py-4 !text-base">
              Falar com Vendas
            </Button>
          </div>
        </motion.div>

        {/* Bento de capacidades / prova — preenche o hero e dá credibilidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-8 md:mt-10 grid w-full max-w-3xl grid-cols-2 md:grid-cols-4 gap-3 anim-static"
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-light/30 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(49,121,219,0.18)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-royal-light/20 bg-royal/15 text-royal-light">
                {s.icon}
              </span>
              <div className="flex flex-col text-left leading-tight">
                <span className="font-display text-lg font-bold text-cream">{s.value}</span>
                <span className="text-[11px] uppercase tracking-wide text-cream/55">{s.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 text-cream/55 text-[11px] tracking-[0.18em] uppercase anim-static"
        >
          <span>Setup Rápido</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span>Sem Taxa de Adesão</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
          <span>Cancelamento Livre</span>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { BrandPattern } from "@/components/BrandPattern";
import { SplitText } from "@/components/SplitText";

export function Hero() {
  const words = ["conversão.", "produtividade.", "previsibilidade."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] pt-40 pb-16 flex flex-col items-center justify-center px-4 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-royal/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal/15 via-background/80 to-background pointer-events-none"></div>
      <BrandPattern className="absolute inset-0 opacity-[0.08]" color="var(--royal-light)" size={680} />

      <div className="relative z-10 flex flex-col items-center max-w-[64rem] mx-auto text-center gap-5">



        <SplitText
          as="h1"
          text="Dados que transformam decisões em crédito"
          highlightWords={["transformam"]}
          highlightClass="text-royal-light"
          delay={0.1}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-tighter text-white leading-[1.05] drop-shadow-2xl"
        />

        <div className="text-xl md:text-2xl lg:text-3xl text-cream/90 max-w-4xl font-medium leading-relaxed flex flex-col md:flex-row items-center justify-center gap-2">
          <SplitText as="span" text="O CRM que transforma prospecção fria em" delay={0.2} />
          <span className="text-white font-medium inline-block min-w-[160px] text-left relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="inline-block absolute left-0"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
            <span className="invisible">previsibilidade.</span>
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center mt-5"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button href="#cta" className="!px-8 !py-4 !text-base !font-semibold">
              Agendar Demonstração
            </Button>
            <Button href="#planos" variant="outline" className="!px-8 !py-4 !text-base">
              Explorar Recursos
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-6 text-cream/70 text-[11px] tracking-[0.18em] uppercase border-t border-white/5 pt-4">
            <span>Setup Rápido</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Sem Taxa de Adesão</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Cancelamento Livre</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

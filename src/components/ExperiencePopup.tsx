"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { SplitText } from "./SplitText";
import { Sparkles, MonitorSmartphone } from "lucide-react";

export function ExperiencePopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("promosys_experience");
    if (!choice && window.location.hash !== "#motion") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
    } else if (window.location.hash === "#motion" && choice !== "motion") {
      // If someone arrived via direct URL #motion but didn't choose, 
      // let's auto-save it to avoid annoying them.
      localStorage.setItem("promosys_experience", "motion");
    }
  }, []);

  const handleChoice = (type: "motion" | "static") => {
    localStorage.setItem("promosys_experience", type);
    setShow(false);
    
    if (type === "motion") {
      window.location.hash = "#motion";
      setTimeout(() => {
        window.location.reload();
      }, 200);
    } else {
      if (window.location.hash === "#motion") {
        window.location.hash = "";
        setTimeout(() => {
          window.location.reload();
        }, 200);
      }
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 dark:bg-background/80 backdrop-blur-md px-4"
        >
          <GlassCard className="w-full max-w-xl p-8 md:p-10 flex flex-col gap-8 shadow-2xl relative overflow-hidden isolate border border-black/10 dark:border-white/5 bg-white dark:bg-[#05070a]/80">
            <span aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-royal/10 dark:bg-royal/20 blur-[80px]" />
            <span aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-azul-tec/10 dark:bg-azul-tec/20 blur-[80px]" />
            
            <div className="relative z-10 flex flex-col text-center items-center">
              <SplitText 
                as="h2" 
                text="Como você quer navegar?" 
                className="text-3xl font-display font-bold text-oxford dark:text-cream mb-4" 
              />
              <p className="text-sagrado max-w-sm">
                Escolha a experiência que melhor se adapta ao seu dispositivo e preferência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full">
              <button 
                onClick={() => handleChoice("static")}
                className="flex-1 flex flex-col items-center gap-3 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-oxford dark:text-cream group"
              >
                <MonitorSmartphone size={32} className="text-sagrado group-hover:text-oxford dark:group-hover:text-cream transition-colors" />
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="font-bold">Modo Essencial</span>
                  <span className="text-xs text-sagrado">Leve, rápido e sem animações complexas.</span>
                </div>
              </button>

              <button 
                onClick={() => handleChoice("motion")}
                className="flex-1 flex flex-col items-center gap-3 p-6 rounded-2xl border border-royal/30 bg-royal/5 dark:bg-royal/10 hover:bg-royal/10 dark:hover:bg-royal/20 transition-all duration-300 text-oxford dark:text-cream group relative overflow-hidden shadow-[0_0_20px_rgba(49,121,219,0.05)] dark:shadow-[0_0_20px_rgba(49,121,219,0.15)]"
              >
                <Sparkles size={32} className="text-royal dark:text-royal-light group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="font-bold text-royal dark:text-royal-light">Experiência Imersiva</span>
                  <span className="text-xs text-sagrado dark:text-cream/80">Recomendado. Com animações 3D premium.</span>
                </div>
              </button>
            </div>
          </GlassCard>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

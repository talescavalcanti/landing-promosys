"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, MonitorSmartphone } from "lucide-react";

export function ExperienceToggle() {
  const [isMotion, setIsMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const choice = localStorage.getItem("promosys_experience");
    setIsMotion(choice === "motion" || window.location.hash === "#motion");
  }, []);

  const toggleExperience = () => {
    const newMode = isMotion ? "static" : "motion";
    localStorage.setItem("promosys_experience", newMode);
    
    if (newMode === "motion") {
      window.location.hash = "#motion";
      setTimeout(() => window.location.reload(), 100);
    } else {
      window.location.hash = "";
      setTimeout(() => window.location.reload(), 100);
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleExperience}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2.5 rounded-full text-oxford dark:text-cream/70 hover:text-royal dark:hover:text-white transition-colors bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden group flex items-center justify-center"
      title={isMotion ? "Mudar para Modo Essencial" : "Mudar para Experiência Imersiva"}
      aria-label="Alternar animações"
    >
      <div className="relative z-10 flex items-center justify-center w-5 h-5">
        {isMotion ? <Sparkles size={18} className="text-royal" /> : <MonitorSmartphone size={18} />}
      </div>
      {isMotion && (
         <span className="absolute inset-0 bg-royal/10 dark:bg-royal/20 blur-md rounded-full pointer-events-none"></span>
      )}
    </motion.button>
  );
}

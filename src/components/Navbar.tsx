"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { ExperienceToggle } from "./ExperienceToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Recursos", href: "#recursos" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Planos", href: "#planos" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6 md:pt-8 pointer-events-none"
    >
      <div 
        className={`pointer-events-auto flex items-center justify-between transition-all duration-[var(--dur-lg)] ease-out-expo w-full ${
          scrolled 
            ? "max-w-5xl glass !border-transparent px-8 py-4" 
            : "max-w-7xl px-4 py-4 bg-transparent !border-transparent"
        }`}
      >
        <a href="#" aria-label="Promosys — ir para o início" className="flex items-center group relative">
          <Logo className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <motion.a 
              initial="initial"
              whileHover="hover"
              key={l.href} 
              href={l.href} 
              className="relative inline-flex overflow-hidden text-sm font-medium text-cream/70 hover:text-white transition-colors duration-300"
            >
              <motion.span 
                variants={{
                  initial: { y: 0 },
                  hover: { y: "-150%" }
                }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                {l.label}
              </motion.span>
              <motion.span 
                className="absolute inset-0 inline-flex items-center"
                variants={{
                  initial: { y: "150%" },
                  hover: { y: 0 }
                }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                {l.label}
              </motion.span>
            </motion.a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 mr-2">
            <ExperienceToggle />
            <ThemeToggle />
          </div>
          <Button href="#cta" className="!px-6 !py-2 !text-sm !font-semibold">Agendar Demo</Button>
        </div>
        <button className="md:hidden text-white p-2 pointer-events-auto" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-24 left-4 right-4 md:hidden glass rounded-xl p-6 flex flex-col gap-4 pointer-events-auto"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-cream/80 hover:text-white transition-colors py-2 text-base font-medium" onClick={() => setMobileOpen(false)}>{l.label}</a>
            ))}
            <Button href="#cta" className="mt-4 w-full justify-center !py-3 !text-sm">Agendar demonstração</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

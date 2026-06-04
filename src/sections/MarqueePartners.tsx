"use client";

import React from "react";

const partners = [
  "INSS",
  "SIAPE",
  "FGTS",
  "Bolsa Família",
  "Forças Armadas",
  "Governos Estaduais",
  "Prefeituras",
  "Crédito CLT"
];

export const MarqueePartners = () => {
  return (
    <section className="w-full py-8 bg-background border-y border-white/5 overflow-hidden flex flex-col gap-6 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-4 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-sagrado/70">
          Opere com todos os convênios
        </span>
      </div>

      {/* Lista real para leitores de tela (as faixas animadas são decorativas) */}
      <ul className="sr-only">
        {partners.map((partner) => (
          <li key={partner}>{partner}</li>
        ))}
      </ul>

      <div className="w-full flex flex-col gap-4" aria-hidden="true">
        {/* Linha 1 */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              {partners.map((partner, j) => (
                <div key={j} className="flex items-center">
                  <span className="text-lg md:text-xl font-medium text-cream px-8 whitespace-nowrap">
                    {partner}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Linha 2 - Reverse */}
        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[...partners].reverse().map((partner, j) => (
                <div key={j} className="flex items-center">
                  <span className="text-lg md:text-xl font-medium text-cream px-8 whitespace-nowrap">
                    {partner}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

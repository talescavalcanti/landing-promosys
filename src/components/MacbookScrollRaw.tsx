"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { DashboardMockup } from "@/components/DashboardMockup";

/**
 * Moldura leve de laptop com o placeholder abstrato do dashboard.
 * Substitui a versão antiga de ~840 linhas de DOM + scroll de 200vh.
 */
export const MacbookScrollRaw = () => {
  return (
    <div className="w-full px-4 pb-12 flex justify-center">
      <Reveal width="fit-content">
        <div className="w-[min(92vw,56rem)]">
          {/* Tampa / tela */}
          <div className="relative rounded-t-2xl border border-white/10 bg-[#0a0a0a] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-royal/30 bg-background">
              <DashboardMockup />
            </div>
          </div>
          {/* Base / dobradiça */}
          <div className="relative mx-auto h-3.5 w-[104%] -ml-[2%] rounded-b-2xl bg-gradient-to-b from-[#2a2a2e] to-[#141416] shadow-[0_16px_30px_rgba(0,0,0,0.5)]">
            <div className="absolute left-1/2 top-0 h-1 w-28 -translate-x-1/2 rounded-b-lg bg-black/40" />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

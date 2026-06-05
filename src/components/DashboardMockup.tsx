import React from "react";

/**
 * Placeholder abstrato do dashboard Promosys (sidebar + cards + gráfico).
 * Preenche o container pai (que deve ser `relative` + `overflow-hidden` + ter altura).
 */
export const DashboardMockup = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(var(--royal)_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

      <div className="relative w-full h-full flex">
        {/* Sidebar */}
        <div className="w-16 h-full bg-background border-r border-royal/20 flex flex-col items-center py-4 gap-4">
          <div className="w-8 h-8 rounded-full bg-royal/20 flex items-center justify-center mb-4 border border-royal/40">
            <div className="w-3 h-3 bg-royal rounded-sm rotate-45" />
          </div>
          <div className="w-6 h-6 rounded bg-royal/20" />
          <div className="w-6 h-6 rounded bg-white/5" />
          <div className="w-6 h-6 rounded bg-white/5" />
          <div className="w-6 h-6 rounded bg-white/5" />
        </div>

        {/* Main */}
        <div className="flex-1 p-5 flex flex-col gap-4">
          {/* Header */}
          <div className="w-full h-8 flex justify-between items-center">
            <div className="h-4 w-32 bg-white/10 rounded" />
            <div className="flex gap-2">
              <div className="h-6 w-24 bg-royal/20 border border-royal/40 rounded-full" />
              <div className="h-6 w-6 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Cards */}
          <div className="flex gap-4">
            <div className="h-20 flex-1 bg-gradient-to-br from-royal/10 to-transparent border border-royal/30 rounded-lg p-3 flex flex-col justify-between">
              <div className="h-2 w-16 bg-royal/50 rounded" />
              <div className="h-6 w-24 bg-white/90 rounded" />
            </div>
            <div className="h-20 flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col justify-between">
              <div className="h-2 w-16 bg-white/20 rounded" />
              <div className="h-6 w-24 bg-white/60 rounded" />
            </div>
            <div className="h-20 flex-1 bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col justify-between">
              <div className="h-2 w-16 bg-white/20 rounded" />
              <div className="h-6 w-24 bg-white/60 rounded" />
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-lg relative overflow-hidden p-4">
            <div className="h-3 w-24 bg-white/20 rounded mb-4" />
            <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-royal/20 to-transparent" />
            <svg className="absolute bottom-0 left-0 w-full h-[70%]" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,100 L0,60 Q20,30 40,70 T80,40 L100,20 L100,100 Z" className="fill-royal/20" />
              <path d="M0,60 Q20,30 40,70 T80,40 L100,20" fill="none" strokeWidth="2" className="stroke-royal" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const MacbookScrollRaw = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animação de abertura da tampa — valores do Macbook Scroll original (Aceternity).
  const lidScaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, 1.5]);
  const lidScaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, 1.5]);
  const lidRotateX = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const lidTranslateY = useTransform(scrollYProgress, [0, 1], [0, 1500]);

  return (
    <div ref={containerRef} className="relative w-full pb-10">
      <div id="macbook-container" className="flex min-h-[200vh] w-full shrink-0 transform flex-col items-center justify-start py-0 [perspective:800px] scale-[0.30] sm:scale-[0.35] md:scale-[0.50] lg:scale-[0.65] xl:scale-[0.75] 2xl:scale-90 md:pt-40 md:pb-80 overflow-hidden relative">
    


    
    <motion.div id="macbook-group" className="relative flex flex-col items-center w-full">

    
    <div className="relative [perspective:800px] z-40">
      
      
        <div style={{transform: 'perspective(800px) rotateX(-25deg) translateZ(0px)', transformOrigin: 'bottom', transformStyle: 'preserve-3d'}} className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#010101] p-2">
          <div style={{boxShadow: '0px 2px 0px 2px #171717 inset'}} className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#010101]">
            <span className="font-display font-bold text-2xl tracking-wide text-cream opacity-50">Promosys<span className="text-royal">.</span></span>
          </div>
        </div>

      
      <motion.div id="lid-motion" style={{transformStyle: 'preserve-3d', transformOrigin: 'center top', willChange: 'transform', scaleX: lidScaleX, scaleY: lidScaleY, rotateX: lidRotateX, y: lidTranslateY}} className="absolute inset-0 h-[20rem] w-[32rem] rounded-2xl bg-[#010101] p-2">
        
        
        <div className="absolute inset-0 rounded-lg bg-background overflow-hidden border border-royal/30">
           {/* Promosys Dashboard Mockup */}
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
             
             {/* Main Content */}
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

                {/* Chart Area */}
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
        </div>
      </motion.div>

    </div>


    <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-gray-200 dark:bg-[#272729]">
      
      
      <div className="relative h-10 w-full">
        <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#050505]"></div>
      </div>
      
      
      <div className="relative flex h-40">
        
        <div className="mx-auto h-full w-[10%] overflow-hidden">
          <div className="mt-2 flex h-full gap-[2px] px-[0.5px]" style={{backgroundImage: 'radial-gradient(circle, #08080A 0.5px, transparent 0.5px)', backgroundSize: '3px 3px'}}></div>
        </div>
        
        
        <div className="mx-auto h-full w-[80%]">
          <div id="keypad-container" className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#050505] p-1 [will-change:transform]">
      
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-10 items-end justify-start pb-[2px] pl-[4px]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white items-start">
              esc
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F1</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F2</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F3</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F4</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F5</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F6</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F7</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F8</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F9</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F10</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F11</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="mt-1">F12</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] ">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-neutral-200 ">
              <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-900 from-20% via-black via-50% to-neutral-900 to-95% p-px"><div className="h-full w-full rounded-full bg-black"></div></div>
            </div>
          </div>
        </div>
      
      </div>

      
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">~</span><span className="mt-1 block">`</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">!</span><span className="block">1</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">@</span><span className="block">2</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">#</span><span className="block">3</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">$</span><span className="block">4</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">%</span><span className="block">5</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">^</span><span className="block">6</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">&amp;</span><span className="block">7</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">*</span><span className="block">8</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">(</span><span className="block">9</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">)</span><span className="block">0</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">—</span><span className="block">_</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">+</span><span className="block">=</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-10 items-end justify-end pr-[4px] pb-[2px]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white items-end">
              delete
            </div>
          </div>
        </div>
      
      </div>

      
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-10 items-end justify-start pb-[2px] pl-[4px]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white items-start">
              tab
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">Q</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">W</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">E</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">R</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">T</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">Y</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">U</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">I</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">O</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">P</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">{"{"}</span><span className="block">[</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">{"}"}</span><span className="block">]</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">|</span><span className="block">\</span>
            </div>
          </div>
        </div>
      
      </div>

      
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-[2.8rem] items-end justify-start pb-[2px] pl-[4px]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white items-start">
              caps lock
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">A</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">S</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">D</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">F</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">G</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">H</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">J</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">K</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">L</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">:</span><span className="block">;</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">"</span><span className="block">'</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white items-end">
              return
            </div>
          </div>
        </div>
      
      </div>

      
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-[3.65rem] items-end justify-start pb-[2px] pl-[4px]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white items-start">
              shift
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">Z</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">X</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">C</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">V</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">B</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">N</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">M</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">&lt;</span><span className="block">,</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">&gt;</span><span className="block">.</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block">?</span><span className="block">/</span>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white items-end">
              shift
            </div>
          </div>
        </div>
      
      </div>

      
      <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white h-full justify-between py-[4px]">
              <div className="flex w-full justify-end pr-1"><span className="block text-[4px]">fn</span></div>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white h-full justify-between py-[4px]">
              <div className="flex w-full justify-start pl-1"><span className="block text-[4px]">⌃</span></div><div className="flex w-full justify-start pl-1"><span className="block">control</span></div>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white h-full justify-between py-[4px]">
              <div className="flex w-full justify-start pl-1"><span className="block text-[4px]">⌥</span></div><div className="flex w-full justify-start pl-1"><span className="block">option</span></div>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-8" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white h-full justify-between py-[4px]">
              <div className="flex w-full justify-start pl-1"><span className="block text-[4px]">⌘</span></div><div className="flex w-full justify-start pl-1"><span className="block">command</span></div>
            </div>
          </div>
        </div>
      
        
        
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-[8.2rem]" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              
            </div>
          </div>
        </div>
      
        
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex  h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] w-8" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white h-full justify-between py-[4px]">
              <div className="flex w-full justify-start pl-1"><span className="block text-[4px]">⌘</span></div><div className="flex w-full justify-start pl-1"><span className="block">command</span></div>
            </div>
          </div>
        </div>
      
        
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex w-6 h-6 items-center justify-center rounded-[3.5px] bg-[#0A090D] " style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white h-full justify-between py-[4px]">
              <div className="flex w-full justify-start pl-1"><span className="block text-[4px]">⌥</span></div><div className="flex w-full justify-start pl-1"><span className="block">option</span></div>
            </div>
          </div>
        </div>
      
        
        
        <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[4px] p-[0.5px]">
          
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex   items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block text-[4px]">▲</span>
            </div>
          </div>
        </div>
      
          <div className="flex">
            
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex   items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block text-[4px]">◀</span>
            </div>
          </div>
        </div>
      
            
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex   items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block text-[4px]">▼</span>
            </div>
          </div>
        </div>
      
            
        <div className="[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform] bg-white/[0.2] shadow-xl shadow-white">
          <div className="flex   items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6" style={{boxShadow: '0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset'}}>
            <div className="flex w-full flex-col items-center justify-center text-[5px] text-white ">
              <span className="block text-[4px]">▶</span>
            </div>
          </div>
        </div>
      
          </div>
        </div>
      </div>
    </div>
        </div>
        
        
        <div className="mx-auto h-full w-[10%] overflow-hidden">
          <div className="mt-2 flex h-full gap-[2px] px-[0.5px]" style={{backgroundImage: 'radial-gradient(circle, #08080A 0.5px, transparent 0.5px)', backgroundSize: '3px 3px'}}></div>
        </div>
      </div>
      
      
      <div className="mx-auto my-1 h-32 w-[40%] rounded-xl bg-black/5 dark:bg-white/[0.02]" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.12) inset'}}></div>
      
      
      <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#272729] to-[#050505]"></div>
      
      
      <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-background dark:via-background/80"></div>
      
    </div>
    
    </motion.div> 
  </div>
    </div>
  );
};

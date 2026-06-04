import { SmoothScroll } from "@/components/SmoothScroll";
import { SplitText } from "@/components/SplitText";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { MacbookScrollRaw } from "@/components/MacbookScrollRaw";
import { MarqueePartners } from "@/sections/MarqueePartners";
import { Dores } from "@/sections/Dores";
import { Hub } from "@/sections/Hub";
import { Recursos } from "@/sections/Recursos";
import { Resultados } from "@/sections/Resultados";
import { Diferencial } from "@/sections/Diferencial";
import { LeadForm } from "@/sections/LeadForm";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden">
        <Navbar />
        <Hero />
        
        {/* Title for Macbook Section */}
        <section className="bg-background relative z-10 w-full pt-10 px-4 flex flex-col items-center text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal/10 border border-royal/30 rounded-full text-royal-light text-xs font-bold tracking-widest uppercase mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-royal"></span>
             O Ecossistema Completo
           </div>
           <SplitText
             as="h2"
             text="A central de comando da sua operação de crédito."
             className="text-3xl md:text-5xl font-display font-bold text-cream mb-6 tracking-tight max-w-3xl"
           />
           <SplitText
             as="p"
             text="Gestão de leads, consultas estruturadas e integração bancária ponta a ponta. Esqueça as abas perdidas e foque no fechamento."
             delay={0.15}
             className="text-sagrado text-lg md:text-xl max-w-2xl leading-relaxed font-light"
           />
        </section>

        <section className="bg-background relative z-10 w-full pt-10">
          <MacbookScrollRaw />
        </section>
        <MarqueePartners />
        <Dores />
        <Hub />
        <Recursos />
        <Resultados />
        <Diferencial />
        <LeadForm />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

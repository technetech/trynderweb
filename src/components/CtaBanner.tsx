import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  onOpenAppClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenAppClick }) => {
  return (
    <section className="py-24 lg:py-36 bg-black relative overflow-hidden border-t border-zinc-800">
      
      {/* Background radial yellow burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FFFF00]/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Glow Container */}
        <div className="relative bg-[#111111] border-2 border-[#FFFF00] p-8 sm:p-16 shadow-[0_0_60px_rgba(255,255,0,0.18)] overflow-hidden">
          
          <div className="inline-block bg-[#FFFF00] text-black text-[10px] font-black uppercase px-3 py-1 tracking-widest mb-6">
            Tu Aura Empieza Aquí
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display uppercase tracking-tight leading-[1.1] mb-6 italic">
            Deja de sobrepensar.{' '}
            <span className="text-[#FFFF00] not-italic block mt-1">
              Empieza a dominar la conversación.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            No esperes a estar frente a la mujer que te gusta para descubrir qué decir. Entrena en Trynder, elimina los nervios y llega a cada interacción con carisma automático y calibrado.
          </p>

          {/* Big CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-cta-btn"
              onClick={onOpenAppClick}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base font-black uppercase tracking-tighter text-black bg-[#FFFF00] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,0,0.4)] cursor-pointer"
            >
              <span>Entrar a Trynder Ahora</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          {/* Reassurance points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-black uppercase tracking-wider text-zinc-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFFF00]" />
              <span>Acceso Inmediato</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFFF00]" />
              <span>Sin Tarjeta de Crédito</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#FFFF00]" />
              <span>100% Anónimo & Privado</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

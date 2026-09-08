import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface VipSectionProps {
  onOpenAppClick: () => void;
}

export const VipSection: React.FC<VipSectionProps> = ({ onOpenAppClick }) => {
  return (
    <section className="py-20 lg:py-28 bg-transparent relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-block bg-[#FFBF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
            Membresía & Pases
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase ">
            Acceso sin restricciones.{' '}
            <span className="text-[#FFBF00] ">Calibración Total.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-medium">
            Comienza gratis hoy y desbloquea el pase VIP cuando quieras llevar tu temple conversacional a la élite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl items-stretch">
          
          {/* Plan Estándar / Gratis */}
          <div className="bg-[#111111] border-2 border-zinc-200 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white font-mono-tag">
                  Tier 01 // Gratuito
                </span>
                <h3 className="text-2xl font-black text-white font-display uppercase mt-1">
                  Trynder Free
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white font-display">$0</span>
                  <span className="text-xs text-white font-bold uppercase tracking-wider">/ para siempre</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-white font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span>Acceso a 3 arquetipos básicos (Sabine, Joséphine)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span>15 mensajes diarios con IA de entrenamiento</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span>Puntuación de Aura básica por sesión</span>
                </li>
                <li className="flex items-center gap-2.5 text-white">
                  <span className="w-4 h-4 text-center font-bold">✕</span>
                  <span>Sin modo "Chica Difícil / Filtro Alto"</span>
                </li>
                <li className="flex items-center gap-2.5 text-white">
                  <span className="w-4 h-4 text-center font-bold">✕</span>
                  <span>Sin notas de voz simuladas ni auditoría de capturas</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                id="pricing-free-cta"
                onClick={onOpenAppClick}
                className="w-full py-3.5 bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Empezar Gratis
              </button>
            </div>
          </div>

          {/* Plan VIP Trynder (High Aura) */}
          <div className="bg-[#111111] border-2 border-[#FFBF00] p-8 flex flex-col justify-between relative shadow-[0_0_35px_rgba(255,255,0,0.18)]">
            
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-6 bg-[#FFBF00] text-black text-[10px] font-black uppercase px-3 py-1 tracking-widest shadow-md">
              Recomendado
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FFBF00] font-mono-tag">
                    Tier 02 // Ilimitado
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-[#8b5cf6] text-white">
                    VIP
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white font-display uppercase mt-1">
                  Trynder Pro VIP
                </h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-black text-[#FFBF00] font-display">$9.99</span>
                  <span className="text-xs text-white font-bold uppercase tracking-wider">/ mes (cancela cuando quieras)</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-white font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span className="font-bold text-white">IAs ilimitadas: Sofía, Yaritza, Lison y 12 más</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span className="font-bold text-white">Chats ilimitados 24/7 sin cortes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span>Modo "Chica Difícil / Shit-Tests Extremas"</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span>Auditoría de pantallazos reales de Tinder / WhatsApp</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FFBF00] shrink-0" />
                  <span>Notas de voz simuladas con acentos variados</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                id="pricing-vip-cta"
                onClick={onOpenAppClick}
                className="w-full py-4 bg-[#FFBF00] text-black font-black text-xs uppercase tracking-tighter hover:scale-102 transition-transform flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Desbloquear Todo el Acceso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

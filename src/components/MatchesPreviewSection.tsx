import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Lock, Trash2, ArrowRight } from 'lucide-react';
import chatPreviewUrl from '../assets/chat-preview.jpg';

interface MatchesPreviewSectionProps {
  onOpenAppClick: () => void;
}

export const MatchesPreviewSection: React.FC<MatchesPreviewSectionProps> = ({ onOpenAppClick }) => {
  return (
    <section className="py-20 lg:py-28 bg-transparent relative overflow-hidden border-t border-zinc-200">
      
      {/* Background yellow glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FFBF00]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Persuasive Explanation */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block bg-[#FFBF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
              Bandeja de Entrada & Multi-Chat
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase italic leading-tight">
              Aprende a gestionar múltiples conversaciones{' '}
              <span className="text-[#FFBF00] not-italic">sin quemarte.</span>
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
              El mayor problema de los hombres no es solo conseguir un match, sino sostener la tensión a lo largo de los días y evitar conversaciones planas de entrevista de trabajo.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 bg-[#111111] p-4 border border-zinc-200">
                <div className="w-8 h-8 bg-[#FFBF00] text-black font-black flex items-center justify-center shrink-0 text-xs">
                  01
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">
                    Simulación de tiempos reales
                  </h4>
                  <p className="text-xs text-white mt-0.5 font-medium">
                    Las IAs no responden en 0.1 segundos como un bot estándar. Se toman su tiempo, analizan subtexto y reaccionan a tus pausas para entrenar tu desapego.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#111111] p-4 border border-zinc-200">
                <div className="w-8 h-8 bg-[#FFBF00] text-black font-black flex items-center justify-center shrink-0 text-xs">
                  02
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">
                    Detector de ganchos de conversación
                  </h4>
                  <p className="text-xs text-white mt-0.5 font-medium">
                    Aprende a tomar detalles sutiles de sus respuestas para ramificar la charla con humor e intriga, sin caer en el aburrido "¿y tú qué cuentas?".
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#111111] p-4 border border-zinc-200">
                <div className="w-8 h-8 bg-[#FFBF00] text-black font-black flex items-center justify-center shrink-0 text-xs">
                  03
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">
                    Historial de calibración por match
                  </h4>
                  <p className="text-xs text-white mt-0.5 font-medium">
                    Revisa en qué réplica exacta perdiste el estatus y cuándo lograste que ella invirtiera haciéndote preguntas a ti.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="matches-section-cta"
                onClick={onOpenAppClick}
                className="bg-[#FFBF00] text-black px-8 py-4 text-sm font-black uppercase tracking-tighter hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Entrar a mis matches</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Faithfully Recreated Matches UI with Editorial Framing */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="w-full max-w-[340px] relative">
              <img
                src={chatPreviewUrl}
                alt="Chat Preview"
                className="w-full h-auto rounded-[32px] border-[6px] border-zinc-200 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_35px_rgba(255,191,0,0.4)]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

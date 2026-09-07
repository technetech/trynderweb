import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Lock, Trash2, ArrowRight } from 'lucide-react';
import { MATCHES_PREVIEW } from '../data/mockData';

interface MatchesPreviewSectionProps {
  onOpenAppClick: () => void;
}

export const MatchesPreviewSection: React.FC<MatchesPreviewSectionProps> = ({ onOpenAppClick }) => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-zinc-200">
      
      {/* Background yellow glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FFFF00]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Persuasive Explanation */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block bg-[#FFFF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
              Bandeja de Entrada & Multi-Chat
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase italic leading-tight">
              Aprende a gestionar múltiples conversaciones{' '}
              <span className="text-[#FFFF00] not-italic">sin quemarte.</span>
            </h2>

            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium">
              El mayor problema de los hombres no es solo conseguir un match, sino sostener la tensión a lo largo de los días y evitar conversaciones planas de entrevista de trabajo.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 bg-[#111111] p-4 border border-zinc-200">
                <div className="w-8 h-8 bg-[#FFFF00] text-black font-black flex items-center justify-center shrink-0 text-xs">
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
                <div className="w-8 h-8 bg-[#FFFF00] text-black font-black flex items-center justify-center shrink-0 text-xs">
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
                <div className="w-8 h-8 bg-[#FFFF00] text-black font-black flex items-center justify-center shrink-0 text-xs">
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
                className="bg-[#FFFF00] text-black px-8 py-4 text-sm font-black uppercase tracking-tighter hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Entrar a mis matches</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Faithfully Recreated Matches UI with Editorial Framing */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="w-full max-w-[420px] bg-[#111111] text-white border-2 border-zinc-200 p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_25px_rgba(255,255,0,0.15)]">
              
              {/* App Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFFF00]" />
                  <span className="font-black text-sm tracking-tight text-white font-display uppercase">
                    TRYNDER • BANDEJA
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-[#8b5cf6] text-white">
                    VIP
                  </span>
                  <div className="px-2 py-0.5 text-[9px] font-black uppercase border border-zinc-700 text-white bg-transparent">
                    Salir
                  </div>
                </div>
              </div>

              {/* Conexiones Row (Avatars + Locks) */}
              <div className="py-4 border-b border-zinc-200">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-3">
                  Conexiones Activas
                </h4>
                
                <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                  {MATCHES_PREVIEW.map((m) => (
                    <div key={m.id} className="flex flex-col items-center shrink-0 relative group">
                      <div className="relative">
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="w-12 h-12 object-cover border-2 border-[#FFFF00]"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 text-white text-[8px] font-black flex items-center justify-center">
                          ✕
                        </span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-white mt-1">
                        {m.name}
                      </span>
                    </div>
                  ))}

                  {/* Lock slots from screenshot */}
                  {[1, 2, 3].map((slot) => (
                    <div key={slot} className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 border border-dashed border-zinc-700 flex items-center justify-center text-white bg-transparent">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-black uppercase text-white mt-1">
                        FREE
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chats List */}
              <div className="pt-3">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white mb-3">
                  Conversaciones Abiertas
                </h4>

                <div className="space-y-2">
                  {MATCHES_PREVIEW.map((chat) => (
                    <div
                      key={chat.id}
                      className="p-2.5 bg-white border border-zinc-200 hover:border-[#FFFF00] transition-colors flex items-start gap-3 cursor-pointer"
                    >
                      {/* Avatar with online dot */}
                      <div className="relative shrink-0">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-10 h-10 object-cover border border-zinc-700"
                          referrerPolicy="no-referrer"
                        />
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-black text-xs uppercase text-white">
                              {chat.name}
                            </span>
                          </div>
                          <span className="text-[9px] text-white font-mono-tag">
                            {chat.time}
                          </span>
                        </div>

                        <p className="text-xs text-white truncate mt-0.5 font-medium">
                          {chat.lastMessage}
                        </p>
                      </div>

                      {/* Action / Unread Badge */}
                      <div className="shrink-0 flex items-center gap-1 self-center">
                        {chat.unreadCount ? (
                          <span className="w-4 h-4 bg-[#FFFF00] text-black text-[9px] font-black flex items-center justify-center">
                            {chat.unreadCount}
                          </span>
                        ) : null}
                        <div className="p-1 text-white hover:text-red-500">
                          <Trash2 className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar CTA */}
              <div className="text-center pt-4">
                <button
                  id="preview-open-full-chats-cta"
                  onClick={onOpenAppClick}
                  className="w-full py-3 bg-black text-black hover:bg-[#FFFF00] font-black text-xs uppercase tracking-tighter transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Abrir Chats en la App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

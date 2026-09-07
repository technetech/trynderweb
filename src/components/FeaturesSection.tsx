import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, Flame, Check, X, ArrowRight } from 'lucide-react';
import { FEATURES } from '../data/mockData';

interface FeaturesSectionProps {
  onOpenAppClick: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenAppClick }) => {
  return (
    <section id="beneficios" className="py-20 lg:py-32 bg-white relative border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-block bg-[#FFFF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
            Entrenamiento de Alto Impacto
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase italic">
            Por qué el 94% de los hombres{' '}
            <span className="text-[#FFFF00] not-italic">multiplica sus resultados</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-medium">
            La mayoría pierde oportunidades por tres errores: sobrepensar, sonar como el promedio o no saber cuándo acelerar la tensión conversacional.
          </p>
        </div>

        {/* Bento Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {FEATURES.map((feat, idx) => {
            const Icon = idx === 0 ? ShieldCheck : idx === 1 ? Zap : idx === 2 ? Users : Flame;
            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-[#111111] border-2 border-zinc-200 hover:border-[#FFFF00] p-8 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-[#FFFF00] border border-[#FFFF00] flex items-center justify-center text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-[#FFFF00] text-white font-mono-tag border border-transparent">
                      {feat.metric}
                    </span>
                  </div>

                  <span className="text-[10px] font-black uppercase text-[#FFFF00] tracking-widest block mb-1">
                    {feat.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm font-semibold text-white mb-3">
                    {feat.subtitle}
                  </p>
                  <p className="text-sm text-white leading-relaxed font-medium">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200 flex items-center justify-between text-xs font-black uppercase text-white group-hover:text-white transition-colors">
                  <span>Módulo de Calibración</span>
                  <span className="text-[#FFFF00]">● Trynder Core</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Comparison: Sin Trynder vs Con Trynder */}
        <div className="bg-[#111111] border-2 border-zinc-200 p-6 sm:p-10 relative">
          <div className="text-left max-w-2xl mb-10 space-y-2">
            <div className="inline-block bg-black text-white text-[9px] font-black uppercase px-2 py-0.5 tracking-wider">
              Diagnóstico Comparativo
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase italic">
              La diferencia entre improvisar y entrenar
            </h3>
            <p className="text-xs sm:text-sm text-white font-medium">
              Mira qué ocurre cuando cambias la frustración tradicional por la práctica deliberada en Trynder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sin Trynder */}
            <div className="bg-white border border-red-900/50 p-6 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-black text-xs uppercase tracking-wider">
                <X className="w-4 h-4 stroke-[3]" />
                <span>Sin Trynder (El método que no funciona)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-black font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black shrink-0">✕</span>
                  <span>Mandas "hola qué tal tu día" y compites con otros 50 mensajes idénticos en su bandeja.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black shrink-0">✕</span>
                  <span>Tardas 45 minutos pensando una frase para recibir solo un frío "jaja sí".</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black shrink-0">✕</span>
                  <span>Quemas a tus mejores matches en la vida real por falta de agilidad verbal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-black shrink-0">✕</span>
                  <span>Inseguridad constante sobre si estás sonando necesitado o demasiado plano.</span>
                </li>
              </ul>
            </div>

            {/* Con Trynder */}
            <div className="bg-white border-2 border-[#FFFF00] p-6 space-y-4 shadow-[0_0_20px_rgba(255,255,0,0.15)]">
              <div className="flex items-center gap-2 text-[#FFFF00] font-black text-xs uppercase tracking-wider">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Con Trynder (Mentalidad de Calibración & Aura)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-black font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FFFF00] font-black shrink-0">✓</span>
                  <span>Abres con observaciones ingeniosas que provocan curiosidad inmediata y risas.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FFFF00] font-black shrink-0">✓</span>
                  <span>Respuestas espontáneas en segundos porque tienes los patrones de labia internalizados.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FFFF00] font-black shrink-0">✓</span>
                  <span>Cometes errores en el simulador y sales al mundo real 100% calibrado y seguro.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FFFF00] font-black shrink-0">✓</span>
                  <span>Cierras citas de forma natural y magnética, proyectando alto estatus y carisma.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-8 text-left">
            <button
              id="comparison-cta-btn"
              onClick={onOpenAppClick}
              className="bg-[#FFFF00] text-black px-8 py-4 text-xs font-black uppercase tracking-tighter hover:scale-105 transition-transform inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Subir de nivel ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

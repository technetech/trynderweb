import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

interface TestimonialsSectionProps {
  onOpenAppClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-white relative border-t border-zinc-200">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#FFFF00]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-block bg-[#FFFF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
            Casos de Estudio
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase italic">
            Hombres reales.{' '}
            <span className="text-[#FFFF00] not-italic">Conversaciones que cierran citas.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-medium">
            Descubre cómo pasaron del ghosting permanente a tener control e impacto real en sus interacciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-[#111111] border-2 border-zinc-200 hover:border-[#FFFF00] p-6 sm:p-8 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#FFFF00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFFF00]" />
                  ))}
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-lg font-black uppercase text-white font-display tracking-tight">
                  "{t.headline}"
                </h3>

                {/* Story */}
                <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                  {t.story}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200 space-y-4">
                {/* Metric Before / After */}
                <div className="bg-transparent p-3 border border-zinc-700 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white block text-[9px] uppercase font-black tracking-wider">Antes:</span>
                    <span className="text-red-400 font-mono-tag text-xs">{t.statBefore}</span>
                  </div>
                  <div className="w-[1px] h-6 bg-zinc-200" />
                  <div className="text-right">
                    <span className="text-white block text-[9px] uppercase font-black tracking-wider">Con Trynder:</span>
                    <span className="text-[#FFFF00] font-mono-tag font-black text-xs">{t.statAfter}</span>
                  </div>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 object-cover border border-zinc-700 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-black uppercase text-white">{t.name}, {t.age}</h4>
                    <span className="text-[11px] text-white font-mono-tag">{t.city} • {t.handle}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';

interface HowItWorksProps {
  onOpenAppClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const steps = [
    {
      num: '01',
      title: 'Elige tu Arquetipo & Nivel',
      desc: 'Selecciona el perfil femenino con el que más te cuesta conversar: la abogada con mente aguda, la experta en yoga o la chica distante que te desafía en cada frase.',
      tag: 'FASE 01'
    },
    {
      num: '02',
      title: 'Prueba Abridores & Tensión',
      desc: 'Chatea sin presión. Prueba bromas, preguntas atrevidas, dobles sentidos y observa cómo reacciona en tiempo real a tus decisiones y ritmo.',
      tag: 'FASE 02'
    },
    {
      num: '03',
      title: 'Recibe Análisis de Aura Inmediato',
      desc: 'El algoritmo te indica exactamente dónde perdiste el interés, qué mensaje fue un 10/10 y qué palabras transmitieron desesperación o inseguridad.',
      tag: 'FASE 03'
    },
    {
      num: '04',
      title: 'Aplica la Labia en el Mundo Real',
      desc: 'Sales a tus citas, a Tinder o a Instagram con patrones probados, fluidez natural y una seguridad magnética calibrada.',
      tag: 'FASE 04'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-white relative border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-block bg-[#FFBF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
            Metodología de Entrenamiento
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase italic">
            De dudar al escribir a conversar con <span className="text-[#FFBF00] not-italic">aura dominante</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-medium">
            Un sistema de 4 fases rigurosamente diseñado para que construyas agilidad social sin quemar oportunidades reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-zinc-200">
          {steps.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-[#111111] border-r border-b border-zinc-200 hover:border-[#FFBF00] p-6 sm:p-8 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-[#FFBF00] font-display">
                    {s.num}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-transparent text-white border border-zinc-200">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black uppercase text-white mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBF00]" />
                <span>Simulación activa</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

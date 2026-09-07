import React from 'react';
import { motion } from 'motion/react';
import { PERSONAS } from '../data/mockData';
import { Zap, ArrowRight, Heart } from 'lucide-react';

interface PersonasSectionProps {
  onOpenAppClick: () => void;
}

export const PersonasSection: React.FC<PersonasSectionProps> = ({ onOpenAppClick }) => {
  return (
    <section id="perfiles" className="py-20 lg:py-32 bg-white relative border-t border-zinc-200">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#FFFF00]/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <div className="inline-block bg-[#FFFF00] text-white text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
            Lookbook de Arquetipos
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase italic">
            Cada mujer es un reto diferente.{' '}
            <span className="text-[#FFFF00] not-italic">Aprende a calibrar.</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-medium">
            En el mundo real no puedes usar la misma frase con una abogada analítica que con una chica bohemia. En Trynder entrenas con personalidades calibradas para templar tu marco social.
          </p>
        </div>

        {/* 4 Cards Grid mirroring the user's reference profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAS.map((persona, index) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="group bg-[#111111] border-2 border-zinc-200 hover:border-[#FFFF00] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,0,0.15)]"
            >
              {/* Card Image Header */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white">
                <img
                  src={persona.image}
                  alt={persona.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-white/40 pointer-events-none" />

                {/* Difficulty Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider ${
                      persona.difficulty === 'Modo Desafío'
                        ? 'bg-red-500 text-black'
                        : persona.difficulty === 'Avanzado'
                        ? 'bg-[#FFFF00] text-white'
                        : 'bg-white text-zinc-700 border border-zinc-200'
                    }`}
                  >
                    {persona.difficulty}
                  </span>
                </div>

                {/* Aura indicator */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 text-[10px] font-black bg-white text-[#FFFF00] border border-zinc-200 flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-[#FFFF00]" />
                    {persona.auraBonus}
                  </span>
                </div>

                {/* Name & Profession overlay */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-black text-black font-display uppercase tracking-tight">
                    {persona.name}, {persona.age}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-600">
                    {persona.profession}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-[11px] font-black text-[#FFFF00] uppercase tracking-wider">
                    {persona.archetype}
                  </p>
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed font-medium">
                    "{persona.bio}"
                  </p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {persona.badges.map((b, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[9px] font-bold uppercase bg-white text-zinc-700 border border-zinc-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Sample Chat Pill */}
                <div className="bg-white border border-zinc-200 p-3 space-y-1">
                  <div className="text-[9px] uppercase font-black tracking-widest text-zinc-500">
                    Banter de prueba:
                  </div>
                  <p className="text-xs text-zinc-700 italic line-clamp-2 font-medium">
                    "{persona.chatSnippet.ai}"
                  </p>
                </div>

                {/* Action button */}
                <button
                  id={`chat-with-${persona.id}`}
                  onClick={onOpenAppClick}
                  className="w-full py-2.5 px-4 text-xs font-black uppercase tracking-tighter text-white bg-[#FFFF00] hover:scale-102 transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-black" />
                  <span>Chatear con {persona.name}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Matches & VIP Hint Bar */}
        <div className="mt-12 p-6 bg-[#111111] border-2 border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border border-zinc-700 flex items-center justify-center text-[#FFFF00] shrink-0">
              <Zap className="w-6 h-6 fill-[#FFFF00]" />
            </div>
            <div>
              <h4 className="text-base font-black uppercase text-black tracking-tight">
                ¿Buscas retos más complejos o situaciones específicas?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                Trynder añade nuevos arquetipos cada semana: perfiles de alto estatus, retos directos y pruebas de marco de nivel élite.
              </p>
            </div>
          </div>

          <button
            id="explore-all-personas-cta"
            onClick={onOpenAppClick}
            className="shrink-0 px-6 py-3 text-xs font-black uppercase tracking-wider text-black bg-white hover:bg-white hover:text-black border border-zinc-600 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Ver todos los perfiles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Heart, X, Zap, Play } from 'lucide-react';
import { PERSONAS } from '../data/mockData';

interface HeroProps {
  onOpenAppClick: () => void;
  onExploreDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppClick, onExploreDemoClick }) => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipeFeedback, setSwipeFeedback] = useState<'like' | 'pass' | null>(null);

  const profile = PERSONAS[currentProfileIndex];

  const handleAction = (type: 'like' | 'pass') => {
    setSwipeFeedback(type);
    setTimeout(() => {
      setSwipeFeedback(null);
      setCurrentProfileIndex((prev) => (prev + 1) % PERSONAS.length);
    }, 450);
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-zinc-200">
      
      {/* Editorial Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Bold Editorial Copy & Controls */}
        <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-8 lg:pl-12 lg:pr-10 py-12 sm:py-16 lg:py-24 text-left">
          
          {/* Editorial Tag */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block bg-[#FFFF00] text-black text-[10px] font-black uppercase px-2.5 py-1 mb-6 w-fit tracking-wider shadow-sm"
          >
            High-Performance Social AI
          </motion.div>

          {/* High-Impact Editorial Italic Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[88px] leading-[0.88] font-black tracking-tighter uppercase mb-6 italic text-black"
          >
            Domina <br />
            <span className="text-[#FFFF00] not-italic">el Juego.</span>
          </motion.h1>

          {/* Editorial Lead Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-lg sm:text-xl text-zinc-600 max-w-lg mb-8 font-medium leading-tight"
          >
            Practica tus habilidades sociales con inteligencias artificiales de alto nivel. Sin riesgos, sin rechazos, solo progreso real y calibración implacable.
          </motion.p>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10"
          >
            <button
              id="hero-primary-cta"
              onClick={onOpenAppClick}
              className="bg-[#FFFF00] text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,0,0.35)] cursor-pointer flex items-center gap-3"
            >
              <span>Entrar a la App</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              id="hero-secondary-demo"
              onClick={onExploreDemoClick}
              className="border-2 border-white px-6 py-4 text-xs font-black uppercase tracking-widest text-black hover:bg-white hover:text-black transition-all cursor-pointer flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Ver Simulador</span>
            </button>
          </motion.div>

          {/* User Count & Active Metric */}
          <div className="flex items-center gap-5 pt-6 border-t border-zinc-200/80">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-200 flex items-center justify-center text-[10px] font-black text-[#FFFF00]">
                +10k
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-700"></div>
              <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-600"></div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 leading-tight">
              Usuarios activos <br />
              <strong className="text-black font-black">esta semana</strong>
            </span>
          </div>

        </div>

        {/* Right Column: Editorial Stage & Interactive Phone Frame */}
        <div className="lg:col-span-5 relative bg-[#111111] border-t lg:border-t-0 lg:border-l border-zinc-200 flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden min-h-[620px]">
          
          {/* Top Right Metric Badge */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-right z-20">
            <div className="text-4xl sm:text-5xl font-black text-[#FFFF00] tracking-tight">98%</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase text-zinc-600 tracking-tighter leading-tight">
              Tasa de mejora <br /> percibida
            </div>
          </div>

          {/* Subdued Editorial Watermark */}
          <div className="absolute bottom-10 left-[-40px] rotate-90 hidden sm:block pointer-events-none select-none">
            <span className="text-[60px] font-black text-black opacity-5 tracking-tighter">
              CONVERSATION
            </span>
          </div>

          {/* High-Performance Interactive Phone Frame */}
          <div className="w-[310px] sm:w-[340px] bg-white border-[6px] border-zinc-200 rounded-[38px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(255,255,0,0.15)] relative overflow-hidden flex flex-col z-10">
            
            {/* Phone Top Header */}
            <div className="bg-zinc-100 p-4 border-b border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FFFF00] to-white flex items-center justify-center text-white font-black text-xs">
                  {profile.name[0]}
                </div>
                <div>
                  <div className="text-xs font-black text-black uppercase tracking-tight">
                    {profile.name} (Advanced)
                  </div>
                  <div className="text-[9px] text-[#FFFF00] font-bold tracking-wider uppercase flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFFF00] animate-ping" />
                    • EN LÍNEA
                  </div>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-[#8b5cf6] text-black">
                VIP
              </span>
            </div>

            {/* Profile Card View */}
            <div className="relative aspect-[3/3.8] bg-zinc-50 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, x: swipeFeedback === 'like' ? 100 : -100 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />

                  {/* Swipe Match Indicator */}
                  {swipeFeedback && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-xs z-20">
                      {swipeFeedback === 'like' ? (
                        <div className="bg-[#FFFF00] text-black px-6 py-2.5 font-black text-xl uppercase tracking-tighter shadow-lg flex items-center gap-2">
                          <Heart className="w-5 h-5 fill-black" />
                          <span>¡MATCH!</span>
                        </div>
                      ) : (
                        <div className="bg-zinc-100 border-2 border-red-500 text-red-400 px-6 py-2.5 font-black text-xl uppercase tracking-tighter flex items-center gap-2">
                          <X className="w-5 h-5" />
                          <span>SIGUIENTE</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Profile Info Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-black z-10">
                    <div className="flex items-baseline justify-between">
                      <h2 className="text-xl font-black uppercase tracking-tight font-display">
                        {profile.name}, {profile.age}
                      </h2>
                      <span className="text-[10px] font-bold text-[#FFFF00] uppercase">
                        {profile.archetype}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-700 font-medium">
                      {profile.profession}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Tag Aura */}
              <div className="absolute top-3 left-3 z-10">
                <div className="px-2 py-0.5 bg-white/80 text-[#FFFF00] text-[10px] font-black uppercase flex items-center gap-1 border border-zinc-200">
                  <Zap className="w-3 h-3 fill-[#FFFF00]" />
                  <span>{profile.auraBonus}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Bar: Discard vs Match */}
            <div className="p-3 bg-zinc-100 border-t border-zinc-200 flex items-center justify-between gap-3">
              <button
                id="preview-pass-button"
                onClick={() => handleAction('pass')}
                className="flex-1 py-2.5 bg-zinc-200 hover:bg-zinc-700 text-zinc-700 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Pasar</span>
              </button>
              <button
                id="preview-like-button"
                onClick={() => handleAction('like')}
                className="flex-1 py-2.5 bg-[#FFFF00] hover:bg-white text-black font-black text-xs uppercase tracking-tighter flex items-center justify-center gap-1.5 transition-colors shadow-md cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-black" />
                <span>Match</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

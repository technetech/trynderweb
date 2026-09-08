import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import img1 from '../assets/carousel/1.jpg';
import img2 from '../assets/carousel/2.jpg';
import img3 from '../assets/carousel/3.jpg';
import img4 from '../assets/carousel/4.jpg';
import img5 from '../assets/carousel/5.jpg';

const CAROUSEL_IMAGES = [img1, img2, img3, img4, img5];

interface HeroProps {
  onOpenAppClick: () => void;
  onExploreDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppClick, onExploreDemoClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
            className="inline-block bg-[#FFBF00] text-black text-[10px] font-black uppercase px-2.5 py-1 mb-6 w-fit tracking-wider shadow-sm"
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
            <span className="text-[#FFBF00] not-italic">el Juego.</span>
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
              className="bg-[#FFBF00] text-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,0,0.35)] cursor-pointer flex items-center gap-3"
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
              <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-200 flex items-center justify-center text-[10px] font-black text-[#FFBF00]">
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
        <div className="lg:col-span-5 relative bg-gradient-to-t from-white via-white to-[#FFBF00]/30 border-t lg:border-t-0 lg:border-l border-zinc-200 flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden min-h-[620px]">
          
          {/* Top Right Metric Badge */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-right z-20">
            <div className="text-4xl sm:text-5xl font-black text-[#FFBF00] tracking-tight">98%</div>
            <div className="text-[9px] sm:text-[10px] font-bold uppercase text-black tracking-tighter leading-tight">
              Tasa de mejora <br /> percibida
            </div>
          </div>

          {/* Subdued Editorial Watermark */}
          <div className="absolute bottom-10 left-[-40px] rotate-90 hidden sm:block pointer-events-none select-none">
            <span className="text-[60px] font-black text-black opacity-5 tracking-tighter">
              CONVERSATION
            </span>
          </div>

          {/* Image Carousel */}
          <div className="w-[310px] sm:w-[380px] relative overflow-hidden rounded-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_35px_rgba(255,191,0,0.4)] z-10 flex flex-col bg-white">
            <div className="relative aspect-[3/3.8] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={CAROUSEL_IMAGES[currentIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-contain bg-white"
                  alt={`Slide ${currentIndex + 1}`}
                />
              </AnimatePresence>
            </div>
            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {CAROUSEL_IMAGES.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-[#FFBF00]' : 'bg-zinc-300'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

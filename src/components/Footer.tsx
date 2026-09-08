import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import logoUrl from '../assets/trynderblancologo1.2.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-zinc-200 text-zinc-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Status Bar (as in theme preview) */}
        <div className="py-6 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Nivel actual</span>
              <span className="text-xs font-black text-black uppercase tracking-wider">AVANZADO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Escenarios</span>
              <span className="text-xs font-black text-black uppercase tracking-wider">500+ DISPONIBLES</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Latencia IA</span>
              <span className="text-xs font-black text-[#FFBF00] uppercase tracking-wider">&lt; 140ms</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFBF00] animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Servidores estables
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-zinc-200">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logoUrl} alt="Trynder Logo" className="h-10 w-auto" />
            </div>
            <p className="text-zinc-600 text-xs sm:text-sm max-w-md leading-relaxed font-medium">
              El simulador de citas con IA número 1 para hombres. Entrena abridores, respuestas rápidas, calibración social y tensión lúdica en un entorno 100% libre de consecuencias.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Shield className="w-3.5 h-3.5 text-[#FFBF00]" />
              <span className="uppercase text-[10px] font-bold tracking-wider">Privacidad garantizada • Sesiones 100% confidenciales</span>
            </div>
          </div>



          {/* Col 3: Arquetipos */}
          <div>
            <h4 className="text-black font-black text-xs uppercase tracking-widest mb-4">
              Arquetipos Clave
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-600">
              <li>Sofia, 25 (Abogada / Marco Lógico)</li>
              <li>Sabine, 25 (Yoga / Conexión Emocional)</li>
              <li>Joséphine, 23 (Enfermera / Dinamismo)</li>
              <li>Yaritza, 22 (Enfermera / Coqueteo Exigente)</li>
              <li className="text-[#FFBF00] font-bold">Pase VIP (Personalidades Semanales)</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} TRYNDER. High-Performance Social AI. Todos los derechos reservados.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-700 hover:text-[#FFBF00] transition-colors px-3 py-1.5 bg-zinc-100 border border-zinc-200 text-xs font-black uppercase tracking-wider cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

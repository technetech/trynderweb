import React from 'react';
import { ArrowRight } from 'lucide-react';
import logoUrl from '../assets/trynderblancologo1.2.jpg';

interface NavbarProps {
  onOpenAppClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Editorial Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <img src={logoUrl} alt="Trynder Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
            </a>
          </div>

          {/* Right Action: Entrar a la App Button */}
          <div>
            <button
              id="navbar-cta-btn"
              onClick={onOpenAppClick}
              className="bg-[#FFFF00] text-black px-4 sm:px-6 py-2.5 text-xs font-black uppercase tracking-tighter hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,255,0,0.3)]"
            >
              <span>Entrar a la App</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

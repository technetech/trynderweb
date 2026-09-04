import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAppClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Editorial Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-[#FFFF00] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,0,0.3)] transition-transform group-hover:scale-110">
                <div className="w-4 h-4 bg-black rounded-sm rotate-45"></div>
              </div>
              <span className="font-black text-2xl tracking-tighter text-white font-display uppercase">
                TRYNDER
              </span>
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface EnterAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartSimulation: () => void;
}

export const EnterAppModal: React.FC<EnterAppModalProps> = ({
  isOpen,
  onClose,
  onStartSimulation,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-white/90 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#111111] border-2 border-[#FFFF00] p-6 sm:p-8 shadow-[0_0_50px_rgba(255,255,0,0.25)] z-10 overflow-hidden text-black"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFFF00]/10 blur-3xl rounded-full pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-zinc-600 hover:text-white hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div className="space-y-6">
              <div className="inline-block bg-[#FFFF00] text-white text-[9px] font-black uppercase px-2 py-0.5 tracking-wider">
                Acceso a la WebApp // Trynder
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-black font-display uppercase tracking-tight italic">
                  Estás a un paso de dominar la conversación
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 mt-2 leading-relaxed font-medium">
                  El botón de enlace a la webapp está configurado. Puedes probar el simulador en vivo ahora mismo o registrarte para acceso prioritario con el pase VIP.
                </p>
              </div>

              {/* Quick Simulator Jump Button */}
              <button
                onClick={() => {
                  onClose();
                  onStartSimulation();
                }}
                className="w-full py-3.5 px-4 bg-white border border-zinc-700 hover:border-[#FFFF00] text-zinc-200 hover:text-white font-black text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFFF00] fill-[#FFFF00]" />
                  <span>Ir directo al simulador interactivo</span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
              </button>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-zinc-200" />
                <span className="flex-shrink mx-4 text-[10px] font-black uppercase text-zinc-500 font-mono-tag">
                  o recibe tu enlace de acceso
                </span>
                <div className="flex-grow border-t border-zinc-200" />
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico..."
                  className="w-full bg-white border border-zinc-700 focus:border-[#FFFF00] px-4 py-3.5 text-xs sm:text-sm text-black placeholder-zinc-500 focus:outline-none transition-colors"
                />

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 font-black uppercase text-xs sm:text-sm tracking-tighter text-white bg-[#FFFF00] hover:scale-102 transition-transform flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Entrar a Trynder</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-[10px] text-zinc-500 text-center font-mono-tag uppercase">
                🔒 Cero spam. 100% privado y confidencial.
              </p>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#FFFF00] text-white mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(255,255,0,0.3)]">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <h3 className="text-2xl font-black text-black font-display uppercase italic">
                ¡Pase VIP Activado!
              </h3>
              
              <p className="text-xs sm:text-sm text-zinc-700 max-w-sm mx-auto leading-relaxed font-medium">
                Hemos registrado tu solicitud para <strong className="text-black">{email}</strong>. Puedes empezar a practicar de inmediato en nuestro simulador en vivo.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => {
                    onClose();
                    onStartSimulation();
                  }}
                  className="w-full py-3.5 px-6 font-black uppercase text-xs tracking-wider text-white bg-[#FFFF00] hover:scale-102 transition-transform shadow-md cursor-pointer"
                >
                  Ir al Simulador en Vivo Ahora
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

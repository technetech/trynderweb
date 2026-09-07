import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Zap, RotateCcw, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, UserCheck, Flame } from 'lucide-react';
import { PERSONAS } from '../data/mockData';
import { Persona } from '../types';

interface LiveSimulatorProps {
  onOpenAppClick: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const LiveSimulator: React.FC<LiveSimulatorProps> = ({ onOpenAppClick }) => {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(PERSONAS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-ai',
      sender: 'ai',
      text: selectedPersona.chatSnippet.ai,
      time: '18:42'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<{
    score: number;
    title: string;
    description: string;
    impact: string;
    type: 'positive' | 'neutral' | 'negative';
  }>({
    score: 94,
    title: 'Calibración Óptima',
    description: selectedPersona.chatSnippet.tip,
    impact: '+25 Aura',
    type: 'positive'
  });

  const handleSelectPersona = (p: Persona) => {
    setSelectedPersona(p);
    setMessages([
      {
        id: `init-${p.id}`,
        sender: 'ai',
        text: `Hola! Acabo de ver tu perfil... a ver si tienes algo más interesante que decir que el resto. 😉`,
        time: 'Ahora'
      }
    ]);
    setCurrentFeedback({
      score: 85,
      title: 'En espera de tu apertura',
      description: `Estás frente a ${p.name} (${p.profession}). Mide bien tu primera frase.`,
      impact: '0 Aura',
      type: 'neutral'
    });
  };

  const handleSendCustomMessage = (textToSend?: string) => {
    const text = textToSend || inputText.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: 'Ahora'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Analyze text heuristic or check against samplePrompts
    const matchedPrompt = selectedPersona.samplePrompts.find(
      (p) => p.text.toLowerCase().includes(text.toLowerCase().slice(0, 15)) ||
             text.toLowerCase().includes(p.text.toLowerCase().slice(0, 15))
    );

    setTimeout(() => {
      setIsTyping(false);
      let aiResponseText = '';
      
      if (matchedPrompt) {
        aiResponseText = matchedPrompt.reply;
        const isAlpha = matchedPrompt.type === 'alpha';
        setCurrentFeedback({
          score: isAlpha ? 95 : matchedPrompt.type === 'neutral' ? 65 : 30,
          title: isAlpha ? 'Aura Magnética' : matchedPrompt.type === 'neutral' ? 'Aceptable pero Básico' : 'Pérdida de Interés',
          description: matchedPrompt.feedback,
          impact: isAlpha ? `+${matchedPrompt.auraImpact} Aura` : `${matchedPrompt.auraImpact} Aura`,
          type: isAlpha ? 'positive' : matchedPrompt.type === 'neutral' ? 'neutral' : 'negative'
        });
      } else {
        // Dynamic smart response simulation based on tone
        const lower = text.toLowerCase();
        const isQuestion = text.includes('?') || text.includes('¿');
        const isShortGreeting = lower.length < 15 && (lower.includes('hola') || lower.includes('linda') || lower.includes('guapa'));
        
        if (isShortGreeting) {
          aiResponseText = 'Hola... veo que la creatividad se quedó en la otra app jaja. Cuéntame algo que valga la pena leer.';
          setCurrentFeedback({
            score: 35,
            title: 'Mensaje Genérico Detectado',
            description: 'Saludar con un simple "hola guapa" o adular en el primer mensaje te pone en la misma categoría que otros 30 pretendientes.',
            impact: '-20 Aura',
            type: 'negative'
          });
        } else if (isQuestion && (lower.includes('apuesto') || lower.includes('seguro') || lower.includes('verdad') || lower.includes('café') || lower.includes('vino'))) {
          aiResponseText = `Jajaja me gusta la gente que va directo al grano con ingenio. Puede que tengas razón... pero vas a tener que comprobarlo en persona. 😏`;
          setCurrentFeedback({
            score: 92,
            title: 'Excelente Iniciativa y Juego',
            description: 'Plantear una hipótesis lúdica o desafío activa la intriga femenina sin necesidad de elogios vacíos.',
            impact: '+30 Aura',
            type: 'positive'
          });
        } else {
          aiResponseText = `Interesante punto... no me lo esperaba. Me gusta que no seas el típico que dice lo predecible. ¿Qué más ocultas?`;
          setCurrentFeedback({
            score: 82,
            title: 'Buen Ritmo Conversacional',
            description: 'Mantienes la conversación viva con curiosidad abierta. Buen control de marco.',
            impact: '+15 Aura',
            type: 'positive'
          });
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiResponseText,
          time: 'Ahora'
        }
      ]);
    }, 1100);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `init-${selectedPersona.id}`,
        sender: 'ai',
        text: `Hola! Acabo de ver tu perfil... a ver si tienes algo más interesante que decir que el resto. 😉`,
        time: 'Ahora'
      }
    ]);
    setCurrentFeedback({
      score: 85,
      title: 'Chat Reiniciado',
      description: 'Prueba otro estilo de apertura para comparar la reacción.',
      impact: '0 Aura',
      type: 'neutral'
    });
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-white relative border-t border-zinc-200">
      
      {/* Subtle background aura glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFFF00]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-block bg-[#FFFF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
            Laboratorio de Conversación en Vivo
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black font-display uppercase italic">
            Pon a prueba tu labia en el simulador
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Elige una de las IAs de Trynder, lanza un abridor y mira cómo responde en tiempo real con análisis de <strong className="text-black font-bold">Aura y Calibración</strong>.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {PERSONAS.map((p) => {
            const isSelected = selectedPersona.id === p.id;
            return (
              <button
                key={p.id}
                id={`select-persona-${p.id}`}
                onClick={() => handleSelectPersona(p)}
                className={`flex items-center gap-3 px-4 py-2 border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFFF00] text-black border-[#FFFF00] shadow-[0_0_15px_rgba(255,255,0,0.3)]'
                    : 'bg-[#111111] text-zinc-600 border-zinc-200 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-8 h-8 rounded-full object-cover border border-black/20"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-black uppercase ${isSelected ? 'text-white' : 'text-black'}`}>
                      {p.name}, {p.age}
                    </span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className={`text-[10px] block font-medium ${isSelected ? 'text-white/70' : 'text-zinc-500'}`}>
                    {p.profession}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Chat Simulator Window (mimics mobile chat) */}
          <div className="lg:col-span-7 bg-[#111111] border-2 border-zinc-200 shadow-2xl flex flex-col h-[580px]">
            
            {/* Simulator Header */}
            <div className="px-5 py-4 bg-white border-b border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={selectedPersona.image}
                    alt={selectedPersona.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#FFFF00]"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black text-white uppercase tracking-tight">
                      {selectedPersona.name}, {selectedPersona.age}
                    </h3>
                    <span className="text-[9px] font-black px-1.5 py-0.5 bg-[#FFFF00] text-black uppercase">
                      {selectedPersona.archetype}
                    </span>
                  </div>
                  <p className="text-[11px] text-white font-medium">
                    {selectedPersona.profession} • En línea ahora
                  </p>
                </div>
              </div>

              <button
                id="reset-chat-button"
                onClick={handleResetChat}
                className="p-2 text-white hover:text-[#FFFF00] hover:bg-zinc-900 border border-zinc-200 transition-colors cursor-pointer"
                title="Reiniciar chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white">
              {messages.map((m) => {
                const isUser = m.sender === 'user';
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[82%] px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                        isUser
                          ? 'bg-[#FFFF00] text-black font-bold shadow-md'
                          : 'bg-zinc-100 text-white border border-zinc-200'
                      }`}
                    >
                      <p>{m.text}</p>
                      <span
                        className={`text-[9px] mt-1 block text-right font-mono-tag ${
                          isUser ? 'text-white/60 font-semibold' : 'text-white'
                        }`}
                      >
                        {m.time}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 border border-zinc-200 px-4 py-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FFFF00] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFFF00] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#FFFF00] animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions / Prompt Buttons */}
            <div className="px-4 py-3 bg-[#111111] border-t border-zinc-200">
              <div className="text-[10px] font-black text-white uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#FFFF00]" />
                Abridores tácticos de prueba:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedPersona.samplePrompts.map((sp, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendCustomMessage(sp.text)}
                    disabled={isTyping}
                    className={`text-xs px-3 py-1.5 border text-left transition-all truncate max-w-full cursor-pointer ${
                      sp.type === 'alpha'
                        ? 'bg-transparent hover:bg-zinc-900 text-white border-zinc-700 hover:border-[#FFFF00]'
                        : sp.type === 'simp'
                        ? 'bg-red-950/20 text-red-300 border-red-900/40 hover:bg-red-950/40'
                        : 'bg-transparent text-white border-zinc-200 hover:text-white'
                    }`}
                  >
                    <span className="font-bold mr-1.5">
                      {sp.type === 'alpha' ? '⚡ Ingenio:' : sp.type === 'simp' ? '⚠️ Error común:' : '💬 Casual:'}
                    </span>
                    "{sp.text.slice(0, 40)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input Bar */}
            <div className="p-3.5 bg-white border-t border-zinc-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendCustomMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  id="simulator-text-input"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Escribe tu mensaje para ${selectedPersona.name}...`}
                  disabled={isTyping}
                  className="flex-1 bg-[#111111] border border-zinc-700 focus:border-[#FFFF00] px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
                />
                <button
                  id="simulator-send-btn"
                  type="submit"
                  disabled={isTyping || !inputText.trim()}
                  className="px-5 py-3 bg-[#FFFF00] text-black hover:scale-105 disabled:opacity-40 transition-all font-black uppercase text-xs cursor-pointer flex items-center gap-1"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          {/* Right: Real-time Aura & Calibration Analysis Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Aura Card */}
            <div className="bg-[#111111] border-2 border-zinc-200 p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <Flame className="w-36 h-36 text-[#FFFF00]" />
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                  Radar de Calibración
                </span>
                <span
                  className={`px-2.5 py-0.5 text-[10px] font-black uppercase ${
                    currentFeedback.type === 'positive'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : currentFeedback.type === 'negative'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                      : 'bg-[#FFFF00]/20 text-[#FFFF00] border border-[#FFFF00]/40'
                  }`}
                >
                  {currentFeedback.impact}
                </span>
              </div>

              {/* Big Score Display */}
              <div className="flex items-baseline gap-4 mb-4">
                <div className="text-5xl font-black text-white font-display">
                  {currentFeedback.score}
                </div>
                <div className="text-xs font-bold uppercase text-white tracking-wider">
                  / 100 <span className="text-[#FFFF00] font-black">Aura Points</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-zinc-200 overflow-hidden mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${currentFeedback.score}%` }}
                  transition={{ duration: 0.5 }}
                  className={`h-full ${
                    currentFeedback.score > 80
                      ? 'bg-[#FFFF00] shadow-[0_0_12px_#FFFF00]'
                      : currentFeedback.score > 50
                      ? 'bg-amber-400'
                      : 'bg-red-500'
                  }`}
                />
              </div>

              {/* Feedback Breakdown */}
              <div className="space-y-2.5 bg-white p-4 border border-zinc-200">
                <div className="flex items-center gap-2">
                  {currentFeedback.type === 'positive' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : currentFeedback.type === 'negative' ? (
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  ) : (
                    <Zap className="w-4 h-4 text-[#FFFF00] shrink-0" />
                  )}
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">
                    {currentFeedback.title}
                  </h4>
                </div>
                <p className="text-xs text-white leading-relaxed font-medium">
                  {currentFeedback.description}
                </p>
              </div>

              {/* Persona Archetype Info */}
              <div className="mt-6 pt-6 border-t border-zinc-200">
                <h5 className="text-[10px] font-black uppercase text-white tracking-widest mb-2">
                  Ficha de {selectedPersona.name}
                </h5>
                <p className="text-xs text-white italic mb-3 font-medium">
                  "{selectedPersona.bio}"
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPersona.badges.map((b, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-black uppercase bg-transparent text-white border border-zinc-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Card to Enter App */}
            <div className="bg-[#111111] border-2 border-[#FFFF00] p-6 text-center space-y-4 shadow-[0_0_25px_rgba(255,255,0,0.15)]">
              <div className="inline-block bg-[#FFFF00] text-black text-[9px] font-black uppercase px-2 py-0.5 tracking-wider">
                Acceso Ilimitado
              </div>
              <h4 className="text-xl font-black text-white font-display uppercase tracking-tight">
                ¿Listo para dominar cada interacción?
              </h4>
              <p className="text-xs sm:text-sm text-white font-medium">
                Desbloquea todos los arquetipos, notas de voz simuladas, modo "Chica difícil" y auditoría completa de tus conversaciones.
              </p>
              
              <button
                id="simulator-open-app-cta"
                onClick={onOpenAppClick}
                className="w-full py-3.5 px-6 font-black uppercase text-xs tracking-tighter text-black bg-[#FFFF00] hover:scale-102 transition-transform flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Entrar a la App</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

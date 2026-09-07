import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white relative border-t border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-12 space-y-3">
          <div className="inline-block bg-[#FFFF00] text-black text-[10px] font-black uppercase px-2.5 py-1 tracking-wider">
            FAQ // Consultas
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-black font-display uppercase italic">
            Todo lo que necesitas saber
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#111111] border-2 border-zinc-200 hover:border-[#FFFF00] transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-black text-sm sm:text-base uppercase text-black cursor-pointer"
                >
                  <span className="tracking-tight">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#FFFF00] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-zinc-200 pt-4 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

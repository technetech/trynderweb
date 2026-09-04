import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { LiveSimulator } from './components/LiveSimulator';
import { PersonasSection } from './components/PersonasSection';
import { MatchesPreviewSection } from './components/MatchesPreviewSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { VipSection } from './components/VipSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { EnterAppModal } from './components/EnterAppModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenApp = () => {
    setIsModalOpen(true);
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#FFFF00] selection:text-black font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenAppClick={handleOpenApp} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Interactive Card Preview */}
        <Hero
          onOpenAppClick={handleOpenApp}
          onExploreDemoClick={handleScrollToSimulator}
        />

        {/* 4-Step Methodology */}
        <HowItWorks onOpenAppClick={handleOpenApp} />

        {/* Interactive Live Chat Simulator with Aura feedback */}
        <LiveSimulator onOpenAppClick={handleOpenApp} />

        {/* The 4 Reference Personas (Sofia, Sabine, Joséphine, Yaritza) */}
        <PersonasSection onOpenAppClick={handleOpenApp} />

        {/* Matches & Multi-Chat Preview */}
        <MatchesPreviewSection onOpenAppClick={handleOpenApp} />

        {/* Features & Direct Comparison */}
        <FeaturesSection onOpenAppClick={handleOpenApp} />

        {/* Testimonials */}
        <TestimonialsSection onOpenAppClick={handleOpenApp} />

        {/* VIP Section */}
        <VipSection onOpenAppClick={handleOpenApp} />

        {/* FAQs */}
        <FaqSection />

        {/* Final High Impact CTA Banner */}
        <CtaBanner onOpenAppClick={handleOpenApp} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Enter App Modal */}
      <EnterAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onStartSimulation={handleScrollToSimulator}
      />
    </div>
  );
}


import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Preloader } from './components/Preloader';
import { Hero } from './components/Hero';
import { Security } from './components/Security';
import { Results } from './components/Results';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 flex justify-center">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="w-full max-w-[1600px] flex min-h-screen border-x border-grid border-white/15">
          {/* Left Sidebar */}
          <div className="hidden md:block w-12 lg:w-20 border-r border-grid border-white/15 bg-hatch-pattern shrink-0"></div>
          
          {/* Main Content */}
          <main className="flex-1 flex flex-col min-w-0 relative">
            <Hero />
            <Security />
            <Results />
            <Footer />
          </main>

          {/* Right Sidebar */}
          <div className="hidden md:block w-12 lg:w-20 border-l border-grid border-white/15 bg-hatch-pattern shrink-0"></div>
        </div>
      )}
    </div>
  );
}

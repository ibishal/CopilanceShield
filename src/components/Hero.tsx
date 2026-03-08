import React from 'react';
import { motion } from 'motion/react';
import { Clock } from './Clock';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col border-b border-grid border-white/15">
      {/* Top Navigation Bar */}
      <header className="grid grid-cols-3 items-center px-6 py-4 border-b border-grid border-white/15">
        <div className="flex items-center">
          <Clock />
        </div>
        <div className="text-center font-sans font-bold tracking-[0.2em] text-[13px] flex items-center justify-center">
          COMPOUND<span className="text-[8px] align-top leading-none mt-0.5 ml-0.5">®</span>
        </div>
        <nav className="flex justify-end gap-8 font-mono text-[9px] tracking-[0.15em] text-white/50">
          <a href="#" className="hover:text-white transition-colors">HOME</a>
          <a href="#" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#" className="hover:text-white transition-colors">SERVICES</a>
        </nav>
      </header>

      {/* Massive Headline */}
      <div className="px-6 py-8 border-b border-grid border-white/15 flex items-center justify-center overflow-hidden w-full">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-[12vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.85] tracking-tight text-center whitespace-nowrap w-full"
        >
          Holding Company of <span className="italic">America</span>
        </motion.h1>
      </div>

      {/* Sub-header Bar */}
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_auto_200px] border-b border-grid border-white/15">
        <div className="border-b md:border-b-0 md:border-r border-grid border-white/15 flex items-center justify-center py-4 px-6">
          {/* Abstract Logo Mark (Ellipse with lines) */}
          <div className="w-14 h-6 rounded-[100%] border border-white/40 relative flex items-center justify-center overflow-hidden">
            <div className="absolute w-full h-[1px] bg-white/40 top-1/2 -translate-y-1/2"></div>
            <div className="w-4 h-3 bg-white z-10 skew-x-[30deg]"></div>
          </div>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-grid border-white/15 flex items-center px-6 py-4 md:py-0 bg-hatch-pattern">
          <p className="font-mono text-[11px] tracking-widest uppercase leading-relaxed text-white">
            Frontier AI for<br/>Critical Industries.
          </p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-grid border-white/15 flex flex-col justify-center px-6 py-4">
          <p className="font-mono text-[10px] tracking-widest text-white/60 mb-1">[ AI TRANSFORMATION FIRM ]</p>
          <p className="font-sans text-[11px] text-white/40">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex items-center justify-center p-4">
          <button className="corner-brackets-full relative w-full h-full min-h-[48px] flex items-center justify-center group hover:bg-white/5 transition-colors">
            <div className="cb-tl"></div><div className="cb-tr"></div>
            <div className="cb-bl"></div><div className="cb-br"></div>
            <span className="font-mono text-[11px] tracking-widest uppercase group-hover:underline underline-offset-4">Contact Us</span>
          </button>
        </div>
      </div>

      {/* Main Visual Area */}
      <div className="flex-1 relative overflow-hidden bg-black flex items-center justify-center min-h-[60vh]">
        {/* Crosshairs */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 border-t border-l border-white/30"></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 border-t border-r border-white/30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 border-b border-l border-white/30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 border-b border-r border-white/30"></div>
        
        <div className="absolute top-1/2 left-12 w-4 h-[1px] bg-white/30"></div>
        <div className="absolute top-1/2 left-[56px] w-[1px] h-4 -translate-y-1/2 bg-white/30"></div>
        
        <div className="absolute top-1/3 right-24 w-4 h-[1px] bg-white/30"></div>
        <div className="absolute top-1/3 right-[104px] w-[1px] h-4 -translate-y-1/2 bg-white/30"></div>

        {/* Astronaut Image with Dither/Glitch Effect */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop" 
            alt="Astronaut on the moon" 
            className="w-full h-full object-cover dither-filter opacity-80"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay text */}
          <div className="absolute bottom-12 right-12 text-right">
            <p className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
              [ Frontier AI ] for<br/>Critical Industries
            </p>
          </div>
        </motion.div>
        
        {/* Bottom pattern bar */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-hatch-pattern border-t border-grid border-white/15"></div>
      </div>
    </section>
  );
}

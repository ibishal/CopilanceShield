import React from 'react';

export function Footer() {
  return (
    <footer className="relative">
      {/* Main CTA Area */}
      <div className="py-40 flex flex-col items-center justify-center text-center px-6 border-b border-grid border-white/15 relative overflow-hidden">
        {/* Background side panels */}
        <div className="absolute top-0 left-0 w-[100px] h-full border-r border-grid border-white/15 bg-hatch-pattern opacity-30"></div>
        <div className="absolute top-0 right-0 w-[100px] h-full border-l border-grid border-white/15 bg-hatch-pattern opacity-30"></div>

        <div className="mb-12 flex items-center gap-2">
          <div className="font-sans font-bold tracking-widest text-sm flex items-center gap-1">
            COMPOUND<span className="text-[8px] align-top leading-none mt-0.5">®</span>
          </div>
          <div className="h-3 w-[1px] bg-white/30 mx-2"></div>
          <div className="font-mono text-[8px] tracking-widest text-white/50 uppercase">
            HOLDING COMPANY OF AMERICA ©
          </div>
        </div>

        <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-16 max-w-4xl leading-[1.1]">
          Most AI Implementations<br/>Fail. Yours Doesn't Have To.
        </h2>

        <button className="corner-brackets-full relative px-8 py-5 group hover:bg-white/5 transition-colors">
          <div className="cb-tl"></div><div className="cb-tr"></div>
          <div className="cb-bl"></div><div className="cb-br"></div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/80 group-hover:text-white transition-colors">
            LET'S BUILD SOMETHING THAT WORKS
          </span>
        </button>
      </div>

      {/* Bottom Links Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 p-8 border-b border-grid border-white/15 bg-black relative overflow-hidden">
        {/* Subtle background noise/dots */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative z-10 flex flex-col justify-end">
          <p className="font-mono text-[10px] tracking-widest text-white/40 mb-2">[ LINKS ]</p>
          <div className="flex gap-6 font-mono text-[11px] tracking-widest uppercase text-white/80">
            <a href="#" className="hover:text-white transition-colors">ABOUT,</a>
            <a href="#" className="hover:text-white transition-colors">SERVICES,</a>
            <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-end items-end text-right mt-8 md:mt-0">
          <p className="font-mono text-[10px] tracking-widest text-white/50 uppercase leading-relaxed">
            © 2026 COMPOUND TECHNOLOGIES OF AMERICA LLC<br/>
            ATLANTA, GA \ EST. 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

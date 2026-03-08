import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Globe } from 'lucide-react';

export function Results() {
  return (
    <section className="border-b border-grid border-white/15">
      {/* Header */}
      <div className="py-24 border-b border-grid border-white/15 text-center">
        <h2 className="font-mono text-sm tracking-widest uppercase">[ RESULTS ]</h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[60px_1fr_60px] lg:grid-cols-[60px_1fr_1.5fr_60px]">
        
        {/* Left Vertical Text */}
        <div className="border-r border-grid border-white/15 flex items-center justify-center bg-hatch-pattern">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/60 -rotate-90 whitespace-nowrap">
            GET STARTED WITH US
          </div>
        </div>

        {/* Stats Column */}
        <div className="flex flex-col border-r border-grid border-white/15">
          <div className="grid grid-cols-2 border-b border-grid border-white/15 flex-1 min-h-[200px]">
            <div className="border-r border-grid border-white/15 flex items-center justify-center p-8">
              <span className="font-mono text-5xl lg:text-6xl tracking-tighter">80%</span>
            </div>
            <div className="flex items-center p-8">
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Reduction in recurring<br/>software costs
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 border-b border-grid border-white/15 flex-1 min-h-[200px]">
            <div className="border-r border-grid border-white/15 flex items-center justify-center p-8">
              <span className="font-mono text-5xl lg:text-6xl tracking-tighter">$1M+</span>
            </div>
            <div className="flex items-center p-8">
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Annual cost savings per<br/>engagement
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 flex-1 min-h-[200px]">
            <div className="border-r border-grid border-white/15 flex items-center justify-center p-8">
              <span className="font-mono text-5xl lg:text-6xl tracking-tighter">90 DAYS</span>
            </div>
            <div className="flex items-center p-8">
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                Strategy to ROI
              </p>
            </div>
          </div>
        </div>

        {/* Image & Quote Column */}
        <div className="relative border-r border-grid border-white/15 hidden lg:block overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1578301978693-85fa9c026f19?q=80&w=1600&auto=format&fit=crop" 
            alt="Classical painting" 
            className="absolute inset-0 w-full h-full object-cover dither-filter opacity-80"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 flex items-center justify-center p-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel p-12 max-w-xl relative"
            >
              <p className="font-serif text-4xl leading-tight mb-12">
                "They Understand How Our Business Actually Works—Not Just The Technology."
              </p>
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/70">
                — OPERATIONS DIRECTOR, HEALTHCARE
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Vertical Text */}
        <div className="flex items-center justify-center bg-black">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/60 -rotate-90 whitespace-nowrap">
            RESULTS THAT SHAPE US
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="grid grid-cols-[60px_1fr_60px] border-t border-grid border-white/15 h-[60px]">
        <div className="border-r border-grid border-white/15 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
          <ArrowUpRight className="w-5 h-5 text-white/50" strokeWidth={1} />
        </div>
        <div className="bg-black"></div>
        <div className="border-l border-grid border-white/15 flex items-center justify-center">
          <Globe className="w-5 h-5 text-white/50" strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}

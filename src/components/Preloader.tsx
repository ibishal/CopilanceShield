import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // Small delay before unmounting
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Calculate how many blocks to show (out of 20 total blocks)
  const totalBlocks = 20;
  const activeBlocks = Math.floor((progress / 100) * totalBlocks);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-white font-sans font-bold tracking-widest text-sm flex items-center gap-1">
          COMPOUND<span className="text-[8px] align-top leading-none mt-0.5">®</span>
        </div>
        
        <div className="flex items-center gap-2 font-mono text-xs text-white/50">
          <span>[</span>
          <div className="flex gap-[2px]">
            {Array.from({ length: totalBlocks }).map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-4 ${i < activeBlocks ? 'bg-white/80' : 'bg-white/10'}`}
              />
            ))}
          </div>
          <span>]</span>
        </div>
      </div>
    </motion.div>
  );
}

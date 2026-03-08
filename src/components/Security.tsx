import React from 'react';
import { motion } from 'motion/react';

const cards = [
  {
    id: "01",
    title: "Data Protection.",
    description: "All data encrypted in transit and at rest.",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=800&auto=format&fit=crop", // Dark archway/vault
    align: "left",
    offset: "0"
  },
  {
    id: "02",
    title: "Compliance-Ready.",
    description: "HIPAA and SOC 2 ready. Built to meet the frameworks your industry requires.",
    image: "https://images.unsplash.com/photo-1606327054628-91ce15110d62?q=80&w=800&auto=format&fit=crop", // Wax seal/document
    align: "right",
    offset: "-mt-16"
  },
  {
    id: "03",
    title: "Access Control.",
    description: "Role-based permissions. Multi-factor authentication. Full audit logging.",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=800&auto=format&fit=crop", // Old key
    align: "center",
    offset: "-mt-16"
  }
];

export function Security() {
  return (
    <section className="relative py-32 border-b border-grid border-white/15 bg-hatch-pattern overflow-hidden">
      {/* Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-24">
        <div className="w-[1px] h-full bg-white/5"></div>
        <div className="w-[1px] h-full bg-white/5"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="font-mono text-sm tracking-widest uppercase mb-6">[ SECURITY ]</h2>
          <p className="font-sans text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            We work with organizations in operationally complex, often regulated
            industries that need AI systems they can trust.
          </p>
        </div>

        <div className="relative flex flex-col">
          {/* Background blueprint lines */}
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white/10"></div>
          <div className="absolute top-[60%] left-0 w-full h-[1px] bg-white/10"></div>
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/10"></div>
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/10"></div>
          
          {cards.map((card, index) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative w-full max-w-[600px] ${card.offset} ${
                card.align === 'left' ? 'mr-auto' : 
                card.align === 'right' ? 'ml-auto' : 
                'mx-auto'
              }`}
            >
              {/* Construction lines */}
              <div className="absolute -top-6 -left-6 w-12 h-[1px] bg-white/20"></div>
              <div className="absolute -top-6 -left-6 w-[1px] h-12 bg-white/20"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-[1px] bg-white/20"></div>
              <div className="absolute -bottom-6 -right-6 w-[1px] h-12 bg-white/20"></div>

              <div className="border border-white/10 bg-[#050505] p-1 relative overflow-hidden group shadow-2xl">
                {/* Corner dots */}
                <div className="absolute top-3 left-3 w-1 h-1 rounded-full bg-white/30 z-20"></div>
                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-white/30 z-20"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-white/30 z-20"></div>
                <div className="absolute bottom-3 right-3 w-1 h-1 rounded-full bg-white/30 z-20"></div>

                <div className="grid grid-cols-2 gap-6 p-8 relative z-10 bg-black/50">
                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-[10px] tracking-widest text-white/50 mb-4">
                      [ {card.id} ]
                    </span>
                    <h3 className="font-sans text-2xl font-light tracking-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs text-white/50 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="relative h-40 overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover dither-filter scale-105 group-hover:scale-100 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

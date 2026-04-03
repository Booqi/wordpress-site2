import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Animated background pulses */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pulse-bg top-[-10%] left-[20%] w-[400px] h-[400px] bg-primary"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pulse-bg bottom-[10%] right-[20%] w-[300px] h-[300px] bg-primary-container"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-surface-high border border-white/10 text-primary font-sans text-xs font-bold tracking-widest mb-8 uppercase"
          >
            Features Overview
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8"
          >
            Everything you need to <br />
            <span className="gradient-text">sell, manage, and grow</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-12"
          >
            Booqi is the all-in-one platform for ticketing, visitor management, and revenue optimization—online and on-site.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold text-lg active:scale-95 transition-all shadow-xl shadow-primary/10">
              Start with Booqi today
            </button>
            <button className="bg-surface-high border border-white/5 text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-highest transition-all active:scale-95">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

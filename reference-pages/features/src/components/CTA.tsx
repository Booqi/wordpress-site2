import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5" />
          
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-8 relative z-10">
            Ready to take control of your ticketing and revenue?
          </h2>
          
          <div className="relative z-10">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-5 rounded-full font-bold text-xl active:scale-95 transition-all shadow-2xl shadow-primary/30">
              Start with Booqi today
            </button>
            <p className="mt-8 text-on-surface-variant text-sm font-medium">
              Join 500+ venues worldwide scaling with Booqi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

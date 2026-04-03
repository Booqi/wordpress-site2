import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container-high p-16 rounded-3xl flex flex-col items-center text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
        <h2 className="font-headline text-4xl md:text-6xl font-black text-on-surface mb-10 relative z-10 max-w-3xl leading-tight">
          Take the Next Step with Booqi
        </h2>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-5 rounded-full font-bold text-lg tracking-tight hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-primary/20 relative z-10">
          Request Demo
        </button>
      </motion.div>
    </section>
  );
}

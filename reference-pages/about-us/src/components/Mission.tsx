import { motion } from "motion/react";

export default function Mission() {
  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-16 md:p-24 rounded-3xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <span className="text-primary tracking-[0.2em] uppercase text-sm mb-8 block font-medium">
          The Core Purpose
        </span>
        <h2 className="font-headline text-4xl md:text-6xl font-black text-on-surface mb-8 leading-tight">
          Helping venues manage ticket sales <span className="text-primary italic">efficiently</span> and effortlessly.
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </motion.div>
    </section>
  );
}

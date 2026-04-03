import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="px-8 pt-48 pb-32 max-w-screen-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <span className="text-primary tracking-[0.2em] uppercase text-sm mb-6 block font-medium">
          Revolutionizing Access
        </span>
        <h1 className="font-headline text-7xl md:text-8xl font-extrabold tracking-tighter mb-8 text-on-surface leading-[0.9]">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed opacity-80 max-w-3xl">
          Booqi is redefining the ticketing landscape. We empower venues with a sophisticated, unified solution designed for the speed of modern commerce and the precision of high-end experiences.
        </p>
      </motion.div>
    </section>
  );
}

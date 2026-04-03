import { motion } from "motion/react";
import { Zap, Settings, BarChart3, QrCode, Headphones } from "lucide-react";

export default function Edge() {
  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto">
      <h2 className="font-headline text-5xl font-bold mb-20 text-on-surface">
        The Booqi Edge
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
        {/* Efficiency */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-3 lg:col-span-4 bg-surface-container-high p-8 rounded-2xl border border-outline-variant"
        >
          <Zap className="text-primary w-8 h-8 mb-6" />
          <h4 className="font-headline text-xl font-bold mb-3">Efficiency</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Lightning fast processing for peak volume events.
          </p>
        </motion.div>

        {/* Flexibility */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-3 lg:col-span-4 bg-surface-container-high p-8 rounded-2xl border border-outline-variant"
        >
          <Settings className="text-primary w-8 h-8 mb-6" />
          <h4 className="font-headline text-xl font-bold mb-3">Flexibility</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Modular tools that adapt to any venue size or type.
          </p>
        </motion.div>

        {/* Insight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-6 lg:col-span-4 bg-primary text-on-primary p-8 rounded-2xl shadow-xl shadow-primary/10"
        >
          <BarChart3 className="text-on-primary w-8 h-8 mb-6" />
          <h4 className="font-headline text-xl font-bold mb-3">Insight</h4>
          <p className="text-on-primary/80 text-sm leading-relaxed">
            Real-time data visualization that drives smarter business decisions.
          </p>
        </motion.div>

        {/* Convenience */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-3 lg:col-span-6 bg-surface-container-high p-8 rounded-2xl border border-outline-variant"
        >
          <QrCode className="text-primary w-8 h-8 mb-6" />
          <h4 className="font-headline text-xl font-bold mb-3">Convenience</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Frictionless scanning and entry management for a premium guest experience.
          </p>
        </motion.div>

        {/* Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 lg:col-span-6 bg-surface-container-high p-8 rounded-2xl border border-outline-variant"
        >
          <Headphones className="text-primary w-8 h-8 mb-6" />
          <h4 className="font-headline text-xl font-bold mb-3">Support</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            24/7 technical assistance and dedicated success managers for every partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

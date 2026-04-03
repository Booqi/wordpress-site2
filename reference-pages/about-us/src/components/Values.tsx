import { motion } from "motion/react";
import { Pointer, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Pointer,
    title: "User Friendly",
    description: "Intuitive design that minimizes friction, ensuring both staff and customers have a smooth journey from start to finish."
  },
  {
    icon: Users,
    title: "Personal",
    description: "We believe in human-centric technology. Our solutions are tailored to the unique heartbeat of every venue we partner with."
  },
  {
    icon: Sparkles,
    title: "Innovative",
    description: "Always pushing boundaries. We leverage the latest in tech to keep your venue ahead of the digital curve."
  }
];

export default function Values() {
  return (
    <section className="py-32 px-8 max-w-screen-2xl mx-auto">
      <h2 className="font-headline text-5xl font-bold mb-20 text-on-surface text-center">
        Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div 
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-surface-container-low p-10 rounded-2xl hover:bg-surface-container-high transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
              <value.icon className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
              {value.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

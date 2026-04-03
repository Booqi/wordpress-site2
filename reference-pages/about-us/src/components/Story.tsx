import { motion } from "motion/react";

export default function Story() {
  return (
    <section className="bg-surface-container-low py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=2070&auto=format&fit=crop" 
              alt="Booqi Team Collaborating" 
              referrerPolicy="no-referrer"
              className="relative rounded-2xl w-full aspect-[4/3] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-headline text-5xl font-bold mb-8 text-on-surface tracking-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
              <p>
                Born from a frustration with fragmented legacy systems, Booqi emerged as a response to the complexities of modern venue management. We realized that ticketing shouldn't just be a transaction—it should be a seamless gateway to an experience.
              </p>
              <p>
                Our founders envisioned a platform where technology fades into the background, leaving only the synergy between organizers and their audience. Today, we stand as the unified pulse behind some of the world's most dynamic venues.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

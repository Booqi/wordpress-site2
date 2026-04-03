import { motion } from "motion/react";
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, Globe, Share2, Zap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass h-20 flex items-center px-8 justify-between">
        <div className="text-2xl font-black text-white tracking-tighter font-headline">Booqi</div>
        
        <div className="hidden md:flex gap-8 items-center">
          {["Solutions", "Events", "Pricing", "Developers"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-on-surface-variant hover:text-white transition-colors font-headline tracking-tight text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="text-primary-container relative font-headline tracking-tight text-sm font-medium after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-primary-container after:shadow-[0_0_8px_#1AD5AE]"
          >
            Contact
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <button className="text-on-surface-variant hover:text-white transition-colors font-headline tracking-tight text-sm font-medium">
            Login
          </button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20">
            Sign Up
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-24 flex-grow">
        <div className="max-w-7xl mx-auto px-8">
          {/* Hero Section */}
          <header className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/10">
                Get in touch
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[0.9]">
                Let's Talk <br />
                <span className="text-primary-container">Ticketing.</span>
              </h1>
              <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed">
                From global festivals to local venues, Booqi provides the pulse for your event's digital ecosystem. Let's build the future of access together.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex justify-start lg:justify-end pb-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Zap size={18} fill="currentColor" />
                  <span className="font-sans uppercase tracking-widest text-xs">Response Time</span>
                </div>
                <p className="text-white text-3xl font-headline font-bold">Under 4 Hours</p>
              </div>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Contact Form Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7"
            >
              <section className="glass rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                
                <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-sans text-xs uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 text-white focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-neutral-600 outline-none" 
                        placeholder="Alex Rivers" 
                        type="text" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-xs uppercase tracking-widest text-neutral-400 ml-1">Company</label>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 text-white focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-neutral-600 outline-none" 
                        placeholder="Global Events Inc." 
                        type="text" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-sans text-xs uppercase tracking-widest text-neutral-400 ml-1">Work Email</label>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 text-white focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-neutral-600 outline-none" 
                        placeholder="alex@company.com" 
                        type="email" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-sans text-xs uppercase tracking-widest text-neutral-400 ml-1">Industry</label>
                      <select className="w-full bg-surface-container-low border-none rounded-xl p-4 text-white focus:ring-1 focus:ring-primary/40 transition-all appearance-none cursor-pointer outline-none">
                        <option>Music & Festivals</option>
                        <option>Professional Sports</option>
                        <option>Corporate Events</option>
                        <option>Venue Management</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-sans text-xs uppercase tracking-widest text-neutral-400 ml-1">Message</label>
                    <textarea 
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 text-white focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-neutral-600 outline-none resize-none" 
                      placeholder="How can we help you scale your event operations?" 
                      rows={4}
                    ></textarea>
                  </div>

                  <button className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary px-12 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                    Request Demo
                    <ArrowRight size={20} />
                  </button>
                </form>
              </section>
            </motion.div>

            {/* Contact Details & Visuals */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@booqi.me" },
                  { icon: Phone, label: "Phone", value: "+31 (0) 85 060 06 10" },
                  { icon: MapPin, label: "HQ Den Haag", value: "Saturnusstraat 95, 2516 AG Den Haag, NL", isAddress: true },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                    className="glass p-8 rounded-2xl flex items-start gap-6 group hover:bg-surface-container-high transition-colors cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xs uppercase tracking-widest text-neutral-500 mb-1">{item.label}</h3>
                      <p className={`text-white font-medium ${item.isAddress ? 'text-lg leading-relaxed' : 'text-xl'}`}>
                        {item.isAddress ? (
                          <>Saturnusstraat 95,<br />2516 AG Den Haag, NL</>
                        ) : item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map/Office Visual */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative group h-64 overflow-hidden rounded-2xl bg-surface-container-low shadow-2xl"
              >
                <img 
                  alt="Modern Office Interior" 
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ZqpL9-_eiAsnv-8Hr4KudT6vN2SxrJknAiNP2rhiMC1Z5PGhXhpXvjAvtMPisBgf6NAC5dcJIhhxck-8L1fUJIjq9vlkfBNgQQdcsCTtIoueYluCCqw94k1XCdkV7S48A9ti8wm5BAG64h06SlKNXEYKIrpe-QzM4jvo-F0Fg1vLeuS0jLDNsz9JFfoIUpEi4z4A6NEPEKCjLAKIk5i7xbxRbgYvDBQwMRJ-boK21MAvGvFHDET1LlggI3bwaa4akMvmt2JdVbEv"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_12px_#4df2c9]"></div>
                  <span className="text-white font-bold tracking-tight">Visit our hub</span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <MapPin size={48} className="text-primary drop-shadow-[0_0_15px_rgba(77,242,201,0.5)]" fill="currentColor" />
                </div>
              </motion.div>

              {/* FAQ Link Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-surface-container-low p-8 rounded-2xl flex flex-col items-center text-center space-y-4 border border-white/5"
              >
                <p className="text-on-surface-variant font-medium">Looking for immediate answers?</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary-container transition-colors font-bold group">
                  Explore the Help Center
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background w-full py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-lg font-bold text-white font-headline">Booqi</div>
            <p className="font-sans text-neutral-500 text-sm max-w-sm text-center md:text-left">
              © 2024 Booqi. Engineered for the pulse of live events.
            </p>
          </div>
          
          <div className="flex gap-8">
            {["Privacy", "Terms", "Security", "Status"].map((item) => (
              <a key={item} href="#" className="font-sans text-sm tracking-wide uppercase text-neutral-500 hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-neutral-400 hover:text-primary transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-neutral-400 hover:text-primary transition-all">
              <Share2 size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

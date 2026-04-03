/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Waves, 
  Baby, 
  Gauge, 
  Monitor, 
  User, 
  Nfc, 
  DoorOpen, 
  QrCode, 
  Watch, 
  CreditCard, 
  Quote,
  CheckCircle,
  ChevronRight
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_40px_80px_rgba(90,252,211,0.05)]">
    <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
      <div className="text-2xl font-bold tracking-tighter text-on-surface font-headline">Booqi</div>
      <div className="hidden md:flex items-center space-x-8 font-headline text-base tracking-tight">
        <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#">Solutions</a>
        <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Industries</a>
        <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#">Pricing</a>
        <a className="text-on-surface/70 hover:text-on-surface transition-colors" href="#">Resources</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-on-surface/70 hover:text-on-surface transition-colors font-medium">Login</button>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold px-6 py-2.5 rounded-full scale-95 active:scale-90 transition-transform">
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        alt="Modern swimming pool" 
        className="w-full h-full object-cover opacity-40" 
        src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/40 to-surface"></div>
    </div>
    <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-7 mt-12 lg:mt-0"
      >
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8">
          Industry Specialized
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
          Swimming Pools: <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed">Streamlined Ticketing</span> & Access Control
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
          Reduce queues and improve visitor flow with our specialized solution for aquatic centers. Manage capacity, memberships, and rentals in one obsidian-smooth interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            Get a Demo
          </button>
          <button className="flex items-center justify-center gap-2 text-on-surface font-semibold text-lg px-10 py-4 rounded-full bg-surface-container-high border border-outline-variant hover:bg-surface-container-highest transition-colors">
            View Case Studies
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-5 hidden lg:block"
      >
        <div className="relative p-8 rounded-[2rem] bg-surface-container-low/50 backdrop-blur-3xl border border-outline-variant/30 shadow-2xl overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-primary tracking-widest uppercase">Live Pulse</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs text-on-surface-variant">System Active</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-container-highest/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Waves className="text-primary w-6 h-6" />
                  <div>
                    <p className="text-sm font-bold">Main Pool</p>
                    <p className="text-xs text-on-surface-variant">Lap Swimming</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">82% Full</p>
                  <p className="text-xs text-on-surface-variant">41/50 Swimmers</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-highest/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Baby className="text-primary w-6 h-6" />
                  <div>
                    <p className="text-sm font-bold">Kids Area</p>
                    <p className="text-xs text-on-surface-variant">Leisure Swim</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-secondary">35% Full</p>
                  <p className="text-xs text-on-surface-variant">14/40 Swimmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);

const Features = () => {
  const features = [
    {
      icon: <Gauge className="text-primary w-8 h-8" />,
      title: "Real-time Capacity Management",
      desc: "Track pool occupancy in real-time. Automatically sync online ticket sales with physical turnstile entries."
    },
    {
      icon: <Monitor className="text-primary w-8 h-8" />,
      title: "Self-Service Kiosks",
      desc: "Reduce front-desk congestion. Let visitors scan, pay, and get their wristbands in under 30 seconds."
    },
    {
      icon: <User className="text-primary w-8 h-8" />,
      title: "Member Portals",
      desc: "Easy booking for lessons and lap swimming. Integrated payment processing for monthly recurring fees."
    },
    {
      icon: <Nfc className="text-primary w-8 h-8" />,
      title: "Waterproof RFID/NFC Wristbands",
      desc: "Seamless access for swimmers. Durable, waterproof tech that acts as a ticket, locker key, and wallet."
    }
  ];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-24 flex flex-col items-start max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8">Why Choose Booqi for Pools?</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Purpose-built for aquatic environments, our platform handles the unique complexities of water-based facilities with surgical precision.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">{f.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hardware = () => (
  <section className="py-32 bg-surface-container-low relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-l from-primary/30 to-transparent blur-[120px]"></div>
    </div>
    <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6 mt-12">
              <div className="aspect-square rounded-3xl bg-surface-container-highest p-8 flex flex-col items-center justify-center text-center">
                <DoorOpen className="text-primary w-12 h-12 mb-4" />
                <p className="font-bold text-lg">Smart Turnstiles</p>
                <p className="text-xs text-on-surface-variant mt-2">Instant validation</p>
              </div>
              <div className="aspect-square rounded-3xl bg-surface-container-highest p-8 flex flex-col items-center justify-center text-center">
                <QrCode className="text-primary w-12 h-12 mb-4" />
                <p className="font-bold text-lg">Scanners</p>
                <p className="text-xs text-on-surface-variant mt-2">Mobile & Print</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-square rounded-3xl bg-surface-container-highest p-8 flex flex-col items-center justify-center text-center border-2 border-primary/20">
                <Watch className="text-primary w-12 h-12 mb-4" />
                <p className="font-bold text-lg">Dispenser</p>
                <p className="text-xs text-on-surface-variant mt-2">RFID Wristbands</p>
              </div>
              <div className="aspect-square rounded-3xl bg-surface-container-highest p-8 flex flex-col items-center justify-center text-center">
                <CreditCard className="text-primary w-12 h-12 mb-4" />
                <p className="font-bold text-lg">POS Terminals</p>
                <p className="text-xs text-on-surface-variant mt-2">Cashless snacks</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">Total Integration</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mt-6 mb-8">Connect your aquatic ecosystem.</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
            Booqi integrates natively with the industry's leading hardware. From wristband dispensers to underwater-rated scanners and high-traffic turnstiles, we ensure your facility's physical and digital layers are perfectly synced.
          </p>
          <ul className="space-y-4 mb-12">
            {[
              "Native turnstile protocols (GANTNER, SKIDATA)",
              "Automated locker management integrations",
              "Cloud-based syncing for 99.9% uptime"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="text-primary w-5 h-5" />
                <span className="text-on-surface font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-32 bg-surface">
    <div className="max-w-screen-2xl mx-auto px-8">
      <div className="relative p-12 md:p-24 rounded-[3rem] bg-surface-container-high overflow-hidden">
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/20 rounded-br-[100px]"></div>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Quote className="text-primary w-16 h-16 mb-12" />
          <blockquote className="text-2xl md:text-4xl font-headline font-semibold text-on-surface leading-tight mb-12">
            "Implementing Booqi completely transformed our visitor flow. Queue times dropped by 70% during peak hours, and the real-time capacity dashboard has become our most vital tool for safety and operations."
          </blockquote>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
              <img 
                alt="Marcus Thorne" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-on-surface text-xl leading-none">Marcus Thorne</p>
              <p className="text-on-surface-variant mt-1">Head of Operations, Atlantic Aquatic Center</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 bg-surface">
    <div className="max-w-screen-2xl mx-auto px-8 text-center">
      <div className="bg-gradient-to-br from-surface-container-low to-surface-container-high p-20 rounded-[4rem] border border-outline-variant/20 relative overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
        <h2 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface mb-8 tracking-tighter">Ready to dive in?</h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
          Join hundreds of modern aquatic facilities optimizing their guest experience with Booqi. Start your journey today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
            Start your free trial today
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-on-surface font-semibold text-lg px-12 py-5 rounded-full bg-surface-container-highest/50 border border-outline-variant hover:bg-surface-container-highest transition-colors">
            Book a Sales Call
          </button>
        </div>
        <p className="mt-8 text-sm text-on-surface-variant">No credit card required. 14-day free trial.</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-12 border-t border-outline-variant/15 bg-surface">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-screen-2xl mx-auto text-sm leading-relaxed">
      <div className="col-span-1 md:col-span-1">
        <div className="text-xl font-black text-on-surface mb-6">Booqi</div>
        <p className="text-on-surface/50 max-w-xs">Elevating hospitality and leisure through precision access control and ticketing intelligence.</p>
      </div>
      <div>
        <h4 className="text-on-surface font-bold mb-6">Product</h4>
        <ul className="space-y-4">
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Ticketing</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Access Control</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Analytics</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Hardware</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-on-surface font-bold mb-6">Legal & Connect</h4>
        <ul className="space-y-4">
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Terms of Service</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">LinkedIn</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Status</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-on-surface font-bold mb-6">Support</h4>
        <ul className="space-y-4">
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Contact Us</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Documentation</a></li>
          <li><a className="text-on-surface/50 hover:text-primary transition-colors" href="#">Help Center</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-on-surface/50 text-xs">© 2024 Booqi. All rights reserved.</p>
      <div className="flex gap-6">
        <span className="text-on-surface/30 text-xs">Made with Precision.</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Hardware />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

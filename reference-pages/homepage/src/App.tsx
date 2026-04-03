/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Ticket, 
  Users, 
  BarChart3, 
  Layers, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
  Globe,
  Mail,
  Share2,
  DoorOpen,
  Monitor,
  ScanBarcode,
  CreditCard,
  Zap,
  ShieldCheck,
  Headphones,
  RefreshCw
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-screen-2xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-on-surface font-headline">Booqi</div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Features', 'Industries', 'About us', 'Blog', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-headline text-sm font-semibold tracking-wide text-on-surface-variant hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="gradient-cta px-6 py-2.5 rounded-full text-on-primary font-bold text-sm hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
            Request Demo
          </button>
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface-container-high p-8 flex flex-col gap-6 md:hidden border-b border-outline-variant/20"
          >
            {['Features', 'Industries', 'About us', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-headline text-lg font-semibold text-on-surface"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative px-8 pt-20 pb-32 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-label font-medium tracking-widest uppercase text-on-surface-variant">The Future of Ticketing</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight mb-8 max-w-4xl text-on-surface leading-[1.1]"
      >
        Enhance your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">ticketing experience</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 font-body leading-relaxed"
      >
        Streamline operations, boost sales, and provide a seamless guest journey with our all-in-one ticketing and visitor management platform.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-6 mb-24"
      >
        <button className="gradient-cta px-10 py-4 rounded-full text-on-primary font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-all">
          Request demo
        </button>
        <button className="bg-surface-container-high text-on-surface px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-variant transition-all active:scale-95">
          View features
        </button>
      </motion.div>

      {/* Dashboard Visual */}
      <div className="relative w-full max-w-6xl mx-auto min-h-[500px] md:min-h-[700px]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[3rem] -z-10 border border-outline-variant/10"></div>
        
        {/* Central Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="absolute left-1/2 top-[10%] -translate-x-1/2 z-20 w-[90%] md:w-[450px] aspect-square rounded-3xl overflow-hidden glass-card p-1 shadow-2xl border-primary/20"
        >
          <div className="relative w-full h-full rounded-[1.4rem] overflow-hidden">
            <img 
              alt="Total Sales Dashboard" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr98IH7SrF45nPje96tS0S5_0S45DvAEXEUIPTUXzVrp8puUa0Jo9eb9QmtOI5B_YqEZ-tPoy7uXIrhxJlSG-1O7v83S-3iJ96eU2DOXZ1XSkGPMbOa_6KiIuyBj2LAlGf5-P3PeQAfkPwkgH9obf27seDSAZygghcHACiCAXNc9eKIaVAt1x7D2tiRCGaacu2p04t1QXKyQlpMgrhah0u3BWstTjtqHnv3afqDeo0fzg9OMCE10hN3lDiiVHwvzQAW2-nUdut1rtf"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Live Syncing</span>
              </div>
              <h4 className="text-white font-bold text-2xl">Total Revenue</h4>
              <p className="text-on-surface-variant text-sm">Real-time sales tracking</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[35%] z-30 w-48 md:w-64 glass-card p-6 rounded-2xl border-l-2 border-primary/40 hidden sm:block"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="text-primary w-6 h-6" />
            <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded-full">+12%</span>
          </div>
          <div className="text-3xl font-black text-on-surface mb-1">1,892</div>
          <div className="text-xs font-label uppercase text-on-surface-variant tracking-wider">Live Visitors</div>
          <div className="mt-4 flex gap-1">
            <div className="h-1 flex-1 bg-primary rounded-full"></div>
            <div className="h-1 flex-1 bg-primary/40 rounded-full"></div>
            <div className="h-1 flex-1 bg-primary/20 rounded-full"></div>
            <div className="h-1 flex-1 bg-primary/10 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[8%] top-[15%] z-30 w-40 md:w-56 glass-card p-6 rounded-2xl border-t-2 border-primary/40 hidden sm:block"
        >
          <div className="mb-4 text-primary font-bold text-sm">Ticket Capacity</div>
          <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-surface-container-highest" strokeWidth="3" />
              <motion.circle 
                cx="18" cy="18" r="16" fill="none" 
                className="stroke-primary" 
                strokeWidth="3" 
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 22 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </svg>
            <div className="absolute font-bold text-xl">78%</div>
          </div>
          <div className="text-[10px] text-center text-on-surface-variant uppercase tracking-widest">320 tickets left</div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-[12%] bottom-[15%] z-30 w-64 md:w-80 glass-card p-6 rounded-2xl border-b-2 border-primary/40 hidden lg:block"
        >
          <h5 className="text-sm font-bold text-on-surface mb-4">Recent Transactions</h5>
          <div className="space-y-4">
            {[
              { label: 'Entrance Ticket', time: '2 mins ago', amount: '$120', icon: Ticket },
              { label: 'Annual Pass', time: '10 mins ago', amount: '$45', icon: ShieldCheck },
              { label: 'Voucher Sale', time: '1 hour ago', amount: '$85', icon: Zap }
            ].map((tx, i) => (
              <div key={i} className={`flex items-center justify-between ${i === 2 ? 'opacity-50' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <tx.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-on-surface">{tx.label}</div>
                    <div className="text-[10px] text-on-surface-variant">{tx.time}</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-primary">{tx.amount}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const logos = ["ZOO", "Soccer City", "MUSEUM", "PARK INC.", "BOOQI PRO"];
  return (
    <section className="py-16 bg-surface-container-low border-y border-outline-variant/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-on-surface-variant font-label text-sm uppercase tracking-[0.2em] mb-12">Trusted by innovative teams worldwide</p>
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 md:gap-24 opacity-40 whitespace-nowrap"
          >
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-2xl font-black font-headline tracking-tighter text-on-surface">{logo}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-6">We have got what it takes!</h2>
          <p className="text-on-surface-variant text-lg">Powerful tools designed to simplify complex visitor management workflows.</p>
        </div>
        <a href="#" className="text-primary font-bold flex items-center gap-2 group mb-2">
          See all our features
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-high p-10 rounded-3xl flex flex-col justify-between min-h-[400px] border border-outline-variant/10">
          <div>
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
              <Ticket className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Smart Ticketing Engine</h3>
            <p className="text-on-surface-variant max-w-md">Dynamic pricing, time-slot management, and real-time inventory control that scales with your demand.</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl bg-surface-container-lowest h-40">
            <img 
              className="w-full h-full object-cover opacity-30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVZxSD2j59cBS1-baKtETr0J5Zu0J8nscC46Hh7_iSZdQByhdp_xktJ28WPqI5h79oUnwaLwl26go-kmBGuD6xqv78-dVbl3Bg_Vu_Qfyzsf1fy2haDnYwAsCqLbhhcBOcksrirh9yePUcC84cNV8I2fWZdealOyjDz_GVyi_DN5RxPIYUapYIatW3uqW3UV-k5IFIA7Pgl-o1cVUErO3vRqlIYeX1xcN3L9GtpcCUyV6TctwG0m24dRTnEbiD7upjCTrsBqGYwrmg" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-surface-container-high p-10 rounded-3xl flex flex-col justify-between border border-outline-variant/10">
          <div>
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Deep Analytics</h3>
            <p className="text-on-surface-variant">Understand your audience with behavioral insights and revenue forecasting tools.</p>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant/10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-label text-on-surface-variant uppercase">Conversion Rate</span>
              <span className="text-primary font-bold">+24%</span>
            </div>
            <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '74%' }}
                className="bg-primary h-full rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-surface-container-high p-10 rounded-3xl border border-outline-variant/10">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-headline font-bold mb-4">Member Portals</h3>
          <p className="text-on-surface-variant">Built-in loyalty programs and membership management for long-term customer retention.</p>
        </div>

        <div className="md:col-span-2 bg-surface-container-high p-10 rounded-3xl flex items-center gap-12 border border-outline-variant/10">
          <div className="flex-1">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-8">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Connect with your tools</h3>
            <p className="text-on-surface-variant">Connect Booqi with your existing marketing stack, CRM, or accounting software seamlessly.</p>
          </div>
          <div className="hidden lg:flex w-48 h-48 bg-primary/5 rounded-full border border-primary/20 items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-primary"
            >
              <RefreshCw className="w-16 h-16" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HardwareIntegration = () => {
  return (
    <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative w-full aspect-square bg-slate-950/20 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/5 rounded-full blur-[100px]"></div>
            
            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#1AD5AE" stopOpacity="0" />
                  <stop offset="50%" stopColor="#1AD5AE" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1AD5AE" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
                d="M250 250 L120 120" fill="none" stroke="url(#lineGradient)" strokeDasharray="10 10" strokeWidth="2" 
              />
              <motion.path 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                d="M250 250 L380 150" fill="none" stroke="url(#lineGradient)" strokeDasharray="10 10" strokeWidth="2" 
              />
              <motion.path 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                d="M250 250 L380 380" fill="none" stroke="url(#lineGradient)" strokeDasharray="10 10" strokeWidth="2" 
              />
              <motion.path 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                d="M250 250 L150 350" fill="none" stroke="url(#lineGradient)" strokeDasharray="10 10" strokeWidth="2" 
              />
            </svg>

            {/* Hardware Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[5%] glass-card p-5 rounded-2xl w-36 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-3 mx-auto text-primary">
                <DoorOpen className="w-8 h-8" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Hardware</div>
              <div className="text-xs font-bold text-white">Turnstiles</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[15%] right-[5%] glass-card p-5 rounded-2xl w-36 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-3 mx-auto text-primary">
                <CreditCard className="w-8 h-8" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Hardware</div>
              <div className="text-xs font-bold text-white">Registers</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[15%] right-[10%] glass-card p-5 rounded-2xl w-40 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-3 mx-auto text-primary">
                <Monitor className="w-8 h-8" />
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Hardware</div>
              <div className="text-xs font-bold text-white">Self-Service</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[20%] left-[10%] glass-card p-4 rounded-2xl w-32 text-center opacity-60 scale-90"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-2 mx-auto text-primary">
                <ScanBarcode className="w-6 h-6" />
              </div>
              <div className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Hardware</div>
              <div className="text-[10px] font-bold text-white">Scanners</div>
            </motion.div>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                <div className="relative w-full h-full bg-slate-900 rounded-full border border-primary/40 flex items-center justify-center shadow-[0_0_50px_rgba(26,213,174,0.3)]">
                  <div className="text-center">
                    <RefreshCw className="w-10 h-10 text-primary mb-1 mx-auto" />
                    <div className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-tighter">Booqi.me</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-primary font-label uppercase tracking-widest text-sm mb-6 block">Universal Compatibility</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8 leading-tight">Integrate your hardware with ease</h2>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
            Booqi connects directly with your existing turnstiles, handheld scanners, and thermal printers. Our plug-and-play architecture means you spend less time configuring and more time greeting guests.
          </p>
          <ul className="space-y-4">
            {[
              'Support for all major turnstile protocols',
              'Offline-first mobile scanning capabilities',
              'Seamless connection with RFID/NFC wristbands'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                <span className="text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { 
      title: 'Theme Parks', 
      desc: 'Fast-track queuing and high-volume entry management.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5bXd1xZRW0nw5-vx8QLfXSjyEMQyR0locpSY5EsDlRDAGjhaJLDN9tzcMCH5TON9PC_xoDMa_PT6ViGn19Tgfd-0Xe3zwftw89b0rk15Jvw9X81Hy6L7g2B0DnGnJ4Hx8bMaE7sJU6eESKHqTZpm-KRT1_N4mWKbIZCiwhGGXGgYJjHyEq-wYWijHPlGAbOLGeyhJCEEubxaBXPopdKL1d4-1Y0tfayjtozQXipR2GiGEk8J9zpj1c_keAmh8RRKGAkzEY3XwVdGm'
    },
    { 
      title: 'Zoos', 
      desc: 'Educational session bookings and conservation donation integration.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_sMgaufPZiBmY74l0xrTU0Jz9gFnHiFRacBpIvsLBMnigJJ1jCwBPUa0lLY_0MBVuh5VEmsysYP1QkNjrXON693fqTCD0vuGClC3T4ZgfeFVHk2OI7twO881Chm2YCUdtPXiki90AzGnFWbEZTGVQ-hWTsJfhCH8Aj2heXZtlP_ta2Vxr8TLEdXGuz6iNSrxVPIRqs4u99YosiOpZRxag5aBToNjKsE36Nas6A_LZ2-7WrUEO9d2m3jftqe7G1IggShM8TG08OUx2'
    },
    { 
      title: 'Musea', 
      desc: 'Audio guide rentals and specialized timed-entry exhibitions.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV_lV2GefHbMiDPEDBoOKVxMwoJfjtKjKF51viOmRVHWRVrWpxg8Ja8KjGyKZajAUUIZELxy3bF-4QQm-YN7NEdyNI4PBHaNdQKelQc4MYYFXqWfXi_QeigzatiphPbdaK9WY0wic6d_LfIkc4Qj6mB_l-koDDNhiwX4QbQyGC8nPmr80zwKHd9iBodzW2yQyyGMM4eFK8kiAAgtgXusV0OgzZW3bY2Ro1q5o9xtxIOjAiqa5GYwf4Oi97WgqdVG6AUg5MSsQ6_FRT'
    },
    { 
      title: 'Swimming Pools', 
      desc: 'Locker management and recurring membership check-ins.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGA1Bkvx89cQZ6ORI_eok3PFEi_1k7_BHvbArBIwAZ-Z9SAIH02tIzJym7IQJ4AmmaU_ixPGYtrBNvOxUqCLwGbT5ndsBhok1heKmZYUDJuV6qTwCOmNXnaaspHpFtZCr_QrXZ5DFHnX95BVxYoUZaEDNcIdtnvhnIqBkE2IWqFlBnBQkqmlBilIkTwX4zm4rRANHy7qJTn0vknaEw8ZGzagCGt3mwZx1wKekzbsOFGFRpKJ29V-FwJyF63oNuWUoJArGZA00_J-WN'
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-32 px-8 max-w-7xl mx-auto relative">
      <h2 className="text-4xl font-headline font-bold text-on-surface mb-4 text-center">The right solution for your business</h2>
      <p className="text-on-surface-variant text-center mb-16 max-w-2xl mx-auto">Tailored workflows and features specific to your industry standards.</p>
      
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-40 bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-full border border-outline-variant/30 text-primary hover:bg-primary hover:text-on-primary transition-all shadow-xl hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 active:scale-90"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-40 bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-full border border-outline-variant/30 text-primary hover:bg-primary hover:text-on-primary transition-all shadow-xl hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 active:scale-90"
        >
          <ChevronRight />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 px-4"
        >
          {industries.map((ind, i) => (
            <div key={i} className="group relative flex-none w-[85vw] md:w-[400px] aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer snap-center">
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={ind.img} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-headline font-bold mb-2">{ind.title}</h3>
                <p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SalesFocus = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { title: 'Global Server Architecture', icon: Globe },
    { title: '24/7 Support Desk', icon: Headphones },
    { title: 'Continuous Improvements', icon: RefreshCw }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-20">
          <h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Focus on your sales</h2>
          <p className="text-on-surface-variant text-lg mb-8">We handle the technical complexity so you can focus on providing the best experience for your visitors.</p>
          <button className="gradient-cta px-10 py-4 rounded-xl text-on-primary font-bold active:scale-95 transition-all">Start scaling today</button>
        </div>

        <div className="w-full bg-surface-container-lowest p-8 md:p-16 rounded-[3rem] border border-outline-variant/10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center text-center relative z-10">
            <div>
              <div className="text-5xl font-black font-headline text-primary mb-2">99.9%</div>
              <div className="text-xs font-label uppercase text-on-surface-variant tracking-widest">Uptime Guarantee</div>
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-4">
                  {slides.map((_, i) => (
                    <div key={i} className="w-12 h-1 bg-primary/20 rounded-full overflow-hidden relative">
                      {activeSlide === i && (
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 4, ease: "linear" }}
                          className="absolute inset-0 bg-primary origin-left"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="relative h-48 w-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={activeSlide}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-3xl bg-surface-container-high border border-primary/20"
                    >
                      {React.createElement(slides[activeSlide].icon, { className: "w-12 h-12 text-primary mb-4" })}
                      <p className="font-headline font-bold text-on-surface text-lg">{slides[activeSlide].title}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div>
              <div className="text-5xl font-black font-headline text-primary mb-2">&lt;200ms</div>
              <div className="text-xs font-label uppercase text-on-surface-variant tracking-widest">Average Latency</div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4df2c9 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-headline font-bold text-center mb-16">Simple, transparent pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-surface-container-high p-12 rounded-3xl flex flex-col border border-outline-variant/10">
          <h3 className="text-xl font-headline font-bold mb-2">Starter</h3>
          <div className="text-4xl font-black mb-6">Free</div>
          <p className="text-on-surface-variant mb-10">Perfect for small venues and emerging events.</p>
          <ul className="space-y-4 mb-12 flex-1">
            {['Up to 500 tickets/month', 'Basic analytics', 'Standard entry scanning'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-full font-bold border border-outline-variant text-on-surface hover:bg-surface-variant transition-all">Get started</button>
        </div>

        <div className="bg-surface-container-high p-12 rounded-3xl flex flex-col border-2 border-primary/30 relative">
          <div className="absolute top-0 right-12 -translate-y-1/2 gradient-cta px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-on-primary">Most Popular</div>
          <h3 className="text-xl font-headline font-bold mb-2">Pro</h3>
          <div className="text-4xl font-black mb-6">Custom</div>
          <p className="text-on-surface-variant mb-10">Scalable solution for growing high-volume parks.</p>
          <ul className="space-y-4 mb-12 flex-1">
            {['Unlimited ticketing', 'Custom hardware integrations', 'Priority 24/7 support', 'White-label options'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-primary w-5 h-5" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-full font-bold gradient-cta text-on-primary active:scale-95 transition-all">Request your price</button>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: 'How fast can we go live?', a: 'Typical onboarding takes between 3 to 14 days depending on hardware complexity.' },
    { q: 'Do you support offline scanning?', a: 'Yes, our mobile apps support offline scanning with automatic sync when connection is restored.' },
    { q: 'Can we integrate our existing CRM?', a: 'Absolutely. We have a robust API and pre-built connectors for major CRM platforms.' },
    { q: 'Is technical support included?', a: 'Standard support is included in all plans, with 24/7 priority support available for Pro users.' }
  ];

  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-3xl mx-auto px-8">
        <h2 className="text-4xl font-headline font-bold mb-12 text-center">We have all the answers</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-surface-container-high rounded-2xl p-6 cursor-pointer border border-outline-variant/10"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-on-surface">{faq.q}</h4>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                  <Minus className={`w-5 h-5 ${openIndex === i ? 'block' : 'hidden'}`} />
                  <Plus className={`w-5 h-5 ${openIndex === i ? 'hidden' : 'block'}`} />
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 text-on-surface-variant text-sm overflow-hidden"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-40 px-8 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-headline font-extrabold mb-10 text-on-surface">Take the Next Step with Booqi</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Ready to revolutionize your visitor experience? Let's build the future of ticketing together.</p>
        <button className="gradient-cta px-16 py-5 rounded-full text-on-primary font-black text-xl shadow-2xl shadow-primary/40 active:scale-95 transition-all">
          Request demo
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px]"></div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest w-full pt-20 pb-10 mt-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div className="col-span-1">
          <span className="text-xl font-bold text-on-surface mb-4 block font-headline">Booqi</span>
          <p className="text-on-surface-variant max-w-xs">Building the most advanced ticketing platform for high-volume leisure venues.</p>
        </div>
        <div>
          <h5 className="text-on-surface font-bold mb-6 uppercase tracking-widest text-xs">Company</h5>
          <ul className="space-y-4">
            {['About us', 'Blog', 'Careers'].map(item => (
              <li key={item}><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-on-surface font-bold mb-6 uppercase tracking-widest text-xs">Useful links</h5>
          <ul className="space-y-4">
            {['Support', 'API Docs', 'System Status'].map(item => (
              <li key={item}><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-on-surface font-bold mb-6 uppercase tracking-widest text-xs">Contact</h5>
          <ul className="space-y-4">
            <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">hello@booqi.me</a></li>
            {['Privacy', 'Terms'].map(item => (
              <li key={item}><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pt-20 flex flex-col md:flex-row justify-between items-center border-t border-outline-variant/5 mt-10">
        <p className="text-on-surface-variant/60">© 2024 Booqi. All rights reserved.</p>
        <div className="flex gap-6 mt-6 md:mt-0">
          <Globe className="w-5 h-5 text-on-surface-variant/60 hover:text-primary cursor-pointer transition-colors" />
          <Mail className="w-5 h-5 text-on-surface-variant/60 hover:text-primary cursor-pointer transition-colors" />
          <Share2 className="w-5 h-5 text-on-surface-variant/60 hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <SocialProof />
        <Features />
        <HardwareIntegration />
        <Industries />
        <SalesFocus />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

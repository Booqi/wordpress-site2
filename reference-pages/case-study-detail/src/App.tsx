/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Filter, LogIn } from "lucide-react";
import { useState } from "react";

const categories = ["All Stories", "Theme Parks", "Museums", "Events", "Zoos"];

const caseStudies = [
  {
    id: 1,
    category: "Zoos",
    title: "Wildpark Eekholt: Optimizing Guest Flow.",
    description: "Reducing bottlenecks at the entrance during peak hours through automated QR validation and heat-mapping.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAocrjOpE8BAlWkf4BqSLy9qSR2SagjTn_OsZRkdlaC5cZz0mixEue5AAAkNmsjg3vJDXmE903P9_By0MxmCB63zIPoKJuSQMI-xsRC48MZKCS9aVOR9PozYckRAM8cHNBoPvInZuiZQFQGA8jx_49UrMEFCAXjWDkYBcB-ex5dzxwAS0572SihAMwD6_dUhFzQpUS0NbjMgyhXNSNiM0YtmzrsjvoSEWyN4uwGPy-FgaQdheNXyS1lTjTivX9A0M2ypbM9nKPlIDxV",
  },
  {
    id: 2,
    category: "Events",
    title: "Managing 50,000+ Attendees with Booqi Live.",
    description: "The ultimate stress test: Zero downtime during one of Europe's largest electronic music festivals.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnMJJYx4VI1uqgq4lBBHyYKjF-0sRrTZ7BwIHGVVdkxNbcMJQ6FwcLzj4K-e9ZhPrlvfeYFZeuGDQ45qwylTy4yN-e-iBx5c_AI9iXpF7r9mx8g0vJhdqGXjN9PFAiK-5vlWvCalXNn-GNO2_B4w822ILAurgtzEYLoL70oHMCHEcZWMElsPEogt_T2986tLQBKPS6VhCF6SJTROYUXCliztai0pmURyu9PYx7DrhCPe4rVExITj-UwBV1MDLNG9qzZYu1May4Vm6l",
  },
  {
    id: 3,
    category: "Museums",
    title: "The Digital Transformation of Art History.",
    description: "Bridging the gap between physical exhibits and digital engagement with integrated mobile guides.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgBKYMs1K9f5roFAlR2w_icfGGMMenx4arcYEXxmxao1O1oOKtZ06p4YS8ZFlY3GTIHOdn_cwde8RjAborvL6CjWHAdT2rs287HwNB_ugLJIalSLyjLaA77U0SCCFyOvz3nDGyAwnQyt9RO8wpPsuZ6P7FVp9JtitFDDuMBU3WD2Bs-xYsXTNhFGSCnZjAeV90RRqzbM5EyFDPKCb1Ms98mcb-Syp_KlueEBC5zDY2e9vzw89c2ZWlPLSITv_RD6cjYekBYgMa6KTT",
  },
  {
    id: 4,
    category: "Aquatic Centers",
    title: "Swimming Pools: Scaling Capacity in Real-time.",
    description: "Real-time attendance tracking helped public swimming centers maintain safety standards while optimizing hourly slots.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9z5n9zIjW-huPmFFtHc_JlOAqUycE9BuqcCfDsTzEk8ZXzQP_QA9CTE1ihuhEb1ZuPcmj_ptgQs-ThA-NIvRnUSZeO46fWVZf9P2OOCr8T5Yia5T7Hx6pG5maDNVKH4p4pi3IU2Z90R9SvS1_BUTeaz2z3-GOAeiP4Tpn4N4ed1p7av17UmHLI-ZLRgUctpm2CAMc6rvNoICGv9fCx_xSk2ZIW1X_HYLARoTNvYdgT-M66QJ9rC4HnjmJQTllDKgghDOwtCMY94RP",
  },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All Stories");

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-on-surface font-headline">Booqi</div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a className="text-on-surface/70 hover:text-primary transition-colors duration-300" href="#">Platform</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors duration-300" href="#">Solutions</a>
            <a className="text-primary border-b-2 border-primary pb-1" href="#">Case Studies</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors duration-300" href="#">Pricing</a>
          </div>

            <div className="flex items-center space-x-4">
            <button className="hidden md:block text-on-surface/70 text-sm font-medium hover:text-primary transition-colors">Log In</button>
            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.15em] uppercase mb-6 border border-primary/20">Global Impact</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                Success Stories: <br/>
                <span className="text-gradient">Powering the Pulse</span> <br/>
                of Every Venue.
              </h1>
            </div>
            <div className="md:w-1/3 pb-2">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Explore how industry leaders use Booqi’s obsidian-grade infrastructure to transform guest experiences and unlock untapped revenue streams.
              </p>
            </div>
          </motion.div>
        </header>

        {/* Featured Story */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group rounded-2xl overflow-hidden bg-surface-container-low min-h-[500px] flex items-stretch border border-outline-variant/10 shadow-2xl"
          >
            <div className="absolute inset-0 z-0">
              <img 
                alt="Klotti Park" 
                className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACgqIcxKZuiowERNRbQy5ThrCjPfjxcLhd3QWTMZ89SrotG5fuwgHnk1JPwN5V8SK4m6N7ddXp1xTCaLV_QzEyLyTc471i-QK2lxf7DKV6npTk_xmikO949Ez7cOfjZMRQ9I2u9EFiL83v4_ZmSkwdT98ywesEgan0S_rgrf2VmYN-J85rm79nwjxfU1jHEqmqW4N9eXa8wSs7sy-Y5-Ato7NDty41mp9J7ciedtW4WiFYJR7scuhnTweXh2MBlHqir581lzC0c3kc"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6">
                <span className="bg-primary/20 text-primary-fixed text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Featured Case Study</span>
                <div className="w-12 h-[1px] bg-primary/30"></div>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface leading-tight">
                Klotti Park: Revolutionizing Seasonal Ticket Sales.
              </h2>
              <p className="text-on-surface-variant text-lg mb-10 max-w-lg">
                Faced with fluctuating seasonal demand, Klotti Park implemented Booqi’s dynamic pricing engine to smooth guest flow and maximize capacity utilization.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex flex-col">
                  <span className="text-primary text-3xl font-bold font-headline">40%</span>
                  <span className="text-on-surface-variant text-xs uppercase tracking-widest font-medium">Revenue Increase</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary text-3xl font-bold font-headline">120k+</span>
                  <span className="text-on-surface-variant text-xs uppercase tracking-widest font-medium">Tickets Sold</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary text-3xl font-bold font-headline">15%</span>
                  <span className="text-on-surface-variant text-xs uppercase tracking-widest font-medium">Waste Reduction</span>
                </div>
              </div>

              <button className="btn-gradient w-fit text-[#00382c] px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 group/btn hover:shadow-[0_0_20px_rgba(77,242,201,0.3)] transition-all">
                Read Case Study
                <ChevronRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Industry Filter */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-outline-variant/10 pb-6">
            <div className="flex items-center space-x-2 overflow-x-auto w-full no-scrollbar pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? "bg-primary text-on-primary" 
                      : "text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="hidden md:flex items-center text-on-surface-variant gap-2 text-sm font-medium">
              <Filter className="w-5 h-5" />
              <span>Sort by: Impact</span>
            </div>
          </div>
        </section>

        {/* Case Study Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface-container-low rounded-2xl overflow-hidden flex flex-col md:flex-row h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(77,242,201,0.08)] border border-outline-variant/5"
            >
              <div className="w-full md:w-1/2 overflow-hidden h-64 md:h-auto">
                <img 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={study.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-primary-fixed text-[10px] font-bold tracking-widest uppercase mb-3 block">{study.category}</span>
                  <h3 className="font-headline text-2xl font-bold mb-4 leading-snug">{study.title}</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-3 leading-relaxed">{study.description}</p>
                </div>
                <a className="mt-8 flex items-center gap-2 text-primary font-bold text-sm group/link" href="#">
                  Read Case Study
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-32 text-center py-20 rounded-2xl glass-panel border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
          
          <h2 className="font-headline text-4xl font-bold mb-6">Ready to create your own success story?</h2>
          <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">Join the 500+ venues worldwide that are scaling faster and smarter with Booqi's unified ticketing ecosystem.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="btn-gradient text-[#00382c] px-10 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(77,242,201,0.4)] hover:scale-105 active:scale-95">
              Book a Demo
            </button>
            <button className="px-10 py-4 rounded-full border border-outline-variant text-on-surface font-bold hover:bg-surface-container-high transition-colors hover:scale-105 active:scale-95">
              View All Features
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] w-full py-20 px-8 border-t border-outline-variant/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-on-surface mb-6 font-headline">Booqi</div>
            <p className="text-sm leading-relaxed text-on-surface-variant max-w-xs">
              The next generation of ticketing intelligence. Built for scale, designed for pulse.
            </p>
          </div>
          
          <div>
            <h4 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-8">Product</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Solutions</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-primary transition-colors text-primary" href="#">Case Studies</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-8">Connect</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">LinkedIn</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Status</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/5">
          <p className="text-xs text-on-surface-variant/40 text-center">
            © 2024 Booqi Ticketing. Built on Obsidian Pulse.
          </p>
        </div>
      </footer>
    </div>
  );
}

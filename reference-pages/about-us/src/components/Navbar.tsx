import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant"
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-primary font-headline">
          Booqi
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-on-surface opacity-80 font-headline font-bold tracking-tight hover:text-primary hover:opacity-100 transition-all duration-300">
            Mission
          </a>
          <a href="#" className="text-on-surface opacity-80 font-headline font-bold tracking-tight hover:text-primary hover:opacity-100 transition-all duration-300">
            Team
          </a>
          <a href="#" className="text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight">
            Values
          </a>
          <a href="#" className="text-on-surface opacity-80 font-headline font-bold tracking-tight hover:text-primary hover:opacity-100 transition-all duration-300">
            Contact
          </a>
        </div>

        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-full font-bold text-sm tracking-tight hover:scale-95 active:scale-90 transition-all duration-200 shadow-lg shadow-primary/10">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
}

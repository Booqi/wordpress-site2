import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-[30px] border-b border-white/5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-on-surface tracking-tighter font-headline">Booqi</div>
        
        <div className="hidden md:flex items-center space-x-8 font-headline font-bold tracking-tight">
          {['Features', 'Solutions', 'Pricing', 'About'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-on-surface/70 font-medium hover:text-on-surface transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-5 py-2 text-on-surface/70 font-medium hover:text-on-surface transition-all active:scale-95">
            Login
          </button>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-full font-bold tracking-tight shadow-lg shadow-primary/20 active:scale-95 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

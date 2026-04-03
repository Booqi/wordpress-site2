import { Globe, Share2, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#131313] w-full py-16 mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1">
          <span className="text-xl font-bold text-on-surface mb-4 block font-headline">Booqi</span>
          <p className="text-on-surface/50 text-sm leading-relaxed mb-6">
            The modern pulse of ticketing and visitor management systems.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
              <Globe className="w-4 h-4 group-hover:text-on-primary" />
            </div>
            <div className="w-8 h-8 rounded-full bg-surface-high flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
              <Share2 className="w-4 h-4 group-hover:text-on-primary" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
          <ul className="space-y-4">
            {['Documentation', 'API Reference', 'Features'].map((item) => (
              <li key={item}>
                <a href="#" className="text-on-surface/50 hover:text-on-surface transition-all text-sm block hover:translate-x-1">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4">
            {['Privacy', 'Terms', 'Support'].map((item) => (
              <li key={item}>
                <a href="#" className="text-on-surface/50 hover:text-on-surface transition-all text-sm block hover:translate-x-1">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
          <div className="bg-surface-low p-4 rounded-xl border border-white/5">
            <p className="text-xs text-on-surface-variant mb-4">
              Stay updated with the latest revenue optimization strategies.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="email" 
                className="bg-surface-high border-none rounded-l-lg text-xs w-full focus:ring-1 focus:ring-primary/40 text-on-surface placeholder:text-on-surface/30"
              />
              <button className="bg-primary text-on-primary px-3 rounded-r-lg hover:bg-primary-container transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-white/5 text-center md:text-left">
        <span className="text-on-surface/50 text-sm tracking-wide">
          © {new Date().getFullYear()} Booqi Ticketing. Built for the Pulse.
        </span>
      </div>
    </footer>
  );
}

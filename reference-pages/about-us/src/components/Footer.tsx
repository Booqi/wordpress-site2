export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-screen-2xl mx-auto">
        <div className="text-xl font-bold text-on-surface font-headline">
          Booqi
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="text-on-surface/60 text-sm tracking-wide uppercase hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-on-surface/60 text-sm tracking-wide uppercase hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-on-surface/60 text-sm tracking-wide uppercase hover:text-primary transition-colors">
            Careers
          </a>
          <a href="#" className="text-on-surface/60 text-sm tracking-wide uppercase hover:text-primary transition-colors">
            Press Kit
          </a>
        </div>
        <p className="text-on-surface/60 text-sm tracking-wide uppercase">
          © 2024 Booqi. Built on Obsidian Pulse.
        </p>
      </div>
    </footer>
  );
}

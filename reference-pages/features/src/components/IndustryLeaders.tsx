import { Landmark, Castle, Dog, FerrisWheel, Ticket, PartyPopper, Compass, Theater } from 'lucide-react';

const industries = [
  { icon: Landmark, label: 'Museums' },
  { icon: Castle, label: 'Attractions' },
  { icon: Dog, label: 'Zoos' },
  { icon: FerrisWheel, label: 'Theme Parks' },
  { icon: Ticket, label: 'Events' },
  { icon: PartyPopper, label: 'Festivals' },
  { icon: Compass, label: 'Tours' },
  { icon: Theater, label: 'Cultural Venues' }
];

export default function IndustryLeaders() {
  return (
    <section className="py-24 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-6">
              Built for the <br />
              <span className="text-primary">Industry Leaders.</span>
            </h2>
            <p className="text-on-surface-variant">
              Our platform is engineered for high-volume venues requiring surgical precision in their operations.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-surface-high p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-4 hover:bg-surface-highest transition-all cursor-default group"
              >
                <industry.icon className="text-primary w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm">{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

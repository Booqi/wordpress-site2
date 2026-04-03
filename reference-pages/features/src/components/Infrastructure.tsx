import { Users, Mail, Zap, BarChart3, Palette, Rocket } from 'lucide-react';

const infrastructureItems = [
  {
    icon: Users,
    title: 'Reservations & Group Bookings',
    description: 'Handle large group reservations with custom pricing tiers and automated capacity management.'
  },
  {
    icon: Mail,
    title: 'Automated Email Flows',
    description: 'Trigger-based booking confirmations, pre-visit reminders, and targeted marketing campaigns.'
  },
  {
    icon: Zap,
    title: 'Deep Integrations',
    description: 'Seamlessly connect with your existing accounting tools, marketing stacks, and custom API needs.'
  },
  {
    icon: BarChart3,
    title: 'Reporting & Insights',
    description: 'Real-time financial reporting, channel performance tracking, and granular visitor analytics.'
  },
  {
    icon: Palette,
    title: 'Customizable Experience',
    description: "Fully white-label the platform to match your brand's unique aesthetic and customer journey."
  },
  {
    icon: Rocket,
    title: 'Fast & Scalable',
    description: 'Cloud-native infrastructure designed to scale from local exhibits to global theme parks.'
  }
];

export default function Infrastructure() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">Advanced Infrastructure</h2>
          <div className="h-1 w-20 bg-primary" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {infrastructureItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <item.icon className="text-primary w-10 h-10 mb-6" />
              <h4 className="text-xl font-headline font-bold mb-4">{item.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

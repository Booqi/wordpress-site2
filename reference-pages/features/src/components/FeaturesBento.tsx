import { motion } from 'motion/react';
import { Ticket, Monitor, CreditCard, Gift, Share2, CheckCircle2, TrendingUp, QrCode, Wallet } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function FeaturesBento() {
  return (
    <section className="py-20 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Feature: Online Ticketing */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 glass-card rounded-2xl p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Ticket className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">Online Ticketing</h3>
              <p className="text-on-surface-variant text-lg mb-8 max-w-md">
                Built for revenue growth with a focus on conversion and user experience.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Dynamic pricing',
                  'Instant rebooking',
                  'Timed-entry slots',
                  'Mobile-first flow'
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2 text-on-surface/80">
                    <CheckCircle2 className="text-primary w-4 h-4 fill-primary/20" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 relative h-48 overflow-hidden rounded-xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2DdJOcymJo5KtDlcZwT_vsKxkwtFlaB0kA6clnuJlbvFsMiwOT8QOWlmgMXq0dHRfX9krhjpGdc-_xY2RQKjMtg3XRQtDISMEB-amuUQfO-3J1jF0-MOVgWfCvNsFmYNkthTCzLRQ7RC3RgNmT-ROvL95RrW6nhGeoXV1feeSszX5vyLD9VVJtMhVKfhNo-HGmGJkBGD4xReB5qu_K0XnWfgsqsVF3hREUKEOSzRw1qKm2lO9NhHtcd4SugtHMQ1Mu7PIN81h7faD" 
                alt="Dashboard" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Feature: Offline Sales */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card rounded-2xl p-8 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Monitor className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Offline Sales</h3>
            <p className="text-on-surface-variant mb-6">
              Omnichannel POS & self-service kiosks that stay in sync with your digital inventory.
            </p>
            <ul className="space-y-3 mb-8 text-sm">
              {['Staff-facing POS', 'Self-service Kiosks', 'Real-time sync'].map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="h-32 bg-surface-highest/30 rounded-lg border border-white/5 flex items-center justify-center">
              <span className="text-on-surface-variant text-xs font-mono tracking-widest">INTEGRATED PAYMENT FLOW</span>
            </div>
          </motion.div>

          {/* Feature: Subscriptions */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card rounded-2xl p-8 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <CreditCard className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Subscriptions</h3>
            <p className="text-on-surface-variant mb-6">
              Foster loyalty with memberships and season passes with flexible billing cycles.
            </p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-primary">RECURRING REVENUE</span>
                <TrendingUp className="text-primary w-4 h-4" />
              </div>
              <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  className="h-full bg-primary" 
                />
              </div>
            </div>
          </motion.div>

          {/* Feature: Gift Cards */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card rounded-2xl p-8 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Gift className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Gift Cards</h3>
            <p className="text-on-surface-variant mb-6">
              Digital and physical vouchers with seamless redemption across all channels.
            </p>
            <div className="flex -space-x-3 overflow-hidden">
              <div className="inline-block h-10 w-16 rounded-lg bg-surface-highest border border-white/10 flex items-center justify-center">
                <QrCode className="text-primary/50 w-5 h-5" />
              </div>
              <div className="inline-block h-10 w-16 rounded-lg bg-primary text-on-primary flex items-center justify-center shadow-lg">
                <Wallet className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Feature: Multi-Channel */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 glass-card rounded-2xl p-8 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Share2 className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Multi-Channel</h3>
            <p className="text-on-surface-variant mb-6">
              Connect to major resellers while keeping your inventory centrally managed.
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-8 rounded bg-surface-highest opacity-50" />
              <div className="h-8 rounded bg-surface-highest" />
              <div className="h-8 rounded bg-surface-highest opacity-50" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

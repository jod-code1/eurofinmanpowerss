"use client"
import { motion } from 'motion/react';
import { 
  Hammer, Factory, HeartPulse, UtensilsCrossed, 
  Truck, HardHat, MonitorSmartphone, Landmark, 
  ShoppingBag, Wrench 
} from 'lucide-react';

const industries = [
  { name: 'Construction', icon: Hammer },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Hospitality', icon: UtensilsCrossed },
  { name: 'Logistics', icon: Truck },
  { name: 'Engineering', icon: HardHat },
  { name: 'Information Technology', icon: MonitorSmartphone },
  { name: 'Finance', icon: Landmark },
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Skilled Trades', icon: Wrench },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-transparent text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-slate-100 p-8 lg:p-16 rounded-3xl border border-dashed border-slate-300">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">Industries We Serve</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Connecting Talent Across Diverse Sectors
            </h3>
            <p className="text-slate-500 text-lg">
              We provide specialized recruitment solutions tailored to the unique demands of various industries, ensuring the perfect match between employers and skilled professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white hover:bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all shadow-sm hover:shadow-md"
              >
                <industry.icon className="w-8 h-8 text-euro-blue-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-sm text-slate-700">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

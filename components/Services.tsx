"use client"
import { motion } from 'motion/react';
import { Briefcase, Globe, Building2, TrendingUp, Factory, UserCog } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Recruitment & Staffing Solutions',
    description: 'Helping companies hire qualified professionals.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-white',
    text: 'text-slate-900',
    iconColor: 'text-euro-blue-900'
  },
  {
    icon: Globe,
    title: 'International Job Placement',
    description: 'Connecting skilled workers with European employers.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-white',
    text: 'text-slate-900',
    iconColor: 'text-euro-blue-900'
  },
  {
    icon: Building2,
    title: 'Employer Solutions',
    description: 'Recruitment support for businesses across industries.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-white',
    text: 'text-slate-900',
    iconColor: 'text-euro-blue-900'
  },
  {
    icon: TrendingUp,
    title: 'Career Development & Training',
    description: 'Preparing candidates for successful international careers.',
    colSpan: 'md:col-span-2 lg:col-span-1',
    bg: 'bg-white',
    text: 'text-slate-900',
    iconColor: 'text-euro-blue-900'
  },
  {
    icon: Factory,
    title: 'Industry-Specific Workforce Supply',
    description: 'Tailored hiring for specialized industries.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-white',
    text: 'text-slate-900',
    iconColor: 'text-euro-blue-900'
  },
  {
    icon: UserCog,
    title: 'HR & Payroll Management',
    description: 'Supporting businesses with workforce administration.',
    colSpan: 'md:col-span-1 lg:col-span-1',
    bg: 'bg-white',
    text: 'text-slate-900',
    iconColor: 'text-euro-blue-900'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Empowering Careers, Building Businesses Through Expert Solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 ${service.bg} ${service.colSpan} hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-euro-blue-900">
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              
              <h4 className={`text-xl font-bold mb-3 ${service.text}`}>
                {service.title}
              </h4>
              <p className={`text-sm text-slate-500`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

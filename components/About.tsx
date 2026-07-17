"use client"
import { motion } from 'motion/react';
import { Target, Users, Shield, Zap, Compass, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import elegantProfessionals from '../assets/elegant_professionals_1784304771436.jpg';

const features = [
  {
    icon: Users,
    title: 'European Recruitment Experts',
    description: 'Years of experience connecting skilled professionals with top employers.',
  },
  {
    icon: Shield,
    title: 'Trusted Employer Network',
    description: 'Strong partnerships with leading companies across Europe.',
  },
  {
    icon: Compass,
    title: 'Visa & Relocation Support',
    description: 'Complete guidance throughout your relocation journey.',
  },
  {
    icon: Zap,
    title: 'Fast Hiring Process',
    description: 'Efficient recruitment with quick placement.',
  },
  {
    icon: Target,
    title: 'Personalized Career Guidance',
    description: 'Helping candidates choose the right opportunities.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Recruitment',
    description: 'Honest communication with no hidden surprises.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Your Trusted Partner in European Recruitment & Workforce Solutions
            </h3>
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              We specialize in international recruitment, bringing top-tier talent and European employers together. Our deep understanding of the European hiring landscape allows us to offer tailored solutions that meet the specific needs of businesses and professionals alike.
            </p>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              From end-to-end recruitment to career guidance and employer partnerships, we ensure a seamless and rewarding experience for all parties involved, focusing strongly on the thriving market of Luxembourg.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-euro-blue-900 hover:bg-euro-blue-800 text-white font-semibold rounded-xl shadow-xl shadow-blue-100 transition-all hover:-translate-y-1">
              Discover Our Story
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-euro-orange-500 to-euro-blue-900 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
            <Image
              src={elegantProfessionals}
              alt="Elegant Business Professionals"
              className="relative rounded-3xl shadow-2xl object-cover"
              priority
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <div className="text-5xl font-black text-euro-blue-900 mb-2">15+</div>
              <div className="text-slate-600 font-medium">Years of combined expertise in international recruitment.</div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Experience the Eurofin Difference</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-euro-blue-900 mb-6 group-hover:bg-euro-blue-900 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

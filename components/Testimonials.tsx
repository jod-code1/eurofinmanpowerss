"use client"
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Eurofin Manpowers helped me secure my dream job in Luxembourg within weeks. Their guidance throughout the relocation and visa process was invaluable.",
    author: "Elena M.",
    role: "Senior Software Engineer",
  },
  {
    quote: "The recruitment process was smooth and professional. They matched me with an employer that perfectly aligns with my career goals and values.",
    author: "Lukas K.",
    role: "Operations Manager",
  },
  {
    quote: "Highly recommended for international placements. They understand the European market deeply and provide honest, transparent communication.",
    author: "Sofia R.",
    role: "Healthcare Professional",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Success Stories from Our Professionals
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative hover:shadow-xl hover:border-slate-200 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 rotate-180" />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-euro-orange-500 text-euro-orange-500" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-auto">
                <div className="font-bold text-slate-900">{testimonial.author}</div>
                <div className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

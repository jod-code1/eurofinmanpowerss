"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { CheckCircle2, ChevronRight } from 'lucide-react';

import img1 from '../assets/luxurious_office_1784304728244.jpg';
import img2 from '../assets/diverse_employees_1784304745188.jpg';
import img3 from '../assets/luxembourg_business_1784304758575.jpg';

const images = [img1, img2, img3];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-transparent pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 lg:left-1/2 lg:right-8 lg:top-24 lg:bottom-8 z-0 lg:rounded-3xl overflow-hidden lg:shadow-2xl lg:border lg:border-slate-200"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 lg:hidden" />
          <div className="absolute inset-0 bg-euro-blue-950/10 z-10" />
          <Image
            src={images[currentImageIndex]}
            alt="Hero Background"
            fill
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-16">
        <div className="max-w-xl lg:max-w-2xl relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-euro-blue-900 text-[10px] uppercase tracking-widest font-bold mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-euro-blue-900"></span>
            <span>Luxembourg Headquartered</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-euro-blue-900 leading-[1.1] tracking-tight mb-6"
          >
            Your Gateway to <br className="hidden lg:block" /><span className="text-slate-900">Career Opportunities</span> <br className="hidden lg:block" />Across Europe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed"
          >
            Helping skilled professionals secure rewarding careers in Luxembourg and across Europe while providing businesses with exceptional international talent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-euro-blue-900 hover:bg-euro-blue-800 text-white font-bold rounded-xl shadow-xl shadow-blue-100 transition-all hover:scale-105"
            >
              Explore Vacancies
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-euro-blue-900 text-euro-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              For Employers
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 gap-4 text-sm text-slate-600 font-medium max-w-lg"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Trusted Recruitment Partner
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Luxembourg Opportunities
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Visa Assistance
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

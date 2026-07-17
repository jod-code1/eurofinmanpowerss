"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 5000, suffix: '+', label: 'Professionals Placed' },
  { value: 250, suffix: '+', label: 'Partner Companies' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 95, suffix: '%', label: 'Placement Success Rate' },
];

export default function Stats() {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-euro-blue-900 rounded-3xl p-12 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col text-white"
            >
              <div className="text-4xl md:text-5xl font-black mb-3">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-white/80 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

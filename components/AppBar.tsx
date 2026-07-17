"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, } from 'lucide-react';

export default function AppBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-4'
          : 'bg-white/50 backdrop-blur-sm border-b border-slate-100 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className=" rounded-xl bg-transparent flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            {/* <span className="text-white font-bold text-sm italic">EM</span> */}
            <img src="/logo.png" className='w-11 h-11' alt="logo" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-euro-blue-900">
              EUROFIN
            </span>
            <span className="text-xs font-semibold tracking-wider text-euro-orange-500">
              MANPOWERS
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-euro-blue-900 relative group transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-euro-blue-900 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-euro-orange-500 hover:bg-euro-orange-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-orange-200 transition-all hover:scale-105"
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-euro-blue-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-euro-gray-100 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-euro-gray-800 font-medium text-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 bg-euro-orange-500 text-white text-center font-semibold rounded-xl shadow-lg"
            >
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

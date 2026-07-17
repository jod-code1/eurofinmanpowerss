import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
// import Industries from './components/Industries';
// import Stats from './components/Stats';
// import Testimonials from './components/Testimonials';
// import CTA from './components/CTA';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import AppBar from '@/components/AppBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-euro-orange-500 selection:text-white relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-40 z-0 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] opacity-30 z-0 pointer-events-none"></div>
      
      <AppBar />
      <main>
        <Hero />
        <About />
        <Services />
       {/*   <Industries />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

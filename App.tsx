
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import HowWeHelpSection from './components/HowWeHelpSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <HowWeHelpSection />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

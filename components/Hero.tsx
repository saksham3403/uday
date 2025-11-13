import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setIsAnimated(true); // Trigger animation on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-slate-900 text-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('hero.png')",
          transform: `translateY(${offsetY * 0.5}px)` 
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className={`transform transition-all duration-700 ease-out ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
            Empowering Your Business Vision
          </h1>
        </div>
        <div className={`transform transition-all duration-700 ease-out delay-200 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
            We turn your ideas into scalable ventures with expert consultancy and innovative dropshipping solutions.
          </p>
        </div>
        <div className={`transform transition-all duration-700 ease-out delay-400 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <a
            href="#services"
            className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-md hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
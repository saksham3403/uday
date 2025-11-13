
import React, { useState, useEffect } from 'react';
import { TargetIcon } from './IconComponents';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <div className="inline-flex items-center text-blue-600 font-semibold tracking-wider mb-4">
                <TargetIcon className="h-6 w-6 mr-2" />
                WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Your Partner in Growth and Innovation
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                At Uday Enterprises, we are passionate about empowering entrepreneurs and businesses to thrive in today’s dynamic marketplace. As a trusted provider of business consultancy, dropshipping solutions, and end-to-end business services, we specialize in turning ideas into scalable ventures.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team brings deep industry insight and strategic thinking to help clients navigate challenges, optimize operations, and unlock new growth opportunities. We don’t just offer services—we build partnerships rooted in trust, innovation, and measurable success.
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-2xl overflow-hidden aspect-[3/2]">
                <img
                  src="about.png"
                  alt="Team discussing strategy"
                  className="w-full h-full object-cover"
                  style={{
                    transform: `translateY(${offsetY * 0.1}px) scale(1.2)`,
                  }}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;

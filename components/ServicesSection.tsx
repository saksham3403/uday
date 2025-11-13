import React from 'react';
import { BriefcaseIcon, RocketIcon, GlobeIcon } from './IconComponents';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: <BriefcaseIcon className="h-10 w-10 text-white" />,
    title: 'Business Consultancy',
    description: 'Actionable insights from market analysis and brand positioning to operational efficiency and digital transformation.',
  },
  {
    icon: <RocketIcon className="h-10 w-10 text-white" />,
    title: 'Dropshipping Solutions',
    description: 'A hassle-free way to launch and manage online stores without the burden of inventory, logistics, or warehousing.',
  },
  {
    icon: <GlobeIcon className="h-10 w-10 text-white" />,
    title: 'Business Development',
    description: 'Tailored solutions including strategic planning, marketing support, and technology integration to ensure you stay competitive.',
  },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <>
            <div className="text-center">
              <p className="text-blue-600 font-semibold tracking-wider mb-2">WHAT WE DO</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Smart Solutions for Modern Businesses
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-16">
                We specialize in delivering smart, scalable, and results-driven solutions to help startups and established enterprises alike identify growth opportunities.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
          </>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
import { CheckCircleIcon } from './IconComponents';
import AnimatedSection from './AnimatedSection';

const helpPoints = [
  "Identify profitable niches and develop lean business models.",
  "Implement effective marketing and customer acquisition strategies.",
  "Provide expert guidance on branding and digital transformation.",
  "Assist with business planning, automation, and vendor management."
];

const HowWeHelpSection: React.FC = () => {
  return (
    <section id="help" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="lg:order-2">
              <p className="text-blue-600 font-semibold tracking-wider mb-2">HOW WE CAN HELP</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Strategy, Execution, and Adaptability for Your Business
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We understand that building a business requires more than just ambition. Our team offers hands-on support across every stage of your business journey, helping you achieve sustainable growth and stay ahead of the competition.
              </p>
              <ul className="space-y-4">
                {helpPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-slate-600 text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0 lg:order-1">
              <img
                src="https://picsum.photos/600/500?random=2"
                alt="Business growth"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowWeHelpSection;

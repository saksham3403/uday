import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonialsData = [
    {
        quote: "Working with Uday Enterprises was a game-changer. Their strategic insights helped us double our revenue in just six months. Truly a partner, not just a service provider.",
        name: "Jessica Miller",
        title: "CEO, Sparkle Co.",
        avatar: "https://picsum.photos/100/100?random=3"
    },
    {
        quote: "The dropshipping solution they set up for us was flawless. We were able to launch our brand quickly and efficiently, without the headaches of inventory management.",
        name: "David Chen",
        title: "Founder, Modern Goods",
        avatar: "https://picsum.photos/100/100?random=4"
    },
    {
        quote: "Their team is incredibly knowledgeable and supportive. They guided us through a complex digital transformation, and the results have been phenomenal.",
        name: "Sarah Jones",
        title: "Operations Manager, Innovate Tech",
        avatar: "https://picsum.photos/100/100?random=5"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                                What Our Clients Say
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-slate-600 mt-4">
                                We build partnerships rooted in trust, innovation, and measurable success.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {testimonialsData.map((testimonial, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
                                    <p className="text-slate-600 text-lg italic mb-6 flex-grow">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        <img className="w-14 h-14 rounded-full mr-4" src={testimonial.avatar} alt={testimonial.name} />
                                        <div>
                                            <p className="font-bold text-slate-900">{testimonial.name}</p>
                                            <p className="text-sm text-slate-500">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Testimonials;
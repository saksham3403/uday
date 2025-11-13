
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email Address is invalid.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate an API call
      setTimeout(() => {
        console.log('Form Submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000); // Reset form view after 5s
      }, 1500);
    }
  };


  return (
    <section id="contact" className="bg-blue-700 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-blue-200 text-lg mb-8">
                Let's have a conversation about how we can help you achieve your goals. Fill out the form, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
              {isSubmitted ? (
                 <div className="text-center bg-green-500/80 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold">Thank You!</h3>
                    <p className="mt-2 text-lg">Your message has been sent successfully. We'll be in touch soon.</p>
                 </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 font-medium text-blue-100">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-blue-800/50 text-white px-4 py-3 rounded-md border ${errors.name ? 'border-red-400' : 'border-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                      placeholder="John Doe"
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby="name-error"
                    />
                    {errors.name && <p id="name-error" className="text-red-300 text-sm mt-2">{errors.name}</p>}
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 font-medium text-blue-100">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-blue-800/50 text-white px-4 py-3 rounded-md border ${errors.email ? 'border-red-400' : 'border-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                      placeholder="your.email@example.com"
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby="email-error"
                    />
                    {errors.email && <p id="email-error" className="text-red-300 text-sm mt-2">{errors.email}</p>}
                  </div>
                  <div className="mb-5">
                    <label htmlFor="subject" className="block mb-2 font-medium text-blue-100">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-blue-800/50 text-white px-4 py-3 rounded-md border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium text-blue-100">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-blue-800/50 text-white px-4 py-3 rounded-md border ${errors.message ? 'border-red-400' : 'border-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
                      placeholder="Your message..."
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby="message-error"
                    ></textarea>
                    {errors.message && <p id="message-error" className="text-red-300 text-sm mt-2">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-blue-700 font-bold text-lg px-8 py-3 rounded-md shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:bg-slate-200 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
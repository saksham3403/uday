import React, { useState } from 'react';
import { MenuIcon, XIcon } from './IconComponents';

const navLinks = [
  { href: '#about', label: 'Who We Are' },
  { href: '#services', label: 'What We Do' },
  { href: '#help', label: 'How We Help' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-slate-900">
              Uday Enterprises
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleSmoothScroll}
                className="font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={handleSmoothScroll}
              className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-md shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-40">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileLinkClick}
                className="font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleMobileLinkClick}
              className="w-4/5 text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
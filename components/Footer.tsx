
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Uday Enterprises</h3>
            <p className="mt-2">Empowering Your Business Vision.</p>
          </div>
        </div>
        <hr className="my-8 border-slate-700" />
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Uday Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
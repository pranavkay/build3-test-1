import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-black tracking-tighter text-black flex items-center">
            build
            <div className="relative ml-0.5 mt-1">
              <span className="relative z-10 text-black">3</span>
              <svg className="absolute -inset-1 z-0 w-8 h-8 -top-1 -left-1" viewBox="0 0 40 40">
                <path d="M37 15c-1-6-10-12-20-10-12 2-15 15-10 25 5 10 25 10 30-5" stroke="#FFFAB7" strokeWidth="6" fill="#FFFAB7" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-semibold text-gray-700 hover:text-black hover:marker-underline transition-all"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#FFFAB7] hover:text-black border-2 border-black transition-all">
            Join the Tribe
          </button>
        </div>

        <div className="md:hidden text-2xl">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
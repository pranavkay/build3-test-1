
import React from 'react';
import { PORTFOLIO_ITEMS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our Portfolio</h2>
            <p className="text-xl text-gray-600">
              Meet the ventures building a more sustainable and equitable future.
            </p>
          </div>
          <button className="text-green-600 font-bold flex items-center gap-2 hover:gap-4 transition-all group">
            VIEW ALL PORTFOLIO <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.name} 
              className="group relative bg-white border-2 border-black rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-square bg-gray-50 rounded-2xl mb-6 flex items-center justify-center p-8 overflow-hidden">
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" 
                />
              </div>
              <div className="inline-block text-[10px] font-black tracking-widest uppercase bg-gray-100 px-3 py-1 rounded-full mb-3">
                {item.category}
              </div>
              <h3 className="text-2xl font-black mb-2">{item.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-black hover:text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

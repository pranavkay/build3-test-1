import React, { useState } from 'react';
import { VERTICALS } from '../constants';

const ServicesSection: React.FC = () => {
  const [activeVertical, setActiveVertical] = useState(VERTICALS[0].id);

  const activeData = VERTICALS.find(v => v.id === activeVertical) || VERTICALS[0];

  return (
    <section id="services" className="py-24 px-6 bg-white border-y-2 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFFAB7] border-2 border-black text-black px-6 py-2 rounded-full text-sm font-black mb-6 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Our Universe
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">How we build the future</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive ecosystem designed to support impact-driven founders at every stage of their journey.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {VERTICALS.map((vertical) => (
            <button
              key={vertical.id}
              onClick={() => setActiveVertical(vertical.id)}
              className={`group relative p-4 rounded-2xl border-2 border-black transition-all flex flex-col items-center gap-3 text-center
                ${activeVertical === vertical.id 
                  ? 'bg-[#FFFAB7] shadow-none translate-x-1 translate-y-1' 
                  : 'bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
                }`}
            >
              <div className="w-10 h-10 group-hover:scale-110 transition-transform">
                {vertical.icon}
              </div>
              <span className="font-black text-[10px] md:text-xs uppercase tracking-tighter leading-none">
                {vertical.title}
              </span>
              {activeVertical === vertical.id && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFFAB7] border-r-2 border-b-2 border-black rotate-45 hidden lg:block"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content Reveal Area */}
        <div className="bg-[#FFFDE7] border-2 border-black rounded-[40px] p-8 md:p-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] min-h-[400px] flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div className="w-24 h-24 bg-white border-2 border-black rounded-3xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              {activeData.icon}
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-4">{activeData.title}</h3>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                {activeData.description}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {activeData.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 font-black text-sm uppercase tracking-wide">
                  <div className="w-6 h-6 bg-black text-[#FFFAB7] rounded-full flex items-center justify-center text-xs">✓</div>
                  {feature}
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-black text-white px-10 py-4 rounded-full font-black hover:bg-[#FFFAB7] hover:text-black border-2 border-black transition-all shadow-[6px_6px_0px_0px_rgba(255,250,183,1)]">
                LEARN MORE ABOUT {activeData.title.toUpperCase()}
              </button>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-2">
              <img 
                src={`https://images.unsplash.com/photo-${activeData.id === 'studio' ? '1552664730-d307ca884978' : activeData.id === 'vc' ? '1553729459-efe14ef6055d' : activeData.id === 'tribe' ? '1511632765486-a01980e01a18' : activeData.id === 'program' ? '1516321318423-f06f85e504b3' : activeData.id === 'tech' ? '1581091226825-a6a2a5aee158' : '1542601906990-b4d3fb778b09'}?auto=format&fit=crop&w=800&q=80`} 
                alt={activeData.title} 
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-[#FFFAB7]/20 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-[#FFFAB7] border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3 hidden lg:block">
              <span className="font-black text-xs uppercase tracking-widest">Impact Factor: 10x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

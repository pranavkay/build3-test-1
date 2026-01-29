import React from 'react';
import { STUDIO_PHASES } from '../constants';

const Studio: React.FC = () => {
  return (
    <section id="studio" className="py-24 px-6 bg-[#FFFAB7]/15">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Our Startup Studio Model</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the infrastructure, funding, and expertise to take an idea from zero to one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {STUDIO_PHASES.map((phase, idx) => (
            <div 
              key={phase.title} 
              className="bg-white p-10 sketchy-card group"
            >
              <div className="w-24 h-24 mb-8 bg-[#FFFAB7] rounded-2xl p-4 border border-black group-hover:rotate-6 transition-transform">
                {phase.component}
              </div>
              <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                <span className="text-sm font-mono bg-black text-white px-2 rounded">{idx + 1}</span>
                {phase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {phase.description}
              </p>
              <div className="space-y-3">
                {['Dedicated Team', 'Pre-seed Capital', 'Product Engine'].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-sm">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="8" fill="#FFFAB7" stroke="black" strokeWidth="1.5" />
                      <path d="M7 10l2 2 4-4" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black text-white p-12 rounded-[20px] border-2 border-black flex flex-col md:flex-row items-center justify-between gap-10 shadow-[12px_12px_0px_0px_rgba(255,250,183,1)]">
          <div>
            <h3 className="text-3xl font-bold mb-4">Have a world-changing idea?</h3>
            <p className="text-gray-400 text-lg">We're always looking for bold founders to join our studio.</p>
          </div>
          <button className="whitespace-nowrap bg-[#FFFAB7] text-black px-10 py-5 rounded-full font-black hover:bg-white transition-all border-2 border-white">
            APPLY TO STUDIO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Studio;
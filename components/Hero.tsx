import React from 'react';
import { VERTICALS } from '../constants';

const Hero: React.FC = () => {
  const row1 = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
  ];
  const row2 = [
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  ];
  const row3 = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background Image Mosaic Layer */}
      <div className="absolute inset-0 z-[-30] flex flex-col gap-4 overflow-hidden py-4 scale-110">
        {/* Row 1 - Right to Left */}
        <div className="flex animate-[marquee-slow_60s_linear_infinite] whitespace-nowrap gap-4">
          {[...row1, ...row1, ...row1].map((img, i) => (
            <div key={i} className="w-[400px] h-[250px] shrink-0 border-2 border-black rounded-3xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500 opacity-40">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Row 2 - Left to Right */}
        <div className="flex animate-[marquee-reverse_50s_linear_infinite] whitespace-nowrap gap-4 -ml-[50%]">
          {[...row2, ...row2, ...row2].map((img, i) => (
            <div key={i} className="w-[400px] h-[250px] shrink-0 border-2 border-black rounded-3xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500 opacity-40">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Row 3 - Right to Left */}
        <div className="flex animate-[marquee-slow_70s_linear_infinite] whitespace-nowrap gap-4">
          {[...row3, ...row3, ...row3].map((img, i) => (
            <div key={i} className="w-[400px] h-[250px] shrink-0 border-2 border-black rounded-3xl overflow-hidden shadow-lg grayscale hover:grayscale-0 transition-all duration-500 opacity-40">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism Color Overlay */}
      <div className="absolute inset-0 z-[-20] bg-gradient-to-b from-[#FFFDE7]/40 via-[#FFFDE7]/80 to-[#FFFDE7] backdrop-blur-[4px]"></div>

      {/* Main Content Overlay */}
      <div className="max-w-6xl mx-auto text-center relative z-10 py-12 px-8 rounded-[40px] bg-white/40 backdrop-blur-xl border-2 border-white/50 shadow-2xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tighter drop-shadow-xl text-black">
          Building a better world, <br />
          <span className="relative inline-block">
            <span className="relative z-10">one impact startup</span>
            <svg className="absolute bottom-1 left-0 w-full h-6 md:h-10 lg:h-12 z-0 pointer-events-none" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M5 12C80 4 320 4 395 12" stroke="#FFFAB7" strokeWidth="18" strokeLinecap="round" />
            </svg>
          </span> <br />at a time.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-900 font-bold mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          The venture studio for world-shapers. We build, fund, and scale impact-driven startups globally.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-[#FFFAB7] text-black border-4 border-black px-12 py-5 rounded-full text-xl font-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            For Founders
          </button>
          <button className="bg-white border-4 border-black text-black px-12 py-5 rounded-full text-xl font-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:translate-x-1 hover:translate-y-1 transition-all">
            For Investors
          </button>
        </div>

        {/* 6 Core Verticals Menu */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2">
          {VERTICALS.map((vertical, i) => (
            <a 
              key={i} 
              href={vertical.href}
              className="group bg-white/90 backdrop-blur-md border-2 border-black p-4 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col items-center gap-3 text-center"
            >
              <div className="w-10 h-10 group-hover:scale-110 transition-transform">
                {vertical.icon}
              </div>
              <span className="font-black text-[10px] md:text-[11px] uppercase tracking-widest leading-tight">{vertical.title}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center pb-8 z-10">
         <a href="#services" className="inline-flex items-center gap-4 bg-white border-2 border-black px-8 py-4 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-bounce cursor-pointer font-black text-sm tracking-widest uppercase hover:bg-[#FFFAB7] transition-colors">
            <span className="text-2xl">🚀</span>
            Explore Our Universe
         </a>
      </div>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

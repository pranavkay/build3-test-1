import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#FFFDE7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFFAB7] border-2 border-black text-black px-6 py-2 rounded-full text-sm font-black mb-6 uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Voices of Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">Built with build3</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from the founders and builders who are redefining success through impact-driven ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <div 
              key={i} 
              className="group bg-white border-2 border-black p-8 rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl text-[#FFFAB7] font-serif mb-4 leading-none select-none">“</div>
                <p className="text-lg font-medium text-gray-800 leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-black overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] grayscale group-hover:grayscale-0 transition-all">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tight">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                    {testimonial.role}, <span className="text-black">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-black rounded-full translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"></div>
            <button className="relative bg-white border-2 border-black px-12 py-4 rounded-full font-black text-lg hover:bg-[#FFFAB7] transition-all">
              Join the Hall of Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
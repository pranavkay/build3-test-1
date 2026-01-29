import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 px-6 bg-[#FFFAB7] text-black relative overflow-hidden border-y-2 border-black">
      <div className="absolute top-0 right-0 p-10 opacity-30 hidden lg:block">
        <svg width="300" height="300" viewBox="0 0 200 200" className="rotate-12">
           <path d="M10 50 Q 50 10 100 50 T 190 50" stroke="black" strokeWidth="2" fill="none" />
           <path d="M10 100 Q 50 60 100 100 T 190 100" stroke="black" strokeWidth="2" fill="none" />
           <path d="M10 150 Q 50 110 100 150 T 190 150" stroke="black" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
          A community of builders <br />
          <span className="marker-underline px-4">and believers.</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
          Join our global network of impact-focused founders, experts, and partners. 
        </p>
        
        <form className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-8 py-5 text-black text-lg focus:outline-none"
            required
          />
          <button className="bg-black text-white px-10 py-5 font-black hover:bg-gray-900 transition-all text-lg shrink-0">
            SUBSCRIBE
          </button>
        </form>
        
        <div className="mt-8 flex justify-center items-center gap-2 font-bold text-sm">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          Join 5,000+ others already in the tribe.
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40 grayscale contrast-125">
           <div className="font-bold text-2xl tracking-tighter italic">AWS</div>
           <div className="font-bold text-2xl tracking-tighter italic">Stripe</div>
           <div className="font-bold text-2xl tracking-tighter italic">Notion</div>
           <div className="font-bold text-2xl tracking-tighter italic">Slack</div>
        </div>
      </div>
    </section>
  );
};

export default Community;
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <section id="impact-tech" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <div className="inline-block bg-[#FFFAB7] border border-black text-black px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            Our Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            The world is broken. <br />
            <span className="marker-underline">We're here to fix it.</span>
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Traditional capitalism has prioritized profit over people and planet. We believe that business can be a force for good.
            </p>
            <p>
              We focus on <strong>Impact Tech</strong> — technology that solves real-world problems. From climate change to healthcare access, we build startups that move the needle.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div className="border-l-4 border-black pl-6">
              <div className="text-4xl font-black mb-1">9/10</div>
              <div className="text-gray-500 font-medium">Founders fail in their first year</div>
            </div>
            <div className="border-l-4 border-[#FFFAB7] pl-6">
              <div className="text-4xl font-black mb-1">3.5x</div>
              <div className="text-gray-500 font-medium">Higher success rate in studios</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="bg-[#FFFDE7] p-10 rounded-[20px] border-2 border-black shadow-[10px_10px_0px_0px_rgba(255,250,183,1)] relative">
            <div className="space-y-8">
              {[
                { icon: '🌱', title: 'Eco-System Thinking', text: "We don't just build companies, we build systems that thrive together." },
                { icon: '🤝', title: 'Collaborative Growth', text: "Community isn't just a buzzword; it's our core engine for innovation." },
                { icon: '⚖️', title: 'Ethical Tech', text: "Integrity and ethics are baked into every line of code our ventures write." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-3xl bg-[#FFFAB7] w-14 h-14 shrink-0 flex items-center justify-center rounded-xl border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-8 -right-4 bg-black text-white p-5 rounded-2xl rotate-[2deg] hidden lg:block border border-white">
              <p className="font-bold italic text-sm">"Impact is not an <br /> after-thought."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
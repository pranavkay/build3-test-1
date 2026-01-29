import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#FFFDE7] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-3xl font-black mb-6">
              build<span className="bg-[#FFFAB7] px-2 rounded border border-black ml-1">3</span>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We are on a mission to solve the world's most pressing challenges through impact-driven startups.
            </p>
            <div className="flex gap-4">
              {['T', 'L', 'I'].map(social => (
                <a key={social} href="#" className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center hover:bg-[#FFFAB7] transition-all text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest border-b-2 border-[#FFFAB7] inline-block">Company</h4>
            <ul className="space-y-4 font-medium text-gray-600 mt-4">
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Our Studio</a></li>
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Portfolio</a></li>
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Career</a></li>
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Press Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest border-b-2 border-[#FFFAB7] inline-block">Resources</h4>
            <ul className="space-y-4 font-medium text-gray-600 mt-4">
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Impact Report</a></li>
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Blog</a></li>
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Founder Guides</a></li>
              <li><a href="#" className="hover:text-black hover:marker-underline transition-all">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest border-b-2 border-[#FFFAB7] inline-block">Contact</h4>
            <ul className="space-y-4 font-medium text-gray-600 mt-4">
              <li>hello@build3.org</li>
              <li>Bengaluru, India</li>
              <li>Goa, India</li>
            </ul>
            <div className="mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-[#FFFAB7] hover:text-black border-2 border-black transition-all">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <p>© {currentYear} Build3 Venture Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
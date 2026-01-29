import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import Philosophy from './components/Philosophy';
import Studio from './components/Studio';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-yellow-200">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <Philosophy />
        <Studio />
        <Portfolio />
        <Testimonials />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;
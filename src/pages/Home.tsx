// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ServicesSection from '../components/ServicesSection';
import NewsSection from '../components/NewsSection';
import AgendasSection from '../components/AgendasSection';
import HighlightsSection from '../components/HighlightsSection';
import LinksSection from '../components/LinksSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16"> 
        <HeroBanner />
        <ServicesSection />
        <NewsSection />
        <AgendasSection />
        <HighlightsSection />
        <LinksSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

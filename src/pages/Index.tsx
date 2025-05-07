
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import SemesterGrid from '@/components/home/SemesterGrid';
import FeaturesSection from '@/components/home/FeaturesSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SemesterGrid />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

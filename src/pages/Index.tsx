
import React from 'react';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ValueProps from '@/components/ValueProps';
import ClientShowcase from '@/components/ClientShowcase';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-power-black">
      {/* Hero Section */}
      <Hero />
      
      {/* Product Grid */}
      <ProductGrid />
      
      {/* Value Propositions */}
      <ValueProps />
      
      {/* Client Showcase */}
      <ClientShowcase />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

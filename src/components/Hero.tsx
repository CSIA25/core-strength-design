
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  
  const products = [
    {
      name: "ELITE POWER RACK",
      tagline: "BUILT FOR CHAMPIONS",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&crop=center"
    },
    {
      name: "BEAST DUMBBELLS",
      tagline: "FORGE YOUR STRENGTH",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop&crop=center"
    },
    {
      name: "TITAN TREADMILL",
      tagline: "OUTRUN YOUR LIMITS",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-power-black via-charcoal to-power-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-intense-red/20 to-transparent transform -skew-y-12"></div>
      </div>
      
      {/* Product Showcase */}
      <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/5">
        {products.map((product, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentProduct ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-power-black"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="hero-text mb-6">
              <span className="block">DOMINATE</span>
              <span className="block gradient-text">YOUR LIMITS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light-gray/80 mb-8 max-w-2xl font-inter font-light leading-relaxed">
              Premium gym equipment engineered for elite performance. 
              Transform your space into a powerhouse of strength and endurance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="cta-button flex items-center justify-center gap-2">
                SHOP EQUIPMENT
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-pure-white text-pure-white hover:bg-pure-white hover:text-power-black font-inter font-bold px-8 py-4 rounded-none uppercase tracking-wide transition-all duration-300">
                BOOK CONSULTATION
              </button>
            </div>

            {/* Current Product Info */}
            <div className="animate-slide-in-right">
              <div className="glass-card p-6 max-w-md">
                <h3 className="font-bebas text-2xl text-pure-white mb-2">
                  {products[currentProduct].name}
                </h3>
                <p className="text-intense-red font-inter font-semibold tracking-wide">
                  {products[currentProduct].tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProduct(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentProduct 
                ? 'bg-intense-red scale-125' 
                : 'bg-pure-white/30 hover:bg-pure-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

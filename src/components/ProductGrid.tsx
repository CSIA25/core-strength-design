
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductGrid = () => {
  const categories = [
    {
      title: "POWER RACKS",
      subtitle: "Complete Training Systems",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&crop=center",
      price: "FROM $1,299"
    },
    {
      title: "DUMBBELLS",
      subtitle: "Precision Weights",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop&crop=center",
      price: "FROM $199"
    },
    {
      title: "CARDIO MACHINES",
      subtitle: "Endurance Equipment",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      price: "FROM $899"
    },
    {
      title: "BENCHES",
      subtitle: "Multi-Position Support",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop&crop=center",
      price: "FROM $349"
    },
    {
      title: "PLATES & BARS",
      subtitle: "Olympic Grade Steel",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&h=400&fit=crop&crop=center",
      price: "FROM $89"
    },
    {
      title: "ACCESSORIES",
      subtitle: "Complete Your Setup",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      price: "FROM $29"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-power-black to-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mb-6">
            <span className="gradient-text">ELITE</span> EQUIPMENT
          </h2>
          <p className="text-xl text-light-gray/70 max-w-3xl mx-auto font-inter">
            Professional-grade equipment trusted by elite athletes, home fitness enthusiasts, 
            and commercial gyms worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="product-card animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-power-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-intense-red font-inter font-bold text-lg">
                    {category.price}
                  </span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-bebas text-2xl text-pure-white mb-2 tracking-wide">
                  {category.title}
                </h3>
                <p className="text-light-gray/60 font-inter">
                  {category.subtitle}
                </p>
              </div>

              <button className="flex items-center gap-2 text-intense-red font-inter font-semibold hover:gap-4 transition-all duration-300 group">
                EXPLORE RANGE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="cta-button">
            VIEW ALL EQUIPMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
